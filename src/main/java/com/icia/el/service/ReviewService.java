package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.icia.el.dao.IReviewDAO;
import com.icia.el.dto.ReviewDTO;

@Service
@Transactional
public class ReviewService implements IReviewService {

	@Autowired
	IReviewDAO dao;

	@Override
	public List<ReviewDTO> reviewlist(String where, String orderby) {
	
		List<ReviewDTO> dto = new ArrayList<>();
		dto = dao.reviewlistDAO(where, orderby);

		return dto;
		
	}

	@Override
	public int reviewwrite(Map<String,String> map) {
		int n = dao.reviewWriteDAO(map);
		
		return n;
	}

	
	@Override
	public int reviewDel(String p_num) {
		int n = dao.deleteReview(p_num);
		return n;
	}

	@Override
	public int reviewCnt(String p_num) {
		int n = dao.reviewCntDAO(p_num);
		return n;
	}

	@Override
	public int reviewStar(String p_num) {
		int n = 0;
		if(dao.reviewStarDAO(p_num)!=null) {
			n = Integer.parseInt(dao.reviewStarDAO(p_num));
		}
		return n;
	}
	
	

}
