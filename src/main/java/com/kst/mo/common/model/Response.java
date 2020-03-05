package com.kst.mo.common.model;

import java.io.Serializable;

import com.kst.mo.common.constants.ResultCodeConst;

public class Response<T> implements Serializable {

	private static final long serialVersionUID = 5126775012013818794L;

	private String resultCode = ResultCodeConst.SUCCESS.getCode();
	private String resultMessage;
	private String detailMessage;

	private T data;
	
	public Response() {
	}
	
	public Response(T data) {
		this.data = data;
	}

	public String getResultCode() {
		return resultCode;
	}
	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}
	public String getResultMessage() {
		return resultMessage;
	}
	public void setResultMessage(String resultMessage) {
		this.resultMessage = resultMessage;
	}
	public String getDetailMessage() {
		return detailMessage;
	}
	public void setDetailMessage(String detailMessage) {
		this.detailMessage = detailMessage;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Response [resultCode=" + resultCode + ", resultMessage=" + resultMessage + ", detailMessage="
				+ detailMessage + ", data=" + data + "]";
	}

}