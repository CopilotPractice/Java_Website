package com.icia.el.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.github.pagehelper.Page;
import com.icia.el.dto.BbsDTO;

@Repository
@Mapper
public interface IBbsDAO {

	public Page<BbsDTO> bbslistDAO(String where,String orderBy);
	public BbsDTO bbsviewDAO(String num); //게시글 상세보기 /제목누름
    public int bbsdeleteDAO(String num);
    public int bbswriteDAO(Map<String,String>map); //게시글 작성하기
    public int bbscountupdateDAO(String num); //게시글 조회수 증가
    public int bbsupdateDAO(Map<String,String> map); //게시글 수정하기
    public BbsDTO bbsupdateviewFormDAO(String num); //게시글 수정하기위한 값 가져오기
    public int bbscmupdateDAO(String num); //게시글 댓글 작성시 값 올라감
    public int bbslikeupdateDAO(String num); //게시글 좋아요 증가
    public int bbslikeCheckDAO(String num); //게시글 좋아요 확인
    public int bbslikeDAO(String id);
	public int uplikeDAO(String id);
	public int downlikeDAO(String id);
	public int bbscmdeletecountDAO(String num);//댓글 삭제시 값 내려감
	
}
