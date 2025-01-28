import { HomePage } from '../pages/home.page.js';

export class SalesPortalService {
  constructor(private homePage = new HomePage()) {}

  async validateNotification(expectedMessage: string) {
    const actualMessage = await this.homePage.getToastMessage();
    expect(actualMessage).toBe(expectedMessage);
  }

  async validateNotificationAndClose(expectedMessage: string) {
    const actualMessage = await this.homePage.getToastMessage();
    expect(actualMessage).toBe(expectedMessage);
    await this.homePage.closeToastMessage();
  }
}
