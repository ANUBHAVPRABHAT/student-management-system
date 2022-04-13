package com.app.pojos;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public class AdminBaseEntity {
	@Id
	private String username;

}
