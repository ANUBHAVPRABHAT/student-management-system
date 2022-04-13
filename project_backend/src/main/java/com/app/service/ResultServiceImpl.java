package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.app.dao.ResultRepository;
import com.app.dto.StudentResultDto;
import com.app.pojos.Result;

@Service
@Transactional
public class ResultServiceImpl implements IResultService {
	
	@Autowired
	private ResultRepository resultRepo;

	@Override
	public List<Result> getAllResult() {
		
		return resultRepo.findAll();
	}

	@Override
	public Result addOrUpdateResultDetails(Result result) {
		
		return resultRepo.save(result);
		
	}

	@Override
	public String deleteResultDetails(int rid) {
	
		resultRepo.deleteByRid(rid);
		return "Result Details with ID " + rid + " deleted successfuly... ";
	}
	
	
	@Override
	public String deleteResultDetail(int sid) {
	
		resultRepo.deleteBySid(sid);
		return "Result Details with ID " + sid + " deleted successfuly... ";
	}

	@Override
	public List<Result> findResultById(int sid) {
		
		return resultRepo.findAllResultById(sid);
	
	}
	
	@Override
	public Result findResultByRid(int sid) {
		
		return resultRepo.findAllResultByRid(sid);
	
	}

    @Override
	public List<Result>findResultBySessionId(int sid,String session)
	{
		return resultRepo.findAllResultByIdSession(sid,session);	
	}
	
    @Override
      public List<StudentResultDto>resultbySId(int sid)
      {
    	return resultRepo.findAllResultBySID(sid);
      }
    
    @Override
    public String session(int sid)
    {
    return resultRepo.session(sid);	
    }
}
