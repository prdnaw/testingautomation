const {config} = require('./wdio.conf');

// config.cucumberOpts.tagExpression = '@web';

config.services = [
    'chromedriver',
    ["ms-teams", {
        webhookURL: "",
        failingTestsOnly: false,
        message: ""
    }]
];

config.capabilities = [
    {
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                // '--headless',
                '--disable-gpu',
                '--window-size=1920,1080'
            ],
        }
    }
    // ,
    // {
    //   maxInstances: 5,
    //   browserName: 'firefox',
    //   "moz:firefoxOptions": {
    //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
    //     //args: ['-headless']
    //   }
    // }
    // ,
    // {
    //   maxInstances: 1,
    //   browserName: 'safari',
    //   port: 4447
    // },

];
      
config.specs = [
    './src/web/features/001-login.feature',
    './src/web/features/002-profile.feature'
];

config.cucumberOpts = {
    require: [
        './src/web/stepDefinitions/*.steps.js'
    ]
};

exports.config = config;