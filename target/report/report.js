$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature%20Files/Forgottenpassword.feature");
formatter.feature({
  "name": "To check forgotpassword link",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check the functionality of forgotpassword link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@forgot"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should launch the chrome browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinition.user_should_launch_the_chrome_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button and click forgotpassword button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinition.user_should_click_login_button_and_click_forgotpassword_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the emailID and submit",
  "rows": [
    {
      "cells": [
        "udinesh1706@gmail.com"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_enter_the_emailID_and_submit(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Feature%20Files/Login.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should launch the chrome browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinition.user_should_launch_the_chrome_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with valid username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user should type valid username and valid password",
  "rows": [
    {
      "cells": [
        "udinesh1706@gmail.com",
        "Udinesh1234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinition.user_should_type_valid_username_and_valid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDefinition.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_navigate_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should launch the chrome browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinition.user_should_launch_the_chrome_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with Invalid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user should type invalid username and valid password",
  "rows": [
    {
      "cells": [
        "dinesh16@gmail.com",
        "Udinesh1234"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinition.user_should_type_invalid_username_and_valid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDefinition.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the incorrect login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_navigate_to_the_incorrect_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should launch the chrome browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinition.user_should_launch_the_chrome_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality with Invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user should type invalid username and invalid password",
  "rows": [
    {
      "cells": [
        "dinesh16@gmail.com",
        "dinesh4"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinition.user_should_type_invalid_username_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDefinition.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the incorrect login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_navigate_to_the_incorrect_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Feature%20Files/Search.feature");
formatter.feature({
  "name": "To check the search box",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To check the fuctionality of search box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should launch the chrome browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinition.user_should_launch_the_chrome_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should check search box by searching the item",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinition.user_should_check_search_box_by_searching_the_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select the item and add to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_should_select_the_item_and_add_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the fuctionality of search box and order the item",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should launch the chrome browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinition.user_should_launch_the_chrome_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search the item and select the item",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinition.user_should_search_the_item_and_select_the_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the item to the cart and place a order",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_add_the_item_to_the_cart_and_place_a_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the fuctionality of search box and order the item",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should launch the chrome browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinition.user_should_launch_the_chrome_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should search the item and select the item",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinition.user_should_search_the_item_and_select_the_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add the item to the cart and place a order and print",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinition.user_add_the_item_to_the_cart_and_place_a_order_and_print()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@id\u003d\u002713854127\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.115)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-5N812QCK\u0027, ip: \u0027192.168.173.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.27 (df4a85108ffa..., userDataDir: C:\\Users\\Dinesh\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:61041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b39587823b74c4575bde48c1fc83620e\n*** Element info: {Using\u003dxpath, value\u003d//a[@id\u003d\u002713854127\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.utilities.BaseClass.btnclic(BaseClass.java:60)\r\n\tat org.stepdefinition.LoginDefinition.user_add_the_item_to_the_cart_and_place_a_order_and_print(LoginDefinition.java:156)\r\n\tat ✽.User add the item to the cart and place a order and print(file:src/test/resources/Feature%20Files/Search.feature:18)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});