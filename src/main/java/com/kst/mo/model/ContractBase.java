package com.kst.mo.model;

import java.sql.Timestamp;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class ContractBase {
	private String name;
	
	private Long ctNo;
	private String ctNm;
	private String mdlNm;
	private String mdlColor;
	private String cellFstNo;
	private String cellMdlNo;
	private String cellLstNo;
	private String zipCd;
	private String baseAddr;
	private String dtlAddr;
	private String argYn;
	private String payYn;
	private Timestamp sysRegDt;
	private Timestamp sysModDt;
}
