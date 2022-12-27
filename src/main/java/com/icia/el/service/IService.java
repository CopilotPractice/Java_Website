package com.icia.el.service;

public interface IService {

	public int login(String id, String pw);

	public int idCheck(String id);

	public int idAndEmailMatching(String id, String email);

	public int userInfoinsert(String p_id, String p_pw, String p_name, String p_email, String p_phone, String address);

	public int userInfoUpdate(String p_pw, String p_name, String p_email, String p_phone, String p_id);

	public int userbuyProduct(String id, int totalprice, int point);
	
	public int Lvupdate(String id);
	
	public int buyUsePointProduct(String usingPoint,String id);
	
	public int restPoint(String id);
	
	public int afterRestPoint(String minusPoint,String id);
	
}
