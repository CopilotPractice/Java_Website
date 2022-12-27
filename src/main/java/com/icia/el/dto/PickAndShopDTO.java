package com.icia.el.dto;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PickAndShopDTO {
	
	private String id;
	
	private int p_num;
	//상품번호
	private String p_name;
	//상품이름
	private int p_price;
	//상품가격
	private int p_stock;
	//상품재고
	private String p_content;
	//상품 정보
	private Date p_date;
	//상품 등록일
	private String p_category;
	//카테고리 = 1.새차 2.익스 3.전자 4.타이어
	private String img_dir;
	//이미지 디렉토리
}
