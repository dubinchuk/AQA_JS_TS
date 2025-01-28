import { ModalPage } from '../modal.page.js';

export class ProductDetailsModalPage extends ModalPage {
  uniqueElement = '//h5[contains(text(),"Details")]';

  private readonly 'Name value' = '//*[@id="details-modal-body-container"]/div[1]/p';
  private readonly 'Amount value' = '//*[@id="details-modal-body-container"]/div[2]/p';
  private readonly 'Price value' = '//*[@id="details-modal-body-container"]/div[3]/p';
  private readonly 'Manufacturer value' = '//*[@id="details-modal-body-container"]/div[4]/p';
  private readonly 'Notes value' = '//*[@id="details-modal-body-container"]/div[6]/p';

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
