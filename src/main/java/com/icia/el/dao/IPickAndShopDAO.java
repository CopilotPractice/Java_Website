package com.icia.el.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.PickAndShopDTO;

@Mapper
public interface IPickAndShopDAO {
	
	public List<PickAndShopDTO> pickListDAO(String id);
	
	public int pickInsertDAO(String p_num,String id);
	
	public int pickDeleteDAO(String p_num,String id);
	
	public int pickCheckDAO(String id, String p_num);
	
}
