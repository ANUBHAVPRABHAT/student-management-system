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
import com.app.pojos.Student;
import com.app.service.IStudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/student")
public class StudentController {

	
	@Autowired
	private IStudentService studentService;

	public StudentController() {
		System.out.println("in ctor of " + getClass());
	}

	
	@GetMapping
	public ResponseEntity<?> getAllStudentDetails() {
	System.out.println("in get all student");
	return new ResponseEntity<>(studentService.fetchAllStudentDetail(), HttpStatus.OK);
	}
	
	
	@GetMapping("/fetch")
	public ResponseEntity<?> fetchAllStudentDetails() {
		System.out.println("in fetch all inactive student");
		return new ResponseEntity<>(studentService.fetchInactiveStudentDetail(), HttpStatus.OK);
	}
	
	
	@GetMapping("/getclass/{sid}")
	public ResponseEntity<?> fetchClassesDetails(@PathVariable int sid) {
		System.out.println("in fetch student current classes");
		return new ResponseEntity<>(studentService.getStudentClasses(sid), HttpStatus.OK);
	}
	

	@PostMapping
	public Student addStudentDetails(@RequestBody @Valid   Student s) 
	{

		System.out.println("in add student detail " + s);
		return studentService.addOrUpdateStudentDetails(s);
	}

	
	@DeleteMapping("/{id}")
	public String deleteStudentDetails(@PathVariable int id) {
		System.out.println("in del student dtls for student id " + id);
		return studentService.deleteStudentDetails(id);
	}


	@GetMapping("/{stuId}")
	public ResponseEntity<?> getStudentDetails(@PathVariable int stuId) {
		System.out.println("in get student dtls for student id " + stuId);
	    return new ResponseEntity<>(studentService.fetchStudentDetails(stuId), HttpStatus.OK);
    }
	
	@GetMapping("sid/{stuId}")
	public ResponseEntity<?> getStudentRDetails(@PathVariable int stuId) {
		System.out.println("in get emp dtls " + stuId);
	
			return new ResponseEntity<>(studentService.fetchStudentRDetails(stuId), HttpStatus.OK);


	}
	
	@GetMapping("view/{stuId}")
	public ResponseEntity<?> viewStudentDetails(@PathVariable int stuId) {
		System.out.println("view student detai for student id " + stuId);
	
			return new ResponseEntity<>(studentService.viewStudentDetails(stuId), HttpStatus.OK);
//	
	}
	
	
	@PutMapping
	public Student updateStudentDetails(@RequestBody @Valid  Student s) 
	{
	
		System.out.println("update student detail  " + s);
		return studentService.addOrUpdateStudentDetails(s);
	}
	@PutMapping("/status/{sid}")
	public String updateStatusDetails(@PathVariable  int sid)
	{
		System.out.println("change student status inactive for student id " +sid);
		return studentService.updateStudentStatus(sid) ;
	}
	
	@GetMapping("/classes/{classes}")
	public ResponseEntity<?> getAllEmpsBySalary(@PathVariable String classes)
	{
		System.out.println("in get all student by classes");

		return ResponseEntity.ok(studentService.findStudentByClass(classes));
	}

}
