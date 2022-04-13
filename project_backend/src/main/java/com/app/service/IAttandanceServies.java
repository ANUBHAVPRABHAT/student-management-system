package com.app.service;

import java.time.LocalDate;
import java.util.List;
import com.app.dto.StudentAttandanceDto;
import com.app.pojos.Attandance;

public interface IAttandanceServies {

	List<Attandance> getAllAttandance();
	Attandance addorUpdateAttandanceDetails( Attandance attandance);
	String deleteAttandanceDetails(int rid);
	String deleteAttandanceDetail(int sid);
	List<Attandance> findAttandanceById(int stuid,LocalDate datefrom,LocalDate dateto);
	List<StudentAttandanceDto> findAttandanceByDate(LocalDate date);
	List<Integer>AttandanceCount(int sid);
}
