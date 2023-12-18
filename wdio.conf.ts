import type { Options } from '@wdio/types'
import { join } from 'path';
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    port: 4723,
    specs: [
        './features/**/myView-login.feature'
    ],
    
    exclude: [ ],
    maxInstances: 2,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',        
        browserName: '',
        'appium:appPackage': 'com.zellis.myview.app',
        'appium:deviceName': 'emulator-5554',      
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/app-debug.apk'),
        //'appium:appWaitActivity': 'com.zellis.myview.app',       
        
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters:  ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],
    cucumberOpts: {        
        require: ['./step-definitions/myView-login.steps.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
          await browser.takeScreenshot();
        }
      }
    
}
