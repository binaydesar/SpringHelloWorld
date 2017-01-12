package com.practice.alindus.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HomeController {
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String getHome()
	{
		return "index";
	}
	
	@RequestMapping(value="/hello", method=RequestMethod.GET)
	public String getHelloPage(@RequestParam("name") String name, Model model)
	{
		model.addAttribute("name",name);
		return "helloworld";
	}

}
