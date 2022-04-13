package com.app.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.app.pojos.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{
    @Modifying
	@Query(value = "UPDATE Student Set status='inactive' WHERE sid = :id")
	int updateStatus(@Param("id") int sid);
	
	    
	List<Student> findAllByClasses(String Class);
//	@Query(value = "select * from Student", nativeQuery = true)
	@Query("select new com.app.pojos.Student(sid,classes,name) from Student s where s.status='active' ") 	
    List<Student> findAllBySID();
	@Query("select new com.app.pojos.Student(sid,classes,name) from Student s where s.status='inactive' ") 	
    List<Student> findInActiveBySID();
	
	@Query("select new com.app.pojos.Student(sid,classes,name,addmissiondate,father_name,gender,dob,emailid,mobile_no,address,pincode,status) from Student s where s.sid=?1 ") 	
    Optional<Student> findStudentBySID(int sid);
	
	@Query("select new com.app.pojos.Student(sid,classes,name) from Student s where s.sid=?1 ") 	
	Optional<Student> findStudentrBySID(int sid);
	
	Optional<Student>  findBySidAndPassword(int sid,String pwd);
	
	@Query("select s.classes from Student s where s.sid =?1")
	String getClasses(int sid);
	
	
	
	
}
