package com.icia.el.service;

import java.util.List;

import com.icia.el.dto.PickAndShopDTO;

public interface IPickAndShopService {
	public List<PickAndShopDTO> pickAndShopList(String id);
	public int pickListInsert(String p_num,String id);
	public int pickListDelete(String p_num,String id);
	public int pickCheck(String id, String p_num);
}
