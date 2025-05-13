import { test } from '@playwright/test';
import { SignInService } from '../../services/signIn.service';
import { HomeService } from '../../services/home.service';
import { CustomersListService } from '../../services/customers/customers.service';
import { AddCustomerService } from '../../services/customers/addNewCustomer.service';
import { CUSTOMERS_COLUMN_NAME } from '../../../data/types/customers.types';

test.describe('[UI] [Customers] Table Sorting', async function () {
  let signInService: SignInService;
  let homeService: HomeService;
  let customersService: CustomersListService;
  let addNewCustomerService: AddCustomerService;

  test.beforeEach(async function ({ page }) {
    signInService = new SignInService(page);
    homeService = new HomeService(page);
    customersService = new CustomersListService(page);
    addNewCustomerService = new AddCustomerService(page);
    await signInService.openSalesPortal();
    await signInService.loginAsAdmin();
    await homeService.openCustomersPage();
  });

  test('Sort by email asc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.EMAIL, 'asc');
  });

  test('Sort by email desc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.EMAIL, 'desc');
  });

  test('Sort by name asc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.NAME, 'asc');
  });

  test('Sort by name desc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.NAME, 'desc');
  });

  test('Sort by country asc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.COUNTRY, 'asc');
  });

  test('Sort by country desc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.COUNTRY, 'desc');
  });

  test('Sort by createdOn asc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.CREATED_ON, 'asc');
  });

  test('Sort by createdOn desc', async function () {
    await customersService.sortCustomersAndVerify(CUSTOMERS_COLUMN_NAME.CREATED_ON, 'desc');
  });
});
