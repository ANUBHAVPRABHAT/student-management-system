package com.app.service;
import java.time.LocalDate;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dao.AttandanceRepository;
import com.app.dto.StudentAttandanceDto;
import com.app.pojos.Attandance;


@Service
@Transactional
public class AttandanceServiesImpl implements IAttandanceServies{

	@Autowired
	private AttandanceRepository attandanceRepo;

	@Override
	public List<Attandance> getAllAttandance() {
	
		return attandanceRepo.findAll();
	}

	@Override
	public Attandance addorUpdateAttandanceDetails(Attandance attandance) {
		
		return attandanceRepo.saveAndFlush(attandance);
	}

	@Override
	public List<Attandance> findAttandanceById(int sid,LocalDate datefrom,LocalDate dateto) {
	
		return attandanceRepo.findAllAttandanceById(sid,datefrom,dateto);
	
	}
	@Override
	public List<StudentAttandanceDto> findAttandanceByDate(LocalDate date) {
	
		return attandanceRepo.findAllAttandanceByDate(date);
	
	}
	@Override
	public String deleteAttandanceDetails(int rid) {
		
		attandanceRepo.deleteByRid(rid);
		return "Attandance Details with ID " + rid + " deleted successfuly... ";
	}
	@Override
	public List<Integer>AttandanceCount(int sid){
		return attandanceRepo.findAttandanceCount(sid);
	}
	@Override
	public String deleteAttandanceDetail(int sid) {
		
		attandanceRepo.deleteBySid(sid);
		return "Result Details with ID " + sid + " deleted successfuly... ";
	}
}
