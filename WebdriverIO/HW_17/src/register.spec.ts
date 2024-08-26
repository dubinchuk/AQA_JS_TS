// Task 1
// - Установить WebdriverIO командой  npm init wdio@latest .
// - Создать файл для теста с названием register.spec.ts
// - Добавить во wdio.conf.ts путь к файлу с тестом в массив specs
// Разработайте тест со следующими шагами:
// 1. Открыть страницу https://anatoly-karpovich.github.io/demo-login-form/ используя browser.url()
// 2. Кликнуть по кнопке Register методом . click()
// 3. Ввести валидные username/password (требования ниже) методом setValue()
// 4. Кликнуть Register
// 5. Завалидировать, верную нотификацию о регистрации методом .toHaveText()

// Task 2
// Написать 2 тест сьюта:
// 1. Тесты на регистрацию
// 2. Тесты на логин

// Сайт тот же, что и в Таск 1

// Requirenments
// Страница регистрации:
// Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
// Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен

// Страница логина:
// Username: обязательное
// Password: обязательное

const url = 'https://anatoly-karpovich.github.io/demo-login-form/';

describe('Task 1', () => {
  it('Should get valid successful registration notification', async () => {
    await browser.maximizeWindow();
    await browser.url(url);
    const registerButtonSelector = '#registerOnLogin';
    const registerButtonOnLogin = await $(registerButtonSelector);
    await registerButtonOnLogin.click();

    const validCredentials = {
      username: 'Evgeny 12345',
      password: 'BestPasswordEver',
    };

    const usernameField = await $('#userNameOnRegister');
    const passwordField = await $('#passwordOnRegister');
    const registerButtonOnRegistration = await $('#register');

    await usernameField.setValue(validCredentials.username);
    await passwordField.setValue(validCredentials.password);
    await registerButtonOnRegistration.click();

    const registerNotificationMessage = await $('#errorMessageOnRegister');
    const expectedNotificationMessage = 'Successfully registered! Please, click Back to return on login page';
    await expect(registerNotificationMessage).toHaveText(expectedNotificationMessage);
  });
});

enum ExpectedNotificationMessages {
  SUCCESS_REGISTER = 'Successfully registered! Please, click Back to return on login page',
  INVALID_DATA = 'Please, provide valid data',
  EMPTY_CREDENTIALS = 'Credentials are required',
  INVALID_CREDENTIALS = 'Invalid credentials',
  USERNAME_REQUIRED = 'Username is required',
  USERNAME_MIN_LENGTH = 'Username should contain at least 3 characters',
  USERNAME_MAX_LENGTH = 'Username should contain no more than 40 characters',
  USERNAME_SPACES = 'Prefix and postfix spaces are not allowed is username',
  USERNAME_EXISTS = 'Username is in use',
  PASSWORD_REQUIRED = 'Password is required',
  PASSWORD_MIN_LENGTH = 'Password should contain at least 8 characters',
  PASSWORD_MAX_LENGTH = 'Password should contain no more than 8 characters',
  PASSWORD_LOWERCASE = 'Password should contain at least one character in lower case',
  PASSWORD_UPPERCASE = 'Password should contain at least one character in upper case',
}

describe('Task 2: Registration form suit', () => {
  const registerOnLoginButtonSelector = '#registerOnLogin';
  const registerOnRegistrationButtonSelector = '#register';
  const userNameOnRegisterSelector = '#userNameOnRegister';
  const passwordOnRegisterSelector = '#passwordOnRegister';
  const registerErrorMessageSelector = '#errorMessageOnRegister';

  before(async () => {
    await browser.maximizeWindow();
  });

  beforeEach(async () => {
    await browser.url(url);
    const registerOnLoginButton = await $(registerOnLoginButtonSelector);
    await registerOnLoginButton.click();
  });

  const validCredentials = [
    {
      testName: 'valid username and valid password',
      username: 'Evgeny 123',
      password: 'BestPasswordEver',
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username 3 characters and valid password',
      username: 'Joe',
      password: 'Kfleofnnej34f',
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username 40 characters and valid password',
      username: 'User 1234567890 1234567890 1234567890 12',
      password: 'j+J.6]2o%Ssf(/I',
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username 4 characters and valid password',
      username: 'Ed55',
      password: 'It~*Oli3d16]Y',
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username 39 characters and valid password',
      username: `upRz.wp<zpXbS!?]QQA%7SDm)!aGKOAe/4E'3v*`,
      password: `&P$DJlxD'fZ`,
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username and valid password 8 characters',
      username: 'John_777',
      password: 'Kfi3898$',
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username and valid password 20 characters',
      username: 'Nikolay-00',
      password: ',K&UK/6b?Q1&(.P8eU9@',
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username and valid password 9 characters',
      username: '1990Anna',
      password: 'pxnN1RcT8',
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
    {
      testName: 'valid username and valid password 19 characters',
      username: 'Alina Smirnova',
      password: `PBzVR:5HM&'q|:fJHc)`,
      expectedMessage: ExpectedNotificationMessages.SUCCESS_REGISTER,
    },
  ];

  const invalidCredentials = [
    {
      testName: 'empty username and empty password',
      username: '',
      password: '',
      expectedMessage: ExpectedNotificationMessages.INVALID_DATA,
    },
    {
      testName: 'empty username and valid password',
      username: '',
      password: 'Dwsklmt32f$',
      expectedMessage: ExpectedNotificationMessages.USERNAME_REQUIRED,
    },
    {
      testName: 'username 2 characters and valid password',
      username: '9R',
      password: '32ng4$Gd4kl',
      expectedMessage: ExpectedNotificationMessages.USERNAME_MIN_LENGTH,
    },
    {
      testName: 'username 41 characters and valid password',
      username: '12345678901234567890123456789012345678901',
      password: 'DFlkjase33fas',
      expectedMessage: ExpectedNotificationMessages.USERNAME_MAX_LENGTH,
    },
    {
      testName: 'username with space prefix and valid password',
      username: ' Ivan1',
      password: 'Kclewjte4fd',
      expectedMessage: ExpectedNotificationMessages.USERNAME_SPACES,
    },
    {
      testName: 'username with space postfix and valid password',
      username: 'Ivan2 ',
      password: 'KJfklsg433',
      expectedMessage: ExpectedNotificationMessages.USERNAME_SPACES,
    },
    {
      testName: 'username with spaces only and valid password',
      username: '     ',
      password: 'KJfklsdg433',
      expectedMessage: ExpectedNotificationMessages.USERNAME_SPACES,
    },
    {
      testName: 'username already registered',
      username: validCredentials[0].username,
      password: 'dsfgdshg#Ffsdf',
      expectedMessage: ExpectedNotificationMessages.USERNAME_EXISTS,
    },
    {
      testName: 'valid username and empty password',
      username: 'superusername',
      password: '',
      expectedMessage: ExpectedNotificationMessages.PASSWORD_REQUIRED,
    },
    {
      testName: 'valid username and password 7 characters',
      username: 'Jessica_88',
      password: 'g#Dda$k',
      expectedMessage: ExpectedNotificationMessages.PASSWORD_MIN_LENGTH,
    },
    {
      testName: 'valid username and password 21 characters',
      username: 'AntonGalkin',
      password: '&Fr4/dlOUaSA2~b:;bF~A',
      expectedMessage: ExpectedNotificationMessages.PASSWORD_MAX_LENGTH,
    },
    {
      testName: 'valid username and password with no uppercase',
      username: 'newuser666',
      password: 'ksdfkljsdf',
      expectedMessage: ExpectedNotificationMessages.PASSWORD_UPPERCASE,
    },
    {
      testName: 'valid username and password with no lowercase',
      username: '_Katerina_',
      password: 'FDFSDASF43',
      expectedMessage: ExpectedNotificationMessages.PASSWORD_LOWERCASE,
    },
    {
      testName: 'valid username and password with spaces only',
      username: 'User10000',
      password: '            ',
      expectedMessage: ExpectedNotificationMessages.PASSWORD_REQUIRED,
    },
  ];

  context('Positive scenarios', () => {
    for (const credentials of validCredentials) {
      it(`Should register with ${credentials.testName}`, async () => {
        const usernameField = await $(userNameOnRegisterSelector);
        const passwordField = await $(passwordOnRegisterSelector);
        await usernameField.setValue(credentials.username);
        await passwordField.setValue(credentials.password);
        await $(registerOnRegistrationButtonSelector).click();
        const registerNotificationMessage = await $(registerErrorMessageSelector);
        await expect(registerNotificationMessage).toHaveText(credentials.expectedMessage);
      });
    }
  });

  context('Negative scenarios', () => {
    for (const credentials of invalidCredentials) {
      it(`Should not register with ${credentials.testName}`, async () => {
        const usernameField = await $(userNameOnRegisterSelector);
        const passwordField = await $(passwordOnRegisterSelector);
        await usernameField.setValue(credentials.username);
        const usernameLengthAboveBoundaryValue = await usernameField.getValue();
        if (
          credentials.testName === 'username 41 characters and valid password' &&
          usernameLengthAboveBoundaryValue.length === 40
        ) {
          credentials.expectedMessage = ExpectedNotificationMessages.SUCCESS_REGISTER;
        }
        await passwordField.setValue(credentials.password);
        const passwordLengthAboveBoundaryValue = await passwordField.getValue();
        if (
          credentials.testName === 'valid username and password 21 characters' &&
          passwordLengthAboveBoundaryValue.length === 20
        ) {
          credentials.expectedMessage = ExpectedNotificationMessages.SUCCESS_REGISTER;
        }
        await $(registerOnRegistrationButtonSelector).click();
        const registerNotificationMessage = await $(registerErrorMessageSelector);
        await expect(registerNotificationMessage).toHaveText(credentials.expectedMessage);
      });
    }
  });
});

describe('Task 2: Login form suit', () => {
  const registerOnLoginButtonSelector = '#registerOnLogin';
  const registerOnRegistrationButtonSelector = '#register';
  const userNameOnRegisterSelector = '#userNameOnRegister';
  const passwordOnRegisterSelector = '#passwordOnRegister';

  const userNameOnLoginSelector = '#userName';
  const passwordOnLoginSelector = '#password';
  const submitOnLoginButtonSelector = '#submit';
  const successLoginMessageSelector = '#successMessage';
  const errorMessageOnLoginSelector = '#errorMessage';

  const newUsername = 'Evgeny 123456';
  const newPassword = 'fJekfu42hfD';

  const validCredentials = [
    {
      testName: 'valid username and valid password',
      username: newUsername,
      password: newPassword,
      expectedMessage: `Hello, ${newUsername}!`,
    },
  ];

  const invalidCredentials = [
    {
      testName: 'valid username and invalid password',
      username: newUsername,
      password: 'Jefh3kf4Fds',
      expectedMessage: ExpectedNotificationMessages.INVALID_CREDENTIALS,
    },
    {
      testName: 'invalid username and valid password',
      username: 'Alex 54321',
      password: newPassword,
      expectedMessage: ExpectedNotificationMessages.INVALID_CREDENTIALS,
    },
    {
      testName: 'empty username and empty password',
      username: '',
      password: '',
      expectedMessage: ExpectedNotificationMessages.EMPTY_CREDENTIALS,
    },
    {
      testName: 'valid username and empty password',
      username: newUsername,
      password: '',
      expectedMessage: ExpectedNotificationMessages.PASSWORD_REQUIRED,
    },
    {
      testName: 'empty username and valid password',
      username: '',
      password: newPassword,
      expectedMessage: ExpectedNotificationMessages.USERNAME_REQUIRED,
    },
  ];

  before(async () => {
    await browser.maximizeWindow();
    await browser.url(url);
    const registerOnLoginButton = await $(registerOnLoginButtonSelector);
    await registerOnLoginButton.click();
    const usernameField = await $(userNameOnRegisterSelector);
    const passwordField = await $(passwordOnRegisterSelector);
    await usernameField.setValue(newUsername);
    await passwordField.setValue(newPassword);
    await $(registerOnRegistrationButtonSelector).click();
  });

  beforeEach(async () => {
    await browser.url(url);
  });

  context('Positive scenarios', () => {
    it(`Should login with ${validCredentials[0].testName}`, async () => {
      const usernameField = await $(userNameOnLoginSelector);
      const passwordField = await $(passwordOnLoginSelector);
      await usernameField.setValue(validCredentials[0].username);
      await passwordField.setValue(validCredentials[0].password);
      await $(submitOnLoginButtonSelector).click();
      const successLoginMessage = await $(successLoginMessageSelector);
      await expect(successLoginMessage).toHaveText(validCredentials[0].expectedMessage);
    });
  });

  context('Negative scenarios', () => {
    for (const credentials of invalidCredentials) {
      it(`Should not login with ${credentials.testName}`, async () => {
        const usernameField = await $(userNameOnLoginSelector);
        const passwordField = await $(passwordOnLoginSelector);
        await usernameField.setValue(credentials.username);
        await passwordField.setValue(credentials.password);
        await $(submitOnLoginButtonSelector).click();
        const errorMessageOnLogin = await $(errorMessageOnLoginSelector);
        await expect(errorMessageOnLogin).toHaveText(credentials.expectedMessage);
      });
    }
  });
});
