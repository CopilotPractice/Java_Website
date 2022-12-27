package com.icia.el.dao;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface IBbs_likeDAO {
	
	public int likeCheckDAO(String id, String bbs_num);
	
	public int likeDeleteDAO(String id, String bbs_num);
	
	public int deleteBbsLikeDelDAO(String bbs_num);
	
	public int likeInsertDAO(String id, String bbs_num);
	
}
