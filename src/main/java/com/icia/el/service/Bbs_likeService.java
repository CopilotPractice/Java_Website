package com.icia.el.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.IBbs_likeDAO;

@Service
public class Bbs_likeService implements IBbs_likeService{

	@Autowired
	IBbs_likeDAO dao;
	
	@Override
	public int likeCheck(String id, String bbs_num) {
		int n = dao.likeCheckDAO(id, bbs_num);
		return n;
	}

	@Override
	public int likeDelete(String id, String bbs_num) {
		int n = dao.likeDeleteDAO(id, bbs_num);
		return n;
	}
	
	@Override
	public int deleteBbsLikeDel(String bbs_num) {
		int n = dao.deleteBbsLikeDelDAO(bbs_num);
		return n;
	}

	@Override
	public int likeInsert(String id, String bbs_num) {
		int n = dao.likeInsertDAO(id, bbs_num);
		return n;
	}

	
	
}
