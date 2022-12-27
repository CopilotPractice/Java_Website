package com.icia.el.service;

import java.util.Map;

public interface ICarinsertService {

	public int Carinsert(Map<String,String> map); //car
	public int CarOptioninsert(Map<String,Object> map); //car_option
	public int CarSPinsert(Map<String,String> map); //car_sale_post
	public int lastcpnum();
	public int CarImginsertDAO(String num,String img1,String img2,String img3,String img4,String img5,String img6);
}
