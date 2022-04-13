package com.app.service;

import java.util.List;
import com.app.pojos.Student;

public interface IStudentService {
	
	List<Student> getAllStudent();
	Student addOrUpdateStudentDetails(Student admission);
	String deleteStudentDetails(int id);
	String getStudentClasses(int sid);
    List<Student> fetchAllStudentDetail();
    List<Student> fetchInactiveStudentDetail();
	Student fetchStudentDetails(int stuId);
	Student fetchStudentRDetails(int stuId);
	Student viewStudentDetails(int stuId);
	List<Student> findStudentByClass(String classes);
	String updateStudentStatus(int id);
	Student authenticateUser(int sid, String pass);
	String updatePassword(int id,String password);
} 
