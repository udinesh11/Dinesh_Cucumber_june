package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith (Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\rerun\\failedcase.txt",glue="org.stepdefinition") 



public class Rerunner {
	
	
}
