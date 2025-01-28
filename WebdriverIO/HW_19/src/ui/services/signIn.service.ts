import { ADMIN_PASSWORD, ADMIN_USERNAME, initialUrl } from '../../config/environment.js';
import { SignInPage } from '../pages/signIn.page.js';

export class SignInService {
  constructor(private signInPage = new SignInPage()) {}

  async openSignInPage() {
    await this.signInPage.openPage(initialUrl);
  }

  async login(credentials?: { login?: string; password?: string }) {
    await this.signInPage.fillCredentials(credentials);
    await this.signInPage.clickOnLogin();
    await this.signInPage.waitForSpinnerToHide();
  }

  async loginAsAdmin() {
    await this.login({ login: ADMIN_USERNAME, password: ADMIN_PASSWORD });
  }
}
