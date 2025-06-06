import { getCustomersUrlRegex } from '../../config/apiConfig';
import { CUSTOMER_EXISTS_ERROR_MOCK, TABLE_MOCK } from '../../data/customers/mocks';
import { STATUS_CODES } from '../../data/types/api.types';
import { ICustomer, ICustomerFromResponse } from '../../data/types/customers.types';
import { IResponseFields } from '../../data/types/response.types';
import { Mock } from '../../fixtures/mock.fixtures';

export class CustomersMockService {
  constructor(private mock: Mock) {}

  private customersUrlAPI = getCustomersUrlRegex();

  async addCustomersToTableMock(customers: ICustomerFromResponse[]) {
    TABLE_MOCK.Customers.push(...customers);
    await this.mock.route(this.customersUrlAPI, TABLE_MOCK, STATUS_CODES.OK);
  }

  async getMockResponse(url: string | RegExp, mockResponseFields: IResponseFields, status: STATUS_CODES) {
    await this.mock.route(url, mockResponseFields, status);
  }

  async getCustomerExistsMockResponse(customer: ICustomer | ICustomerFromResponse) {
    await this.getMockResponse(
      getCustomersUrlRegex(),
      CUSTOMER_EXISTS_ERROR_MOCK(customer.email),
      STATUS_CODES.CONFLICT
    );
  }
}
