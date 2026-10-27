import json
import os
import long_thanh_sdk
from long_thanh_sdk.exceptions import ApiException

base = os.environ['SDK_BASE_URL']

def configuration(url):
    config = long_thanh_sdk.Configuration(host=url)
    # Inspect error bodies immediately; urllib3 otherwise waits Retry-After.
    config.retries = 0
    if os.environ.get('SSL_CERT_FILE'):
        config.ssl_ca_cert = os.environ['SSL_CERT_FILE']
    return config

with long_thanh_sdk.ApiClient(configuration(base)) as client:
    api = long_thanh_sdk.DefaultApi(client)
    for language in ['en'] if os.environ.get('SDK_TEST_LIVE') else ['de', 'en', 'zh', 'vi']:
        response = api.get_public_menu_v1_with_http_info(language=language)
        menu = response.data
        assert menu.language == language and menu.currency == 'EUR'
        assert len(menu.sections) == 9
        assert any(key.lower() == 'ratelimit' for key in response.headers)
    business = api.get_public_business_v1()
    assert business.name == 'Long Thanh Imbiss'
    assert not business.ordering.online_checkout
    # Regression: false boolean constants must deserialize and reject true.
    from long_thanh_sdk.models.business_ordering import BusinessOrdering
    try:
        BusinessOrdering(channel='telephone', steps=[], onlineCheckout=True, agentCanPlaceOrders=False, delivery='ask')
        raise AssertionError('Expected true to violate the false-only API contract')
    except ValueError:
        pass
    assert 'Peking Suppe' in api.get_menu()

if not os.environ.get('SDK_TEST_LIVE'):
    for status in [404, 429, 500]:
        with long_thanh_sdk.ApiClient(configuration(base + '/error' + str(status))) as client:
            try:
                long_thanh_sdk.DefaultApi(client).get_public_menu_v1()
                raise AssertionError('Expected an API exception')
            except ApiException as error:
                assert error.status == status
                problem = json.loads(error.body)
                assert problem['status'] == status and problem['resolution']
                if status == 429:
                    assert error.headers.get('Retry-After') == '60'

print(json.dumps({'ecosystem': 'python', 'passed': True, 'live': bool(os.environ.get('SDK_TEST_LIVE'))}))
