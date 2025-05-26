import { test as servicesTest } from '../../../fixtures/services.fixtures';
import { test as mockTest } from '../../../fixtures/mock.fixtures';
import { mergeTests } from '@playwright/test';
import { apiConfig } from '../../../config/apiConfig';
import { STATUS_CODES } from '../../../data/types/api.types';
import { EMPTY_TABLE_MOCK } from '../../../data/customers/mocks';

const test = mergeTests(mockTest, servicesTest);

test.describe('[UI] [Customers] Smoke', async function () {
  test.beforeEach(async function ({ signInPageService }) {
    await signInPageService.openSalesPortal();
    await signInPageService.loginAsAdmin();
  });

  test('Check empty customers table', async function ({ homePageService, customersPageService, mock }) {
    const baseUrl = `${apiConfig.baseUrl}${apiConfig.endpoints.Customers}`;
    const getCustomersUrl = new RegExp(`^${baseUrl}(\\?.*)?$`);
    await mock.route(getCustomersUrl, EMPTY_TABLE_MOCK, STATUS_CODES.OK);
    await homePageService.openCustomersPage();
    await customersPageService.validateEmptyTable();
  });
});
