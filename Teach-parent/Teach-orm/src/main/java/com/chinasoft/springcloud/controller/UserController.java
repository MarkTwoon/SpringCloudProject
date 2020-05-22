package com.chinasoft.springcloud.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
 



import com.chinasoft.springcloud.service.UserService;
import com.chinasoft.springcloud.util.RequestUtil;

@RestController
public class UserController {
	@Autowired
	private UserService service;
	@RequestMapping(value="/getCitys", method=RequestMethod.GET)
	public List<Map<String,Object>> getCitys(){
		return service.getCitys();
	}
	
	 
	
	@RequestMapping(value="/headNumber",method=RequestMethod.POST)
	public  Map<String,Object> headNumber(@RequestBody Map<String,Object> map){
		//Map<String,Object> map=RequestUtil.getQueryMap(request);
		return service.headNumber(map);
	}
	
	 
	@RequestMapping(value="/selectCouponMainByCityId",method=RequestMethod.POST)
	public Map<String,Object>  selectCouponMainByCityId(@RequestBody Map<String,Object> map){
	//	Map<String,Object> map=RequestUtil.getQueryMap(request);
		return service.selectCouponMainByCityId(map);
	}
	
	@RequestMapping(value="/selectSuccessUserList",method=RequestMethod.POST)
	public List<Map<String,Object>>  selectSuccessUserList(@RequestBody Map<String,Object> map){
	//	Map<String,Object> map=RequestUtil.getQueryMap(request);
		return service.selectSuccessUserList(map);
	}
	
	@RequestMapping(value="/selectActivitiesCityList",method=RequestMethod.POST)
	public List<Map<String,Object>>  selectActivitiesCityList(@RequestBody Map<String,Object> map){
	//	Map<String,Object> map=RequestUtil.getQueryMap(request);
		return service.selectActivitiesCityList(map);
	}
	
}
