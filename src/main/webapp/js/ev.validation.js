/**
 * 
 */
isDataEmptyCheck = function(str,msg){
	try{
		//var str = $(object).attr("value"); 
		str = $.trim(str);
		if(str == ''){
			if(msg != null && '' != msg){
				alert(msg);
			};
			return false;
		}else{
			return true;
		}
	}catch (e) {
		alert(e);
	}	
}
/*
 * function name	: 
 * author			:
 * create date		:
 * updater			:
 * last update date	:
 * description		:
 * 객체의 빈값 체크 
 * object - 객체의 Element ID, 
 * msg - return alert 메시지로 출력,
 * alert 메시지 미 출력시 msg 값 '' 으로 입력
 */
isEmptyCheck = function(object,msg){
	try{
		//var str = $(object).attr("value");
		var str = $(object).val();			// ver 1.9.1		
		str = $.trim(str);
		if(str == ''){
			if(msg != null && '' != msg){
				alert(msg);
			};
			$(object).focus();
			return false;
		}else{
			return true;
		}
	}catch (e) {
		alert(e);
	}	
}


/*
 * radio,chcekbox 체크여부 확인
 * objectName - 객체의 Element Name,
 * msg - return alert 메시지로 출력,
 * alert 메시지 미 출력시 msg 값 '' 으로 입력 
*/
isEmptySelectChecked = function(objectName, msg, type){
	
	var cnt = 0;
 
	if("radio" == type){
		cnt = $("input:radio[name="+objectName+"]:checked").length;
		
	}else{
        cnt = $("input:checkbox[name="+objectName+"]:checked").length;	
	}
	try	{
		if (cnt<=0) {
			if(msg != null && "" != msg){alert(msg);}
			if(type=="radio"){
				$("#"+objectName).focus();
			}			
			return false;
		} else {
			return true;
		}
	} catch (e) { alert(e);	}
}

/*
 * 이메일 패턴 체크
 * object1 - 객체의 Element ID,object2 - Element ID
 * 이메일 계정과 이메일 도메인이 각각 입력시 사용
 * return alert 메시지로 출력
 */
checkEmail = function(object1, object2) {
	//var str_email1 = $(object1).attr("value");
	//var str_email2 = $(object2).attr("value");
	
	var str_email1 = $(object1).val();	// ver 1.9.1
	var str_email2 = $(object2).val();	// ver 1.9.1

	var regExp = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/; 
	if	(!regExp.test(str_email1 + "@" + str_email2)) {
		alert("이메일 주소 형식이 맞지않습니다.");
		$(object1).focus();
		return false;
	} else {
		return true;
	}

}

checkEmailOnTxt = function(object) {
	if(!isEmptyCheck(object,"이메일을 입력하세요.")){ return false;}
	
	var str_email = $(object).val();	// ver 1.9.1
	
	var regExp = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/; 
	if	(!regExp.test(str_email)) {
		alert("이메일 주소 형식이 맞지않습니다.");
		$(object).focus();
		return false;
	} else {
		return true;
	}

}


/* 
 * 전화,핸드폰,이메일 패턴 체크
 * val - 객체의 value,
 * patten - 전화,휴대폰,이메일 타입,
 * msg - return alert 메시지
 * alert 메시지 미 출력시 msg 값 '' 으로 입력
 */
chkPatten =function(val,patten,msg) { 
     
    var regPhone = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/; 
    var regHphone = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/; 
    var regMail = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/; 
    
    patten = eval(patten); 
    if(!patten.test(val)){ 
    	if(msg != null && '' != msg){
			alert(msg);
		};
        return false; 
    } 
    return true; 
} 

/*
 * 패턴 체크 - 객체의 value 값을 정규식 패턴으로 체크시 사용
 * objname - 객체의 Element ID,
 * type - 패턴체크할 타입
 * mgs - return alert 메시지
 * alert 메시지 미 출력시 msg 값 '' 으로 입력
 */
checkValue = function(object, type, msg) {
	var regExp1 = /[ㄱ-힣]+/g;			//한글
	var regExp2 = /[A-Z]+/g;			//영어 대문자
	var regExp3 = /^[\d\.]+$/;				//숫자로만 된 조합 소숫점 포함
	var regExp4 = /\s/;					//공백
	var regExp5 = /[a-zA-Z]+/g;			//영어 대소문자
	var regExp6 = /[~!@\#$%^&*\()\=+|\\/:;?"<>']/gi; //특수문자
	var regExp7 = /^([a-zA-Z0-9])/;	//비밀번호 패턴
	var regExp8 = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;	//전화번호 패턴
    var regExp9 = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/; 	//핸드폰 번호 패턴
    var regExp10 = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;	//이메일 패턴
    var regExp11 = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;	//사업자 번호 패턴
	
	//var str = $(object).attr("value");
	var str = $(object).val();			// ver 1.9.1
	var rtn = false;

	if(type=="1" || type=="ALL") {	// 한글만 체크
		if (regExp1.test(str)) { rtn = true; }
	}

	if(type=="2" || type=="ALL") {	// 영어 대문자 체크
		if (regExp2.test(str)) { rtn = true; }
	}

	if(type=="3" || type=="ALL") {	// 숫자만 체크
		if (regExp3.test(str)) { rtn = true; }
	}

	if(type=="4" || type=="ALL") {	// 공백만 체크
		if (!regExp4.test(str)) { rtn = true; }
	}

	if(type=="5" || type=="ALL") {	// 영어 대소문자만 체크
		if (regExp5.test(str)) { rtn = true; }
	}

	if(type=="6" || type=="ALL") {	// 특수문자만 체크
		if (!regExp6.test(str)) { rtn = true; }
	}

	if(type=="7" || type=="ALL") {	// 비밀번호 패턴 체크
		if (regExp7.test(str)) { rtn = true; }
	}

	if(type=="8" || type=="ALL") {	// 전화번호 패턴 체크
		if (regExp8.test(str)) { rtn = true; }
	}

	if(type=="9" || type=="ALL") {	// 핸드폰번호 패턴 체크
		if (regExp9.test(str)) { rtn = true; }
	}

	if(type=="10" || type=="ALL") {	// 이메일패턴 체크
		if (regExp10.test(str)) { rtn = true; }
	}
	
	if(type=="11" || type=="ALL") {	// 이메일패턴 체크
		if (regExp11.test(str)) { rtn = true; }
	}

	if(!rtn) {
		if(msg != "" && msg != null) {  alert(msg); }
		$(object).focus();
		return false;
	} else {
		return true;
	}
}

/*
 * 객체의 value값 입력 길이값 체크(byte,length 타입구분)
 * object - 객체의 Element ID,
 * type - 패턴체크할 타입(byte,str)
 * mgs - return alert 메시지 
 * alert 메시지 미 출력시 msg 값 '' 으로 입력
 */
lengthCheck = function(object, min, max, msg, type) {
	try {
		//var str = $(object).attr("value");
		var str = $(object).val();		// ver 1.9.1
		str = $.trim(str);
		
		var str_len = 0;
		
		if(type == "byte"){
			str_len = fn_inputLen(str);
		}else{
			str_len = str.length;
		}
		if(max == null || min == null || max == 0){ alert('최대값 & 최소값이 잘못 지정되었습니다.'); };
		if(str_len < min){ if(msg != null && msg != ""){alert(msg); $(object).focus(); }; return false; } 
        if(str_len > max){ if(msg != null && msg != ""){alert(msg); $(object).focus(); }; return false; } 
        
        return true; 

    } catch (e) { alert(e); }
}

/*입력길이 체크 
 * function(objname, max, min ) 
 * @objname form객체 Element id
 * @formname form객체 id
 * @max 최대 입력 허용 값 
 * @min 최소 허용값
 * */
fn_StrLenChk = function (objname, max, min, msg) {
	//var val = $(objname).attr("value");
	var val = $(objname).val();
	var val_len = 0;

	val_len = fn_inputLen(val);
	
	if(val_len == 0) {
		if(msg != null){alert(msg);}
		return false;	
	}
	/*최대 길이  체크*/
	if(min == null && min == 0) {
		if(val_len>max) {if(msg != null || "" != msg){alert(msg);} return false;}
	}
	/*최소 길이  체크*/
	if(max == null && max == 0) {
		if(val_len<min) {if(msg != null || "" != msg){alert(msg);} return false;}
	}
	/*최대, 최소 길이  체크*/
	if(max > min) {
		if(val_len < min || val_len > max) {if(msg != null || "" != msg){alert(msg);} return false;}
	}else
	{
		return false;
	}
	
	return true;
}

/*
 * 유니코드 문자열 length 길이 체크
 * val - 객체의 value 값
 */
fn_inputLen = function(val) {
	// 입력받은 문자열을 escape() 를 이용하여 변환한다.
	// 변환한 문자열 중 유니코드(한글 등)는 공통적으로 %uxxxx로 변환된다.
	var temp_estr = escape(val);
	var s_index = 0;
	var e_index = 0;
	var temp_str = "";
	var cnt = 0;
	// 문자열 중에서 유니코드를 찾아 제거하면서 갯수를 센다.
	while ((e_index = temp_estr.indexOf("%u", s_index)) >= 0) // 제거할 문자열이 존재한다면
	{
		temp_str += temp_estr.substring(s_index, e_index);
		s_index = e_index + 6;cnt ++;
	}
	temp_str += temp_estr.substring(s_index);
	temp_str = unescape(temp_str); // 원래 문자열로 바꾼다.
	
	// 유니코드는 2바이트 씩 계산하고 나머지는 1바이트씩 계산한다.
	return ((cnt * 2) + temp_str.length) + "";
}

/*
 * 재외국인 번호 체크
 * objname1 - 객체의 Element ID(주민번호 앞자리),
 * objname2 - 객체의 Element ID(주민번호 뒷자리)
 * 주민번호 패턴 체크 및 length 체크 
 */
check_fgnno = function (objname1,objname2) {
	
	//var num1 = $(objname1).attr("value");
	//var num2 = $(objname2).attr("value");
	
	var num1 = $(objname1).val();		// ver 1.9.1
	var num2 = $(objname2).val();		// ver 1.9.1	
	
	var sum=0;
	var odd=0;
	var fgnno = "";
	fgnno = num1.toString()+num2.toString();
	
	if(fgnno.length!=13) {
		alert("주민등록번호 입력 오류입니다.");
		$(objname1).focus();
		return false;
	}
	buf = new Array(13);
	for(i=0; i<13; i++)	{ 
		buf[i]=parseInt(fgnno.charAt(i)); 
	}
	odd = buf[7]*10 + buf[8];
	if(odd%2 != 0) { 
		return false; 
	}
	if( (buf[11]!=6) && (buf[11]!=7) && (buf[11]!=8) && (buf[11]!=9) ) {
		return false;
	}
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	
	for(i=0, sum=0; i<12; i++) { 
		sum += (buf[i] *= multipliers[i]); 
	}
	sum = 11 - (sum%11);
	
	if(sum >= 10) { sum -= 10; }
	sum += 2;
	
	if(sum >= 10) { sum -= 10; }
	if(sum != buf[12]) { 
		alert("입력한 주외국인등록번호 검토한 후, 다시 입력하세요.");
		$(objname1).focus();
		return false; 
	}
	return true;
}

/*
 * 주민번호 체크
 * objname1 - 객체의 Element ID(주민번호 앞자리),
 * objname2 - 객체의 Element ID(주민번호 뒷자리)
 * 주민번호 패턴체크, length 체크, 입력문자 체크(숫자)
 * 남성 주민번호 패턴 체크
 * 만 14세 미만 패턴 체크
 */
check_juminno = function (objname1,objname2,type) {
	
	//var jumin1 = $(objname1).attr("value");
	//var jumin2 = $(objname2).attr("value");
	
	var jumin1 = $(objname1).val();
	var jumin2 = $(objname2).val();
	
	var juminno = jumin1+jumin2;
	
	var now      = new Date();
	var nowYear  = new Number(now.getFullYear());
	var nowMonth = new Number((now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1));            
	var nowDay   = new Number(now.getDate()>9 ? ''+now.getDate():'0'+now.getDate()); 
	
	if(juminno.length!=13) {
		alert("주민등록번호 입력 오류입니다.");
		//$(objname3).html("주민등록번호 입력 오류입니다.");
		$(objname1).focus();
		return false;
	}
	
	var yy  = jumin1.substr(0,2);  // 년도
	var mm  = jumin1.substr(2,2);  // 월
	var dd  = jumin1.substr(4,2);  // 일
	var genda = jumin2.substr(0,1);  // 성별
	var msg, ss, cc;
	
	// 숫자가 아닌 것을 입력한 경우
	if (!isNumeric(jumin1)) {
		alert("주민등록번호 앞자리를 숫자로 입력하세요.");
		//$(objname3).html("주민등록번호 앞자리를 숫자로 입력하세요.");
		$(objname1).focus();
		return false;
	}
	// 길이가 6이 아닌 경우
	if (jumin1.length != 6) {
		alert("주민등록번호 앞자리를 다시 입력하세요.");
		//$(objname3).html("주민등록번호 입력 오류입니다.");
		$(objname1).focus();
		return false;
	}
	// 첫번째 자료에서 연월일(YYMMDD) 형식 중 기본 구성 검사
	if (yy < "00" || yy > "99" ||
		mm < "01" || mm > "12" ||
		dd < "01" || dd > "31") {
		alert("주민등록번호 앞자리를 다시 입력하세요.");
		//$(objname3).html("주민등록번호 입력 오류입니다.");
		$(objname1).focus();
		return false;
	}
	// 숫자가 아닌 것을 입력한 경우
	if (!isNumeric(jumin2)) {
		alert("주민등록번호 뒷자리를 숫자로 입력하세요.");
		//$(objname3).html("주민등록번호 입력 오류입니다.");
		$(objname2).focus();
		return false;
	}
	// 길이가 7이 아닌 경우
	if (jumin2.length != 7) {
		alert("주민등록번호 뒷자리를 다시 입력하세요.");
		//$(objname3).html("주민등록번호 뒷자리를 다시 입력하세요.");
		$(objname2).focus();
		return false;
	}
	// 성별부분이 1 ~ 4 가 아닌 경우
	if (genda < "1" || genda > "8") {
		alert("주민등록번호 뒷자리를 다시 입력하세요.");
		//$(objname3).html("주민등록번호 뒷자리를 다시 입력하세요.");
		$(objname2).focus();
		return false;
	}
	/*외국인*/
	if(type == "f"){
		if (genda < "5" || genda > "8") {
			alert("외국인만 가입하실수 있습니다.");
			//$(objname3).html("남성은 회원으로 가입하실수 없습니다.");
			$(objname2).focus();
			return false;
		}
	}
	
	// 연도 계산 - 1 또는 2: 1900년대, 3 또는 4: 2000년대
	cc = (genda == "1" || genda == "2") ? "19" : "20";
	var no = parseInt(nowYear - (cc+yy));
	
	/*만 14 미만 가입 */
	if(type == "14"){
		if(no > 13){
			alert("만 14세 미만 회원만 가입하실 수 있습니다.");
			$(objname1).focus();
			return false;
		}else{
			if(no == 14){
				if(nowMonth >= mm){
					if(nowDay > dd){
						alert("만 14세 미만 회원만 가입하실 수 있습니다.");
						$(objname1).focus();
						return false;
					}
				}else{
					alert("만 14세 미만 회원만 가입하실 수 있습니다.");
					$(objname1).focus();
					return false;
				}
			}
		}
	}
	
	/*만 14 미만 가입 */
	if(type == "19"){
		if(no > 19){
			alert("만 19세 미만 회원만 성인인증을 하실수 있습니다.");
			$(objname1).focus();
			return false;
		}else{
			if(no == 19){
				if(nowMonth >= mm){
					if(nowDay > dd){
						alert("만 19세 미만 회원만 성인인증을 하실수 있습니다.");
						$(objname1).focus();
						return false;
					}
				}else{
					alert("만 19세 미만 회원만 성인인증을 하실수 있습니다.");
					$(objname1).focus();
					return false;
				}
			}
		}
	}
	
	if(type == "g"){
		if(!(no > 13)){
			alert("만 14세 미만 회원은 가입하실 수 없습니다.");
			$(objname1).focus();
			return false;
		}else{
			if(no == 14){
				if(nowMonth >= mm){
					if(nowDay > dd){
						alert("만 14세 미만 회원은 가입하실 수 없습니다.");
						$(objname1).focus();
						return false;
					}
				}else{
					alert("만 14세 미만 회원은 가입하실 수 없습니다.");
					$(objname1).focus();
					return false;
				}
			}
		}
	}
	
	// 첫번째 자료에서 연월일(YYMMDD) 형식 중 날짜 형식 검사
	if (isYYYYMMDD(parseInt(cc+yy), parseInt(mm), parseInt(dd)) == false) {
		alert("주민등록번호 앞자리를 다시 입력하세요.");
		//$(objname3).html("주민등록번호 앞자리를 다시 입력하세요.");
		$(objname1).focus();
		return false;
	}
	// Check Digit 검사
	if (!isSSN(jumin1, jumin2)) {
		alert("입력한 주민등록번호를 검토한 후, 다시 입력하세요.");
		//$(objname3).html("입력한 주민등록번호를 검토한 후, 다시 입력하세요.");
		$(objname1).focus();
		return false;
	}
	return true;
}

//재외국인 번호 체크
check_fgnno = function (objname1,objname2) {
	var sum=0;
	var odd=0;
	var fgnno = "";
	
	//var jumin1 = $(objname1).attr("value");
	//var jumin2 = $(objname2).attr("value");
	
	var jumin1 = $(objname1).val();
	var jumin2 = $(objname2).val();	
	
	fgnno = jumin1+jumin2;
	
	if(fgnno.length!=13) {
		alert("입력한 외국인 등록번호를 검토한 후, 다시 입력하세요.");
		return false;
	}
	buf = new Array(13);
	for(i=0; i<13; i++)	{ 
		buf[i]=parseInt(fgnno.charAt(i)); 
	}
	odd = buf[7]*10 + buf[8];
	if(odd%2 != 0) { 
		alert("입력한 외국인 등록번호를 검토한 후, 다시 입력하세요.");
		return false; 
	}
	if( (buf[11]!=6) && (buf[11]!=7) && (buf[11]!=8) && (buf[11]!=9) ) {
		alert("입력한 외국인 등록번호를 검토한 후, 다시 입력하세요.");
		return false;
	}
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	
	for(i=0, sum=0; i<12; i++) { 
		sum += (buf[i] *= multipliers[i]); 
	}
	sum = 11 - (sum%11);
	
	if(sum >= 10) { sum -= 10; }
	sum += 2;
	
	if(sum >= 10) { sum -= 10; }
	if(sum != buf[12]) { 
		alert("입력한 외국인 등록번호를 검토한 후, 다시 입력하세요.");
		return false; 
	}
	return true;
}

isYYYYMMDD = function (y, m, d) {
	switch (m) {
	case 2:  // 2월의 경우
		if (d > 29) return false;
		if (d == 29) {
		// 2월 29의 경우 당해가 윤년인지를 확인
		if ((y % 4 != 0) || (y % 100 == 0) && (y % 400 != 0))
			return false;
		}
		break;
	case 4:  // 작은 달의 경우
	case 6:
	case 9:
	case 11:
	if (d == 31) return false;
	}
	// 큰 달의 경우
	return true;
}
isNumeric = function (s) {
	for (i=0; i<s.length; i++) {
		c = s.substr(i, 1);
		if (c < "0" || c > "9") return false;
	}
	return true;
}
isLeapYear = function (y) {
	if (y < 100)
		y = y + 1900;
	if ( (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0) ) {
		return true;
	} else {
		return false;
	}
}
getNumberOfDate = function (yy, mm) {
	month = new Array(29,31,28,31,30,31,30,31,31,30,31,30,31);
	if (mm == 2 && isLeapYear(yy)) mm = 0;
	return month[mm];
}
isSSN = function (s1, s2) {
	n = 2;
	sum = 0;
	for (i=0; i<s1.length; i++)
		sum += parseInt(s1.substr(i, 1)) * n++;
	for (i=0; i<s2.length-1; i++) {
		sum += parseInt(s2.substr(i, 1)) * n++;
		if (n == 10) n = 2;
	}
	c = 11 - sum % 11;
	if (c == 11) c = 1;
	if (c == 10) c = 0;
	if (c != parseInt(s2.substr(6, 1))) 
		return false;
	else 
		return true;
}

/*정규식을 이용 id검사 */
fn_CheckId= function (objname)  {
	try	{
		//var reg_exp = /^[a-zA-Z]{1}/;
		var reg_exp =  /^[a-z0-9_]{4,16}$/;
		
		//var id = $(objname).attr("value");
		var id = $(objname).val();
		id = $.trim(id);
		
		var match = reg_exp.test(id);
		
		if(!isEmptyCheck(objname,"아이디 입력해주세요")){return false;};	
		if(!fn_StrLenChk(objname, 12, 5,"아이디는 5자리 이상 12자리 미만으로 입력해 주세요.")) {
			return false;
		}
		if(!match){
			alert("아이디는 영문소문자와 숫자만 가능합니다.");
			return false;
		}
		return true;
	} catch (e) { alert(e);	}

}

/*Password 생성 규칙 
*최소 6자 ~ 최대 10자
*영문, 숫자로 등록가능
*사용자 ID와 관련된 Password 사용금지 (사용자 ID의 문자열중에서 연속된 4자 이상 중복 금지)
*동일한 문자(숫자 포함) 3자 이상 연속 금지 (aaa,111, aaa111, Etc)
*통상 사용순서대로의 3자 이상 연속 사용금지 (abc, 123, abc789, Etc)
*/
fn_CehckPassWord = function(objname2)  {
	//var id = $(objname1).attr("value");
	//var pwd = $(objname2).attr("value");
	var pwd = $(objname2).val();		// ver 1.9.1
	//var tel = $(objname3).attr("value");
	//var reg_exp = /^([a-zA-Z0-9].*[!,@,$,%,^,&,*])|([!,@,$,%,^,&,*].*[a-zA-Z0-9])/;  //숫자, 영문, 특수문자 조합
	//var reg_exp =  /^[a-z0-9]{6,10}$/;
	var reg_exp = /^[_a-zA-Z0-9-\.]/;		// 영문 숫자 조합
	var reg_exp_n = /[a-zA-Z]/;
	var reg_exp_s = /[0-9]/;

	
	var match = reg_exp.test(pwd);
	var match2 = reg_exp_n.test(pwd);
	var match3 = reg_exp_s.test(pwd);
	
	//if(!isEmptyCheck(objname2,"비밀번호를 입력하세요.")){ return false;}
	if(!isEmptyCheck(objname2,"비밀번호를 입력해 주세요.")){ return false;}
	
//	if(!fn_StrLenChk(objname2,10, 6,"영문 또는 숫자를 조합하여 6~10자리로 입력해 주세요.")) {
	if(!fn_StrLenChk(objname2,12, 6,"비밀번호는 영문, 숫자를 조합하여 6~12자리로 입력해 주세요.")) {	
		$(objname2).attr("value", "");
		$(objname2).focus();		
		return false;
	}
	/*
	if(id.indexOf(pwd) > -1 || tel.indexOf(pwd) > -1) {
		$(objname2).focus();
		alert("ID 또는 전화번호에 사용된 정보는 비밀번호로 사용하실 수 없습니다.");
		return false;
	}*/
	
	if(!match || !match2 || !match3)  {
		$(objname2).focus();
		//alert("영문 또는 숫자를 조합하여 6~10자리로 입력해 주세요.");
		alert("비밀번호는 영문, 숫자를 조합하여 6~12자리로 입력해 주세요.");
		return false;
	}
	/*
	var temp = false;
	var str = "";
	for(var i=0;i<pwd.length;i++)
	{
		end = pwd.length-((pwd.length)%3);
		
		if(pwd.length-i>2) {
			
			str = eval("/^"+pwd.substr(i,3)+"/");
			
			if(id.match(str)) {				
				alert("비밀번호는 아이디와 전화번호에 사용된 연속된 3자리 이상의 문자는 중복하여 사용하실 수 없습니다.");	
				$(objname2).focus();
				return false;
			}
			
		}
	}
	
	for(var i=0;i<pwd.length;i++)
	{
		end = pwd.length-((pwd.length)%3);
		
		if(pwd.length-i>2) {
			
			str = eval("/^"+pwd.substr(i,3)+"/");
			
			if(tel.match(str)) {				
				alert("비밀번호는 아이디와 전화번호에 사용된 연속된 3자리 이상의 문자는 중복하여 사용하실 수 없습니다.");	
				$(objname2).focus();
				return false;
			}
			
		}
	}
	*/

	var SamePass_0 = 0; //동일문자 카운트
	var SamePass_1 = 0; //연속성(+) 카운드
	var SamePass_2 = 0; //연속성(-) 카운드

	var chr_pass_0;
	var chr_pass_1;

	for(var i=0; i < pwd.length; i++) {
		chr_pass_0 = pwd.charAt(i);
		chr_pass_1 = pwd.charAt(i+1);

		//동일문자 카운트
		if(chr_pass_0 == chr_pass_1) {
			SamePass_0 = SamePass_0 + 1;
		}

		//연속성(+) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1) {
			SamePass_1 = SamePass_1 + 1;
		}

		//연속성(-) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1) {
			SamePass_2 = SamePass_2 + 1;
		}
	}
	
	if(SamePass_0 > 1) {
		alert("한 문자로 연속된 비밀번호는 보안 정책상 허용하지 않습니다.");		
		$("#passwd").focus();
		return false;
	}

	/*
	if(SamePass_1 > 1 || SamePass_2 > 1 )  {
		$(objname2).focus();
		alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
		return false;
	}
	*/
	return true;
} 


fn_CehckDate_search = function(objname,objname2)  {

	//var stateDate = $(objname).attr("value");
	//var endDate = $(objname2).attr("value");
	
	var stateDate = $(objname).val();
	var endDate = $(objname2).val();	
	
	if(stateDate > endDate){
		alert("시작일보다 종료일이 이전입니다. 조회기간을 확인해주세요.");
		return false;
	}else{
		return true;
	}
}

fn_CheckBizID = function(bizID ,msg)  //사업자등록번호 체크 
{ 
    // bizID는 숫자만 10자리로 해서 문자열로 넘긴다. 
    var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1); 
    var tmpBizID, i, chkSum=0, c2, remander; 
     bizID = bizID.replace(/-/gi,''); 

     for (i=0; i<=7; i++) chkSum += checkID[i] * bizID.charAt(i); 
     c2 = "0" + (checkID[8] * bizID.charAt(8)); 
     c2 = c2.substring(c2.length - 2, c2.length); 
     chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1)); 
     remander = (10 - (chkSum % 10)) % 10 ; 

    if (Math.floor(bizID.charAt(9)) == remander) return true ; // OK! 
    
    
    
    if(msg != null && '' != msg){
				alert(msg);
			};
    
      return false; 
} 


String.prototype.trim = function()
{

	return this.replace(/(^\s*)|(\s*$)/g, "");

}


//------------------------------------------------------------------------------------
//		회원 가입용 메소드 
//------------------------------------------------------------------------------------

//회원 가입용 공백 체크 - fingerpush용
isEmptyCheckMem = function(object,msg){
	try{
		var str = $(object).val();			// ver 1.9.1		
		str = $.trim(str);
		if(str == ''){
			if(msg != null && '' != msg){
				//alert(msg);
				showAlertMsg(object, msg);
			}else{
				hideAlertMsg(object);
			}
			$(object).focus();
			return false;
		}else{
			return true;
		}
	}catch (e) {
		alert(e);
	}	
}

// 비밀번호 체크
fn_CehckPassWordMem = function(objname2)  {
	var pwd = $(objname2).val();		// ver 1.9.1

	//var reg_exp = /^([a-zA-Z0-9].*[!,@,$,%,^,&,*])|([!,@,$,%,^,&,*].*[a-zA-Z0-9])/;  //숫자, 영문, 특수문자 조합
	//var reg_exp =  /^[a-z0-9]{6,10}$/;
	var reg_exp = /^[_a-zA-Z0-9-\.]/;		// 영문 숫자 조합
	var reg_exp_n = /[a-zA-Z]/;
	var reg_exp_s = /[0-9]/;

	
	var match = reg_exp.test(pwd);
	var match2 = reg_exp_n.test(pwd);
	var match3 = reg_exp_s.test(pwd);
	
	if(!isEmptyCheckMem(objname2,"비밀번호를 입력하세요.")){ return false;}		
	if(!fn_StrLenChkMem(objname2,12, 6,"영문, 숫자를 조합하여 6~12자리로 입력해 주세요.")) {
		$(objname2).attr("value", "");
		$(objname2).focus();		
		return false;
	}
	
	if(!match || !match2 || !match3)  {
		$(objname2).focus();
		showAlertMsg(objname2, "영문, 숫자를 조합하여 6~12자리로 입력해 주세요.");		
		return false;
	}else hideAlertMsg(objname2);

	var SamePass_0 = 0; //동일문자 카운트
	var SamePass_1 = 0; //연속성(+) 카운드
	var SamePass_2 = 0; //연속성(-) 카운드

	var chr_pass_0;
	var chr_pass_1;

	for(var i=0; i < pwd.length; i++) {
		chr_pass_0 = pwd.charAt(i);
		chr_pass_1 = pwd.charAt(i+1);

		//동일문자 카운트
		if(chr_pass_0 == chr_pass_1) {
			SamePass_0 = SamePass_0 + 1;
		}

		//연속성(+) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1) {
			SamePass_1 = SamePass_1 + 1;
		}

		//연속성(-) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1) {
			SamePass_2 = SamePass_2 + 1;
		}
	}
	
	if(SamePass_0 > 1) {
		showAlertMsg(objname2, "한 문자로 연속된 비밀번호는 보안 정책상 허용하지 않습니다.");
		$("#passwd").focus();
		return false;
	}else hideAlertMsg(objname2);
	/*
	if(SamePass_1 > 1 || SamePass_2 > 1 )  {
		$(objname2).focus();
		showAlertMsg(objname2, "연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
		return false;
	}else hideAlertMsg(objname2);
	*/
	return true;
} 

fn_StrLenChkMem = function (objname, max, min, msg) {
	//var val = $(objname).attr("value");
	var val = $(objname).val();
	var val_len = 0;
	val_len = fn_inputLen(val);
	
	if(val_len == 0) {
		if(msg != null){alert(msg);}
		return false;	
	}
	/*최대 길이  체크*/
	if(min == null && min == 0) {
		if(val_len>max) {if(msg != null || "" != msg){showAlertMsg(objname, msg);}else{hideAlertMsg(objname);}  return false;}
	}
	/*최소 길이  체크*/
	if(max == null && max == 0) {
		if(val_len<min) {if(msg != null || "" != msg){showAlertMsg(objname, msg);}else{hideAlertMsg(objname);} return false;}
	}
	/*최대, 최소 길이  체크*/
	if(max > min) {
		if(val_len < min || val_len > max) {if(msg != null || "" != msg){showAlertMsg(objname, msg);}else{hideAlertMsg(objname);} return false;}
	}else
	{
		return false;
	}	
	return true;
}



/***
 * 팝업 처리(스크롤 없음)
 * 
 * @param url
 * @param name
 * @param w
 * @param h
 */
function pop(url,name,w,h){ 	window.open(url,name,'width='+w+',height='+h+',scrollbars=no');}

/***
 * 팝업 처리 (스크롤 있음)
 * @param url
 * @param name
 * @param w
 * @param h
 */
function pops(url,name,w,h){ window.open(url,name,'width='+w+',height='+h+',scrollbars=yes') } 
	