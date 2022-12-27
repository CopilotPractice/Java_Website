package com.icia.el.service;

import java.util.Map;

import com.github.pagehelper.Page;
import com.icia.el.dto.BbsDTO;

public interface IBbsService {

	public Page<BbsDTO> bbslist(String where, String orderBy,int pageNo); //
	public int bbsdelete(String num); //게시글 삭제하기
	public BbsDTO bbsView(String num); //게시글 상세보기
	public int bbswrite(Map<String,String>map); //게시글 작성
	public int bbsCountUpdate(String num); //게시글 조회수 보임
	public int bbsupdate(Map<String,String>map); //게시글 수정
	public BbsDTO bbsupdateviewForm(String num); //게시글 수정하기 위한 값 가져오기
	public int bbscmupdate(String num); //게시글 댓글 작성시 값 올라감
	public int likeCome(String id);
	public int upLike(String id);
	public int downLike(String id);
	public int bbscmdeletecount(String num);
	/*
	 * public BbsDTO bbsSearch(String orderBy);
	 */
}
