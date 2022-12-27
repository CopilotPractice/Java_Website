package com.icia.el.service;

import java.util.List;

import com.github.pagehelper.Page;
import com.icia.el.dto.CarDTO;
import com.icia.el.dto.CarImgDTO;
import com.icia.el.dto.CarSearchDTO;
import com.icia.el.dto.CardealerDTO;

public interface ICarService {

	//차종 기준
	public Page<CarDTO> CarList(int pageNo); //모든 차 출력
	public List<CarDTO> CarList();
	public List<CarDTO> TinyCarList(); //크기가 경차
	public List<CarDTO> SmallCarList(); //크기가 소형
	public List<CarDTO> semimidsizeCarList(); //크기가 준중형
	public List<CarDTO> midsizeCarList(); //크기가 중형
	public List<CarDTO> bigCarList(); //크기가 대형
	public List<CarDTO> sportsCarList(); //스포츠카
	public List<CarDTO> CarCheckList(String a,String b,String c,String d,String e,String f); //체크한 차종류 리스트
	
	//연식 기준
	public List<CarDTO> CarfromDayList(String string); //연식 YYMMDD부터
	public List<CarDTO> CartoDayList(String string); //연식 YYMMDD까지
	public List<CarDTO> CarallDayList(String dateA,String dateB); //연식 from~to
	
	//주행거리
	public List<CarDTO> MiletwetyThUnder(); //주행거리가 2만키로이하
	public List<CarDTO> MilefortyThUnder(); //주행거리가 2만~4만
	public List<CarDTO> MilesixtyThUnder(); //주행거리가 4만~6만
	public List<CarDTO> MileeightyThUnder(); //주행거리가 6만~8만
	public List<CarDTO> MileoneHunThUnder(); //주행거리가 8만~10만
	public List<CarDTO> MileoneHunThUp(); //주행거리가 10만이상
	public List<CarDTO> MileCarList(int a,int b,int c,int d,int e, int f, int g, int h, int i, int j); //체크한 주행거리 리스트
	
	//가격 기준
	public List<CarDTO> Pricetenmil(); //가격이 천만미만
	public List<CarDTO> Pricetwentymil(); //가격이 천만~2천만미만
	public List<CarDTO> Pricethirtymil(); //가격이 2천만~3천만미만
	public List<CarDTO> Pricefortymil(); //가격이 3천만~4천만미만
	public List<CarDTO> Pricefiftymil(); //가격이 4천만~5천만미만
	public List<CarDTO> Pricefiftymilup(); //가격이 5천만 이상
	public List<CarDTO> PriceCarList(int a,int b,int c,int d,int e, int f, int g, int h, int i, int j); //체크한 가격 리스트
	
	//지역 기준
	public List<CarDTO> Gyeonggi(); //지역이 경기
	public List<CarDTO> Seoul(); //지역이 서울
	public List<CarDTO> Busan(); //지역이 부산
	public List<CarDTO> Incheon(); //지역이 인천
	public List<CarDTO> Daegu(); //지역이 대구
	public List<CarDTO> Daejeon(); //지역이 대전
	public List<CarDTO> Gwangju(); //지역이 광주
	public List<CarDTO> AddressCarList(String a,String b,String c,String d,String e,String f,String g); //체크한 지역 리스트
	
	//옵션
	public List<CarDTO> optCheckList(String a, String b, String c, String d, String e, String f, String g, String h); //체크
	
	//브랜드
	public Page<CarDTO> carBrandList(String a,int pageNo); //모든 차 출력
	public List<CarDTO> carBrandList(String a);
	
	//모델
	public List<CarDTO> carModelList(String a);
	
	public CardealerDTO CardealerListDAO(String num);
	
	public CarImgDTO CarImg(String id);
	
	public List<CarSearchDTO> CarSearchDAO(String x); //검색
	
	public int cardeleteDAO(String num);
	
}
