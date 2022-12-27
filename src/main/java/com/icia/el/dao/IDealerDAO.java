package com.icia.el.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.DealerDTO;

@Mapper
public interface IDealerDAO {

	public DealerDTO drLoginCheck(String dr_id);
	
	public DealerDTO dridCheck(String id);
	
	public int dealerinsertDAO(String dr_id,String dr_pw,String dr_name,String dr_phone,String dr_email,String dr_c_name,String dr_c_address,String dr_c_phone);
	
	public int dridCheckDAO(String dr_id);
	
	public int dealerupdateDAO(String d_pw, String d_name, String d_email, String d_phone, String w_id, String drname, String drphone);
	
	public int sellingupDAO(String id); //판매중카운트 +
	public int sellingdownDAO(String id); //판매중카운트 -
	public int soldDAO(String id); //판매완료 카운트 +
	public List<DealerDTO> drsellingcarDAO(String id);
	
	public String drComCheckDAO(String dr_id);
}
