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
        './features/**/demo-login.feature'
    ],
    
    exclude: [ ],
    maxInstances: 2,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',        
        browserName: '',
        'appium:appPackage': 'com.wdiodemoapp',
        'appium:deviceName': 'emulator-5554',      
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',       
        
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
        require: ['./step-definitions/demo-login.steps.ts'],
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
    
}
