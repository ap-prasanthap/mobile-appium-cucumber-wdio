import { Given,  Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/demo-login.page';
import AlertWiew from '../pageobjects/demo-alert.page';

Given(/^I am on the (\w+) view$/, async (page) => {    
    await LoginPage.btnLogin.click();
});

Given(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.btnLogin.click();
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(AlertWiew.messageAlert).toBeExisting();
    await expect(AlertWiew.messageAlert).toHaveTextContaining(message);
});