package com.icia.el.dto;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDTO {
	private int rv_num;
	private String id;
	private int rv_like;
	private String rv_content;
	private Date rv_date;
	private int p_num;
}