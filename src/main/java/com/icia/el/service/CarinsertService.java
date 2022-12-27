package com.icia.el.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.ICarinsertDAO;

@Service
public class CarinsertService implements ICarinsertService{

	@Autowired
	ICarinsertDAO dao;
	
	@Override
	public int Carinsert(Map<String, String> map) {
		return dao.CarinsertDAO(map);
	}

	@Override
	public int CarOptioninsert(Map<String, Object> map) {
		return dao.CarOptioninsertDAO(map);
	}

	@Override
	public int CarSPinsert(Map<String, String> map) {
		return dao.CarSPinsertDAO(map);
	}

	@Override
	public int lastcpnum() {
		return dao.lastcpnumDAO();
	}

	@Override
	public int CarImginsertDAO(String num, String img1, String img2, String img3, String img4, String img5,
			String img6) {
		return dao.CarImginsertDAO(num, img1, img2, img3, img4, img5, img6);
	}

}
