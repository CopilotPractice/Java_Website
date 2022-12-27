package com.icia.el.dto;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Car_Sale_PostDTO {

	//차량 등록될때 차량에 등록되는 사이트번호
	private int cp_num;
	//딜러의 고유번호
	private String dr_id;
	//차 번호
	private String c_num;
	//차 등록할때 내용
	private String cp_content;
	//차가 등록된 날짜
	private Date cp_date;
	//차 가격
	private int cp_price;
	//차 거래 주소
	private String cp_address;
	//몰라
	private int cp_is_sold;
	//아직 몰라
	private int cp_interest;
}
