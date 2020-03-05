package com.kst.mo.common.constants;

public enum ResultCodeConst {

	SUCCESS("S000"),
	REGIST_SUCCESS("S001"),
	MODIFY_SUCCESS("S002"),
	REMOVE_SUCCESS("S003"),
	PWD_EXPIRED_WARN("W001"),
	PWD_INIT_WARN("W002"),
	BIZ_ERROR("E000"),
	UNAUTHORIZED_ERROR("E401"),
	BAD_CREDENTIAL_ERROR("E401.01"),
	ACC_LOCKED_ERROR("E401.02"),
	ACC_DISABLED_ERROR("E401.03"),
	ACC_EXPIRED_ERROR("E401.04"),
	PWD_EXPIRED_ERROR("E401.05"),
	AUTH_ERROR("E401.09"),
	FORBIDDEN_ERROR("E403"),
	AUTHORITY_ERROR("E403.01"),
	OTHER_LOGIN_ERROR("E403.02"),
	PARAM_ERROR("E400"),
	NOT_FOUND_ERROR("E404"),
	CONFLICT_ERROR("E409"),
	ERROR("E500"),
	PARSING_ERROR("E600"),
	REST_ERROR("E601"),
	MAX_UPLOAD_SIZE_ERROR("E602"),
	MAX_UPLOAD_ROW_ERROR("E603"),
	MAX_DOWNLOAD_ROW_ERROR("E604");

	private String code;

	private ResultCodeConst(String code) {
		this.code = code;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
