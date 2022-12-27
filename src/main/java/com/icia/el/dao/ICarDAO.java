package com.icia.el.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.github.pagehelper.Page;
import com.icia.el.dto.CarDTO;
import com.icia.el.dto.CarImgDTO;
import com.icia.el.dto.CarSearchDTO;
import com.icia.el.dto.CardealerDTO;

@Mapper
public interface ICarDAO {

	//차종 기준
	public Page<CarDTO> CarListDAO(int Page);//모든 차 출력
	public List<CarDTO> CarListDAO();//모든 차 출력
	public List<CarDTO> TinyCarListDAO();//크기가 경차
	public List<CarDTO> SmallCarListDAO(); //크기가 소형
	public List<CarDTO> semimidsizeCarListDAO(); //크기가 준중형
	public List<CarDTO> midsizeCarListDAO(); //크기가 중형
	public List<CarDTO> bigCarListDAO(); //크기가 대형
	public List<CarDTO> sportsCarListDAO(); //스포츠카
	public List<CarDTO> CarCheckListDAO(String a,String b,String c,String d,String e,String f); //체크한 차종류 리스트
	
	//연식 기준
	public List<CarDTO> CarfromDayListDAO(String date); //연식 YYMMDD부터
	public List<CarDTO> CartoDayListDAO(String date); //연식 YYMMDD까지
	public List<CarDTO> CarallDayListDAO(String dateA, String dateB); //연식 from~to

	//주행거리 기준
	public List<CarDTO> MiletwetyThUnderDAO(); //주행거리가 2만키로이하
	public List<CarDTO> MilefortyThUnderDAO(); //주행거리가 2만~4만
	public List<CarDTO> MilesixtyThUnderDAO(); //주행거리가 4만~6만
	public List<CarDTO> MileeightyThUnderDAO(); //주행거리가 6만~8만
	public List<CarDTO> MileoneHunThUnderDAO(); //주행거리가 8만~10만
	public List<CarDTO> MileoneHunThUpDAO(); //주행거리가 10만이상
	public List<CarDTO> MileCarListDAO(int a,int b,int c,int d,int e, int f, int g, int h, int i, int j); //체크한 주행거리 리스트
	
	//가격 기준
	public List<CarDTO> PricetenmilDAO(); //가격이 천만미만
	public List<CarDTO> PricetwentymilDAO(); //가격이 천만~2천만미만
	public List<CarDTO> PricethirtymilDAO(); //가격이 2천만~3천만미만
	public List<CarDTO> PricefortymilDAO(); //가격이 3천만~4천만미만
	public List<CarDTO> PricefiftymilDAO(); //가격이 4천만~5천만미만
	public List<CarDTO> PricefiftymilupDAO(); //가격이 5천만 이상
	public List<CarDTO> PriceCarListDAO(int a,int b,int c,int d,int e, int f, int g, int h, int i, int j); //체크한 가격 리스트
	
	//지역 기준
	public List<CarDTO> GyeonggiDAO(); //지역이 경기
	public List<CarDTO> SeoulDAO(); //지역이 서울
	public List<CarDTO> BusanDAO(); //지역이 부산
	public List<CarDTO> IncheonDAO(); //지역이 인천
	public List<CarDTO> DaeguDAO(); //지역이 대구
	public List<CarDTO> DaejeonDAO(); //지역이 대전
	public List<CarDTO> GwangjuDAO(); //지역이 광주
	public List<CarDTO> AddressCarListDAO(String a,String b,String c,String d,String e,String f,String g); //체크한 지역 리스트
	
	//옵션
	public List<CarDTO> optCheckListDAO(String a, String b, String c, String d, String e, String f, String g, String h); //체크
	
	//브랜드
	public Page<CarDTO> carBrandListDAO(String a,int Page);//모든 차 출력
	public List<CarDTO> carBrandListDAO(String a);
	
	//모델
	public List<CarDTO> carModelListDAO(String a);
	
	public CardealerDTO CardealerListDAO(String num); //car정보 salepost정보 dealer정보
	
	public CarImgDTO CarImgDAO(String id); //차이미지
	
	public List<CarSearchDTO> CarSearchDAO(String x); //검색
	
	public int cardeleteDAO(String num);
	
}
