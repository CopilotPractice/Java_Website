package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.IPickAndShopDAO;
import com.icia.el.dto.PickAndShopDTO;

@Service
public class PickAndShopService implements IPickAndShopService{

	@Autowired
	IPickAndShopDAO dao;
	
	@Override
	public List<PickAndShopDTO> pickAndShopList(String id) {
		List<PickAndShopDTO> dto = new ArrayList<>();
		
		dto = dao.pickListDAO(id);
		
		return dto;
	}

	@Override
	public int pickListInsert(String p_num, String id) {
		
		int n = dao.pickInsertDAO(p_num, id);
		
		return n;
	}
	
	@Override
	public int pickListDelete(String p_num, String id) {
		
		int n = dao.pickDeleteDAO(p_num, id);
		
		return n;
	}


	@Override
	public int pickCheck(String id, String p_num) {
	
		return dao.pickCheckDAO(id, p_num);
	}

	
}
