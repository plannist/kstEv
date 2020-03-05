package com.kst.mo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ContractController {
	
	/**
	 * 신규 계약 페이지
	 * */
	@RequestMapping("/newContract")
	public String newContract() {
		return "/contract/newContract";
	}
}
