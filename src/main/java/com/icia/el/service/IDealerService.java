package com.icia.el.service;

import java.util.List;

import com.icia.el.dto.DealerDTO;

public interface IDealerService {

	public int drLogin(String dr_id, String dr_pw);
	
	public int dridCheck(String dr_id);

	public int dealerinsert(String dr_id,String dr_pw,String dr_name,String dr_phone,String dr_email,String dr_c_name,String dr_c_address,String dr_c_phone);
	
	public int dealerupdate(String d_pw, String d_name, String d_email, String d_phone, String drname, String drphone, String w_id);

	public int sellingupDAO(String id); //판매중카운트 +
	public int sellingdownDAO(String id); //판매중카운트 -
	public int soldDAO(String id); //판매완료 카운트 +
	public List<DealerDTO> drsellingcarDAO(String id);
	
}
