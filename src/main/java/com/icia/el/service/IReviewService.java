package com.icia.el.service;

import java.util.List;
import java.util.Map;

import com.icia.el.dto.ReviewDTO;

public interface IReviewService {
	public List<ReviewDTO> reviewlist(String orderby, String p_num);

	public int reviewwrite(Map<String, String> map);

	public int reviewDel(String p_num);
	
	public int reviewCnt(String p_num);
	
	public int reviewStar(String p_num);
}
