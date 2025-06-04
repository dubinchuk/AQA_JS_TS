import notificationService from '../services/notification.service';

export default async function () {
  if (process.env.ENVIRONMENT === 'ci') {
    await notificationService.postNotification(
      `Test run funished:\n link to report: https://dubinchuk.github.io/AQA_JS_TS/allure-report/#`
    );
  }
}
