package com.app.contoller;
import java.time.LocalDate;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

import com.app.pojos.Attandance;
import com.app.service.IAttandanceServies;



	
	@CrossOrigin(origins = "http://localhost:3000")
	@RestController
	@RequestMapping("/api/attandance")
	public class AttandanceController {

		
		@Autowired
		private IAttandanceServies attandanceService;

		public AttandanceController() {
			System.out.println("in ctor of " + getClass());
		}

		
		@GetMapping("date/{date}")
		public ResponseEntity<?> getAllAttandanceDetails(@PathVariable  @DateTimeFormat(pattern = "yyyy-MM-dd")  LocalDate  date) {
			System.out.println("in get all attandance for date"+date);
			return new ResponseEntity<>(attandanceService.findAttandanceByDate(date), HttpStatus.OK);
		}
		@DeleteMapping("/{id}")
		public String deleteStudentDetails(@PathVariable int id) {
			System.out.println("in del attandance dtls " + id);
			return attandanceService.deleteAttandanceDetails(id);
		}
		
		@DeleteMapping("sid/{id}")
		public String deleteStudentDetailsid(@PathVariable int id) {
			System.out.println("in del attandance dtls for student id" + id);
			return attandanceService.deleteAttandanceDetail(id);
		}

		
		@PostMapping
		public Attandance addAttandanceDetails(@RequestBody @Valid   Attandance s)
		{

			System.out.println("in add attandance " + s);
			return attandanceService.addorUpdateAttandanceDetails(s);
		}
		@GetMapping("/{sid}/{startdate}/{enddate}")
		public ResponseEntity<?> getAttandanceDetails(@PathVariable int sid,@PathVariable  @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startdate,@PathVariable  @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate enddate) {
			System.out.println("in get ATTANDNANCE dtls " + sid+startdate+"to"+enddate);
		
				return new ResponseEntity<>(attandanceService.findAttandanceById(sid,startdate,enddate), HttpStatus.OK);
		

		}
		
		@GetMapping("count/{sid}")
		public ResponseEntity<?> getCount(@PathVariable int sid) {
			System.out.println("in get ATTANDNANCE P/A count " + sid);
		
				return new ResponseEntity<>(attandanceService.AttandanceCount(sid), HttpStatus.OK);
		

		}

     
		
		@PutMapping
		public Attandance updateAttandanceDetails(@RequestBody @Valid   Attandance s)
		{

			System.out.println("in update attandance " + s);
			return attandanceService.addorUpdateAttandanceDetails(s);
		}
		
		
		


	
}

