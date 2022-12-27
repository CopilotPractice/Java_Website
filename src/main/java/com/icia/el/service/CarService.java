package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.icia.el.dao.ICarDAO;
import com.icia.el.dto.CarDTO;
import com.icia.el.dto.CarImgDTO;
import com.icia.el.dto.CarSearchDTO;
import com.icia.el.dto.CardealerDTO;

@Service
public class CarService implements ICarService {

	@Autowired
	ICarDAO dao;

	//차종 기준
	
	@Override
	public Page<CarDTO> CarList(int pageNo) {
		PageHelper.startPage(pageNo,8);
		return dao.CarListDAO(pageNo);
	}
	
	public List<CarDTO> CarList(){
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.CarListDAO();
		return dto;
	}

	@Override
	public List<CarDTO> TinyCarList() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.TinyCarListDAO();
		return dto;
	}

	@Override
	public List<CarDTO> SmallCarList() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.SmallCarListDAO();
		return dto;
	}

	@Override
	public List<CarDTO> semimidsizeCarList() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.semimidsizeCarListDAO();
		return dto;
	}

	@Override
	public List<CarDTO> midsizeCarList() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.midsizeCarListDAO();
		return dto;
	}

	@Override
	public List<CarDTO> bigCarList() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.bigCarListDAO();
		return dto;
	}

	@Override
	public List<CarDTO> sportsCarList() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.sportsCarListDAO();
		return dto;
	}

	@Override
	public List<CarDTO> CarCheckList(String a, String b, String c, String d, String e, String f) {
		return dao.CarCheckListDAO(a, b, c, d, e, f);
	}

	//차종End ------------------------------------------------------------------------------
	
	//연식 기준
	
	@Override
	public List<CarDTO> CarfromDayList(String date) {
		return dao.CarfromDayListDAO(date);
	}

	@Override
	public List<CarDTO> CartoDayList(String date) {
		return dao.CartoDayListDAO(date);
	}

	@Override
	public List<CarDTO> CarallDayList(String dateA, String dateB) {
		return dao.CarallDayListDAO(dateA, dateB);
	}

	//연식End -----------------------------------------------------------------------------------
	
	//주행거리 기준
	
	@Override
	public List<CarDTO> MiletwetyThUnder() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.MiletwetyThUnderDAO();
		return dto;
	}

	@Override
	public List<CarDTO> MilefortyThUnder() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.MilefortyThUnderDAO();
		return dto;
	}

	@Override
	public List<CarDTO> MilesixtyThUnder() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.MilesixtyThUnderDAO();
		return dto;
	}

	@Override
	public List<CarDTO> MileeightyThUnder() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.MileeightyThUnderDAO();
		return dto;
	}

	@Override
	public List<CarDTO> MileoneHunThUnder() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.MileoneHunThUnderDAO();
		return dto;
	}

	@Override
	public List<CarDTO> MileoneHunThUp() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.MileoneHunThUpDAO();
		return dto;
	}

	@Override
	public List<CarDTO> MileCarList(int a,int b,int c,int d,int e, int f, int g, int h, int i, int j) {
		return dao.MileCarListDAO(a, b, c, d, e, f, g, h, i, j);
	}

	//주행거리End -------------------------------------------------------------------------------
	
	//가격
	
	@Override
	public List<CarDTO> Pricetenmil() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.PricetenmilDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Pricetwentymil() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.PricetwentymilDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Pricethirtymil() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.PricethirtymilDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Pricefortymil() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.PricefortymilDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Pricefiftymil() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.PricefiftymilDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Pricefiftymilup() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.PricefiftymilupDAO();
		return dto;
	}

	@Override
	public List<CarDTO> PriceCarList(int a,int b,int c,int d,int e, int f, int g, int h, int i, int j) {
		return dao.PriceCarListDAO(a, b, c, d, e, f, g, h, i, j);
	}
	
	//가격End -------------------------------------------------------------------------
	
	//지역

	@Override
	public List<CarDTO> Gyeonggi() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.GyeonggiDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Seoul() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.SeoulDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Busan() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.BusanDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Incheon() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.IncheonDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Daegu() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.DaeguDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Daejeon() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.DaejeonDAO();
		return dto;
	}

	@Override
	public List<CarDTO> Gwangju() {
		List<CarDTO> dto = new ArrayList<CarDTO>();
		dto = dao.GwangjuDAO();
		return dto;
	}

	@Override
	public List<CarDTO> AddressCarList(String a, String b, String c, String d, String e, String f, String g) {
		return dao.AddressCarListDAO(a, b, c, d, e, f, g);
	}
	
	//지역End -------------------------------------------------------------
	//옵션
	
	@Override
	public List<CarDTO> optCheckList(String a, String b, String c, String d, String e, String f, String g, String h) {
		return dao.optCheckListDAO(a, b, c, d, e, f, g, h);
	}
	
	//브랜드

	@Override
	public List<CarDTO> carBrandList(String a) {
		return dao.carBrandListDAO(a);
	}

	//모델
	
	@Override
	public List<CarDTO> carModelList(String a) {
		return dao.carModelListDAO(a);
	}

	@Override
	public CardealerDTO CardealerListDAO(String num) {
		return dao.CardealerListDAO(num);
	}

	@Override
	public CarImgDTO CarImg(String id) {
		CarImgDTO dto = new CarImgDTO();
		dto = dao.CarImgDAO(id);
		return dto;
	}
	
	@Override
	public Page<CarDTO> carBrandList(String a, int pageNo) {
		PageHelper.startPage(pageNo,8);
		return dao.carBrandListDAO(a,pageNo);
	}

	@Override
	public List<CarSearchDTO> CarSearchDAO(String x) {
		return dao.CarSearchDAO(x);
	}

	@Override
	public int cardeleteDAO(String num) {
		return dao.cardeleteDAO(num);
	}


	
	
	
}
