package com.app.contoller;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.service.IStudentService;
import com.app.pojos.Student;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.web.bind.annotation.PathVariable;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/student")
public class StudentLoginController {

	@Autowired
	private IStudentService studentService;

	public StudentLoginController() {
		System.out.println("in ctor of " + getClass());
	}
/*	
	@PostMapping("/login")
	public int loginUser(@RequestBody Student user) throws Exception {
		Integer tempSid=user.getSid();
		String tempPass=user.getPassword();
		
		Student userobj=null;
		
		if(tempSid !=null  && tempPass!=null) {
			userobj=studentService.authenticateUser( tempSid, tempPass);;
		}
		if(userobj ==null) {
			throw new Exception("Bad crendetials");
		}
		System.out.println(userobj.getEmailid());
		
		return userobj.getSid();
	
	}
	*/

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Student student){
		Map<String,String> map = new HashMap<>();
		try {
			Student userByUserAndPassword = studentService.authenticateUser(student.getSid(), student.getPassword());
			if (userByUserAndPassword!=null) {
				map.put("sid",userByUserAndPassword.getSid().toString());
				map.put("name",userByUserAndPassword.getName());
			    map.put("token", "123456");
				return new ResponseEntity<>(map,HttpStatus.OK);
			} else {
				map.clear();
				map.put("message","Invalid User");
				map.put("Token",null);
				return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			map.clear();
			map.put("message",e.getMessage());
			map.put("Token",null);
			return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
		}
	}
	@PutMapping("/updatePassword/{sid}")
	public String updatePassword(@PathVariable int sid, @RequestBody ObjectNode json) {
		return studentService.updatePassword(sid, json.get("password").asText());
	}
}
