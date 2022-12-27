package com.icia.el.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.ICarPickDAO;
import com.icia.el.dto.CarPickDTO;

@Service
public class CarPickService implements ICarPickService{
	
	@Autowired
	ICarPickDAO dao;

	@Override
	public List<CarPickDTO> CarPickList(String id) {
		List<CarPickDTO> dto = dao.CarPickListDAO(id);
		return dto;
	}

	@Override
	public int CarPickInsert(String p_num, String id) {
		return dao.CarPickInsertDAO(p_num, id);
	}

	@Override
	public int CarPickDelete(String p_num, String id) {
		return dao.CarPickDeleteDAO(p_num, id);
	}

	@Override
	public int CarPickCheck(String id, String p_num) {
		return dao.CarPickCheckDAO(id, p_num);
	}

}
