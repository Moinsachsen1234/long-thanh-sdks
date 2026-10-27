package longthanh

import (
  "context"
  "net/http"
  "os"
  "testing"
  "time"
)

func TestSdkIntegration(t *testing.T) {
  base := os.Getenv("SDK_BASE_URL")
  if base == "" { t.Skip("Set SDK_BASE_URL to run integration checks") }
  clientAt := func(url string) *APIClient {
    config := NewConfiguration()
    config.Servers = ServerConfigurations{{URL: url}}
    config.HTTPClient = &http.Client{Timeout: 20 * time.Second}
    return NewAPIClient(config)
  }
  client := clientAt(base)
  languages := []string{"de", "en", "zh", "vi"}
  if os.Getenv("SDK_TEST_LIVE") != "" { languages = []string{"en"} }
  for _, language := range languages {
    menu, response, err := client.DefaultAPI.GetPublicMenuV1(context.Background()).Language(language).Execute()
    if err != nil { t.Fatal(err) }
    if menu.GetLanguage() != language || menu.GetCurrency() != "EUR" || len(menu.GetSections()) != 9 { t.Fatal("Incorrect menu") }
    if response.Header.Get("RateLimit") == "" { t.Fatal("Missing quota header") }
  }
  business, _, err := client.DefaultAPI.GetPublicBusinessV1(context.Background()).Execute()
  if err != nil || business.GetName() != "Long Thanh Imbiss" || business.GetOrdering().OnlineCheckout { t.Fatalf("Incorrect business: %v", err) }
  text, _, err := client.DefaultAPI.GetMenu(context.Background()).Execute()
  if err != nil || len(text) < 100 { t.Fatalf("Missing legacy menu: %v", err) }
  if os.Getenv("SDK_TEST_LIVE") == "" {
    for _, code := range []string{"404", "429", "500"} {
      _, response, err := clientAt(base + "/error" + code).DefaultAPI.GetPublicMenuV1(context.Background()).Execute()
      if err == nil || response == nil { t.Fatal("Expected an HTTP error") }
      apiError, ok := err.(*GenericOpenAPIError)
      if !ok || len(apiError.Body()) == 0 { t.Fatal("Missing structured problem body") }
      if code == "429" && response.Header.Get("Retry-After") != "60" { t.Fatal("Missing retry header") }
    }
  }
}
