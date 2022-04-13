package com.app.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import com.app.dto.StudentResultDto;
import com.app.pojos.Result;
import com.app.pojos.ResultBaseEntity;



public interface ResultRepository extends JpaRepository<Result,ResultBaseEntity>{
	
	//Find all Student from specific class
    @Modifying
    @Query(value = "DELETE FROM Result r WHERE r.rid = :id")
    int deleteByRid(@Param("id") int rid);
    
    
    @Modifying
    @Query(value = "DELETE FROM Result r WHERE r.sid = :id")
    int deleteBySid(@Param("id") int sid);
	
	
	//@Query("select new com.app.pojos.Result(rid,sid,classes,examid,subject,marks,session,status) from Result r where r.sid=?1") 
  //@Query(value="select * from Result r where r.sid=?1",nativeQuery = true)
	 @Procedure(value ="resultbyid")
     List<Result> findAllResultById(int sid);
	
	@Query("select r from Result r where r.rid=?1") 
   Result findAllResultByRid(int rid);
	
     @Query("select r from Result r where r.sid=?1 and r.session=?2") 
	List<Result> findAllResultByIdSession(int sid,String Session);
     
    @Query("select new com.app.dto.StudentResultDto(a.rid,a.sid,e.examid,a.classes,a.subject,a.marks,e.max_mark,a.status,a.session) from Result a inner join Exam e on a.examid=e.examid and a.sid=?1 and a.session=(select max(r.session) from Result r where r.sid=?1) order by a.examid desc" )
  // @Procedure(value="examresult")
     List<StudentResultDto> findAllResultBySID(int sid);
    
    @Query("select max(r.session) from Result r where r.sid=?1")
    String session(int sid);
}
