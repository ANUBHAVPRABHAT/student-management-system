package com.app.dao;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import com.app.dto.StudentAttandanceDto;
import com.app.pojos.Attandance;
import com.app.pojos.AttandanceBaseEntity;


public interface AttandanceRepository extends  JpaRepository<Attandance,AttandanceBaseEntity>{

	//Find all Student from specific class

		@Query("select a from Attandance a where a.sid=?1 and a.date between ?2 and ?3") 
		//@Query("select new com.app.dto.StudentAttandanceDto(a.aid,s.sid,s.name,s.classes,a.date,a.status,a.session) from Attandance a inner join Student s on a.sid=s.sid and a.sid=?1")
	    List<Attandance> findAllAttandanceById(int sid,LocalDate datefrom,LocalDate dateto);
		
		//@Query("select a from Attandance a where a.date=?1") 
		@Query("select new com.app.dto.StudentAttandanceDto(a.aid,s.sid,s.name,s.classes,a.date,a.status,a.session) from Attandance a inner join Student s on a.sid=s.sid and a.date=?1")
		List<StudentAttandanceDto> findAllAttandanceByDate(LocalDate  date);
        
		 @Modifying
		 @Query(value = "DELETE FROM Attandance a WHERE a.aid = :id")
		 int deleteByRid(@Param("id") int aid);
	
		   
		 @Procedure(value ="attandancereport")
		 List<Integer> findAttandanceCount(int sid);
		   
		 @Modifying
		 @Query(value = "DELETE FROM Attandance a WHERE a.sid = :id")
		  int deleteBySid(@Param("id") int sid);
}
