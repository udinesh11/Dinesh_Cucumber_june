package org.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.utilities.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass{

	
	@Before
	public void tcs1() {
		System.out.println("Befor start");
		launchChrome();
		windowsLarge();
		loadUrl("https://themarket.com/nz/1-day");

	}
	@After
	public void tc2(Scenario s) throws IOException {
		if (s.isFailed()) {
			TakesScreenshot t = (TakesScreenshot)driver;
			byte[] sc = t.getScreenshotAs(OutputType.BYTES);
			s.embed(sc, "image/png");
		}
		
		
//		String name = s.getName();
//		takesnap(name);
		System.out.println(" end");
        quit();
	}
	
}
