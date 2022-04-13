package com.app.pojos;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.EqualsAndHashCode;



@NoArgsConstructor
@AllArgsConstructor
@Data

public class ResultBaseEntity  implements Serializable{
	private Integer sid;
	private String examid;
	private String subject;
    private String	session;
}
