package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class AttandanceBaseEntity implements Serializable {

	
	private int sid;
	private LocalDate date;
	
}
