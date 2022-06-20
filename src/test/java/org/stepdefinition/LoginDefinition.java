package org.stepdefinition;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;
import org.utilities.PomClass;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginDefinition extends BaseClass{

	@Given("user should launch the chrome browser and load the url")
	public void user_should_launch_the_chrome_browser_and_load_the_url() {
//	   launchChrome();
//	   windowsLarge();
//	   loadUrl("https://themarket.com/nz/1-day");
	}

	@When("user should type valid username and valid password")
	public void user_should_type_valid_username_and_valid_password(DataTable d) {
		List<String> ld = d.asList();
		String user = ld.get(0);
		String pass = ld.get(1);
	    PomClass p = new PomClass();
	    p.implicitwait(20);
	    btnclic(p.getLogin());
	    send(p.getUsername(), user);
	    send(p.getPassword(), pass);
	}

	@When("user should click login button")
	public void user_should_click_login_button() {
		PomClass p = new PomClass();
		btnclic(p.getLoginsearch());
	    
	}

	@Then("user navigate to the home page")
	public void user_navigate_to_the_home_page() {
		PomClass p = new PomClass();
		WebElement in = p.getIncorrect();
		WebElement srch = p.getSearch();
	
		
		if (srch.isDisplayed()) {
			System.out.println("Login sucessfully");
		} else {
           System.out.println("Incorrect login details");
		}

	
}
	@When("user should type invalid username and valid password")
	public void user_should_type_invalid_username_and_valid_password(DataTable d) {
		List<String> ld = d.asList();
		String user = ld.get(0);
		String pass = ld.get(1);
	    PomClass p = new PomClass();
	    p.implicitwait(20);
	    btnclic(p.getLogin());
	    send(p.getUsername(), user);
	    send(p.getPassword(), pass);
	}

	@Then("user navigate to the incorrect login page")
	public void user_navigate_to_the_incorrect_login_page() {
	    PomClass p = new PomClass();
		WebElement in = p.getIncorrect();
		String txt = in.getText();
		if (txt.contains("Failed to authenticate user, please try again")) {
			System.out.println("Incorrect login details");
			
		} else {
         System.out.println("Login successfully");
		}
		
	}

	@When("user should type invalid username and invalid password")
	public void user_should_type_invalid_username_and_invalid_password(DataTable d) {
		List<String> ld = d.asList();
		String user = ld.get(0);
		String pass = ld.get(1);
	    PomClass p = new PomClass();
	    p.implicitwait(20);
	    btnclic(p.getLogin());
	    send(p.getUsername(), user);
	    send(p.getPassword(), pass);
	}
	
	@When("user should click login button and click forgotpassword button")
	public void user_should_click_login_button_and_click_forgotpassword_button() {
		 PomClass p = new PomClass();
		    p.implicitwait(20);
		    btnclic(p.getLogin());
		    btnclic(p.getForgotpass());
		    
	}

	@Then("user enter the emailID and submit")
	public void user_enter_the_emailID_and_submit(DataTable d) {
	    PomClass p = new PomClass();
	    List<String> al = d.asList();
	    String txt = al.get(0);
	    send(p.getForgotemail(), txt);
	    btnclic(p.getForgotsubmit());
	    System.out.println(driver.getTitle());
	}
	
	@When("User should check search box by searching the item")
	public void user_should_check_search_box_by_searching_the_item() {
	    PomClass p = new PomClass();
	    p.implicitwait(20);
	    send(p.getSearch(), "lg 55inch tv");
	    btnclic(p.getSearchbtn());
	}

	@Then("User should select the item and add to the cart")
	public void user_should_select_the_item_and_add_to_the_cart() {
		PomClass p = new PomClass();
	    p.implicitwait(20);
	    btnclic(p.getLg55());
	    btnclic(p.getAddtocart());
	    System.out.println(driver.getTitle());
	    
	}

	@When("User should search the item and select the item")
	public void user_should_search_the_item_and_select_the_item() {
		PomClass p = new PomClass();
	    p.implicitwait(20);
	    send(p.getSearch(), "lg 55inch tv");
	    btnclic(p.getSearchbtn());
	    btnclic(p.getLg55());
	}

	@Then("User add the item to the cart and place a order")
	public void user_add_the_item_to_the_cart_and_place_a_order() {
		PomClass p = new PomClass();
	    p.implicitwait(20);
	    btnclic(p.getAddtocart());
	    btnclic(p.getViewcart());
	    printtxt(p.getTotal());
	}
	
	@Then("User add the item to the cart and place a order and print")
	public void user_add_the_item_to_the_cart_and_place_a_order_and_print() {
		PomClass p = new PomClass();
	    p.implicitwait(20);
	    btnclic(p.getAddtocart());
	    btnclic(p.getViewcart());
	    btnclic(p.getLg55());
	}

}
