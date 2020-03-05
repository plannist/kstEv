<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"  %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>Insert title here</title>
	<!-- 공통 스타일시트 -->
	<link rel="stylesheet" type="text/css" href='<c:url value="/css/ev.css"/>' />
	<script type="text/javascript" src="/js/jquery.js"></script>
    <script type="text/javascript" src="/js/ev.validation.js"></script>
</head>
<body>
	<main role="main" id="skip-content" class="ly-main" data-page="pg-agreement" tabindex="0">
    <!-- 비주얼 영역 -->
    <section class="agreement-visual-section">
      <h2 class="blind">차량 계약하기</h2>
      <div class="agreement-visual-titlegroup">
        <p class="agreement-visual-title">차량 계약하기</p>
        <p class="agreement-visual-sub">온라인에서 계약 내용 작성 후 <br class="only-mobile">계약금을 결제하시면<br>쉽고 간편하게 차량 계약이 가능합니다</p>
        <!-- mib190724 문구 추가// -->
        <p class="agreement-visual-tip">※ 사전 예약 고객 우선 인도 후 순차적 인도 예정입니다.</p>
        <!-- //mib190724 문구 추가 -->
      </div>
    </section>

    <!-- 게이트 영역 -->
    <section class="agreement-success-section">
      <h2 class="blind">정식 계약 완료</h2>
      <!-- 아이콘 -->
      <figure class="agreement-success-figure">
<!--         <img src="/lib/images/agreement/agreement-success-icon_sm.png" alt="" class="agreement-success-icon"> -->
      </figure>
      <!-- 타이틀 -->
      <div class="agreement-success-titlegroup">
        <p class="agreement-success-title"><span class="strong">정식 계약</span>이 완료되었습니다.</p>
        <p class="agreement-success-sub">계약금 입금이 확인되면 <br>담당자가 고객님께 연락드리겠습니다.</p>
      </div>
      <!-- 버튼 -->
      <div class="agreement-success-btns-wrap">
        <a href="/index.jsp" target="_self" class="agreement-success-btns" title="홈으로 가기">홈으로 가기</a>
      </div>
      <!-- 안내 -->
      <p class="agreement-success-notice">※ 계약 내용 변경 및 취소/환불 신청은 <br class="only-mobile"><a href="tel:07046802647" class="agreement-success-notice-tel">070-4680-2647</a>로 연락바랍니다.</p>
      
    </section>
  </main>
</body>
</html>