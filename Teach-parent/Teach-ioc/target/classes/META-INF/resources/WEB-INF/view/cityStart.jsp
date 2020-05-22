<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/functions"  prefix="fn"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>便宜汇 城市选择</title>
   <meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="black" name="apple-mobile-web-app-status-bar-style" />
<meta content="telephone=no" name="format-detection" />
	<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/zepto.js"></script>
  </head>
  
  <body>
   <div id="header" class="header_main">城市选择<a href="javascript:history.back();"  class="back"></a><a class="cd-popup-trigger button2"></a></div>
<div class="h60"></div>

<!-- <div class="loan_jm1">
    <ul>
        <li class="loan_jm_l1">
            <span class="loan_jm_spa1">选择城市活动</span>
            <span class="wbk_srn select_show select_gr" id="gr_zone_ids" data-id="130100"></span><b></b>
        </li>
    </ul>
</div> -->

<div class="container" >
    <div class="hotcity" id="city1">
        <span>热门城市</span>
            
           <%-- <c:forEach items="${list}" var="list1" varStatus="status">
        <a data-id="420100" href="turnIndexLogin0.action?cityId=${list1.cityId}">${list1.cityName}</a> 
      
    </c:forEach> --%>
    </div>
<!--     <div class="city"  id="city0">
      
    </div> -->
    <!-- <div class="letter">
        <ul  id="ul0">
         
        </ul>
    </div> -->
</div>

<!-- <script type="text/javascript" src="user/base/js/zepto.js"></script> -->
  </body>
   <script src="js/jquery-1.7.2.js" type="text/javascript"></script>
   <script type="text/javascript">
   $(function(){
   $.ajax({
url:"getCitys.action",
data:{},
dataType:"json",
type:"post",
success:function(data){
  // alert(data);
for(var i=0;i<data.length;i++){
$("#city1").append("<a  data-id='420100' href='turnIndexLogin0.action?cityId="+data[i].cityId+"'>"+data[i].cityName+"</a>");
}
}
})
})
   </script>
</html>
