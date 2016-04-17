package com.service.impl;



import javax.annotation.Resource;



import org.springframework.stereotype.Service;

import com.dao.UserDao;
import com.entity.User;
import com.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Resource(name="userDaoImpl")
	private UserDao userDao;

	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		userDao.add(user);
	}
	

}
