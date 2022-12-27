package com.icia.el.dto;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Bbs_CommentDTO {

	private int cm_num;
	private int bbs_num;
	private String id;
	private String cm_content;
	private int cm_like;
	private Date cm_date;
	private String rcm_name;
	private int rcm_num;
	
	private String name;
}
