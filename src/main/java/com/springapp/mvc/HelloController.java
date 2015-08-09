package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/")
public class HelloController {

	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap modelMap) {
		System.out.println("printWelcome called");
		return "index";
	}

	@RequestMapping(method = RequestMethod.GET, value = "/battles/battle.json")
	@ResponseBody
	public List<String> getBattles() {
		System.out.println("getBattles called");
		return null;
	}

}