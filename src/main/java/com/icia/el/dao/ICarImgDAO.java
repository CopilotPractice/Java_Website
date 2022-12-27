package com.icia.el.dao;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ICarImgDAO {

	public String CarImgDAO(String c_num);
	
}
