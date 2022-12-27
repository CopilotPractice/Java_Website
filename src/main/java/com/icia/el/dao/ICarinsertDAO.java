package com.icia.el.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ICarinsertDAO {

	public int CarinsertDAO(Map<String,String> map); //car
	public int CarOptioninsertDAO(Map<String,Object> map); //car_option
	public int CarSPinsertDAO(Map<String,String> map); //car_sale_post
	public int lastcpnumDAO();
	public int CarImginsertDAO(String num,String img1,String img2,String img3,String img4,String img5,String img6);
}
