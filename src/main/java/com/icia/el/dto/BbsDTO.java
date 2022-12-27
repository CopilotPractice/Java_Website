package com.icia.el.dto;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BbsDTO {

	//게시글 작성 사용자 아이디 = userinfo id
	private String id;
	//게시글 제목
	private String bbs_title;
	//게시글 내용
	private String bbs_content;
	//게시글 번호
	private int bbs_num;
	//게시글 댓글갯수
	private int bbs_numofcomment;
	//게시글 조회수
	private int bbs_count;
	//게시글 날짜
	private Date bbs_writedate;
	//게시글 좋아요ㅎ
	private int bbs_like;
	
	private String name;
}
