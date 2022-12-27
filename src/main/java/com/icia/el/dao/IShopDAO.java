package com.icia.el.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.github.pagehelper.Page;
import com.icia.el.dto.ShopAndReviewDTO;
import com.icia.el.dto.ShopDTO;

@Mapper
public interface IShopDAO {

	public Page<ShopAndReviewDTO> shoplistwashDAO(String orderby);

	public Page<ShopAndReviewDTO> shoplistexDAO(String orderby);

	public Page<ShopAndReviewDTO> shoplistarDAO(String orderby);

	public Page<ShopAndReviewDTO> shoplistireDAO(String orderby);

	public ShopDTO detailDAO(String num);

	public int productinsertDAO(Map<String, String> map);
	
	public int productUpdateDAO(String p_name,String p_price,String p_stock,String p_content,String p_category,String img_dir,String p_num);
	
	public int productReduceDAO(String quantity, String p_num);
	
	public int productDeleteDAO(String p_num);
	
	public int lastPnum();

}
