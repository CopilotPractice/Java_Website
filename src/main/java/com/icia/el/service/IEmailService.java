package com.icia.el.service;

public interface IEmailService {
	String sendSimpleMessageSignup(String to) throws Exception;

	String sendSimpleMessagePassword(String to) throws Exception;
}
