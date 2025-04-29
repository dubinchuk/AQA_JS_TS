import { AxiosApiClient } from '../../utils/apiClients/axios.js';
import type { IProduct, IProductResponse, IProductsResponse } from '../../data/types/product.types.js';
import { apiConfig } from '../../config/apiConfig.js';
import { IRequestOptions } from '../../data/types/api.types.js';
import { logStep } from '../../utils/report/decorator.js';

export class ProductsApiClient {
  constructor(private apiClient = new AxiosApiClient()) {}

  @logStep('Create product via API')
  async create(product: IProduct, token: string) {
    const options: IRequestOptions = {
      method: 'post',
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints.Products,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: product,
    };
    return this.apiClient.send<IProductResponse>(options);
  }

  @logStep('Get product by id via API')
  async getById(id: string, token: string) {
    const options: IRequestOptions = {
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints['Get Product By Id'](id),
      method: 'get',
      headers: { 'Content-Type': 'application/json', Authorization: token },
    };
    return this.apiClient.send<IProductResponse>(options);
  }

  @logStep('Get all products via API')
  async getAll(token: string) {
    const options: IRequestOptions = {
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints.Products,
      method: 'get',
      headers: { 'Content-Type': 'application/json', Authorization: token },
    };
    return this.apiClient.send<IProductsResponse>(options);
  }

  @logStep('Update product via API')
  async update(data: IProduct & { _id: string }, token: string) {
    const options: IRequestOptions = {
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints.Products,
      method: 'put',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      data: data,
    };
    return this.apiClient.send<IProductResponse>(options);
  }

  @logStep('Delete product via API')
  async delete(id: string, token: string) {
    const options: IRequestOptions = {
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints['Get Product By Id'](id),
      method: 'delete',
      headers: { 'Content-Type': 'application/json', Authorization: token },
    };
    return this.apiClient.send<null>(options);
  }
}
