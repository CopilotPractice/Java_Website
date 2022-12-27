package com.icia.el.service;

public interface IBbs_likeService {

	public int likeCheck(String id, String bbs_num);
	
	public int likeDelete(String id, String bbs_num);
	
	public int deleteBbsLikeDel(String bbs_num);
	
	public int likeInsert(String id, String bbs_num);
}
