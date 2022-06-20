package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utilities.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Feature Files", glue="org.stepdefinition",dryRun=false,
strict=true,
tags={"@fail,@smoke,@sanity,@forgot"},plugin= {"pretty",
		"html:target\\report",
		"json:target\\report\\pro.json",
		"junit:target\\report\\pro.xml",
		"rerun:src\\test\\resources\\rerun\\failedcase.txt"})
public class RunnerClass {
	@AfterClass
	public static void tc() {
		JvmReport.getreport("target\\report\\pro.json");

	}

}
