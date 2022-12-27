package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.ICar_reservationDAO;
import com.icia.el.dao.IDealerDAO;
import com.icia.el.dto.Car_reservationDTO;

@Service
public class Car_reservationService implements ICar_reservationService{

	@Autowired
	ICar_reservationDAO dao;
	
	@Autowired
	IDealerDAO drdao;
	
	@Override
	public int reservationInsert(Map<String, String> map) {
		int n = dao.reservationInsertDAO(map);
		return n;
	}
	
	@Override
	public int approveupDAO(String num,String date) {
		return dao.approveupDAO(num,date);
	}


	@Override
	public List<Car_reservationDTO> buycompleteDAO(String id) {
		List<Car_reservationDTO> dto = dao.buycompleteDAO(id);
		return dto;
	}

	
	
	
	@Override
	public List<Car_reservationDTO> ReserList(String id,String checkSession) {
		List<Car_reservationDTO> dto = new ArrayList<>();
		if(checkSession.equals("딜러")) {
			dto = dao.drReserListDAO(id);			
		}else if(checkSession.equals("일반")) {
			dto = dao.userReserListDAO(id);
		}
		return dto;
	}

	@Override
	public List<Car_reservationDTO> userReserIng(String id) {
		List<Car_reservationDTO> dto = new ArrayList<>();
		dto = dao.userReserIngDAO(id);
		return dto;
	}

	@Override
	public List<Car_reservationDTO> userReserFinish(String id) {
		List<Car_reservationDTO> dto = new ArrayList<>();
		dto = dao.userReserFinishDAO(id);
		return dto;
	}

	@Override
	public List<Car_reservationDTO> drReser(String dr_id) {
		List<Car_reservationDTO> dto = new ArrayList<>();
		
		dto = dao.drReserDAO(drdao.drComCheckDAO(dr_id));
		return dto;
	}

	@Override
	public int delReser(String c_num) {
		int n = dao.delReserDAO(c_num);
		return n;
	}

	@Override
	public int drConfirmReser(String c_num) {
		int n = dao.drConfirmReserDAO(c_num);
		return n;
	}
	
}
