package com.icia.el.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.icia.el.dao.IShopDAO;
import com.icia.el.dto.ShopAndReviewDTO;
import com.icia.el.dto.ShopDTO;

@Service
@Transactional
public class ShopService implements IShopService {

	@Autowired
	IShopDAO dao;

	@Override
	public ShopDTO detail(String num) {

		return dao.detailDAO(num);
	}

	@Override
	public int productinsert(Map<String, String> map) {
		int n = dao.productinsertDAO(map);
		return n;
	}

	@Override
	public Page<ShopAndReviewDTO> shoplist(String orderby, String category, int pageNo){
		
		Page<ShopAndReviewDTO> dto = null;
		PageHelper.startPage(pageNo,8);
		
		if (category.equals("1")) {
			System.out.println(orderby);
			System.out.println(category);
			dto = dao.shoplistwashDAO(orderby);
		} else if (category.equals("2")) {
			System.out.println(orderby);
			System.out.println(category);
			dto = dao.shoplistexDAO(orderby);
		} else if (category.equals("3")) {
			dto = dao.shoplistarDAO(orderby);
		} else if (category.equals("4")) {
			dto = dao.shoplistireDAO(orderby);
		}
		
		return dto;
	}

	@Override
	public int productReduce(String quantity, String p_num) {
		int n = dao.productReduceDAO(quantity, p_num);
		return n;
	}

	@Override
	public int lastPnumCome() {
		
		return dao.lastPnum();
		
	}

	@Override
	public int deleteProduct(String p_num) {
		
		return dao.productDeleteDAO(p_num);
	}

	@Override
	public int productupdate(String p_name,String p_price,String p_stock,String p_content,String p_category,String img_dir,String p_num) {
		return dao.productUpdateDAO(p_name,p_price,p_stock,p_content,p_category,img_dir,p_num);
	}

}
