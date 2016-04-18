package com.action;

 

import javax.annotation.Resource;

import org.apache.struts2.convention.annotation.Action;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.entity.User;
import com.service.UserService;


@Action(value="/User")
@RequestMapping("/User")
@Controller

public class UserAction {

	@Resource(name = "userServiceImpl")
	private UserService userService;
	
	public void addUser(User user){
		System.out.print("dsd");
		try{
			this.userService.addUser(user);
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
}
