const properties = require('./nightwatch.props')
module.exports = {
  "src_folders": "../tests/",
  "page_objects_path": "../pageObjects/",

  "selenium": {
    "start_process": true,
    "server_path": properties.resourcePath + properties.seleniumServer,
    "log_path": "",
    "port": 4445,
    "cli_args": {
      "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
      "webdriver.gecko.driver": properties.resourcePath + properties.geckodriver,
      "webdriver.edge.driver": properties.resourcePath + properties.edge,
      "webdriver.opera.driver": properties.resourcePath + properties.operadriver
    }
  },

  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4445,
      "selenium_host": "localhost",
      "end_session_on_fail": false,
      "skip_testcases_on_fail": false,
      "silent": true,
      "screenshots": {
        "enabled": true,
        "on_failure": false,
        "on_error": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    },

    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },

    "edge": {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge",
        "marionette": true
      }
    },
    "opera": {
      "desiredCapabilities": {
        "browserName": "opera",
        "marionette": true
      }
    },
    "test_workers": true,
  }
}