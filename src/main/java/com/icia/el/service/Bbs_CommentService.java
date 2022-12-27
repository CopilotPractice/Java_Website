package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.IBbs_CommentDAO;
import com.icia.el.dto.Bbs_CommentDTO;

@Service
public class Bbs_CommentService implements IBbs_CommentService {

	@Autowired
	IBbs_CommentDAO dao;

	@Override
	public int BbsCommentWrite(Map<String, String> map) {

		return dao.BbsCommentWriteDAO(map);
	}

	@Override
	public List<Bbs_CommentDTO> BbsCommentList(String num) {
		List<Bbs_CommentDTO> dto = new ArrayList<Bbs_CommentDTO>();
		dto = dao.BbsCommentListDAO(num);

		return dto;
	}

	@Override
	public int BbsCommentAllDelete(String num) {
		return dao.BbsCommentAllDeleteDAO(num);
	}

	@Override
	public int BbsCommentDelete(String num) {
		return dao.BbsCommentDeleteDAO(num);
	}

}
