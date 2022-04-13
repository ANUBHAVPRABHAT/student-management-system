package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.StudentRepository;
import com.app.pojos.Student;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {
	
	@Autowired
	private StudentRepository studentRepo;

	@Override
	public List<Student> getAllStudent() {
		
		return studentRepo.findAll();
	}
	
	@Override
	public List<Student> fetchAllStudentDetail(){
		
		return studentRepo. findAllBySID();
	}
	@Override
	public List<Student> fetchInactiveStudentDetail(){
		
		return studentRepo.findInActiveBySID();
	}


	@Override
	public Student addOrUpdateStudentDetails(Student stu) {
		
		return studentRepo.save(stu);
		
	}

	@Override
	public String deleteStudentDetails(int sid) {
		
		studentRepo.deleteById(sid);
		return "Student Details with ID " + sid + " deleted successfuly... ";
	}
	
			
	@Override
	public String updateStudentStatus(int sid) {
				
				studentRepo.updateStatus(sid);
				return "Student Details with ID " + sid + " update status successfuly... ";
			}
	@Override
	public Student fetchStudentDetails(int sid) {
		
		return studentRepo.findById(sid).orElseThrow(() -> new ResourceNotFoundException("Emp by ID " + sid + " not found!!!!"));
	}
	@Override
	public Student fetchStudentRDetails(int sid) {
		
		return studentRepo. findStudentrBySID(sid).orElseThrow(() -> new ResourceNotFoundException("Emp by ID " + sid + " not found!!!!"));
	}
	@Override
	public Student viewStudentDetails(int sid) {
		return studentRepo.findStudentBySID(sid).orElseThrow(() -> new ResourceNotFoundException("Emp by ID " + sid + " not found!!!!"));
	}
	
	@Override
	public List<Student> findStudentByClass(String classes) {
		
		
		return studentRepo.findAllByClasses(classes);
	}
	
	@Override
	public Student authenticateUser(int sid, String pass) {
	
		return studentRepo.findBySidAndPassword(sid, pass)
				.orElseThrow(() -> new RuntimeException("User login failed : Invalid Credentials"));
	}
    @Override
     public  String getStudentClasses(int sid)
     {
    	return studentRepo.getClasses(sid);
     }
    @Override
	public String updatePassword(int id, String password) {
		Optional<Student> optional=studentRepo.findById(id); 
		if(optional.isPresent())
		{
				Student student=optional.get();
			student.setPassword(password);
			if(studentRepo.save(student) != null)
			return "successfully updated password!!!";
		}
		return null;
	}
}
