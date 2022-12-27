package com.icia.el.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.Bbs_CommentDTO;

@Mapper
public interface IBbs_CommentDAO {

	public int BbsCommentWriteDAO(Map<String, String>	map);
	public List<Bbs_CommentDTO> BbsCommentListDAO(String num);
	public int BbsCommentAllDeleteDAO(String num);//댓글 올삭제
	public int BbsCommentDeleteDAO(String num);//댓글 삭제
	
}
