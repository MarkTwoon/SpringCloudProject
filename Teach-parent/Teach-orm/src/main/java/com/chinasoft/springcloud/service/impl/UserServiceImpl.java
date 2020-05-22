package com.chinasoft.springcloud.service.impl;

import java.util.List;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chinasoft.springcloud.dao.UserDao;
 
import com.chinasoft.springcloud.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;

	@Override
	public List<Map<String, Object>> getCitys() {
		// TODO Auto-generated method stub
		return userDao.getCitys();
	}

	/*@Override
	public Map<String, Object> selectCityNameById(Map<String,Object> map) {
		// TODO Auto-generated method stub
		return userDao.selectCityNameById(map);
	}*/

	@Override
	public Map<String, Object> headNumber(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return userDao.headNumber(map);
	}

	 

	 @Override
	public Map<String, Object> selectCouponMainByCityId(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return userDao.selectCouponMainByCityId(map);
	}

	@Override
	public List<Map<String, Object>> selectSuccessUserList(
			Map<String, Object> map) {
		// TODO Auto-generated method stub
		return userDao.selectSuccessUserList(map);
	}

	@Override
	public List<Map<String, Object>> selectActivitiesCityList(
			Map<String, Object> map) {
		// TODO Auto-generated method stub
		return userDao.selectActivitiesCityList(map);
	} 
	 

}
