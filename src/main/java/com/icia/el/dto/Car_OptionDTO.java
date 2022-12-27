package com.icia.el.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class Car_OptionDTO {
	

	//차 번호
	private String c_num;
	//선루프
	private int sunroof;
	//내비게이션
	private int navigation;
	//열선 스티어링 휠
	private int heathandle;
	//hud
	private int hud;
	//후방 카메라
	private int camera_rear;
	//차선이탈 경보 시스템
	private int ldws;
	//ecm 룸미러
	private int ecm;
	//tpms
	private int tpms;
}
