package com.icia.el.dto;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarPickDTO {

	//car_pick
	private int car_pick_num;
	private String c_num;
	private String id;
	//car
	private String c_name;
	private String c_scail;
	private Date c_year;
	private String c_mile;
	private String c_brand;
	private String c_grade;
	//salepost
	private String cp_price;
	private String cp_address;
	private Date cp_date;
	//carimg
	private String img_dir_1;
	
}
