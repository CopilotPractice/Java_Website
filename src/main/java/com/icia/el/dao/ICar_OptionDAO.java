package com.icia.el.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.Car_OptionDTO;

@Mapper
public interface ICar_OptionDAO {

	public List<Car_OptionDTO> sunroofDAO(); //선루프
	public List<Car_OptionDTO> naviDAO(); //네비
	public List<Car_OptionDTO> handleDAO(); //핸들
	public List<Car_OptionDTO> hudDAO(); //hud
	public List<Car_OptionDTO> cameraDAO(); //후방카메라
	public List<Car_OptionDTO> ldwsDAO(); //ldws
	public List<Car_OptionDTO> ecmDAO(); //ecm
	public List<Car_OptionDTO> tpmsDAO(); //tpms
//	public List<Car_OptionDTO> optCheckListDAO(String a,String b,String c,String d,String e,String f,String g,String h); //체크
//	public List<Car_OptionDTO> CarListDAO();
	
}
