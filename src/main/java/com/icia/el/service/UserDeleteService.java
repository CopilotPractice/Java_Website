package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.IUserDeleteDAO;
import com.icia.el.dto.BbsDTO;
import com.icia.el.dto.Bbs_CommentDTO;

@Service
public class UserDeleteService implements IUserDeleteService{
	
	@Autowired
	IUserDeleteDAO dao;

	@Override
	public int reviewAlldelete(String id) {
		return dao.reviewAlldeleteDAO(id);
	}

	@Override
	public int pickAlldelete(String id) {
		return dao.pickAlldeleteDAO(id);
	}

	@Override
	public int car_pickAlldelete(String id) {
		return dao.car_pickAlldeleteDAO(id);
	}

	@Override
	public int bbs_likeAlldelete(String id) {
		return dao.bbs_likeAlldeleteDAO(id);
	}

	@Override
	public int bbs_commentAlldelete(String id) {
		return dao.bbs_commentAlldeleteDAO(id);
	}

	@Override
	public int bbsAlldelete(String id) {
		return dao.bbsAlldeleteDAO(id);
	}

	@Override
	public int UserDelete(String id) {
		return dao.UserDeleteDAO(id);
	}

	@Override
	public List<BbsDTO> UserBbs(String id) {
		List<BbsDTO> dto = new ArrayList<>();
		dto = dao.UserBbsDAO(id);
		return dto;
	}

	@Override
	public List<Bbs_CommentDTO> UserBbsComment(String id) {
		List<Bbs_CommentDTO> dto = new ArrayList<>();
		dto = dao.UserBbsCommentDAO(id);
		return dto;
	}

	
}
