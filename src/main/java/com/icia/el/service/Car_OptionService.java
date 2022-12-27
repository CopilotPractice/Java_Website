package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.ICar_OptionDAO;
import com.icia.el.dto.Car_OptionDTO;

@Service
public class Car_OptionService implements ICar_OptionService{

	@Autowired
	ICar_OptionDAO dao;

	@Override
	public List<Car_OptionDTO> sunroof() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.sunroofDAO();
		return dto;
	}

	@Override
	public List<Car_OptionDTO> navi() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.naviDAO();
		return dto;
	}

	@Override
	public List<Car_OptionDTO> handle() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.handleDAO();
		return dto;
	}

	@Override
	public List<Car_OptionDTO> hud() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.hudDAO();
		return dto;
	}

	@Override
	public List<Car_OptionDTO> camera() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.cameraDAO();
		return dto;
	}

	@Override
	public List<Car_OptionDTO> ldws() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.ldwsDAO();
		return dto;
	}

	@Override
	public List<Car_OptionDTO> ecm() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.ecmDAO();
		return dto;
	}

	@Override
	public List<Car_OptionDTO> tpms() {
		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
		dto = dao.tpmsDAO();
		return dto;
	}

//	@Override
//	public List<Car_OptionDTO> optCheckList(String a,String b,String c,String d,String e,String f,String g,String h) {
//		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
//		dto = dao.optCheckListDAO(a, b, c, d, e, f, g, h);
//		return dto;
//	}
//
//	@Override
//	public List<Car_OptionDTO> CarList() {
//		List<Car_OptionDTO> dto = new ArrayList<Car_OptionDTO>();
//		dto = dao.CarListDAO();
//		return dto;
//	}
	
}
