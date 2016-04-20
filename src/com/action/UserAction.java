package com.action;

 

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;

import com.service.UserService;


@Action(value="/User")
@Controller
public class UserAction{

	@Resource(name = "userServiceImpl")
	private UserService userService;
	
	@Action(value="addUser")
	public void addUser(){
		HttpServletRequest request = ServletActionContext.getRequest();
        String name = request.getParameter("name");
        //JSONObject user = new JSONObject(userStr);  
        
		System.out.print("dsd:"+name);
		try{
//			this.userService.addUser(user);
			
		}catch(Exception e){
			e.printStackTrace();
		}
		
	}
	
}
