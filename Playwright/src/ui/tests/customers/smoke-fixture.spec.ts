import { generateNewCustomer } from '../../../data/customers/generateCustomer';
import { ICustomer } from '../../../data/types/customers.types';
import { test } from '../../../fixtures/services.fixtures';

test.describe('[UI] [Customers] Smoke', async function () {
  let customer: ICustomer;
  test.beforeEach(async function ({ signInPageService }) {
    await signInPageService.openSalesPortal();
    await signInPageService.loginAsAdmin();
  });

  test.afterEach(async function ({ page }) {
    //TODO: delete customer
  });

  test('Create customer with valid data', async function ({
    homePageService,
    customersPageService,
    addNewCustomerPageService,
  }) {
    customer = generateNewCustomer();
    await homePageService.openCustomersPage();
    await customersPageService.openAddNewCustomerPage();
    await addNewCustomerPageService.create(customer);
    await customersPageService.validateCustomerCreatedMessage();
    //TODO: check customer in table
  });
});
