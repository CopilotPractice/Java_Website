package com.icia.el.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.IMessageDAO;
import com.icia.el.dto.MessageDTO;

@Service
public class MessageService implements IMessageService{

	@Autowired
	IMessageDAO dao;
	
	@Override
	public List<MessageDTO> messageList(String id) {
		List<MessageDTO> dto = new ArrayList<>();
		dto = dao.messageListDAO(id);
		
		return dto;
	}

}
