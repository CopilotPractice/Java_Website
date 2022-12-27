package com.icia.el.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.icia.el.dto.MessageDTO;

@Mapper
public interface IMessageDAO {
	public List<MessageDTO> messageListDAO(String id);
}
