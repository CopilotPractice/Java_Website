package com.icia.el.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.BbsDTO;
import com.icia.el.dto.Bbs_CommentDTO;

@Mapper
public interface IUserDeleteDAO {

	public int reviewAlldeleteDAO(String id); //리뷰삭제
	public int pickAlldeleteDAO(String id); //찜삭제
	public int car_pickAlldeleteDAO(String id); //차찜삭제
	public int bbs_likeAlldeleteDAO(String id); //게시글추천삭제
	public int bbs_commentAlldeleteDAO(String id); //게시글댓글삭제
	public int bbsAlldeleteDAO(String id); //게시글삭제
	public int UserDeleteDAO(String id); //유저삭제
	public List<BbsDTO> UserBbsDAO(String id); //유저가 쓴 게시글불러오기
	public List<Bbs_CommentDTO> UserBbsCommentDAO(String id); //유저가썼던 게시글의 댓글수 차감
}
