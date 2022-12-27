package com.icia.el.service;

import java.util.List;
import java.util.Map;

import com.icia.el.dto.Car_reservationDTO;

public interface ICar_reservationService {
	public int reservationInsert(Map<String, String> map);
	public int approveupDAO(String num,String date);

	public List<Car_reservationDTO> buycompleteDAO(String id);
	
	public List<Car_reservationDTO> ReserList(String id,String checkSerssion);
	
	public List<Car_reservationDTO> userReserIng(String id);
	
	public List<Car_reservationDTO> userReserFinish(String id);
	
	public List<Car_reservationDTO> drReser (String dr_id);
	
	public int delReser(String c_num);
	
	public int drConfirmReser(String c_num);
}
