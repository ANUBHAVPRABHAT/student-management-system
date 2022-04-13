package com.app.service;

import com.app.pojos.Admin;

public interface IAdmin {
	Admin authenticateUser(String email, String pass);
	int updatePassword(String id,String password);
}
