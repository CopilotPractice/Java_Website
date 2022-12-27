package com.icia.el.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfoDTO {
	
		//사용자 아이디
		private String id;
		//사용자 비밀번호
		private String pw;
		//사용자 총 구매 가격           		//수정
		private int totalprice;            //수정
		//사용자 이용 등급           		//수정
		private String user_grade;            //수정		
		//사용자 이름
		private String name;
		//사용자 이메일
		private String email;
		//사용자 폰번호
		private String phone;
		//머니 포인트
		private int point;
		
		private int lv;
}
