package com.icia.el.service;

import java.util.List;

import com.icia.el.dto.CarPickDTO;

public interface ICarPickService {

	public List<CarPickDTO> CarPickList(String id);
	public int CarPickInsert(String p_num,String id);
	public int CarPickDelete(String p_num,String id);
	public int CarPickCheck(String id, String p_num);
}
