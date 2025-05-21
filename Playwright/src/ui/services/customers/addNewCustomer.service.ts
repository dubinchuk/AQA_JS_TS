import { Page } from '@playwright/test';
import { generateNewCustomer } from '../../../data/customers/generateCustomer.js';
import { ICustomer, ICustomerFromResponse } from '../../../data/types/customers.types.js';
import { AddNewCustomerPage } from '../../pages/customers/addNewCustomer.page.js';
import { CustomersListPage } from '../../pages/customers/customers.page.js';
import { apiConfig } from '../../../config/apiConfig.js';
import { validateResponse } from '../../../utils/validation/response.js';
import { STATUS_CODES } from '../../../data/types/api.types.js';

export class AddCustomerService {
  private customersPage: CustomersListPage;
  private addNewCustomerPage: AddNewCustomerPage;

  constructor(protected page: Page) {
    this.addNewCustomerPage = new AddNewCustomerPage(page);
    this.customersPage = new CustomersListPage(page);
  }

  async fillCustomerInputs(customer: Partial<ICustomer>) {
    await this.addNewCustomerPage.fillInputs(customer);
  }

  async save() {
    await this.addNewCustomerPage.clickOnSaveButton();
  }

  async create(customer?: ICustomer) {
    const customerData = customer ?? generateNewCustomer();
    await this.fillCustomerInputs(customerData);
    const responseUrl = apiConfig.baseUrl + apiConfig.endpoints.Customers;
    const response = await this.addNewCustomerPage.interceptResponse<ICustomerFromResponse>(
      responseUrl,
      this.save.bind(this)
    );
    validateResponse(response, STATUS_CODES.CREATED, true, null);
    await this.addNewCustomerPage.waitForSpinnerToHide();
    await this.customersPage.waitForOpened();
  }
}
