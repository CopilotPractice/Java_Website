package com.icia.el.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.icia.el.dao.IUserInfoDAO;
import com.icia.el.dto.UserInfoDTO;

@Service
@Transactional
public class UserInfoService implements IService {

	@Autowired
	IUserInfoDAO dao;

	public int login(String p_id, String p_pw) {
		UserInfoDTO searchId = dao.loginCheck(p_id);
		int result = 0;
		if (searchId != null) {

			if (searchId.getPw().equals(p_pw)) {
				result = 1;
			} else {
				result = 0;
			}
		} else {
			result = -1;
		}

		return result;

	}

	public int idCheck(String id) {

		return dao.idCheckDAO(id);

	}

	@Override
	public int idAndEmailMatching(String id, String email) {
		int n = dao.idAndEmailMatchingDAO(id, email);
		return n;
	}
	
	@Override
	public int Lvupdate(String id) {
		return dao.LvupdateDAO(id);
	}

	
	public int userInfoinsert(String p_id, String p_pw, String p_name, String p_email, String p_phone,String address) {
		int n = dao.userInfoinsertDAO(p_id, p_pw, p_name, p_email, p_phone, address);
		// 성공 1 실패 0
		return n;
	}

	@Override
	public int userInfoUpdate(String p_pw, String p_name, String p_email, String p_phone, String p_id) {
		int n = dao.userInfoupdateDAO(p_pw, p_name, p_email, p_phone, p_id);
		// 성공 1 실패 0
		return n;
	}

	@Override
	public int userbuyProduct(String id, int totalprice,int point) {
		int n = dao.userPayDAO(id, totalprice, point);
		return n;
	}
	
	@Override
	public int restPoint(String id) {

		return dao.restPointDAO(id);
	}

	@Override
	public int afterRestPoint(String minusPoint,String id) {

		return dao.AfterRestPointDAO(minusPoint,id);
	}

	@Override
	public int buyUsePointProduct(String id, String usingPoint) {
		int n = dao.buyUsePointProductDAO(id,usingPoint);
		return n;
	}



}
