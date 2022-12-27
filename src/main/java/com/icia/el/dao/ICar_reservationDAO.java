package com.icia.el.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.Car_reservationDTO;

@Mapper
public interface ICar_reservationDAO {
	
	public int reservationInsertDAO(Map<String, String> map);
	public int approveupDAO(String num,String date);
	public List<Car_reservationDTO> reserListDAO(String name);
	public List<Car_reservationDTO> buycompleteDAO(String id);
	public int dealcompleteDAO(String id);

	public List<Car_reservationDTO> userReserListDAO(String id);
	
	public List<Car_reservationDTO> drReserListDAO(String id);
	
	public List<Car_reservationDTO> userReserIngDAO(String id);
	
	public List<Car_reservationDTO> userReserFinishDAO(String id);
	
	public List<Car_reservationDTO> drReserDAO(String dr_id);
	
	public int delReserDAO(String c_num);
	
	public int drConfirmReserDAO(String c_num);

}
