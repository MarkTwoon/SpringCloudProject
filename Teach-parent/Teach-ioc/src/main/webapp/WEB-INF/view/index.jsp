<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>便宜汇  吃喝玩乐全免券 疯狂砍价</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="black" name="apple-mobile-web-app-status-bar-style" />
<meta content="telephone=no" name="format-detection" />
<meta name="renderer" content="webkit|ie-comp|ie-stand">
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="wap-font-scale" content="no">
	<link href="css/style.css" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" type="text/css" href="mobileSelect.js-master/css/mobileSelect.css">
    <script src="mobileSelect.js-master/js/mobileSelect.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript"
	src="static/js/jquery-1.7.2.js"></script>
 <script src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
    <script src="layer/layer.js"></script>
    <script src="layer/extend/layer.ext.js"></script>
    <style>
    .wrap-activity a {line-height: 32px; }
    .dDown {position: absolute; top: 23%;  width: 100%;font-size: 16px; line-height: 34px;text-align: center;  z-index: 109; margin-left: -20px;}
    .dDow a{color: #888;  }
    .dDown .heart { color: #dcdbdb;font-size: 15px;padding-left: 25px;height: 26px;line-height: 26px;background:url(images/c-no.png) no-repeat left;
        position: absolute;top: 4%;right: 0%;background-size: 22px;z-index: 101;}
    .dDown>a{width: 38%; font-size: 16px; color: #fff;position: relative; background: #262626;border: 1px solid #fff;
        text-align: center;margin: 0 auto 26px;}
    .dDown ul{width: 38%; margin: -26px auto 0;position: relative;z-index:999;background:#545454;border: 1px solid #5d5d5d;}
    .dDown li{ height:32px; line-height: 32px; font-size: 14px;}
    .dDown li:hover{background: #949292;;}
    @media only screen and (max-width: 620px) {
        .dDown {top: 22%;}
    }
    @media only screen and (max-width: 548px) {
        .dDown {top: 21%;}
    }
    @media only screen and (max-width: 460px) {
        .dDown {top: 19%;}
    }
    @media only screen and (max-width: 380px) {
        .dDown {top: 18%;}
    }
    @media only screen and (max-width: 320px) {
        .dDown {top: 17%;}
    }
</style>
  </head>
  
  <body  onload="see();">
<div class="topbar">
    <a class="fl" style="text-decoration: underline;margin-right: 16px;color: #666;" href="selectCityMainById.action">${map1.cityName}</a>
    <span> <i class="red">${map0.readMan}</i>人查看</span>
    <span> <i class="red">${map0.shareMan}</i>人分享</span>
    <span> <i class="red">${map0.joinUser}</i>人报名</span>
    <a class="fl" style="text-decoration: underline;margin-right: 16px; color: #666;" onclick="go3();">会员登录<!--退出--></a>
   <!--   <a  onclick="share();"  class="shareTo fr">
        <img src="images/shareTo.png" alt="" width="26"  style="margin-top:15px;" >
    </a>-->
</div>
<div class="b">
 <img src="upload/${map1.couponImg}" alt="" style="width:100%;">
</div>
<!--参与报名-->
<div class="toSign re">
    <div class="roast"> 
    <marquee direction="up" scrolldelay="600" height="40px" style="text-align:center;">
       <c:forEach items="${list001}" var="list1" varStatus="status">
      <i class="red">${list1.userName}</i>于 ${list1.shareTime} 成功砍至底价 <br>
        <span>&nbsp;</span><br>
          </c:forEach>
        </marquee>
    </div>

    <form action="">
        <div class="input2">
            <span class="col1">城市：</span>
            <input type="text" value="${map1.cityName}" readonly="readonly"/>
        </div>
        <div class="input2">
            <span class="col2">价格：</span>
            <input type="text" id="cityPrice1" value="${map1.couponOldPrice}" readonly="readonly"/>
        </div>
        <div class="input2">
            <span class="col1">姓名：</span>
             
            <input type="text" value="${empty sessionScope.userMap.userName?'请登录':map1.userName}" readonly="readonly" />
             
           <%--  <input type="text" value="${map1.userName}" readonly="readonly" /> --%>
        </div>
        <div class="input2">
            <span class="col2">底价：</span>
            <input type="text" id="cityPrice0" value="${empty sessionScope.userMap.userName?map1.couponLowPrice:sessionScope.userMap.userName}" readonly="readonly"/>
        </div>
    </form>
    <img src="images/toSign-bg.png" alt="" width="750" style="width:100%; float: left;">
    <div class="btn">
        <img src="images/btn.png" alt="" width="200" style="width:100%; float: left;" onclick="return0();">
    </div>
</div>

<style>

/* 首页icon*/
.ProCt{margin: 0 10px 14px;;}
.ProCt li{ width: 25%; float: left; margin: 12px 0px 30px;text-align: center;}
.ProCt li img{ margin:  0 auto;}
.ProCt li span{ color:#d0d0d0; line-height: 18px; padding-top:8px; display: block; font-size: 14px;}

</style>

<!--本期活动商家列表-->
<div class="wrap-activity re" style="padding-bottom: 60px">
    <div class="money">
        <img src="images/money.png" alt="" width="50">
    </div>  
    <div class="re">
        <img style="margin-bottom: 0px;  padding-bottom: 0px;" class="topimg re" src="images/activity-bg.png" alt="" width="750">
    </div>
    <ul class="ProCt zm">
    <c:forEach items="${list0}" var="list1" varStatus="status">
                <%-- <option value="${list1.businessTypeId}">${list1.businessTypeMain}</option>  --%>
 			<li>
                <a href="selectAllActivitiesById.action?cityId=${map007.cityId}&businessTypeId=${list1.businessTypeId}&check0=${check0}&loginState=0">
                    <i><img src="images/icon${status.index + 1}.png" width="62" height="62" alt=""></i>
                    <span>${list1.businessTypeMain}</span>
                </a>
            </li>
    </c:forEach>
    </ul>
    
        <ul class="wrap-activity-card zm" id="businessActivities">
            <%-- <select name="businessTypeId" id="selectAjax" onchange="ajaxRequest();" style="width:300px;" > 
                <option value=" ">行业分类  点击商家图片查看商家详情</option>
                <option value=" ">所有优惠券</option>
             <c:forEach items="${list0}" var="list1" varStatus="status">
                <option value="${list1.businessTypeId}">${list1.businessTypeId} .${list1.businessTypeMain}</option> 
 
                 </c:forEach>
            </select>   --%> 
            
        <c:forEach items="${list}" var="list1" varStatus="status">
        <li class="zm on re" style="z-index: 1;">
            <div class="fl imgbox" onclick="selectBusinessById('${list1.businessId}','${list1.activitiesId}');">
                <div class="line"></div>
                <img src="/ssm/upload/${list1.activitiesImg}" alt="" style="width:100%;">
            </div>
            <div class="fl use-on"  >
                <span onclick="go3();"  style="margin:0 auto;width:40px;line-height:40px;">${list1.activitiesPrefeRential}</span>
            </div>
        </li>
        </c:forEach> 
        </ul>
        
    <a id="moreTo"  style="z-index: 1;"  onclick="listMore0();">
        <div class="moreTo" >
           <span id="zuhao"   > 点击查看更多商家信息</span>
        </div> 
        <img id="absolute0"   style="position: absolute; left: 50%; bottom: 65px; margin: 0 0 0 -14px;z-index:1;"  src="images/go-b.png" alt="" width="28">
    </a>
      <div class="money-btm" id="moreOnclick">
       <!--  <img src="images/money-btm.png" alt="" onclick="listMore0();" width="750" style=" width: 100%; float: left; position: relative; z-index: 99;"> -->  
    </div> 
            
    <div class="money-btm">
        <img src="images/money-btm.png" alt="" width="750" style=" width: 100%; float: left; position: relative; z-index: -1;">
    </div>
</div>

<!-- <script type="text/javascript">
 var  list3='${list0}';
 var list4=list3.split("[{");
  var list5=list4[1].split("}]");
  var list6=list5[0].split("}, {");
  var arr = new Array( );
  for(var i=0;i<list6.length;i++){
 var listc=list6[i].split("businessTypeMain=");
 arr.push(listc);
  }
  var arc=arr+'';
   var arb=arc.split("businessTypeId=")+'';
   var ard=arb.split(",,")+'';var are=ard.split(",");
    var arr0= new Array( );var arr1= new Array( );
    arr1.push('所有优惠券');
   for(var i=0;i<are.length;i++){
   var reg=/^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/;
   var reg0= /^[1-9]\d*$/;
  
   if(are[i]+''!=''&&reg0.test(are[i]+''||are[i]+''!=''&&reg.test(are[i]+''))){
   arr0.push(are[i]);
   }else{
   if(are[i]+''!=''&&reg.test(are[i]+'')){
    arr1.push(are[i+2]+'.'+are[i]);
   }else{}
   }
   }
   var weekdayArr=arr1;var weekdayArr0=arr0;
 
  /* var mobileSelect1 = new MobileSelect({
     trigger: '#drop1', 
    title: '行业分类',  
    wheels: [
                {data: weekdayArr}
            ],
    position:[2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
    transitionEnd:function(indexArr, data){
        console.log(data);
    },
    callback:function(indexArr, data){
        console.log(data);
       var  data0=data+''.split("."); 
       var businessTypeId='';
        if(data0+''!='所有优惠券'){
         businessTypeId=data0[0];
        }else{
        businessTypeId='';
        }
        
  var check0='${check0}';
  if(check0==0){
    check0='';
  }
  var  page=0;
  if(page0==0){
  page=4;
}else{
page=parseInt(page0);
}
 
if('${list}'!=''&&'${list}'!='[]'&&'${list}'!=0){
 location.href = 'selectIndexToAll.action?cityId='+cityId+'&businessTypeId='+businessTypeId+'&check0='+check0+'&page='+page;
 }else{
 layer.open({
  title: '尊敬的用户，抱歉'
 ,content: '此城市暂时未开放便宜汇平台优惠活动，请选择浏览其他城市活动详情'
}); 
 }
    }
}); */


</script> -->

<!--活动规则-->
<div class="rule">
    <img src="images/rule-bg.png" alt="" width="750"       style="width:100%; float: left;">
   <div class="rule-font">
        1. 活动参与流程：<br/>
        <img src="images/f1.png" alt="" width="750" style="width:100%;"><br/>
        2. 到店使用流程：<br/>
        <img src="images/f2.png" alt="" width="750" style="width:100%;"><br/>
        3. 报名成功转发至朋友圈或微信群， 邀请朋友帮忙减价；<br/>
        4. 减至底价后，支付100元即可开始享受活动福利；<br/>
        5. 消费者购卡后，如有新入驻的商家，本网会自行将商家优惠活动同步至所有便宜卡，<br/>
        持卡人无需重新购买，即可享用所有优惠活动；<br/>
        6. 点击商家图片即可查看商家详情；<br/>
        7. 商家在存续期间有效；<br/>
        8. 本期活动有效期至2018年11月11日；<br/>
        9. 平台内任何商家优惠活动不套现；<br/>
        10. 消费前请仔细阅读商家的消费须知；<br/>
        11. 支付成功后费用不予退还；<br/>
        12. 如遇系统繁忙或其它网络故障请点击网址 <a style="color: #de4243"> http://www.pypy.net.cn/ 用浏览器</a>打开登陆；<br/>
        13. 本活动最终解释权归武汉便宜汇信息科技发展有限公司所有。<br/>
    </div>
</div>


<!--底部-->
<!--
<div class="cR">
    <div class="main">
        <div class="fl-z">
            <img src="images/z1.png" alt=""  >
        </div>
        <div class="fl-name">
            <img src="images/logo.png" alt=""  >
            <div class="all">
                <div class="fl">
                    <span>热线：027-85318876</span><br/>
                    <span>QQ：1025377625</span>
                </div>
                <div class="er fr">
                    <img src="images/er.png" alt=""  >
                </div>
            </div>
        </div>
    </div>
    <div class="cR-btm">
        <img src="images/btm-bg.png" alt="" width="750"  style="width:100%; float: left;" >
    </div>
</div>
//-->

<div class="cR" style="background: #de4243; position: relative; margin-top: -10px; text-align: center;">
    <img src="images/z6.png" alt="" width="644" style="width:90%; margin:26px auto 14px;">
    <a href="selectBusinessCommitmentList.action">
        <div class="moreTo" style="color: #fff;  width: 66%; margin: 0 auto 40px; border: 2px solid #fef5e6; font-size: 16px; text-align: center;">
            商家承诺书 点击查看
            <img src="images/go-b.png" alt="" width="40" style="width: 34px;
    position: absolute;
    left: 50%;
    margin-left: -17px;
    bottom: 8px;">
        </div>
    </a>
</div>

<div class="cR-btm">
    <img src="images/btm-bg.png" alt="" width="750" style="width:100%; float: left;">
</div>

</body>
   <script src="js/jquery-1.7.2.js" type="text/javascript"></script>
  <script type="text/javascript">
  document.addEventListener("error", function (e) {
 
  var elem = e.target;
  if (elem.tagName.toLowerCase() == 'img') {
    elem.src = "upload/4f735295-9e54-4986-b153-23c97616ebe8.jpg";
  }
}, true);
  
  page=4;
  function see(){ 
  $(function(){
  $.ajax({
 url:"ajaxa112.action",
data:{couponId:'${map1.couponId}',cityId:'${map1.cityId}',page:page},
dataType:"json",
type:"post",
success:function(data){

for(var i=0;i<data.length;i++){
$("#businessActivities").append('<li class="zm on re">'
           +'<div class="fl imgbox" onclick="selectBusinessById('+data[i].businessId+','+data[i].activitiesId+');">'
               +' <div class="line"></div>'
                +'<img src="upload/'+data[i].activitiesImg+'" alt="" style="width:100%;">'
            +'</div>'
             +'<div class="fl use-on"  >'
              +'<span style="margin:0 auto;width:40px;line-height:40px;">'+data[i].activitiesPrefeRential+'</span>'
           +' </div>'
       +'</li>');
}
}
  
  });
 
  })
  }
  
  
  function listMore0(){
  page+=4;
  see();
  }
  
  </script>
  
</html>
