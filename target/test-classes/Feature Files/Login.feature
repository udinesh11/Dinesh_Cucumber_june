Feature: To validate the login functionality
Background:
Given user should launch the chrome browser and load the url

@smoke
Scenario:To validate the login functionality with valid username and password
When user should type valid username and valid password
|udinesh1706@gmail.com|Udinesh1234|
And user should click login button
Then user navigate to the home page 


@smoke
Scenario:To validate the login functionality with Invalid username and valid password
When user should type invalid username and valid password
|dinesh16@gmail.com|Udinesh1234|
And user should click login button
Then user navigate to the incorrect login page 

@smoke
Scenario:To validate the login functionality with Invalid username and invalid password
When user should type invalid username and invalid password
|dinesh16@gmail.com|dinesh4|
And user should click login button
Then user navigate to the incorrect login page 
