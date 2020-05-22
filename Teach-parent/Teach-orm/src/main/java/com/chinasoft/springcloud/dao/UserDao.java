package com.chinasoft.springcloud.dao;

import java.util.List;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
 

@Mapper
public interface UserDao {
	public List<Map<String,Object>> getCitys();
	//public Map<String,Object>  selectCityNameById(Map<String,Object> map);
	public Map<String,Object> headNumber(Map<String,Object> map);
	 
	 public Map<String,Object>  selectCouponMainByCityId(Map<String,Object> map);
	 public  List<Map<String,Object>>  selectSuccessUserList(Map<String,Object> map);
	 public List<Map<String,Object>>  selectActivitiesCityList(Map<String,Object> map);
}
