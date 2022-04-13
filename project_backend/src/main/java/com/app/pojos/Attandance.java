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
@Table(name = "attandance")
@NoArgsConstructor
@Data
@IdClass(AttandanceBaseEntity.class)
public class Attandance{

	@Min(value = 0, message="min value should be 1")
    @Column(unique=true)
	private int aid;
	
    @Id
	private int sid;
	@Id
	private LocalDate date;
	
	@Length(min = 1,max=1,message = "Invalid  Status length!!!!")
	@Column(length=1)
	private String status;
	
	@Length(min = 1,max=15,message = "Invalid  session length!!!!")
	@Column(length=15)
	private String session;

	
}
