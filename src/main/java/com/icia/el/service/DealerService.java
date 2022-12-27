package com.icia.el.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icia.el.dao.IDealerDAO;
import com.icia.el.dto.DealerDTO;

@Service
public class DealerService implements IDealerService {

	@Autowired
	IDealerDAO dao;
	
	public int drLogin(String dr_id, String dr_pw) {
		DealerDTO searchId = dao.drLoginCheck(dr_id);
		int result = 0;
		if (searchId != null) {
			if (searchId.getDr_pw().equals(dr_pw)) {
				result = 1;
			} else {
				result = 0;
			}
		} else {
			result = -1;
		}

		return result;

	}

	
	@Override
	public int dealerinsert(String dr_id, String dr_pw, String dr_name, String dr_phone, String dr_email,
			String dr_c_name, String dr_c_address, String dr_c_phone) {
		int n = dao.dealerinsertDAO(dr_id, dr_pw, dr_name, dr_phone, dr_email, dr_c_name, dr_c_address, dr_c_phone);
		return n;
	}

	@Override
	public int dridCheck(String dr_id) {
		int n = dao.dridCheckDAO(dr_id);
		return n;
	}


	@Override
	public int dealerupdate(String d_pw, String d_name, String d_email, String d_phone, String drname,
			String drphone,String w_id) {
		return dao.dealerupdateDAO(d_pw, d_name, d_email, d_phone, drname, drphone, w_id);
	}
	
	@Override
	public int sellingupDAO(String id) {
		return dao.sellingupDAO(id);
	}


	@Override
	public int sellingdownDAO(String id) {
		return dao.sellingdownDAO(id);
	}


	@Override
	public int soldDAO(String id) {
		return dao.soldDAO(id);
	}


	@Override
	public List<DealerDTO> drsellingcarDAO(String id) {
		List<DealerDTO> dto = dao.drsellingcarDAO(id);
		return dto;
	}

	

}
