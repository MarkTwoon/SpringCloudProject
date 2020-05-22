package com.chinasoft.springcloud.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.chinasoft.springcloud.service.UserIocService;
import com.chinasoft.springcloud.util.RequestUtil;
 
@Controller
public class UserController {
	// private static String REST_URL_PREFIX = "http://localhost:8002";
	/*直接根据微服务名调用，而不再是根据地址和端口了，运用了eureka的发现功能*/
	/*  private static String REST_URL_PREFIX = "http://Teach-orm";
	@Autowired
	private RestTemplate restTemplate;*/
	@Autowired
	private UserIocService  userService;
	
	//@SuppressWarnings({ "unchecked", "rawtypes" })
	@RequestMapping(value="/getCitys")
	@ResponseBody  
	public List<Map<String,Object>> getCitys(){
		//List<Map<String,Object>>  list = restTemplate.getForObject(REST_URL_PREFIX + "/getCitys", List.class);
		List<Map<String,Object>>  list = userService.getCitys();
		return list;
	}
	
	@RequestMapping(value="/turnIndexLogin0")
	public String turnIndexLogin0(HttpServletRequest request){            
		String cityId=request.getParameter("cityId")+"";
		 
		/*Map<String,Object> map=restTemplate.getForObject(REST_URL_PREFIX + "/headNumber?cityId="+cityId, Map.class);
		Map<String,Object> map1=restTemplate.getForObject(REST_URL_PREFIX + "/selectCouponMainByCityId?cityId="+cityId, Map.class);
		List<Map<String,Object>> list001=restTemplate.getForObject(REST_URL_PREFIX + "/selectSuccessUserList?cityId="+cityId, List.class);*/
		Map<String,Object> map=RequestUtil.getQueryMap(request);
		Map<String,Object> map0=userService.headNumber(map);
		Map<String,Object> map1=userService.selectCouponMainByCityId(map);
		List<Map<String,Object>> list001=userService.selectSuccessUserList(map);
		request.setAttribute("map0", map0);
		request.setAttribute("map1", map1);
		request.setAttribute("list001", list001);
		 return  "index"; 
	}
	
	@RequestMapping(value="ajaxa112")
	@ResponseBody
	public Object ajaxa112(HttpServletRequest request){    
		Map<String,Object> map=RequestUtil.getQueryMap(request);
		/*String cityId=map.get("cityId")+"";
		String couponId=map.get("couponId")+"";
		String page=map.get("page")+"";*/
		 //Map<String,Object> map= restTemplate.getForObject(REST_URL_PREFIX + "/selectCityNameById?cityId="+cityId, Map.class);
   //String url=REST_URL_PREFIX + "/selectActivitiesCityList"+"?cityId="+cityId+"&couponId="+couponId+"&page="+page;
		//List<Map<String,Object>> list=restTemplate.getForObject(url, List.class);
		List<Map<String,Object>> list=userService.selectActivitiesCityList(map);
		 
		 return  list; 
	}
 
}
