package org.utilities;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PomClass extends BaseClass{
	
	public PomClass() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (xpath="//p[text()='Login-Join']")
	private WebElement login;
	
	@FindBy (xpath = "//input[@id='email']")
	private WebElement username;
	
	@FindBy (xpath="//input[@id='email-password']")
	private WebElement password;
	
	@FindBy (xpath="//button[text()=' Login']")
	private WebElement loginsearch;
	
	@FindBy (xpath = "//div[text()='Failed to authenticate user, please try again']")
	private WebElement incorrect;
	
	@FindBy (xpath ="//input[@class='form-control desktop-search-box']")
	private WebElement search;
	
	@FindBy (xpath="//div[@class='cursor-pointer col-xs-1 search-btn-container']")
	private WebElement searchbtn;
	
	@FindBy (xpath="//a[@id='13854127']")
	private WebElement Lg55;
	
	@FindBy (xpath="//span[text()='Add to cart']")
	private WebElement addtocart;
	
	@FindBy (xpath="//a[text()=' View Cart & Checkout']")
	private WebElement viewcart;
	
	
	
	@FindBy (xpath = "//a[text()='Forgot your Password?']")
	private WebElement forgotpass;
	
	@FindBy (xpath="//input[@placeholder='Enter your email']")
	private WebElement forgotemail;
	
	@FindBy (xpath="//button[text()=' Submit']")
	private WebElement forgotsubmit;
	
	@FindBy (xpath="(//li[@class='shopping-total-price'])[3]")
	private WebElement total;

	
	
	public WebElement getSearchbtn() {
		return searchbtn;
	}

	public WebElement getLg55() {
		return Lg55;
	}

	public WebElement getAddtocart() {
		return addtocart;
	}

	public WebElement getViewcart() {
		return viewcart;
	}

	public WebElement getTotal() {
		return total;
	}

	public WebElement getForgotpass() {
		return forgotpass;
	}

	public WebElement getForgotemail() {
		return forgotemail;
	}

	public WebElement getForgotsubmit() {
		return forgotsubmit;
	}

	public WebElement getSearch() {
		return search;
	}

	public WebElement getIncorrect() {
		return incorrect;
	}

	public WebElement getLogin() {
		return login;
	}

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginsearch() {
		return loginsearch;
	}
	
	

}
