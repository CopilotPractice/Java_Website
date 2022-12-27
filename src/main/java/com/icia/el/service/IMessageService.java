package com.icia.el.service;

import java.util.List;

import com.icia.el.dto.MessageDTO;

public interface IMessageService {
	public List<MessageDTO> messageList(String id);
}
