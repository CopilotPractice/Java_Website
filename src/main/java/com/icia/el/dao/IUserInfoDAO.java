package com.icia.el.dao;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.UserInfoDTO;

@Mapper
public interface IUserInfoDAO {

	public UserInfoDTO loginCheck(String p_id);

	public int userInfoinsertDAO(String d_id, String d_pw, String d_name, String d_email, String d_phone,String address);

	public int idCheckDAO(String p_id);
	
	public int LvupdateDAO(String id); //Lv승급
	
	public int changePwDAO(String pw,String id);
	
	public int idAndEmailMatchingDAO(String id, String email);
	
	public int userInfoupdateDAO(String d_pw, String d_name, String d_email, String d_phone, String w_id);

	public int userPayDAO(String id, int totalpriceinsert,int point);
	
	public int userPointUp(String id, int point);
	
	public int restPointDAO(String id);
	
	public int AfterRestPointDAO(String minusPoint, String id);
	
	public int buyUsePointProductDAO(String id, String usingPoint);
	
}
