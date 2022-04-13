package com.app.contoller;

import java.util.HashMap;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.service.IAdmin;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.app.pojos.Admin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admins")
public class AdminController {

	
	@Autowired
	private IAdmin adminService;

	public AdminController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Admin admin){
		Map<String,String> map = new HashMap<>();
		try {
			Admin userByUserAndPassword = adminService.authenticateUser(admin.getUsername(), admin.getPassword());
			if (userByUserAndPassword!=null) {
				map.put("username",userByUserAndPassword.getUsername().toString());
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
	@PutMapping("/updatePassword/{username}")
	public int updatePassword(@PathVariable String username, @RequestBody  @Valid  ObjectNode json) {
		return adminService.updatePassword(username, json.get("password").asText());
	}
}
