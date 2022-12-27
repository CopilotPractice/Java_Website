package com.icia.el.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.CarPickDTO;

@Mapper
public interface ICarPickDAO {

	public List<CarPickDTO> CarPickListDAO(String id);
	public int CarPickInsertDAO(String p_num,String id);
	public int CarPickDeleteDAO(String p_num,String id);
	public int CarPickCheckDAO(String id, String p_num);
}
