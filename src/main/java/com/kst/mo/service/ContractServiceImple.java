package com.kst.mo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kst.mo.mapper.Contract;
import com.kst.mo.model.ContractBase;

@Service
public class ContractServiceImple implements ContractService{
	@Autowired
	Contract mapper;
	
	@Override
	public List<ContractBase> getContractInfo(ContractBase vo) {
		return mapper.getContractInfo(vo);
	}

}
