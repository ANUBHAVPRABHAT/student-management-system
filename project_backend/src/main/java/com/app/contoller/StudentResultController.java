package com.app.contoller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.pojos.Result;
import com.app.service.IResultService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/result")
public class StudentResultController {


	@Autowired
	private IResultService resultService;

	public StudentResultController() {
		System.out.println("in ctor of " + getClass());
	}

	@GetMapping
	public ResponseEntity<?> getAllResultDetails() {
		System.out.println("in get all student");
		return new ResponseEntity<>(resultService.getAllResult(), HttpStatus.OK);
	}



	@PostMapping
	public Result addStudentDetails(@RequestBody @Valid   Result result) // de-serial (un marshalling) + apply validation rules
	{

		System.out.println("in add student result " + result);
		return resultService.addOrUpdateResultDetails(result);
	}

	
	@PutMapping
	public Result updateResultDetails(@RequestBody @Valid   Result result) 
	{
		
		System.out.println("in update result " +result);
		return resultService.addOrUpdateResultDetails(result);
	}

	@DeleteMapping("/{rid}")
	public String deleteResultDetails(@PathVariable int rid) {
		System.out.println("in del result dtls " + rid);
		return resultService.deleteResultDetails(rid);
	}
	@DeleteMapping("sid/{sid}")
	public String deleteResultDetail(@PathVariable int sid) {
		System.out.println("in del result dtls for student id " + sid);
		return resultService.deleteResultDetail(sid);
	}
	@GetMapping("/{stuId}")
	public ResponseEntity<?> getResultDetails(@PathVariable int stuId) {
		System.out.println("in get result dtls for student id " + stuId);
	
			return new ResponseEntity<>(resultService.findResultById(stuId), HttpStatus.OK);

	}
	@GetMapping("/id/{stuId}")
	public ResponseEntity<?> getResultDetailsRid(@PathVariable int stuId) {
		System.out.println("in get result dtls for session max for student id " + stuId);
	return new ResponseEntity<>(resultService.findResultByRid(stuId), HttpStatus.OK);
}
	@GetMapping("/exam/{stuId}")
	public ResponseEntity<?> getResultRid(@PathVariable int stuId) {
		System.out.println("in get result+exam  dtls student id " + stuId);
	return new ResponseEntity<>(resultService.resultbySId(stuId), HttpStatus.OK);
}
	
	
	@GetMapping("/{stuId}/{session}")
	public ResponseEntity<?> getResultDetail(@PathVariable int stuId,@PathVariable String session) {
		System.out.println("in get result+exam dtls for student in session " + stuId+" "+session);
	return new ResponseEntity<>(resultService.resultbySId(stuId), HttpStatus.OK);


	}
	@GetMapping("/session/{sid}")
	public ResponseEntity<?> getSession(@PathVariable int sid) {
		System.out.println("in get result session max for student id " + sid);
	return new ResponseEntity<>(resultService.session(sid), HttpStatus.OK);


	}
}
