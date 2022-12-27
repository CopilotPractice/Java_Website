package com.icia.el.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.ReviewDTO;

@Mapper
public interface IReviewDAO {
	
	public List<ReviewDTO> reviewlistDAO(String p_num, String orderby);

	public int reviewWriteDAO(Map<String,String> map);
	
	public int deleteReview(String p_num);

	public int reviewCntDAO(String p_num);
	
	public String reviewStarDAO(String p_num);
}