package com.kst.mo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ContractController {
	
	@RequestMapping("/test")
	public String test() {
		return "/test";
	}
}
