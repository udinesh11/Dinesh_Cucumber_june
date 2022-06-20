Feature: To check the search box
@sanity
Scenario: To check the fuctionality of search box
Given user should launch the chrome browser and load the url
When User should check search box by searching the item
Then User should select the item and add to the cart 

@sanity
Scenario: To check the fuctionality of search box and order the item
Given user should launch the chrome browser and load the url 
When User should search the item and select the item
Then User add the item to the cart and place a order

@fail
Scenario: To check the fuctionality of search box and order the item
Given user should launch the chrome browser and load the url 
When User should search the item and select the item
Then User add the item to the cart and place a order and print
