package com.dao.impl;

import javax.annotation.Resource;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Service;

import com.dao.UserDao;
import com.entity.User;


@Service
public class UserDaoImpl  implements UserDao{
	
	@Resource(name="sessionFactory")
	private SessionFactory sessionFactory; 
	
	public void add(User user) {
	
		Session session = sessionFactory.getCurrentSession();
		session.save(user);  
	}

}
