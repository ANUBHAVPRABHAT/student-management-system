package com.app.pojos;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "result")
@NoArgsConstructor
@AllArgsConstructor
@Data
@IdClass(ResultBaseEntity.class)

public class Result  {
	@Min(value = 1, message="salary < min salary")
	@Column(unique=true)
	private Integer rid;
	@Id
	private Integer sid;
    @NotEmpty(message ="Class can't be blank")
	@Length(min = 1,max=5,message = "Invalid Class length!!!!")
	@Column(length = 5)
	private String classes;
	@Id
	@NotEmpty(message ="Class can't be blank")
	@Length(min = 1,max=15,message = "Invalid Class length!!!!")
	@Column(length = 15)
	private String examid;
	@Id
	@NotEmpty(message ="Class can't be blank")
	@Length(min = 1,max=15,message = "Invalid Class length!!!!")
	@Column(length = 15)
	private String subject;
	private Integer marks;
	@Id
	@NotEmpty(message ="Class can't be blank")
	@Length(min = 1,max=10,message = "Invalid Class length!!!!")
	@Column(length = 10)
    private String	session;
	private String	status;
	//@ManyToOne(cascade=CascadeType.ALL)
	//@JoinColumn(name="student_sid")
	//private Student student;
	
}
