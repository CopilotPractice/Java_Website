package com.icia.el.service;

import java.util.List;
import java.util.Map;

import com.icia.el.dto.Bbs_CommentDTO;

public interface IBbs_CommentService {

	public int BbsCommentWrite(Map<String, String>	map);
	public List<Bbs_CommentDTO> BbsCommentList(String num);
	public int BbsCommentAllDelete(String num);
	public int BbsCommentDelete(String num);

}