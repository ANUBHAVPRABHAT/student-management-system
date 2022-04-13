package com.app.pojos;

import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "exam")
@NoArgsConstructor
@Data
public class Exam{

	
    @Id
    @NotEmpty(message ="Class can't be blank")
	@Length(min = 1,max=15,message = "Invalid Class length!!!!")
	@Column(length = 15)
	private String examid;
    private int max_mark; 
	
	

	
}
