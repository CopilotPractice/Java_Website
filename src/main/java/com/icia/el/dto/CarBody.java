package com.icia.el.dto;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class CarBody {

	private List<CarDTO> scail;
	
	private List<CarDTO> year;
	
	private List<CarDTO> mile;
	
	private List<CarDTO> price;
	
	private List<CarDTO> address;
	
	private List<CarDTO> option;
	
}
