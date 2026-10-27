require 'json'
require 'uri'
$LOAD_PATH.unshift File.expand_path('../ruby/lib', __dir__)
require 'long_thanh_sdk'

def configuration(url)
  uri = URI(url)
  LongThanhSdk::Configuration.new do |config|
    config.server_index = nil
    config.scheme = uri.scheme
    config.host = "#{uri.host}:#{uri.port}"
    config.base_path = uri.path
    config.ssl_ca_file = ENV['SSL_CERT_FILE'] if ENV['SSL_CERT_FILE']
  end
end

base = ENV.fetch('SDK_BASE_URL')
api = LongThanhSdk::DefaultApi.new(LongThanhSdk::ApiClient.new(configuration(base)))
(ENV['SDK_TEST_LIVE'] ? ['en'] : ['de', 'en', 'zh', 'vi']).each do |language|
  menu, status, headers = api.get_public_menu_v1_with_http_info(language: language)
  raise 'Incorrect menu' unless status == 200 && menu.language == language && menu.currency == 'EUR' && menu.sections.length == 9
  raise 'Missing quota header' unless headers.keys.any? { |key| key.downcase == 'ratelimit' }
end
business = api.get_public_business_v1
raise 'Incorrect business' unless business.name == 'Long Thanh Imbiss' && business.ordering.online_checkout == false
raise 'Missing legacy menu' unless api.get_menu.include?('Peking Suppe')
unless ENV['SDK_TEST_LIVE']
  [404, 429, 500].each do |status|
    failing = LongThanhSdk::DefaultApi.new(LongThanhSdk::ApiClient.new(configuration(base + '/error' + status.to_s)))
    begin
      failing.get_public_menu_v1
      raise 'Expected an API error'
    rescue LongThanhSdk::ApiError => error
      raise 'Wrong status' unless error.code == status
      problem = JSON.parse(error.response_body)
      raise 'Missing problem details' unless problem['status'] == status && problem['resolution']
      if status == 429
        raise 'Missing retry header' unless error.response_headers.any? { |key, value| key.downcase == 'retry-after' && value == '60' }
      end
    end
  end
end
puts JSON.generate(ecosystem: 'ruby', passed: true, live: !!ENV['SDK_TEST_LIVE'])
