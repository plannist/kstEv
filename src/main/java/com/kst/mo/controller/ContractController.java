package com.kst.mo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kst.mo.common.model.Response;
import com.kst.mo.model.ContractBase;
import com.kst.mo.service.ContractService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class ContractController {
	
	@Autowired
	ContractService service;
	
	/**
	 * 신규 계약 페이지
	 * */
	@RequestMapping("/newContract")
	public String newContract() {
		return "/contract/newContract";
	}
	
	/**
	 * 계약 결과 페이지
	 * */
	@RequestMapping("/result")
	public String result() {
		return "/contract/result";
	}
	
	@RequestMapping("/testAjax")
	@ResponseBody
	public Response<List<ContractBase>> testAjax(@RequestBody ContractBase vo) {
		log.debug("contract Ajax Test 인입: {}", vo);
		List<ContractBase> info = service.getContractInfo(vo);
		log.debug("contract Ajax Test info: {}", info);
		Response<List<ContractBase>> rs = new Response<>();
		rs.setData(info);
		return rs;
	}
}
