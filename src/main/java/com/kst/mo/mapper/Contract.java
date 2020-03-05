package com.kst.mo.mapper;

import java.util.List;

import com.kst.mo.model.ContractBase;

public interface Contract {

	List<ContractBase> getContractInfo(ContractBase vo);

}
