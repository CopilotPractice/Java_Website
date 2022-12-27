package com.icia.el.service;

import java.util.List;

import com.icia.el.dto.BbsDTO;
import com.icia.el.dto.Bbs_CommentDTO;

public interface IUserDeleteService {

	public int reviewAlldelete(String id); //리뷰삭제
	public int pickAlldelete(String id); //찜삭제
	public int car_pickAlldelete(String id); //차찜삭제
	public int bbs_likeAlldelete(String id); //게시글추천삭제
	public int bbs_commentAlldelete(String id); //게시글댓글삭제
	public int bbsAlldelete(String id); //게시글삭제
	public int UserDelete(String id); //유저삭제
	public List<BbsDTO> UserBbs(String id); //유저가 쓴 게시글불러오기
	public List<Bbs_CommentDTO> UserBbsComment(String id); //유저가썼던 게시글의 댓글수 차감
}
