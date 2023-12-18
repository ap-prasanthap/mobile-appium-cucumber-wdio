import { Given,  Then, When } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/myView-login.page';
import AlertWiew from '../pageobjects/myView-alert.page';

Given(/^I am in the login view$/, async () => {    
    await LoginPage.homePage();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    // await LoginPage.btnLogin.click();
    await LoginPage.login(username, password)
});

Then(/^I should see the message saying (.*)$/, async (message) => {
    await expect(AlertWiew.messageAlert).toBeExisting();
    //await expect(AlertWiew.messageAlert).toHaveTextContaining(message);
});