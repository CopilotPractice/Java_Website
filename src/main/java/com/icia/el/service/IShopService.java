package com.icia.el.service;

import java.util.Map;

import com.github.pagehelper.Page;
import com.icia.el.dto.ShopAndReviewDTO;
import com.icia.el.dto.ShopDTO;

public interface IShopService {

	public Page<ShopAndReviewDTO> shoplist(String orderby, String category, int pageNum);

	public ShopDTO detail(String num);

	public int productinsert(Map<String, String> map);
		
	public int productupdate(String p_name,String p_price,String p_stock,String p_category,String p_content,String img_dir,String p_num);
	
	public int productReduce(String quantity, String p_num);

	public int lastPnumCome();
	
	public int deleteProduct(String p_num);
}
