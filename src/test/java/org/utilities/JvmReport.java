package org.utilities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void getreport(String jsonfile) {
		//Target location
		File f = new File("target\\JVMreport");
		//create object for configuration class
		Configuration con = new Configuration(f, "TheMarket");
		con.addClassifications("plateform", "windows");
		con.addClassifications("JDK version", "1.8");
		con.addClassifications("Browser", "Chrome");
		// add json file
		List<String> l = new ArrayList<String>();
		l.add(jsonfile);
		//create a object for report builder
		ReportBuilder r = new ReportBuilder(l, con);
		r.generateReports();

	}

	

}
