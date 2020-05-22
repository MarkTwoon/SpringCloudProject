package com.chinasoft.springcloud.service;

import java.util.List;
import java.util.Map;
 
public interface UserService {
	public List<Map<String,Object>> getCitys();
	//public Map<String,Object>  selectCityNameById(Map<String,Object> map);
	public Map<String,Object> headNumber(Map<String,Object> map);
	 
	public Map<String,Object>  selectCouponMainByCityId(Map<String,Object> map);
	public  List<Map<String,Object>>  selectSuccessUserList(Map<String,Object> map);
	public List<Map<String,Object>>  selectActivitiesCityList(Map<String,Object> map);
}
