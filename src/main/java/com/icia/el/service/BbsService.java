package com.icia.el.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.icia.el.dao.IBbsDAO;
import com.icia.el.dto.BbsDTO;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class BbsService implements IBbsService {

	@Autowired
	IBbsDAO dao;

	@Override
	public Page<BbsDTO> bbslist(String where, String orderBy,int pageNo) {
		PageHelper.startPage(pageNo,10);
		return dao.bbslistDAO(where, orderBy);
	}

	@Override
	public BbsDTO bbsView(String num) {
		return dao.bbsviewDAO(num);
	}

	@Override
	public int bbswrite(Map<String, String> map) {
		int n = dao.bbswriteDAO(map);
		return n;
	}

	@Override
	public int bbsCountUpdate(String num) {

		return dao.bbscountupdateDAO(num);
	}

	@Override
	public int bbscmdeletecount(String num) {
		return dao.bbscmdeletecountDAO(num);
	}

	@Override
	public int bbsdelete(String num) {
		return dao.bbsdeleteDAO(num);
	}

	@Override
	public int bbsupdate(Map<String, String> map) {

		return dao.bbsupdateDAO(map);
	}

	@Override
	public BbsDTO bbsupdateviewForm(String num) {

		return dao.bbsupdateviewFormDAO(num);
	}

	@Override
	public int bbscmupdate(String num) {

		return dao.bbscmupdateDAO(num);
	}

	@Override
	public int likeCome(String id) {

		return dao.bbslikeDAO(id);
	}

	@Override
	public int upLike(String id) {

		return dao.uplikeDAO(id);
	}

	@Override
	public int downLike(String id) {

		return dao.downlikeDAO(id);
	}

}
