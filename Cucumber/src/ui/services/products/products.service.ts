import _ from 'lodash';
import type { IProduct } from '../../../data/types/product.types.js';
import { AddNewProductPage } from '../../pages/products/addNewProduct.page.js';
import { ProductsPage } from '../../pages/products/products.page.js';
import { logStep } from '../../../utils/report/decorator.js';
import { EditProductPage } from '../../pages/products/editProduct.page.js';
import { ProductDetailsModalPage } from '../../pages/products/productDetailsModal.page.js';

export class ProductsListService {
  constructor(
    private productsPage = new ProductsPage(),
    private addNewProductPage = new AddNewProductPage(),
    private editProductPage = new EditProductPage(),
    private viewProductDetailsPage = new ProductDetailsModalPage()
  ) {}

  @logStep('Open Add New Product page')
  async openAddNewProductPage() {
    await this.productsPage.clickOnAddNewProduct();
    await this.productsPage.waitForSpinnerToHide();
    await this.addNewProductPage.waitForOpened();
  }

  @logStep('Open Edit Product page')
  async openEditProductPage(productName: string) {
    await this.productsPage.clickOnEditProduct(productName);
    await this.productsPage.waitForSpinnerToHide();
    await this.editProductPage.waitForOpened();
  }

  @logStep('Open Product Details page')
  async openProductDetailsPage(productName: string) {
    await this.productsPage.clickOnProductDetails(productName);
    await this.productsPage.waitForSpinnerToHide();
    await this.viewProductDetailsPage.waitForOpened();
  }

  async getExistingProductData(productName: string) {
    const createdProductData = await this.productsPage.getDataByName(productName);
    return createdProductData;
  }

  @logStep('Validate product in table')
  async checkProductInTable(product: IProduct) {
    const actualProduct = await this.getExistingProductData(product.name);
    const expectedProduct = _.pick(product, ['name', 'price', 'manufacturer']);
    expect(actualProduct).toMatchObject(expectedProduct);
  }
}
