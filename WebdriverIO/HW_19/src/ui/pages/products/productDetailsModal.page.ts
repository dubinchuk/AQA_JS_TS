import { ModalPage } from '../modal.page.js';

export class ProductDetailsModalPage extends ModalPage {
  readonly uniqueElement = '//h5[contains(text(),"Details")]';

  private readonly 'Value by property name' = (name: string) => `//h6[contains(.,"${name}")]/following::p[1]`;
  private readonly 'Name value' = `${this['Value by property name']('Name:')}`;
  private readonly 'Amount value' = `${this['Value by property name']('Amount:')}`;
  private readonly 'Price value' = `${this['Value by property name']('Price:')}`;
  private readonly 'Manufacturer value' = `${this['Value by property name']('Manufacturer:')}`;
  private readonly 'Notes value' = `${this['Value by property name']('Notes:')}`;

  async getCreatedProduct() {
    const [name, amount, price, manufacturer, notes] = await Promise.all([
      this.getText(this['Name value']),
      this.getText(this['Amount value']),
      this.getText(this['Price value']),
      this.getText(this['Manufacturer value']),
      this.getText(this['Notes value'])
    ]);

    return { name, amount: +amount, price: +price, manufacturer, notes };
  }

  async clickOnEditProductButton() {
    await this.clickOnSubmitButton();
  }

  async clickOnCancelViewDetailsButton() {
    await this.clickOnCancelButton();
  }

  async clickOnCloseViewDetailsButton() {
    await this.clickOnCloseButton();
  }
}
