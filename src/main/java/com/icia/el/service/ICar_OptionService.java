package com.icia.el.service;

import java.util.List;

import com.icia.el.dto.Car_OptionDTO;

public interface ICar_OptionService {

	public List<Car_OptionDTO> sunroof(); //선루프
	public List<Car_OptionDTO> navi(); //네비
	public List<Car_OptionDTO> handle(); //핸들
	public List<Car_OptionDTO> hud(); //hud
	public List<Car_OptionDTO> camera(); //후방카메라
	public List<Car_OptionDTO> ldws(); //ldws
	public List<Car_OptionDTO> ecm(); //ecm
	public List<Car_OptionDTO> tpms(); //tpms
//	public List<Car_OptionDTO> optCheckList(String a,String b,String c,String d,String e,String f,String g,String h); //체크
//	public List<Car_OptionDTO> CarList();
}
