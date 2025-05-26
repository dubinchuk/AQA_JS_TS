import { expect } from '@playwright/test';
import { test } from '../../../../fixtures/services.fixtures';
import { ICustomer, InvalidCustomer } from '../../../../data/types/customers.types';
import {
  invalidCustomerDataForSnapshots,
  validCustomerDataForSnapshots,
} from '../../../../data/customers/customersData';
import { AddNewCustomerPage } from '../../../pages/customers/addNewCustomer.page';

test.describe('[UI] [Visual] [Add new customer form validation]', async function () {
  test.beforeEach(async function ({ signInPageService, homePageService, customersPageService }) {
    await signInPageService.openSalesPortal();
    await signInPageService.loginAsAdmin();
    await homePageService.openCustomersPage();
    await customersPageService.openAddNewCustomerPage();
  });

  for (const [key, value] of Object.entries(invalidCustomerDataForSnapshots)) {
    test(`Should display validation error message in '${key}' field with invalid value '${value}'`, async function ({
      page,
      addNewCustomerPageService,
    }) {
      const addNewCustomerPage = new AddNewCustomerPage(page);
      const invalidCustomer: InvalidCustomer = { ...validCustomerDataForSnapshots, [key]: value };
      await addNewCustomerPageService.fillCustomerInputs(invalidCustomer as ICustomer);
      await expect(addNewCustomerPage['Add New Customer form']).toHaveScreenshot(
        `create-customer-form-invalid-${[key]}-field.png`
      );
    });
  }
});
