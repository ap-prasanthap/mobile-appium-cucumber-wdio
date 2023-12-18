import { ChainablePromiseElement } from 'webdriverio';
import { $ } from '@wdio/globals';
import Gusters from '../helper/Gestures.ts';



/**
 * sub page containing specific selectors and methods for a specific page
 */


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get getStarted(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.Button[@resource-id="get-started-button"]');
    }

    public get getRegsitrationCodeBtn(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.TextView[@text="Got a registration code?"]');
    }

    public get regsitrationCode(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.EditText[@resource-id="UrlToken"]');
    }

    public get regsiterBtn(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.Button[@resource-id="register-button"]');
    }

    public get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.EditText[@resource-id="username"]');
    }

    public get inputPassword(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.EditText[@resource-id="password"]');
    }

    public get btnSubmit(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.Button[@text="Log in"]');
    }

    public get btnLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[1]');
    }

       

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await delay(1000);
        await this.inputPassword.setValue(password);
        await delay(1000);
        await this.btnSubmit.click();
    }

    public async homePage(): Promise<void> {

        await this.getStarted.click();
        await delay(1000);
        await this.getRegsitrationCodeBtn.click();
        await delay(6000);
       // const elem = await $('//android.widget.EditText[@resource-id="UrlToken"]');
        // scroll to specific element
        //await this.regsitrationCode.scrconst element = document.getElementById("box");
        //const element = document.getElementById("UrlToken");
        //this.regsitrationCode.scrollIntoView();
        Gusters.checkIfDisplayedWithSwipeUp(await this.regsitrationCode,2);

        await this.regsitrationCode.click();
        await delay(4000);
        await this.regsitrationCode.setValue('q005');
        await delay(1000);
        await this.regsiterBtn.click();
        await delay(3000);
    }


    

}

export default new LoginPage();