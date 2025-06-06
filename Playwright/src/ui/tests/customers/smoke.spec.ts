import { test } from '@playwright/test';
import { SignInService } from '../../services/signIn.service';
import { HomeService } from '../../services/home.service';
import { CustomersListService } from '../../services/customers/customers.service';
import { AddCustomerService } from '../../services/customers/addNewCustomer.service';
import { ICustomer } from '../../../data/types/customers.types';
import { generateNewCustomer } from '../../../data/customers/generateCustomer';

test.describe('[UI] [Customers] Smoke', async function () {
  let signInService: SignInService;
  let homeService: HomeService;
  let customersService: CustomersListService;
  let addNewCustomerService: AddCustomerService;
  let customer: ICustomer;

  test.beforeEach(async function ({ page }) {
    signInService = new SignInService(page);
    homeService = new HomeService(page);
    customersService = new CustomersListService(page);
    addNewCustomerService = new AddCustomerService(page);
    await signInService.openSalesPortal();
    await signInService.loginAsAdmin();
  });

  test.afterEach(async function ({ page }) {
    //TODO: delete customer
  });

  test('Create customer with valid data', async function () {
    customer = generateNewCustomer();
    await homeService.openCustomersPage();
    await customersService.openAddNewCustomerPage();
    await addNewCustomerService.create(customer);
    await customersService.validateCustomerCreatedMessage();
    //TODO: check customer in table
  });
});
