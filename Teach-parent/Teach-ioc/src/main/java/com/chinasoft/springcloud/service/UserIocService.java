package com.chinasoft.springcloud.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value="Teach-orm")
public interface UserIocService {

	@RequestMapping(value="/getCitys", method=RequestMethod.GET)
	public List<Map<String,Object>> getCitys();
	
	@RequestMapping(value="/headNumber",method=RequestMethod.POST)
	public  Map<String,Object> headNumber(@RequestBody Map<String,Object> map);
	
	@RequestMapping(value="/selectCouponMainByCityId",method=RequestMethod.POST)
	public Map<String,Object>  selectCouponMainByCityId(@RequestBody Map<String,Object> map);
	
	@RequestMapping(value="/selectSuccessUserList",method=RequestMethod.POST)
	public List<Map<String,Object>>  selectSuccessUserList(@RequestBody Map<String,Object> map);
	
	@RequestMapping(value="/selectActivitiesCityList",method=RequestMethod.POST)
	public List<Map<String,Object>>  selectActivitiesCityList(@RequestBody Map<String,Object> map);
	
}
