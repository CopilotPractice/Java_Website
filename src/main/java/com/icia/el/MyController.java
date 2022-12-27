package com.icia.el;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.github.pagehelper.PageInfo;
import com.icia.el.dao.ICarImgDAO;
import com.icia.el.dao.IDealerDAO;
import com.icia.el.dao.IUserInfoDAO;
import com.icia.el.dto.BbsDTO;
import com.icia.el.dto.Bbs_CommentDTO;
import com.icia.el.dto.CarBody;
import com.icia.el.dto.CarDTO;
import com.icia.el.dto.CarImgDTO;
import com.icia.el.dto.CarSearchDTO;
import com.icia.el.dto.Car_reservationDTO;
import com.icia.el.dto.CardealerDTO;
import com.icia.el.dto.DealerDTO;
import com.icia.el.dto.ReviewDTO;
import com.icia.el.dto.ShopAndReviewDTO;
import com.icia.el.dto.UserInfoDTO;
import com.icia.el.service.IBbsService;
import com.icia.el.service.IBbs_CommentService;
import com.icia.el.service.IBbs_likeService;
import com.icia.el.service.ICarPickService;
import com.icia.el.service.ICarService;
import com.icia.el.service.ICar_OptionService;
import com.icia.el.service.ICar_reservationService;
import com.icia.el.service.ICarinsertService;
import com.icia.el.service.IDealerService;
import com.icia.el.service.IEmailService;
import com.icia.el.service.IMessageService;
import com.icia.el.service.IPickAndShopService;
import com.icia.el.service.IReviewService;
import com.icia.el.service.IService;
import com.icia.el.service.IShopService;
import com.icia.el.service.IUserDeleteService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class MyController {

	@Autowired
	IEmailService emailService;

	@Autowired
	IService service;

	@Autowired
	IUserInfoDAO dao;

	@Autowired
	IDealerDAO drdao;

	@Autowired
	IBbsService bbsservice;

	@Autowired
	IBbs_CommentService cmservice;

	@Autowired
	IShopService shopservice;

	@Autowired
	IReviewService reviewservice;

	@Autowired
	IDealerService dealerservice;

	@Autowired
	IBbs_likeService likeService;

	@Autowired
	IPickAndShopService pickService;

	@Autowired
	ICarService carservice; // 중고차 판매 관련

	@Autowired
	ICar_OptionService optservice; // 중고차 옵션 관련

	@Autowired
	ICarPickService cpservice;// 차찜관련

	@Autowired
	IUserDeleteService udservice; // 유저삭제관련

	@Autowired
	ICarinsertService carinservice; // carinsert

	@Autowired
	IMessageService messageService; // 쪽지

	@Autowired
	ICar_reservationService reserService;
	
	@Autowired
	ICarImgDAO carimgDao;

	@RequestMapping("/") // 첫 페이지
	public String root() {
		return "index";
	}
	@RequestMapping("/search")
	public String search() {
		return "search";
	}

	@RequestMapping("/loginForm") // 로그인 페이지
	public String loginForm(HttpServletRequest request, Model model) {

		String go = request.getParameter("go"); // 로그인 후 넘어갈 특정 페이지 지정

		if (go == null) {
			go = "index"; // 넘어갈 특정 페이지가 없을 경우 index 페이지로 이동
		}

		if (go.equals("buyProductForm")) { // 로그인 성공하면, shop 제품 구매 페이지로 이동

			String p_price = request.getParameter("p_price");
			String p_num = request.getParameter("p_num");
			String quantity = request.getParameter("quantity");
			String p_name = request.getParameter("p_name");
			String id = request.getParameter("id");
			model.addAttribute("p_price", p_price);
			model.addAttribute("quantity", quantity);
			model.addAttribute("p_num", p_num);
			model.addAttribute("p_name", p_name);
			model.addAttribute("id", id);

		} else if (go.equals("pickshop")) {
			String p_num = request.getParameter("p_num");
			model.addAttribute("p_num", p_num);
		} else if (go.equals("carDetail")) {
			String p_num = request.getParameter("num");
			model.addAttribute("p_num", p_num);
			String id = request.getParameter("id");
			model.addAttribute("id", id);
		}

		model.addAttribute("status", "normal"); // 로그인 페이지로 처음 왔을 때, 일반사용자 버튼 활성화
		model.addAttribute("go", go); // 로그인 페이지에 저장해서 넘어갈 페이지 특정 시킴
		return "loginForm";

	}

	// 일반 사용자 로그인
	@RequestMapping("/login")
	public String login(HttpServletRequest request, Model model, RedirectAttributes redirect) {
		String url = ""; // redirect 할 url 변수 선언
		String message = ""; // 로그인 실패 했을 때, 유저에게 보여줄 로그인 실패 메시지 출력 변수 선언
		String go = request.getParameter("go");
		String p_id = request.getParameter("id");
		String p_pw = request.getParameter("pw");
		int result = service.login(p_id, p_pw);
		if (result == 1) {
			UserInfoDTO loginUser = dao.loginCheck(p_id); // 로그인 성공하면 세션에 넣을 user 데이터 변수 선언 및 할당
			HttpSession session = request.getSession(); // 위와 동일
			session.setAttribute("loginUser", loginUser); // 위와 동일
			url = "redirect:/";
			if (go.equals("writeForm")) {
				String id = request.getParameter("id");
				redirect.addAttribute("id", id);
				url = "redirect:/writeForm";
			} else if (go.equals("shopDetail")) {
				String id = request.getParameter("id");
				String p_num = request.getParameter("p_num");
				redirect.addAttribute("id", id);
				redirect.addAttribute("p_num", p_num);
				url = "redirect:/reviewwrite";
			} else if (go.equals("buyProductForm")) {
				String id = request.getParameter("id");
				String p_num = request.getParameter("p_num");
				String p_name = request.getParameter("p_name");
				String p_price = request.getParameter("p_price");
				String quantity = request.getParameter("quantity"); // 구매 갯수

				redirect.addAttribute("id", id);
				redirect.addAttribute("p_num", p_num);
				redirect.addAttribute("p_name", p_name);
				redirect.addAttribute("p_price", p_price);
				redirect.addAttribute("quantity", quantity);

				url = "redirect:/buyProductForm";

			} else if (go.equals("detail")) {
				String id = request.getParameter("id");
				String p_num = request.getParameter("p_num");
				redirect.addAttribute("id", id);
				redirect.addAttribute("p_num", p_num);

				url = "redirect:/reviewForm";
			} else if (go.equals("pickshop")) {
				String num = request.getParameter("p_num");
				System.out.println("픽으로옴");
				redirect.addAttribute("num", num);
				url = "redirect:/detail";
			} else if (go.equals("mypage")) {
				String id = request.getParameter("id");
				redirect.addAttribute("id", id);
				url = "redirect:/mypage";
			} else if (go.equals("carDetail")) {
				String p_num = request.getParameter("p_num");
				String id = request.getParameter("id");
				redirect.addAttribute("num", p_num);
				redirect.addAttribute("userid", id);
				url = "redirect:/car_detail";
			}
		} else {
			model.addAttribute("status", "normal");
			message = "아이디 혹은 비밀번호가 일치하지 않습니다"; // 로그인 실패 했을 때, 로그인 폼에 띄울 메시지 초기화
			go = request.getParameter("go");
			model.addAttribute("message", message);
			redirect.addAttribute("go", go);
			url = "loginForm";
		}

		return url;

	}

	// 딜러 로그인 = 이하 로그인 매핑 메서드와 동일
	@RequestMapping("/dealerLogin")
	public String dealerLogin(HttpServletRequest request, Model model, RedirectAttributes redirect) {
		String url = "";
		String message = "";
		String go = request.getParameter("go");
		String p_id = request.getParameter("id");
		String p_pw = request.getParameter("pw");
		int result = dealerservice.drLogin(p_id, p_pw);
		if (result == 1) {
			DealerDTO loginUser = drdao.drLoginCheck(p_id);
			HttpSession session = request.getSession();
			session.setAttribute("drLoginUser", loginUser);
			url = "redirect:/";
			if (go.equals("writeForm")) {
				String id = request.getParameter("id");
				redirect.addAttribute("id", id);
				url = "redirect:/writeForm";
			} else if (go.equals("shopDetail")) {
				String id = request.getParameter("id");
				String p_num = request.getParameter("p_num");
				redirect.addAttribute("id", id);
				redirect.addAttribute("p_num", p_num);
				url = "redirect:/reviewwrite";
			} else if (go.equals("buyProductForm")) {
				String id = request.getParameter("id");
				String p_num = request.getParameter("p_num");
				String p_name = request.getParameter("p_name");
//				String p_stock = request.getParameter("p_stock");
				String p_price = request.getParameter("p_price");
				String quantity = request.getParameter("quantity");

				redirect.addAttribute("id", id);
				redirect.addAttribute("p_num", p_num);
				redirect.addAttribute("p_name", p_name);
				redirect.addAttribute("p_price", p_price);
				redirect.addAttribute("quantity", quantity);

				url = "redirect:/buyProductForm";
			}
		} else {
			model.addAttribute("status", "dealer");
			message = "아이디 혹은 비밀번호가 일치하지 않습니다";
			go = request.getParameter("go");
			model.addAttribute("message", message);
			redirect.addAttribute("go", go);
			url = "loginForm";
		}

		return url;

	}

	// 유저 아이디 중복체크
	@PostMapping("/idCheck")
	@ResponseBody
	public int idCheck(@RequestParam("id") String id) {

		int cnt = service.idCheck(id);
		return cnt;

	}

	// 딜러 아이디 중복체크
	@PostMapping("/dealeridCheck")
	@ResponseBody
	public int dealeridCheck(@RequestParam("dr_id") String dr_id) {

		int cnt = dealerservice.dridCheck(dr_id);
		return cnt;
	}

	// 로그아웃 = 유저 세션 종료
	@RequestMapping("/logout")
	public String logout(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.invalidate();
		return "index";
	}

	// 회원가입 페이지 이동
	@RequestMapping("/signupForm")
	public String signupForm() {
		return "signupForm";
	}

	// 사용자 회원정보 수정 페이지 이동
	@RequestMapping("/updateUserInfoForm")
	public String updateUserInfoForm(HttpServletRequest request, Model model) {
		String loginId = request.getParameter("loginId");
		model.addAttribute("loginUser", dao.loginCheck(loginId));
		return "updateUserInfoForm";
	}

	@RequestMapping("/updateDealerForm")
	public String updateDealerForm(HttpServletRequest request, Model model) {
		String loginId = request.getParameter("loginId");
		model.addAttribute("drLoginUser", drdao.drLoginCheck(loginId));
		return "updateDealerForm";
	}

	// 사용자 회원정보 수정
	@RequestMapping("/updateUserInfo")
	public String updateUserInfo(HttpServletRequest request) {
		String p_id = request.getParameter("id");
		String p_pw = request.getParameter("pw");
		String p_name = request.getParameter("name");
		String p_email = request.getParameter("email");
		String p_phone = request.getParameter("phone");
		int result = service.userInfoUpdate(p_pw, p_name, p_email, p_phone, p_id);
		if (result == 1) {
			UserInfoDTO loginUser = dao.loginCheck(p_id); // 회원정보 수정 후 세션 재생성
			HttpSession session = request.getSession(); // 위와 동일
			session.setAttribute("loginUser", loginUser); // 위와 동일
			request.setAttribute("message", "회원 정보 수정에 성공했습니다.");
		} else {
			request.setAttribute("message", "회원 정보 수정에 실패했습니다.");
		}

		return "index";
	}

	@RequestMapping("/updateDealer")
	public String updateDealer(HttpServletRequest request) {
		String p_id = request.getParameter("dr_id");
		String p_pw = request.getParameter("dr_pw");
		String p_name = request.getParameter("dr_name");
		String p_email = request.getParameter("dr_email");
		String p_phone = request.getParameter("dr_phone");
		String dr_name = request.getParameter("dr_c_name");
		String dr_phone = request.getParameter("dr_c_phone");
		System.out.println(p_id);
		System.out.println(p_pw);
		System.out.println(p_name);
		System.out.println(p_email);
		System.out.println(p_phone);
		System.out.println(dr_name);
		System.out.println(dr_phone);
		int result = dealerservice.dealerupdate(p_pw, p_name, p_email, p_phone, dr_name, dr_phone, p_id);
		System.out.println(result);
		if (result == 1) {
			DealerDTO loginUser = drdao.drLoginCheck(p_id); // 회원정보 수정 후 세션 재생성
			HttpSession session = request.getSession(); // 위와 동일
			session.setAttribute("drLoginUser", loginUser); // 위와 동일
			request.setAttribute("message", "회원 정보 수정에 성공했습니다.");
		} else {
			request.setAttribute("message", "회원 정보 수정에 실패했습니다.");
		}

		return "index";
	}

	// 일반 사용자 회원가입
	@RequestMapping("/signup")
	public String signup(HttpServletRequest request) {
		String p_id = request.getParameter("id");
		String p_pw = request.getParameter("pw");
		String p_name = request.getParameter("name");
		String p_email = request.getParameter("email");
		String p_phone = request.getParameter("phone");
		String p_address = request.getParameter("address");
		int result = service.userInfoinsert(p_id, p_pw, p_name, p_email, p_phone, p_address);
		if (result == 1) {
			request.setAttribute("message", "회원 가입에 성공했습니다.");
		} else {
			request.setAttribute("message", "회원 가입에 실패했습니다.");
		}
		return "index";
	}

	// 비밀번호 찾기 페이지
	@RequestMapping("/findPasswordForm")
	public String findPasswordForm(HttpServletRequest request, Model model) {

		return "findPasswordForm";
	}

	// 비밀번호 변경 페이지 이동
	@RequestMapping("/findPw")
	public String findPw(HttpServletRequest request, Model model) {
		String id = request.getParameter("id");
		String email = request.getParameter("email");
		String email_auth_key = request.getParameter("email_auth_key");

		model.addAttribute("id", id);
		model.addAttribute("email", email);
		model.addAttribute("email_auth_key", email_auth_key);

		return "NomalPasswordChangeForm";
	}

	@RequestMapping("/changePw")
	public String changePw(HttpServletRequest request, Model model) {

		String pw = request.getParameter("changePw");
		String id = request.getParameter("id");

		System.out.println(pw + id);
		dao.changePwDAO(pw, id);

		return "index";

	}

	// 딜러 회원가입
	@RequestMapping("/dealersignup")
	public String dealersignup(HttpServletRequest request) {
		String dr_id = request.getParameter("dr_id");
		String dr_pw = request.getParameter("dr_pw");
		String dr_name = request.getParameter("dr_name");
		String dr_email = request.getParameter("dr_email");
		String dr_phone = request.getParameter("dr_phone");
		String dr_c_name = request.getParameter("dr_c_name");
		String dr_c_address = request.getParameter("dr_c_address");
		String dr_c_phone = request.getParameter("dr_c_phone");

		int result = dealerservice.dealerinsert(dr_id, dr_pw, dr_name, dr_phone, dr_email, dr_c_name, dr_c_address,
				dr_c_phone);
		if (result == 1) {
			request.setAttribute("message", "회원 가입에 성공했습니다.");
		} else {
			request.setAttribute("message", "회원 가입에 실패했습니다.");
		}
		return "index";
	}

	// 게시판
	@RequestMapping("/bbs")
	public String bbsForm(@RequestParam(required = false) String bbsDiv,
			@RequestParam(required = false, defaultValue = "1") int pageNum, Model model, HttpServletRequest request)
			throws Exception {
		String where = ""; // 검색 기능 구현을 위한 선언
		String searchText = request.getParameter("searchText"); // 검색한 내용을 받아옴

		if (bbsDiv != null) {
			// 검색에서 어떠한(제목, 작성자)것을 클릭 했는지를 받아옴
			if (bbsDiv.equals("title")) {
				where = "where bbs_title like " + "'%" + searchText + "%'";
			}
			if (bbsDiv.equals("writer")) {
				where = "where name like " + "'%" + searchText + "%'";
			}
		}

		String orderBy = request.getParameter("orderBy"); // 리스트 출력하는 결과의 정렬 순서를 지정
		if (orderBy == null) {
			orderBy = "bbs_writedate"; // 정렬 순서에서 default는 날짜순
		}

		request.setAttribute("bbsDiv", bbsDiv);
		request.setAttribute("searchText", searchText);

		PageInfo<BbsDTO> p = new PageInfo<>(bbsservice.bbslist(where, orderBy, pageNum), 10);
		model.addAttribute("bbslist", p);

		return "bbs";
	}

	// 게시글 작성 페이지 이동
	@RequestMapping("/writeForm")
	public String writeForm(HttpServletRequest request, Model model) {
		String id = request.getParameter("id");
		BbsDTO dto = new BbsDTO();
		dto.setId(id);
		model.addAttribute("dto", dto);

		return "writeForm";
	}

	// 게시글 작성
	@RequestMapping("/write")
	public String write(RedirectAttributes redirect, @RequestParam(required = false, defaultValue = "1") int pageNum,
			HttpServletRequest request, Model model) {
//		String orderBy = request.getParameter("orderBy");
//		String where = request.getParameter("where");
		String userid = request.getParameter("userid");
		String p_title = request.getParameter("title");
		String p_content = request.getParameter("content").replace("\r\n", "<br>");

		Map<String, String> map = new HashMap<String, String>();
		map.put("item1", userid);
		map.put("item2", p_title);
		map.put("item3", p_content);
		bbsservice.bbswrite(map);

		redirect.addAttribute("searchText", null);
		redirect.addAttribute("orderBy", null);

		return "redirect:/bbs";
	}

	// 게시글 상세 페이지
	@RequestMapping("/view")
	public String viewForm(HttpServletRequest request, Model model) {
		String url = "view";
		String p_num = request.getParameter("num");
		String userid = request.getParameter("userid");
		UserInfoDTO dto = new UserInfoDTO();

		if (bbsservice.bbsView(p_num) != null) { // 가져올 게시글이 존재하면 아래 부분 실행

			if (userid != null) {
				dto = dao.loginCheck(userid); // 게시글 작성자와 동일한지 체크
				model.addAttribute("bbsdto", dto); // 위와 동일
			}

			bbsservice.bbsCountUpdate(p_num); // 조회수 증가
			model.addAttribute("dto", bbsservice.bbsView(p_num)); // 상세 페이지에 뿌려줄 값 전송

			List<Bbs_CommentDTO> cmdto = new ArrayList<Bbs_CommentDTO>(); // 게시글 댓글 뿌려줄 값 세팅 및 전송
			cmdto = cmservice.BbsCommentList(p_num); // 위와 동일
			model.addAttribute("cm_dto", cmdto); // 위와 동일

		} else {
			url = "bbsdeletePage"; // 가져올 게시글이 존재하지 않을 때(갱신되지 않은 삭제된 페이지를 클릭했으면) 이동할 url 지정
		}

		return url;
	}

	// 게시글 수정 페이지
	@RequestMapping("/updateForm")
	public String updateForm(HttpServletRequest request, Model model) {
		String num = request.getParameter("num");
		BbsDTO dto = new BbsDTO();
		dto = bbsservice.bbsupdateviewForm(num);
		model.addAttribute("dto", dto);

		return "updateForm";
	}

	// 삭제된 게시글 클릭 했을 때, 게시판으로 이동
	@RequestMapping("/deletePage")
	public String deletePage(@RequestParam(required = false, defaultValue = "1") int pageNum,
			HttpServletRequest request, Model model) {
		String where = null;
		String bbsDiv = null;
		String searchText = null;
		String orderBy = "bbs_writedate";
		model.addAttribute("bbslist", bbsservice.bbslist(where, orderBy, pageNum));
		request.setAttribute("bbsDiv", bbsDiv);
		request.setAttribute("searchText", searchText);

		return "bbs";
	}

	// 게시글 수정
	@RequestMapping("/update")
	public String update(HttpServletRequest request, Model model) {
		String num = request.getParameter("num");
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		String userid = request.getParameter("userid");

		Map<String, String> map = new HashMap<String, String>();
		map.put("item1", title);
		map.put("item2", content); // 게시글 수정 세팅 및 할당
		map.put("item3", num);
		bbsservice.bbsupdate(map);

		bbsservice.bbsCountUpdate(num); // 조회수 올림

		model.addAttribute("dto", bbsservice.bbsView(num)); // 게시글 세부 내용 출력

		UserInfoDTO dto = new UserInfoDTO(); // 이용자와 작성자가 같은지 확인
		dto = dao.loginCheck(userid); // 위와 동일
		model.addAttribute("bbsdto", dto); // 위와 동일

		List<Bbs_CommentDTO> cmdto = new ArrayList<Bbs_CommentDTO>();
		cmdto = cmservice.BbsCommentList(num); // 게시글 댓글 출력
		model.addAttribute("cm_dto", cmdto);


		return "view";
	}

	// 게시글 삭제
	@RequestMapping("/delete")
	public String delete(RedirectAttributes redirect, @RequestParam(required = false, defaultValue = "1") int pageNum,
			HttpServletRequest request, Model model) {
		String num = request.getParameter("num");
		String where = request.getParameter("where");
		String orderBy = request.getParameter("orderBy");

		cmservice.BbsCommentAllDelete(num); // 게시글 테이블에 종속된 댓글 테이블 데이터 먼저 삭제
		likeService.deleteBbsLikeDel(num); // " 좋아요 테이블 데이터 삭제
		bbsservice.bbsdelete(num); // 게시글 삭제

		model.addAttribute("bbslist", bbsservice.bbslist(where, orderBy, pageNum));
		redirect.addAttribute("searchText", null);
		redirect.addAttribute("orderBy", null);

		return "redirect:/bbs";
	}

	// 댓글 삭제
	@RequestMapping("/bbscommentdelete")
	public String bbscommentdelete(HttpServletRequest request, Model model) {
		String cm_num = request.getParameter("cm_num"); // 댓글 번호
		String bbs_num = request.getParameter("bbs_num"); // 게시글 번호
		String userid = request.getParameter("id"); // 로그인 한 아이디

		bbsservice.bbscmdeletecount(bbs_num);
		cmservice.BbsCommentDelete(cm_num);
		UserInfoDTO dto = new UserInfoDTO();

		if (bbsservice.bbsView(bbs_num) != null) {
			if (userid != null) {
				dto = dao.loginCheck(userid);
				model.addAttribute("bbsdto", dto); // 로그인한 사람 정보
			}
			bbsservice.bbsCountUpdate(bbs_num);
			model.addAttribute("dto", bbsservice.bbsView(bbs_num)); // 작성자 정보
			List<Bbs_CommentDTO> cmdto = new ArrayList<Bbs_CommentDTO>();
			cmdto = cmservice.BbsCommentList(bbs_num);
			model.addAttribute("cm_dto", cmdto); // 댓글 관련
		}

		return "view";
	}

	@RequestMapping("/bbscommentwrite")
	public String bcwrite(HttpServletRequest request, Model model) {
		String num = request.getParameter("num");
		String id = request.getParameter("id");
		String cm_content = request.getParameter("cm_content").replace("\r\n", "<br>");
		String rcm_name = request.getParameter("rcm_name");
		String rcm_num = request.getParameter("rcm_num");
		UserInfoDTO dto = new UserInfoDTO();
		Map<String, String> map = new HashMap<String, String>();
		map.put("item1", num);
		map.put("item2", id);
		map.put("item3", cm_content);
		map.put("item4", rcm_name);
		map.put("item5", rcm_num);
		cmservice.BbsCommentWrite(map);
		if (id != null) {
			dto = dao.loginCheck(id);
			model.addAttribute("bbsdto", dto);
		}
		bbsservice.bbsCountUpdate(num);
		model.addAttribute("dto", bbsservice.bbsView(num));
		List<Bbs_CommentDTO> cmdto = new ArrayList<Bbs_CommentDTO>();
		cmdto = cmservice.BbsCommentList(num);
		model.addAttribute("cm_dto", cmdto);
		bbsservice.bbscmupdate(num);

		return "view";
	}

	@ResponseBody
	@RequestMapping("/upLike")
	public int upLike(@RequestParam("bbs_num") String bbs_num) {

		return bbsservice.upLike(bbs_num);
	}

	@ResponseBody
	@RequestMapping("/downLike")
	public int downLike(@RequestParam("bbs_num") String bbs_num) {

		return bbsservice.downLike(bbs_num);
	}

	@ResponseBody
	@PostMapping("/likeCheck")
	public int likeCheck(@RequestParam("id") String id, @RequestParam("bbs_num") String bbs_num) {

		return likeService.likeCheck(id, bbs_num);
	}

	@ResponseBody
	@PostMapping("/likedelete")
	public int likedelete(@RequestParam("id") String id, @RequestParam("bbs_num") String bbs_num) {
		return likeService.likeDelete(id, bbs_num);
	}

	@ResponseBody
	@PostMapping("/likeinsert")
	public int likeinsert(@RequestParam("id") String id, @RequestParam("bbs_num") String bbs_num) {
		return likeService.likeInsert(id, bbs_num);
	}

	@ResponseBody
	@GetMapping("/reviewCnt")
	public int reviewCnt(@RequestParam("p_num") String p_num) {

		return reviewservice.reviewCnt(p_num);
	}

	@RequestMapping("/report")
	public String report() {
		return "report";
	}

	@RequestMapping("/productpick")
	public String productpick(HttpServletRequest request, Model model) {

		String id = request.getParameter("id");
		model.addAttribute("pickList", pickService.pickAndShopList(id));

		return "productpick";
	}

	@RequestMapping("/pickListInsert")
	public String pickListInsert(HttpServletRequest request, RedirectAttributes redirect) {
		String p_num = request.getParameter("p_num");
		String id = request.getParameter("id");

		int result = pickService.pickListInsert(p_num, id);
		if (result == 1) {
			System.out.println("정상적으로 찜이 완료 되었습니다.");
		} else {
			System.out.println("찜 오류");
		}

		redirect.addAttribute("num", p_num);

		return "redirect:/detail";
	}

	@ResponseBody
	@PostMapping("/pickListDelete")
	public int pickListDelete(@RequestParam("id") String id, @RequestParam("p_num") String p_num) {
		return pickService.pickListDelete(p_num, id);
	}

	@ResponseBody
	@PostMapping("/pickCheck")
	public int pickCheck(@RequestParam("id") String id, @RequestParam("p_num") String p_num) {

		return pickService.pickCheck(id, p_num);
	}

	@RequestMapping("/detail")
	public String detail(Model model, HttpServletRequest request) {
		String num = request.getParameter("num");

		String orderby = "rv_date";
		String where = "where p_num = " + num;

		model.addAttribute("dto", shopservice.detail(num));

		List<ReviewDTO> redto = new ArrayList<>();

		redto = reviewservice.reviewlist(where, orderby);

		model.addAttribute("reviewCnt", reviewservice.reviewCnt(num));
		model.addAttribute("reviewStar", reviewservice.reviewStar(num));
		model.addAttribute("p_num", num);
		model.addAttribute("reviewreview", redto);

		return "detail";
	}

	@RequestMapping("/productupdateForm")
	public String productupdateForm(HttpServletRequest request, Model model) {
		String p_num = request.getParameter("p_num");
		String p_name = request.getParameter("p_name");
		String p_price = request.getParameter("p_price");
		String p_stock = request.getParameter("p_stock");
		String p_category = request.getParameter("p_category");
		String p_content = request.getParameter("p_content").replace("\r\n", "<br>");

		model.addAttribute("p_num", p_num);
		model.addAttribute("p_name", p_name);
		model.addAttribute("p_price", p_price);
		model.addAttribute("p_stock", p_stock);
		model.addAttribute("p_category", p_category);
		model.addAttribute("p_content", p_content);

		return "productupdateForm";
	}

	@RequestMapping("/productinsertForm")
	public String productinsertForm(HttpServletRequest request, Model model) {
		String category = request.getParameter("category");
		model.addAttribute("category", category);

		return "productinsertForm";
	}

	@RequestMapping("/productInsert")
	public String productInsert(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestParam("file") MultipartFile file, HttpServletRequest request, RedirectAttributes redirect) {

		String fileRealName = file.getOriginalFilename();
		String fileExtension = fileRealName.substring(fileRealName.lastIndexOf("."), fileRealName.length());
		String uploadFolder = "E:\\Project\\Thymeleaf10TEST\\src\\main\\resources\\static\\images\\shop";
		int fileName = shopservice.lastPnumCome();

		File saveFile = new File(uploadFolder + "\\" + fileName + fileExtension);

		try {
			file.transferTo(saveFile);
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		String p_name = request.getParameter("p_name");
		String p_price = request.getParameter("p_price");
		String p_stock = request.getParameter("p_stock");
		String p_category = request.getParameter("p_category");
		String p_content = request.getParameter("p_content");
		String img_dir = "images/shop/" + fileName + fileExtension;

		Map<String, String> map = new HashMap<String, String>();
		map.put("item1", p_name);
		map.put("item2", p_price);
		map.put("item3", p_stock);
		map.put("item4", p_category);
		map.put("item5", p_content);
		map.put("item6", img_dir);

		shopservice.productinsert(map);

		redirect.addAttribute("list", "p_date"); //////////// shop order by 기능 추가하려면 수정해야함
		redirect.addAttribute("category", p_category);

		return "redirect:/shop";
	}

	@RequestMapping("/shop")
	public String shop(@RequestParam(required = false, defaultValue = "1") int pageNum, Model model,
			HttpServletRequest request) {

		String list = request.getParameter("list");
		String category = request.getParameter("category");
		System.out.println(list + category);

		PageInfo<ShopAndReviewDTO> p = new PageInfo<>(shopservice.shoplist(list, category, pageNum), 10);
		model.addAttribute("shoplist", p);

		model.addAttribute("category", category);

		return "shop";
	}

	@RequestMapping("/reviewForm")
	public String reviewForm(Model model, HttpServletRequest request) {

		String id = request.getParameter("id");
		String p_num = request.getParameter("p_num");
		BbsDTO dto = new BbsDTO();
		dto.setId(id);
		model.addAttribute("p_num", p_num);
		return "reviewForm";
	}

	@RequestMapping("reviewwrite")
	public String reviewwrite(HttpServletRequest request, Model model, RedirectAttributes redirect) {
		String id = request.getParameter("id");
		String rv_like = request.getParameter("rv_like");
		String rv_content = request.getParameter("rv_content");
		String p_num = request.getParameter("p_num");
		Map<String, String> map = new HashMap<String, String>();
		map.put("item1", id);
		map.put("item2", rv_like);
		map.put("item3", rv_content);
		map.put("item4", p_num);
		reviewservice.reviewwrite(map);
		redirect.addAttribute("num", p_num);

		return "redirect:/detail";
	}

	@RequestMapping("/buyProductForm")
	public String buyProductForm(HttpServletRequest request, Model model) {
		String id = request.getParameter("id");
		String p_num = request.getParameter("p_num");
		String p_name = request.getParameter("p_name");
		String p_price = request.getParameter("p_price");
		String quantity = request.getParameter("quantity");

		model.addAttribute("id", id);
		model.addAttribute("p_num", p_num);
		model.addAttribute("p_name", p_name);
		model.addAttribute("p_price", p_price);
		model.addAttribute("quantity", quantity);

		return "buyProductForm";
	}

	@RequestMapping("/" + "Product")
	public String deleteProject(RedirectAttributes redirect, HttpServletRequest request) {
		String p_num = request.getParameter("p_num");
		String p_category = request.getParameter("p_category");

		reviewservice.reviewDel(p_num);
		shopservice.deleteProduct(p_num);

		redirect.addAttribute("list", "p_date"); //////////// shop order by 기능 추가하려면 수정해야함
		redirect.addAttribute("category", p_category);

		return "redirect:/shop";
	}

	@RequestMapping("/buyProduct")
	public String buyProduct(HttpServletRequest request, RedirectAttributes redirect, HttpServletResponse response,
			Model model) throws IOException {
		String id = request.getParameter("id");
		String p_num = request.getParameter("p_num");
		String quantity = request.getParameter("quantity");
		String userGrade = request.getParameter("userGrade");
//		String usertotal = request.getParameter("usertotal");
		int totalPrice = Integer.parseInt(request.getParameter("totalPrice"));
		int point = 0;
		String orderby = "rv_date";
		String where = "where p_num = " + p_num;
		String url = "redirect:/detail";

		model.addAttribute("dto", shopservice.detail(p_num));

		List<ReviewDTO> redto = new ArrayList<>();

		redto = reviewservice.reviewlist(where, orderby);

		model.addAttribute("reviewCnt", reviewservice.reviewCnt(p_num));
		model.addAttribute("reviewStar", reviewservice.reviewStar(p_num));
		model.addAttribute("p_num", p_num);
		model.addAttribute("reviewreview", redto);

		if (userGrade.equals("1")) {
			System.out.println("일반회원 포인트 지급");
			point = (totalPrice * 10) / 100;
		} else if (userGrade.equals("2")) {
			System.out.println("우수회원 포인트 지급");
			point = (totalPrice * 20) / 100;
		}

		System.out.println("point = " + point);

		int result = service.userbuyProduct(id, totalPrice, point);

		if (result == 1) {
			shopservice.productReduce(quantity, p_num);
			System.out.println("구매 완료");

		} else if (result == 0) {

			System.out.println("구매 실패");
		}

		redirect.addAttribute("num", p_num);
		UserInfoDTO dto = new UserInfoDTO();
		dto = dao.loginCheck(id);
		System.out.println(dto.getTotalprice());

		if (dto.getLv() == 1 && dto.getTotalprice() > 500000) {
			service.Lvupdate(id);
			System.out.println("승급");
			model.addAttribute("userupdate", dao.loginCheck(id));

			response.setContentType("text/html; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println("<script>alert('우수회원으로 승급하셨습니다!');</script>");
			out.flush();
			url = "newdetail";

		} else {
			System.out.println("승급실패");
		}

		return url;
	}

	@RequestMapping("/productupdate")
	public String productupdate(@RequestParam("file") MultipartFile file, HttpServletRequest request,
			RedirectAttributes redirect) {
		String fileRealName = file.getOriginalFilename();
		String fileExtension = fileRealName.substring(fileRealName.lastIndexOf("."), fileRealName.length());

		String fileName = request.getParameter("p_num");

		String deletePath = "E:\\Project\\Thymeleaf2TEST\\src\\main\\resources\\static\\images\\shop";
		File Filepath = new File(deletePath + "\\" + fileName + fileExtension);
		if (Filepath.exists()) {
			Filepath.delete();
			System.out.println("파일 삭제");
		}

		String p_name = request.getParameter("p_name");
		String p_price = request.getParameter("p_price");
		String p_stock = request.getParameter("p_stock");
		String p_category = request.getParameter("p_category");
		String p_content = request.getParameter("p_content");
		String p_num = request.getParameter("p_num");
		String img_dir = "images/shop/" + fileName + fileExtension;

		shopservice.productupdate(p_name, p_price, p_stock, p_content, p_category, img_dir, p_num);

		File saveFile = new File(Filepath + "\\" + fileName + fileExtension);

		try {
			file.transferTo(saveFile);
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		redirect.addAttribute("list", "p_date"); //////////// shop order by 기능 추가하려면 수정해야함
		redirect.addAttribute("category", p_category);

		return "redirect:/shop";
	}

	@ResponseBody
	@PostMapping("/emailConfirm")
	public String emailConfirm(String email) throws Exception {
		String confirm = emailService.sendSimpleMessageSignup(email);
		return confirm;
	}

	@ResponseBody
	@RequestMapping("/idAndEmailMatching")
	public int findIdCk(@RequestParam("id") String id, @RequestParam("email") String email) throws Exception {
		int result = service.idAndEmailMatching(id, email);

		return result;
	}

	// 회원가입시 인증 했던 메일로 인증번호 확인 후 비밀번호 변경
	@ResponseBody
	@PostMapping("/emailPasswordChange")
	public String emailPasswordChange(String email) throws Exception {
		String confirm = emailService.sendSimpleMessagePassword(email);

		return confirm;
	}

	@RequestMapping("/mypage")
	public String mypage(HttpServletRequest request, Model model) {
		String loginId = request.getParameter("loginId");
		model.addAttribute("loginUser", dao.loginCheck(loginId));
		model.addAttribute("carpick", cpservice.CarPickList(loginId));
		
		return "mypage";
	}

	@RequestMapping("/drmypage")
	public String drmypage(HttpServletRequest request, Model model) {
		String loginId = request.getParameter("loginId");
		model.addAttribute("drLoginUser", drdao.drLoginCheck(loginId));
		List<DealerDTO> dto = dealerservice.drsellingcarDAO(loginId);
		model.addAttribute("dto", dto);
		return "drmypage";
	}

	@RequestMapping("/jusoPopup")
	public ModelAndView jusoPopup(HttpServletRequest request, @RequestParam HashMap<String, String> p, Locale locale) {

		// callback 함수가 실행되어야하니 호출한 html 파일로 return
		ModelAndView mav = new ModelAndView("jusoPopup");

		String inputYn = request.getParameter("inputYn");
		String zipNo = request.getParameter("zipNo");
		String roadAddrPart1 = request.getParameter("roadAddrPart1");
		String roadAddrPart2 = request.getParameter("roadAddrPart2");
		String addrDetail = request.getParameter("addrDetail");
		String jibunAddr = request.getParameter("jibunAddr");

		mav.addObject("inputYn", inputYn);
		mav.addObject("zipNo", zipNo);
		mav.addObject("roadAddrPart1", roadAddrPart1);
		mav.addObject("roadAddrPart2", roadAddrPart2);
		mav.addObject("jibunAddr", jibunAddr);
		mav.addObject("addrDetail", addrDetail);

		return mav;
	}

	@RequestMapping("/openUdeleteForm")
	public String openUdeleteForm() {
		return "openUdeleteForm";
	}

	@RequestMapping("/userdelete")
	public String userdelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String id = request.getParameter("id");

		udservice.reviewAlldelete(id);
		udservice.pickAlldelete(id);
		udservice.car_pickAlldelete(id);
		udservice.bbs_likeAlldelete(id);
		List<BbsDTO> dto = new ArrayList<BbsDTO>();
		dto = udservice.UserBbs(id);

		for (int i = 0; i < dto.size(); i++) { // 탈퇴유저가 한 기록중에 댓글,좋아요등 먼저삭제
			String num = String.valueOf(dto.get(i).getBbs_num());
			cmservice.BbsCommentAllDelete(num); // 게시글 테이블에 종속된 댓글 테이블 데이터 먼저 삭제
			likeService.deleteBbsLikeDel(num); // " 좋아요 테이블 데이터 삭제
		}
		List<Bbs_CommentDTO> cdto = new ArrayList<Bbs_CommentDTO>();
		cdto = udservice.UserBbsComment(id);

		for (int i = 0; i < cdto.size(); i++) { // 탈퇴유저가 댓글적은거 삭제될때 카운트 -1
			String bbs_num = String.valueOf(cdto.get(i).getBbs_num());
			bbsservice.bbscmdeletecount(bbs_num);
		}

		udservice.bbs_commentAlldelete(id);
		udservice.bbsAlldelete(id);
		udservice.UserDelete(id);

		HttpSession session = request.getSession();
		session.setAttribute("loginUser", null);

		response.setContentType("text/html; charset=UTF-8");

		PrintWriter out = response.getWriter();

		out.println("<script>window.close();</script>");

		out.flush();

		return "redirect:/logout";
	}

	@RequestMapping("/buyUsePointProduct")
	public String buyUsePointProduct(HttpServletRequest request, RedirectAttributes redirect, Model model) {
		String id = request.getParameter("id");
		String p_num = request.getParameter("p_num");
		String quantity = request.getParameter("quantity");
//		String userGrade = request.getParameter("userGrade");
//		String usertotal = request.getParameter("usertotal");
		String usingPoint = request.getParameter("usingPoint");
//		int totalPrice = Integer.parseInt(request.getParameter("totalPrice"));
//		int point = 0;
		String orderby = "rv_date";
		String where = "where p_num = " + p_num;
		String url = "redirect:/detail";

		model.addAttribute("dto", shopservice.detail(p_num));

		List<ReviewDTO> redto = new ArrayList<>();

		redto = reviewservice.reviewlist(where, orderby);

		model.addAttribute("reviewCnt", reviewservice.reviewCnt(p_num));
		model.addAttribute("reviewStar", reviewservice.reviewStar(p_num));
		model.addAttribute("p_num", p_num);
		model.addAttribute("reviewreview", redto);

		int result = service.buyUsePointProduct(usingPoint, id);

		if (result == 1) {
			shopservice.productReduce(quantity, p_num);
			System.out.println("포인트로 구매 완료");

		} else if (result == 0) {

			System.out.println("포인트로 구매 실패");
		}

		redirect.addAttribute("num", p_num);
		/*
		 * UserInfoDTO dto = new UserInfoDTO(); dto = dao.loginCheck(id);
		 */
		return url;
	}

	@ResponseBody
	@RequestMapping("/restPoint")
	public int restPoint(@RequestParam("id") String id) {

		return service.restPoint(id);

	}

	@ResponseBody
	@RequestMapping("/afterRestPoint")
	public int afterRestPoint(@RequestParam("id") String id, @RequestParam("minusPoint") String minusPoint) {

		return service.afterRestPoint(minusPoint, id);
	}

	@RequestMapping("/messagePopup")
	public String messagePopup(HttpServletRequest request, Model model) {
		String id = request.getParameter("id");

		model.addAttribute("messageList", messageService.messageList(id));

		return "messagePopup";
	}
	
	@RequestMapping("/carsearch")
	public String carsearch(HttpServletRequest request,Model model) {
		String search = request.getParameter("search");
		System.out.println(search);
		List<CarSearchDTO> dto = carservice.CarSearchDAO(search);
		
		return "";
	}
	

	@RequestMapping("/car_reservationForm")
	public String car_reservation() {

		return "car_reservationForm";
	}

	@RequestMapping("/carReservation")
	public String car_reservation(HttpServletRequest request, HttpServletResponse response) throws IOException {

		String dr_c_name = request.getParameter("dr_c_name");
		String userid = request.getParameter("userid");
		String username = request.getParameter("username");
		String userphone = request.getParameter("userphone");
		String reserDate = request.getParameter("reserDate") + " " + request.getParameter("reserTime") + ":00";
		System.out.println(reserDate);
		String c_num = request.getParameter("c_num");

		Map<String, String> map = new HashMap<String, String>();
		map.put("item1", dr_c_name);
		map.put("item2", userid);
		map.put("item3", username);
		map.put("item4", userphone);
		map.put("item5", reserDate);
		map.put("item6", c_num);
		
		reserService.reservationInsert(map);
		
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<script>window.close();</script>");
		out.flush();

		return "car_detail";
	}
	
	@RequestMapping("/car_reservationList")
	public String car_reservationList(HttpServletRequest request,Model model) {

		String id = request.getParameter("id");
		
		List<Car_reservationDTO> ingdto = new ArrayList<>();
		ingdto = reserService.userReserIng(id);
		
		List<Car_reservationDTO> finishdto = new ArrayList<>();
		finishdto = reserService.userReserFinish(id);
		
		model.addAttribute("userReserIngList",ingdto);
		model.addAttribute("userReserFinishList",finishdto);
		
		return "car_reservationList";
	}

	@RequestMapping("car_DRreservationList")
	public String car_DRreservationList(HttpServletRequest request,Model model) {

		String id = request.getParameter("id");
		System.out.println(id);
		
		List<Car_reservationDTO> ingdto = new ArrayList<>();
		ingdto = reserService.drReser(id);
		
		model.addAttribute("drReserList",ingdto);
		
		return "car_DRreservationList";
	}
	
	@RequestMapping("/confirmReser")
	public String userConfirmReser(RedirectAttributes redirect, HttpServletRequest request) {
		String id = request.getParameter("id");
		String c_num = request.getParameter("c_num");
		
		List<Car_reservationDTO> dto = reserService.buycompleteDAO(id);
		
		int n = reserService.delReser(c_num);
		
		if(n==1) {
			System.out.println("예약 삭제 성공");
			
			DealerDTO drdto = drdao.dridCheck(dto.get(0).getDr_c_name());
			
			carservice.cardeleteDAO(dto.get(0).getC_num()); //차 삭제
			dealerservice.sellingdownDAO(drdto.getDr_id()); //판매중 카운트 -
			dealerservice.soldDAO(drdto.getDr_id()); //판매완료 카운트 +
		}else {
			System.out.println("예약 삭제 실패");
		}
		
		redirect.addAttribute("loginId",id);
		
		return "redirect:/mypage";
	}
	
	@RequestMapping("/drConfirmReser")
	public String drConfirmReser(RedirectAttributes redirect, HttpServletRequest request) {
		String id = request.getParameter("id");
		String c_num = request.getParameter("c_num");
		
		int n = reserService.drConfirmReser(c_num);
		
		if(n==1) {
			System.out.println("딜러 판매 완료 성공");
		}else {
			System.out.println("딜러 판매 완료 실패");
		}
		
		redirect.addAttribute("loginId",id);
		
		return "redirect:/drmypage";
	}
	
	@ResponseBody           //////////////////////////////////////////////
	@RequestMapping("/car_img")
	public String car_img(@RequestParam("c_num")String c_num) {
		
		
		return carimgDao.CarImgDAO(c_num);
	}
	

	@RequestMapping("/carinsertForm")
	public String carinsertForm(HttpServletRequest request, Model model) {
		String id = request.getParameter("id");
		DealerDTO dto = new DealerDTO();
		dto = drdao.drLoginCheck(id);
		model.addAttribute("drdto", dto);

		return "carinsertForm";
	}

	@RequestMapping("/carinsert")
	public String carinsert(HttpServletResponse response, HttpServletRequest request, Model model,
			@RequestParam("file") List<MultipartFile> file) throws IOException {
		// car
		String c_num = request.getParameter("c_num");
		String c_brand = request.getParameter("c_brand");
		String c_name = request.getParameter("c_name");
		String c_grade = request.getParameter("c_grade");
		String c_scail = request.getParameter("c_scail");
		String c_year = request.getParameter("c_year");
		String c_coler = request.getParameter("c_coler");
		String c_mile = request.getParameter("c_mile");
		System.out.println(c_num);
		System.out.println(c_brand);
		System.out.println(c_name);
		System.out.println(c_grade);
		System.out.println(c_scail);
		System.out.println(c_year);
		System.out.println(c_coler);
		System.out.println(c_mile);
		Map<String, String> carmap = new HashMap<String, String>();
		carmap.put("item1", c_num);
		carmap.put("item2", c_brand);
		carmap.put("item3", c_name);
		carmap.put("item4", c_scail);
		carmap.put("item5", c_grade);
		carmap.put("item6", c_year);
		carmap.put("item7", c_mile);
		carmap.put("item8", c_coler);

		// option
		String sun = request.getParameter("sunroof");
		String navi = request.getParameter("navi");
		String handle = request.getParameter("handle");
		String hud = request.getParameter("hud");
		String camera = request.getParameter("camera");
		String ldws = request.getParameter("ldws");
		String ecm = request.getParameter("ecm");
		String tpms = request.getParameter("tpms");
		int sunx = 0;
		int navix = 0;
		int handlex = 0;
		int hudx = 0;
		int camerax = 0;
		int ldwsx = 0;
		int ecmx = 0;
		int tpmsx = 0;
		if (sun != null) {
			sunx = 1;
		}
		if (navi != null) {
			navix = 1;
		}
		if (handle != null) {
			handlex = 1;
		}
		if (hud != null) {
			hudx = 1;
		}
		if (camera != null) {
			camerax = 1;
		}
		if (ldws != null) {
			ldwsx = 1;
		}
		if (ecm != null) {
			ecmx = 1;
		}
		if (tpms != null) {
			tpmsx = 1;
		}
		System.out.println(sunx);
		System.out.println(navix);
		System.out.println(handlex);
		System.out.println(hudx);
		System.out.println(camerax);
		System.out.println(ldwsx);
		System.out.println(ecmx);
		System.out.println(tpmsx);

		Map<String, Object> optmap = new HashMap<String, Object>();
		optmap.put("item1", c_num);
		optmap.put("item2", sunx);
		optmap.put("item3", navix);
		optmap.put("item4", handlex);
		optmap.put("item5", hudx);
		optmap.put("item6", camerax);
		optmap.put("item7", ldwsx);
		optmap.put("item8", ecmx);
		optmap.put("item9", tpmsx);

		// car_sale_post
		String cp_address = request.getParameter("cp_address");
		String cp_price = request.getParameter("cp_price");
		String content = request.getParameter("content");
		String drid = request.getParameter("id");
		String address = cp_address.substring(0, 2);
		System.out.println(cp_address);
		System.out.println(cp_price);
		System.out.println(content);
		System.out.println(drid);
		System.out.println(address);
		Map<String, String> spmap = new HashMap<String, String>();
		spmap.put("item1", c_num);
		spmap.put("item2", content);
		spmap.put("item3", cp_price);
		spmap.put("item4", address);
		spmap.put("item5", drid);

		// carimg
		CarImgDTO dto = new CarImgDTO();

		try {
			for (int i = 0; i < file.size(); i++) {
				if (file.get(i).getOriginalFilename().equals("")) {
					break;
				}
				String fileRealName = file.get(i).getOriginalFilename();
				String fileExtension = fileRealName.substring(fileRealName.lastIndexOf("."), fileRealName.length());
				String uploadFolder = "D://image//car";
				String upload = "car";
				String uuid = UUID.randomUUID().toString();
				uuid = uuid.substring(0, 10);
				File saveFile = new File(uploadFolder + "//" + uuid + fileExtension);

				file.get(i).transferTo(saveFile); // 지정한 폴더에 저장

				if (dto.getImg_dir_1() == null) {
					dto.setImg_dir_1(upload + "//" + uuid + fileExtension);
				} else if (dto.getImg_dir_2() == null) {
					dto.setImg_dir_2(upload + "//" + uuid + fileExtension);
				} else if (dto.getImg_dir_3() == null) {
					dto.setImg_dir_3(upload + "//" + uuid + fileExtension);
				} else if (dto.getImg_dir_4() == null) {
					dto.setImg_dir_4(upload + "//" + uuid + fileExtension);
				} else if (dto.getImg_dir_5() == null) {
					dto.setImg_dir_5(upload + "//" + uuid + fileExtension);
				} else if (dto.getImg_dir_6() == null) {
					dto.setImg_dir_6(upload + "//" + uuid + fileExtension);
				}
			}
			if (dto.getImg_dir_1() == null) {
				dto.setImg_dir_1("empty//empty.png");
			}
			if (dto.getImg_dir_2() == null) {
				dto.setImg_dir_2("empty//empty.png");
			}
			if (dto.getImg_dir_3() == null) {
				dto.setImg_dir_3("empty//empty.png");
			}
			if (dto.getImg_dir_4() == null) {
				dto.setImg_dir_4("empty//empty.png");
			}
			if (dto.getImg_dir_5() == null) {
				dto.setImg_dir_5("empty//empty.png");
			}
			if (dto.getImg_dir_6() == null) {
				dto.setImg_dir_6("empty//empty.png");
			}
			System.out.println(dto.getImg_dir_1());
			System.out.println(dto.getImg_dir_2());
			System.out.println(dto.getImg_dir_3());
			System.out.println(dto.getImg_dir_4());
			System.out.println(dto.getImg_dir_5());
			System.out.println(dto.getImg_dir_6());
			carinservice.Carinsert(carmap);
			carinservice.CarOptioninsert(optmap);
			carinservice.CarSPinsert(spmap);
			carinservice.CarImginsertDAO(c_num, dto.getImg_dir_1(), dto.getImg_dir_2(), dto.getImg_dir_3(),
					dto.getImg_dir_4(), dto.getImg_dir_5(), dto.getImg_dir_6());
		} catch (IllegalStateException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		dealerservice.sellingupDAO(drid);

		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<script>alert('등록되었습니다');</script>");
		out.flush();

		model.addAttribute("drLoginUser", drdao.drLoginCheck(drid));
		return "drmypage";
	}

	@RequestMapping("/car_detail")
	public String cardetail(HttpServletRequest request, Model model) {
		String num = request.getParameter("num");
		String userid = request.getParameter("userid");
		System.out.println(num);
		System.out.println(userid);
		CardealerDTO dto = carservice.CardealerListDAO(num);
		System.out.println(userid);
		UserInfoDTO udto = new UserInfoDTO();
		udto.setId(userid);
		CarImgDTO idto = carservice.CarImg(num);
		model.addAttribute("user", udto);
		model.addAttribute("cddto", dto);
		model.addAttribute("carimg", idto);

		return "car_detail";
	}

	@RequestMapping("/carpick")
	public String carpick(HttpServletRequest request, Model model) {

		String id = request.getParameter("id");
		model.addAttribute("carpick", cpservice.CarPickList(id));

		return "carpick";
	}

	@RequestMapping("/carpickListInsert")
	public String carpickListInsert(HttpServletRequest request, RedirectAttributes redirect, Model model) {
		String num = request.getParameter("p_num");
		String id = request.getParameter("id");
		int result = cpservice.CarPickInsert(num, id);
		if (result == 1) {
			System.out.println("정상적으로 찜이 완료 되었습니다.");
		} else {
			System.out.println("찜 오류");
		}
		CardealerDTO dto = carservice.CardealerListDAO(num);
		UserInfoDTO udto = new UserInfoDTO();
		udto.setId(id);
		model.addAttribute("user", udto);
		model.addAttribute("cddto", dto);

		return "car_detail";
	}

	@ResponseBody
	@PostMapping("/carpickListDelete")
	public int carpickListDelete(@RequestParam("id") String id, @RequestParam("p_num") String p_num) {
		return cpservice.CarPickDelete(p_num, id);
	}

	@ResponseBody
	@PostMapping("/carpickCheck")
	public int carpickCheck(@RequestParam("id") String id, @RequestParam("p_num") String p_num) {

		return cpservice.CarPickCheck(id, p_num);
	}
	
	@RequestMapping("/indexcar")
	public String indexcar(@RequestParam(required = false, defaultValue = "1") int pageNum,HttpServletRequest request, Model model) {
		String brand = request.getParameter("brand");
		PageInfo<CarDTO> car = new PageInfo<>(carservice.carBrandList(brand,pageNum),10);
		model.addAttribute("carlist", car);
		
		model.addAttribute("cardto", carservice.CarList());
		model.addAttribute("tinydto", carservice.TinyCarList());
		model.addAttribute("smalldto", carservice.SmallCarList());
		model.addAttribute("semidto", carservice.semimidsizeCarList());
		model.addAttribute("middto", carservice.midsizeCarList());
		model.addAttribute("bigdto", carservice.bigCarList());
		model.addAttribute("sportsdto", carservice.sportsCarList());
		// 주행거리
		model.addAttribute("twedto", carservice.MiletwetyThUnder());
		model.addAttribute("fortydto", carservice.MilefortyThUnder());
		model.addAttribute("sixtydto", carservice.MilesixtyThUnder());
		model.addAttribute("eightydto", carservice.MileeightyThUnder());
		model.addAttribute("oneundto", carservice.MileoneHunThUnder());
		model.addAttribute("oneupdto", carservice.MileoneHunThUp());
		// 가격
		model.addAttribute("tenmildto", carservice.Pricetenmil());
		model.addAttribute("twentymildto", carservice.Pricetwentymil());
		model.addAttribute("thirymildto", carservice.Pricethirtymil());
		model.addAttribute("fortymildto", carservice.Pricefortymil());
		model.addAttribute("fiftymildto", carservice.Pricefiftymil());
		model.addAttribute("fiftymilupdto", carservice.Pricefiftymilup());
		// 지역
		model.addAttribute("gyegidto", carservice.Gyeonggi());
		model.addAttribute("seouldto", carservice.Seoul());
		model.addAttribute("busandto", carservice.Busan());
		model.addAttribute("incheondto", carservice.Incheon());
		model.addAttribute("daegudto", carservice.Daegu());
		model.addAttribute("daejeondto", carservice.Daejeon());
		model.addAttribute("gwangjudto", carservice.Gwangju());
		// 옵션
		model.addAttribute("sunrootdto", optservice.sunroof());
		model.addAttribute("navidto", optservice.navi());
		model.addAttribute("handledto", optservice.handle());
		model.addAttribute("huddto", optservice.hud());
		model.addAttribute("cameradto", optservice.camera());
		model.addAttribute("ldwsdto", optservice.ldws());
		model.addAttribute("ecmdto", optservice.ecm());
		model.addAttribute("tpmsdto", optservice.tpms());
		
		return "car";
	}

	// 중고차 판매 메인 화면
	@RequestMapping("/car")
	public String car(@RequestParam(required = false, defaultValue = "1") int pageNum, HttpServletRequest request,
			Model model) {
		String id = request.getParameter("id");
		UserInfoDTO udto = new UserInfoDTO();
		udto.setId(id);
		System.out.println(id);
		model.addAttribute("user", udto);
		PageInfo<CarDTO> car = new PageInfo<>(carservice.CarList(pageNum), 10);
		model.addAttribute("carlist", car);
		// 차종
		model.addAttribute("cardto", carservice.CarList());
		model.addAttribute("tinydto", carservice.TinyCarList());
		model.addAttribute("smalldto", carservice.SmallCarList());
		model.addAttribute("semidto", carservice.semimidsizeCarList());
		model.addAttribute("middto", carservice.midsizeCarList());
		model.addAttribute("bigdto", carservice.bigCarList());
		model.addAttribute("sportsdto", carservice.sportsCarList());
		// 주행거리
		model.addAttribute("twedto", carservice.MiletwetyThUnder());
		model.addAttribute("fortydto", carservice.MilefortyThUnder());
		model.addAttribute("sixtydto", carservice.MilesixtyThUnder());
		model.addAttribute("eightydto", carservice.MileeightyThUnder());
		model.addAttribute("oneundto", carservice.MileoneHunThUnder());
		model.addAttribute("oneupdto", carservice.MileoneHunThUp());
		// 가격
		model.addAttribute("tenmildto", carservice.Pricetenmil());
		model.addAttribute("twentymildto", carservice.Pricetwentymil());
		model.addAttribute("thirymildto", carservice.Pricethirtymil());
		model.addAttribute("fortymildto", carservice.Pricefortymil());
		model.addAttribute("fiftymildto", carservice.Pricefiftymil());
		model.addAttribute("fiftymilupdto", carservice.Pricefiftymilup());
		// 지역
		model.addAttribute("gyegidto", carservice.Gyeonggi());
		model.addAttribute("seouldto", carservice.Seoul());
		model.addAttribute("busandto", carservice.Busan());
		model.addAttribute("incheondto", carservice.Incheon());
		model.addAttribute("daegudto", carservice.Daegu());
		model.addAttribute("daejeondto", carservice.Daejeon());
		model.addAttribute("gwangjudto", carservice.Gwangju());
		// 옵션
		model.addAttribute("sunrootdto", optservice.sunroof());
		model.addAttribute("navidto", optservice.navi());
		model.addAttribute("handledto", optservice.handle());
		model.addAttribute("huddto", optservice.hud());
		model.addAttribute("cameradto", optservice.camera());
		model.addAttribute("ldwsdto", optservice.ldws());
		model.addAttribute("ecmdto", optservice.ecm());
		model.addAttribute("tpmsdto", optservice.tpms());

		return "car";
	}

	// checkbox선택후처리
	@ResponseBody
	@RequestMapping(value = "/carCheck", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> carCheck(@RequestBody CarBody car) throws Exception {
		System.out.println(car);
		System.out.println("차종");
		if (car.getScail().size() == 1) {
			CarDTO a = car.getScail().get(0);
			List<CarDTO> confirm = carservice.CarCheckList(a.getC_scail(), "null", "null", "null", "null", "null");
			return confirm;
		} else if (car.getScail().size() == 2) {
			CarDTO a = car.getScail().get(0);
			CarDTO b = car.getScail().get(1);
			List<CarDTO> confirm = carservice.CarCheckList(a.getC_scail(), b.getC_scail(), "null", "null", "null",
					"null");
			return confirm;
		} else if (car.getScail().size() == 3) {
			CarDTO a = car.getScail().get(0);
			CarDTO b = car.getScail().get(1);
			CarDTO c = car.getScail().get(2);
			List<CarDTO> confirm = carservice.CarCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(), "null",
					"null", "null");
			return confirm;
		} else if (car.getScail().size() == 4) {
			CarDTO a = car.getScail().get(0);
			CarDTO b = car.getScail().get(1);
			CarDTO c = car.getScail().get(2);
			CarDTO d = car.getScail().get(3);
			List<CarDTO> confirm = carservice.CarCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), "null", "null");
			return confirm;
		} else if (car.getScail().size() == 5) {
			CarDTO a = car.getScail().get(0);
			CarDTO b = car.getScail().get(1);
			CarDTO c = car.getScail().get(2);
			CarDTO d = car.getScail().get(3);
			CarDTO e = car.getScail().get(4);
			List<CarDTO> confirm = carservice.CarCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), e.getC_scail(), "null");
			return confirm;
		} else /* if(car.getScail().size()==6) */ {
			CarDTO a = car.getScail().get(0);
			CarDTO b = car.getScail().get(1);
			CarDTO c = car.getScail().get(2);
			CarDTO d = car.getScail().get(3);
			CarDTO e = car.getScail().get(4);
			CarDTO f = car.getScail().get(5);
			List<CarDTO> confirm = carservice.CarCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), e.getC_scail(), f.getC_scail());
			return confirm;
		}
//				else {
//					List<CarDTO> confirm = carservice.CarList();
//					return confirm;
//				}

	}

	// fromday부터 최대
	@ResponseBody
	@RequestMapping(value = "/carfromday", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> carfromday(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarDTO car) throws Exception {
		System.out.println(car.getC_year());
		if (car.equals(null)) {
			List<CarDTO> confirm = carservice.CarList(pageNum);
			return confirm;
		} else {
			List<CarDTO> confirm = carservice.CarfromDayList(car.getC_year());
			return confirm;
		}

	}

	// today부터 최소
	@ResponseBody
	@RequestMapping(value = "/cartoday", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> cartoday(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarDTO car) throws Exception {
		System.out.println(car.getC_year());
		if (car.equals(null)) {
			List<CarDTO> confirm = carservice.CarList(pageNum);
			return confirm;
		} else {
			List<CarDTO> confirm = carservice.CartoDayList(car.getC_year());
			return confirm;
		}
	}

	// from ~ to
	@ResponseBody
	@RequestMapping(value = "/carallday", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> carallday(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarBody car) throws Exception {
		System.out.println("all!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		System.out.println(car);
		CarDTO a = car.getYear().get(0);
		CarDTO b = car.getYear().get(1);
		System.out.println(a.getC_scail());
		System.out.println(b.getC_scail());
		if (car.equals(null)) {
			List<CarDTO> confirm = carservice.CarList(pageNum);
			return confirm;
		} else {
			List<CarDTO> confirm = carservice.CarallDayList(a.getC_scail(), b.getC_scail());
			return confirm;
		}

	}

	// 주행거리 체크후처리
	@ResponseBody
	@RequestMapping(value = "/carmile", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> carmile(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarBody car) throws Exception {
		System.out.println(car);
		System.out.println("주행거리");
		List<CarDTO> confirm = new ArrayList<>();
		if (car.getMile().size() == 1) {
			CarDTO a = car.getMile().get(0);
			int num1 = Integer.valueOf(a.getC_scail());
			if (num1 == 20000) {
				confirm = carservice.MileCarList(num1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			} else if (num1 == 100001) {
				confirm = carservice.MileCarList(0, 0, 0, 0, 0, 0, 0, 0, 0, num1);
			} else {
				confirm = carservice.MileCarList(0, num1 - 20000, num1, 0, 0, 0, 0, 0, 0, 0);
			}
			return confirm;
		} else if (car.getMile().size() == 2) {
			CarDTO a = car.getMile().get(0);
			CarDTO b = car.getMile().get(1);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			if (num1 == 20000 && num2 == 100001) { // 1번째 선택이 2만, 2번째선택이 10만
				confirm = carservice.MileCarList(num1, 0, 0, 0, 0, 0, 0, 0, 0, num2);
			} else if (num1 == 20000 && num2 != 100001) { // 1번째 선택이 2만, 2번째선택이 4,6,8만
				confirm = carservice.MileCarList(num1, num2 - 20000, num2, 0, 0, 0, 0, 0, 0, 0);
			} else if (num1 != 20000 && num2 == 100001) { // 2번째 선택이 10만, 1번째선택은 4,6,8
				confirm = carservice.MileCarList(0, 0, 0, 0, 0, 0, 0, num1 - 20000, num1, num2);
			} else { // 4,6,8만을 선택했을때
				confirm = carservice.MileCarList(0, num1 - 20000, num1, num2 - 20000, num2, 0, 0, 0, 0, 0);
			}
			return confirm;
		} else if (car.getMile().size() == 3) {
			CarDTO a = car.getMile().get(0);
			CarDTO b = car.getMile().get(1);
			CarDTO c = car.getMile().get(2);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			if (num1 == 20000 && num3 == 100001) { // 1:2만 2,3:10만
				confirm = carservice.MileCarList(num1, 0, 0, 0, 0, 0, 0, num2 - 20000, num2, num3);
			} else if (num1 == 20000 && num3 != 100001) { // 1번=2만 2,3번=4,6,8,10
				confirm = carservice.MileCarList(num1, 0, 0, num2 - 20000, num2, num3 - 20000, num3, 0, 0, 0);
			} else if (num1 != 20000 && num3 == 100001) { // 3번=11만 1,2번=4,6,8,10
				confirm = carservice.MileCarList(0, num1 - 20000, num1, num2 - 20000, num2, 0, 0, 0, 0, num3);
			} else {
				confirm = carservice.MileCarList(0, num1 - 20000, num1, num2 - 20000, num2, num3 - 20000, num3, 0, 0,
						0);
			}
			return confirm;
		} else if (car.getMile().size() == 4) {
			CarDTO a = car.getMile().get(0);
			CarDTO b = car.getMile().get(1);
			CarDTO c = car.getMile().get(2);
			CarDTO d = car.getMile().get(3);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			int num4 = Integer.valueOf(d.getC_scail());
			if (num1 == 20000 && num4 == 100001) { // 1:2만 2,3:10만
				confirm = carservice.MileCarList(num1, 0, 0, 0, 0, 0, 0, num2 - 20000, num2, num4);
			} else if (num1 == 20000 && num4 != 100001) { // 1번=2만 2,3번=4,6,8,10
				confirm = carservice.MileCarList(num1, 0, 0, num2 - 20000, num2, num3 - 20000, num3, num4 - 20000, num4,
						0);
			} else if (num1 != 20000 && num4 == 100001) { // 3번=11만 1,2번=4,6,8,10
				confirm = carservice.MileCarList(0, num1 - 20000, num1, num2 - 20000, num2, 0, 0, 0, 0, num4);
			} else {
				confirm = carservice.MileCarList(0, num1 - 20000, num1, num2 - 20000, num2, num3 - 20000, num3,
						num4 - 20000, num4, 0);
			}
			return confirm;
		} else if (car.getMile().size() == 5) {
			CarDTO a = car.getMile().get(0);
			CarDTO b = car.getMile().get(1);
			CarDTO c = car.getMile().get(2);
			CarDTO d = car.getMile().get(3);
			CarDTO e = car.getMile().get(4);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			int num4 = Integer.valueOf(d.getC_scail());
			int num5 = Integer.valueOf(e.getC_scail());
			if (num1 == 20000 && num5 == 100001) {
				confirm = carservice.MileCarList(num1, num2 - 20000, num2, num3 - 20000, num3, num4 - 20000, num4, 0, 0,
						num5);
			} else if (num1 == 20000 && num5 != 100001) {
				confirm = carservice.MileCarList(num1, num2 - 20000, num2, num3 - 20000, num3, num4 - 20000, num4,
						num5 - 20000, num5, 0);
			} else if (num1 != 20000 && num5 == 100001) {
				confirm = carservice.MileCarList(0, num1 - 20000, num1, num2 - 20000, num2, num3 - 20000, num3,
						num4 - 20000, num4, num5);
			}
			return confirm;
		} else /* if(car.getMile().size()==6) */ {
			CarDTO a = car.getMile().get(0);
			CarDTO b = car.getMile().get(1);
			CarDTO c = car.getMile().get(2);
			CarDTO d = car.getMile().get(3);
			CarDTO e = car.getMile().get(4);
			CarDTO f = car.getMile().get(5);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			int num4 = Integer.valueOf(d.getC_scail());
			int num5 = Integer.valueOf(e.getC_scail());
			int num6 = Integer.valueOf(f.getC_scail());
			confirm = carservice.MileCarList(num1, num2 - 20000, num2, num3 - 20000, num3, num4 - 20000, num4,
					num5 - 20000, num5, num6);
			return confirm;
		}
//				else {
//					confirm = carservice.CarList();
//					return confirm;
//				}

	}

	// 가격 체크후처리
	@ResponseBody
	@RequestMapping(value = "/carprice", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> carprice(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarBody car) throws Exception {
		System.out.println(car);
		System.out.println(car.getPrice().size());
		System.out.println("프라이스?????????????????");
		List<CarDTO> confirm = new ArrayList<>();
		if (car.getPrice().size() == 1) {
			CarDTO a = car.getPrice().get(0);
			int num1 = Integer.valueOf(a.getC_scail());
			if (num1 == 10000000) {
				confirm = carservice.PriceCarList(num1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			} else if (num1 == 50000001) {
				confirm = carservice.PriceCarList(0, 0, 0, 0, 0, 0, 0, 0, 0, num1);
			} else {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, 0, 0, 0, 0, 0, 0, 0);
			}
			return confirm;
		} else if (car.getPrice().size() == 2) {
			CarDTO a = car.getPrice().get(0);
			CarDTO b = car.getPrice().get(1);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			if (num1 == 10000000 && num2 == 50000001) {
				confirm = carservice.PriceCarList(num1, 0, 0, 0, 0, 0, 0, 0, 0, num2);
			} else if (num1 == 10000000 && num2 != 50000001) {
				confirm = carservice.PriceCarList(num1, 0, 0, 0, 0, 0, 0, num2 - 10000000, num2, 0);
			} else if (num1 != 10000000 && num2 == 50000001) {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, 0, 0, 0, 0, 0, 0, num2);
			} else {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, num2 - 10000000, num2, 0, 0, 0, 0, 0);
			}
			return confirm;
		} else if (car.getPrice().size() == 3) {
			CarDTO a = car.getPrice().get(0);
			CarDTO b = car.getPrice().get(1);
			CarDTO c = car.getPrice().get(2);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			if (num1 == 10000000 && num3 == 50000001) {
				confirm = carservice.PriceCarList(num1, num2 - 10000000, num2, 0, 0, 0, 0, 0, 0, num3);
			} else if (num1 == 10000000 && num3 != 50000001) {
				confirm = carservice.PriceCarList(num1, num2 - 10000000, num2, num3 - 10000000, num3, 0, 0, 0, 0, 0);
			} else if (num1 != 10000000 && num3 == 50000001) {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, num2 - 10000000, num2, 0, 0, 0, 0, num3);
			} else {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, num2 - 10000000, num2, num3 - 10000000,
						num3, 0, 0, 0);
			}
			return confirm;
		} else if (car.getPrice().size() == 4) {
			CarDTO a = car.getPrice().get(0);
			CarDTO b = car.getPrice().get(1);
			CarDTO c = car.getPrice().get(2);
			CarDTO d = car.getPrice().get(3);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			int num4 = Integer.valueOf(d.getC_scail());
			if (num1 == 10000000 && num4 == 50000001) {
				confirm = carservice.PriceCarList(num1, num2 - 10000000, num2, num3 - 10000000, num3, 0, 0, 0, 0, num4);
			} else if (num1 == 10000000 && num4 != 50000001) {
				confirm = carservice.PriceCarList(num1, num2 - 10000000, num2, num3 - 10000000, num3, num4 - 10000000,
						num4, 0, 0, 0);
			} else if (num1 != 10000000 && num4 == 50000001) {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, num2 - 10000000, num2, num3 - 10000000,
						num3, 0, 0, num4);
			} else {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, num2 - 10000000, num2, num3 - 10000000,
						num3, num4 - 10000000, num4, 0);
			}
			return confirm;
		} else if (car.getPrice().size() == 5) {
			CarDTO a = car.getPrice().get(0);
			CarDTO b = car.getPrice().get(1);
			CarDTO c = car.getPrice().get(2);
			CarDTO d = car.getPrice().get(3);
			CarDTO e = car.getPrice().get(4);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			int num4 = Integer.valueOf(d.getC_scail());
			int num5 = Integer.valueOf(e.getC_scail());
			if (num1 == 10000000 && num5 == 50000001) {
				confirm = carservice.PriceCarList(num1, num2 - 10000000, num2, num3 - 10000000, num3, num4 - 10000000,
						num4, 0, 0, num5);
			} else if (num1 == 10000000 && num5 != 50000001) {
				confirm = carservice.PriceCarList(num1, num2 - 10000000, num2, num3 - 10000000, num3, num4 - 10000000,
						num4, num5 - 10000000, num5, 0);
			} else if (num1 != 10000000 && num5 == 50000001) {
				confirm = carservice.PriceCarList(0, num1 - 10000000, num1, num2 - 10000000, num2, num3 - 10000000,
						num3, num4 - 10000000, num4, num5);
			}
			return confirm;
		} else /* if(car.getPrice().size()==6) */ {
			CarDTO a = car.getPrice().get(0);
			CarDTO b = car.getPrice().get(1);
			CarDTO c = car.getPrice().get(2);
			CarDTO d = car.getPrice().get(3);
			CarDTO e = car.getPrice().get(4);
			CarDTO f = car.getPrice().get(5);
			int num1 = Integer.valueOf(a.getC_scail());
			int num2 = Integer.valueOf(b.getC_scail());
			int num3 = Integer.valueOf(c.getC_scail());
			int num4 = Integer.valueOf(d.getC_scail());
			int num5 = Integer.valueOf(e.getC_scail());
			int num6 = Integer.valueOf(f.getC_scail());
			confirm = carservice.PriceCarList(num1, num2 - 10000000, num2, num3 - 10000000, num3, num4 - 10000000, num4,
					num5 - 10000000, num5, num6);
			return confirm;
		}
//				else {
//					confirm = carservice.CarList();
//					return confirm;
//				}

	}

	// 지역 체크후처리
	@ResponseBody
	@RequestMapping(value = "/caraddress", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> caraddress(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarBody car) throws Exception {
		System.out.println(car);
		System.out.println(car.getAddress().size());
		List<CarDTO> confirm = new ArrayList<>();
		if (car.getAddress().size() == 1) {
			CarDTO a = car.getAddress().get(0);
			confirm = carservice.AddressCarList(a.getC_scail(), "null", "null", "null", "null", "null", "null");
			return confirm;
		} else if (car.getAddress().size() == 2) {
			CarDTO a = car.getAddress().get(0);
			CarDTO b = car.getAddress().get(1);
			confirm = carservice.AddressCarList(a.getC_scail(), b.getC_scail(), "null", "null", "null", "null", "null");
			return confirm;
		} else if (car.getAddress().size() == 3) {
			CarDTO a = car.getAddress().get(0);
			CarDTO b = car.getAddress().get(1);
			CarDTO c = car.getAddress().get(2);
			confirm = carservice.AddressCarList(a.getC_scail(), b.getC_scail(), c.getC_scail(), "null", "null", "null",
					"null");
			return confirm;
		} else if (car.getAddress().size() == 4) {
			CarDTO a = car.getAddress().get(0);
			CarDTO b = car.getAddress().get(1);
			CarDTO c = car.getAddress().get(2);
			CarDTO d = car.getAddress().get(3);
			confirm = carservice.AddressCarList(a.getC_scail(), b.getC_scail(), c.getC_scail(), d.getC_scail(), "null",
					"null", "null");
			return confirm;
		} else if (car.getAddress().size() == 5) {
			CarDTO a = car.getAddress().get(0);
			CarDTO b = car.getAddress().get(1);
			CarDTO c = car.getAddress().get(2);
			CarDTO d = car.getAddress().get(3);
			CarDTO e = car.getAddress().get(4);
			confirm = carservice.AddressCarList(a.getC_scail(), b.getC_scail(), c.getC_scail(), d.getC_scail(),
					e.getC_scail(), "null", "null");
			return confirm;
		} else if (car.getAddress().size() == 6) {
			CarDTO a = car.getAddress().get(0);
			CarDTO b = car.getAddress().get(1);
			CarDTO c = car.getAddress().get(2);
			CarDTO d = car.getAddress().get(3);
			CarDTO e = car.getAddress().get(4);
			CarDTO f = car.getAddress().get(5);
			confirm = carservice.AddressCarList(a.getC_scail(), b.getC_scail(), c.getC_scail(), d.getC_scail(),
					e.getC_scail(), f.getC_scail(), "null");
			return confirm;
		} else /* if(car.getAddress().size()==7) */ {
			CarDTO a = car.getAddress().get(0);
			CarDTO b = car.getAddress().get(1);
			CarDTO c = car.getAddress().get(2);
			CarDTO d = car.getAddress().get(3);
			CarDTO e = car.getAddress().get(4);
			CarDTO f = car.getAddress().get(5);
			CarDTO g = car.getAddress().get(6);
			confirm = carservice.AddressCarList(a.getC_scail(), b.getC_scail(), c.getC_scail(), d.getC_scail(),
					e.getC_scail(), f.getC_scail(), g.getC_scail());
			return confirm;
		}
//				else {
//					confirm = carservice.CarList();
//					return confirm;
//				}

	}

	@ResponseBody
	@RequestMapping(value = "/caroption", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> caroption(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarBody car) throws Exception {

		System.out.println(car);
		System.out.println(car.getOption().size());

		if (car.getOption().size() == 1) {
			CarDTO a = car.getOption().get(0);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), "0", "0", "0", "0", "0", "0", "0");
			return confirm;
		} else if (car.getOption().size() == 2) {
			CarDTO a = car.getOption().get(0);
			CarDTO b = car.getOption().get(1);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), b.getC_scail(), "0", "0", "0", "0", "0",
					"0");
			return confirm;
		} else if (car.getOption().size() == 3) {
			CarDTO a = car.getOption().get(0);
			CarDTO b = car.getOption().get(1);
			CarDTO c = car.getOption().get(2);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(), "0", "0",
					"0", "0", "0");
			return confirm;
		} else if (car.getOption().size() == 4) {
			CarDTO a = car.getOption().get(0);
			CarDTO b = car.getOption().get(1);
			CarDTO c = car.getOption().get(2);
			CarDTO d = car.getOption().get(3);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), "0", "0", "0", "0");
			return confirm;
		} else if (car.getOption().size() == 5) {
			CarDTO a = car.getOption().get(0);
			CarDTO b = car.getOption().get(1);
			CarDTO c = car.getOption().get(2);
			CarDTO d = car.getOption().get(3);
			CarDTO e = car.getOption().get(4);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), e.getC_scail(), "0", "0", "0");
			return confirm;
		} else if (car.getOption().size() == 6) {
			CarDTO a = car.getOption().get(0);
			CarDTO b = car.getOption().get(1);
			CarDTO c = car.getOption().get(2);
			CarDTO d = car.getOption().get(3);
			CarDTO e = car.getOption().get(4);
			CarDTO f = car.getOption().get(5);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), e.getC_scail(), f.getC_scail(), "0", "0");
			return confirm;
		} else if (car.getOption().size() == 7) {
			CarDTO a = car.getOption().get(0);
			CarDTO b = car.getOption().get(1);
			CarDTO c = car.getOption().get(2);
			CarDTO d = car.getOption().get(3);
			CarDTO e = car.getOption().get(4);
			CarDTO f = car.getOption().get(5);
			CarDTO g = car.getOption().get(6);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), e.getC_scail(), f.getC_scail(), g.getC_scail(), "0");
			return confirm;
		} else /* if(car.getOption().size()==8) */ {
			CarDTO a = car.getOption().get(0);
			CarDTO b = car.getOption().get(1);
			CarDTO c = car.getOption().get(2);
			CarDTO d = car.getOption().get(3);
			CarDTO e = car.getOption().get(4);
			CarDTO f = car.getOption().get(5);
			CarDTO g = car.getOption().get(6);
			CarDTO h = car.getOption().get(7);
			List<CarDTO> confirm = carservice.optCheckList(a.getC_scail(), b.getC_scail(), c.getC_scail(),
					d.getC_scail(), e.getC_scail(), f.getC_scail(), g.getC_scail(), h.getC_scail());
			return confirm;
		}
//				else {
//					List<CarDTO> confirm = carservice.CarList();
//					return confirm;
//				}

	}

	// 브랜드 제조사 선택후 처리
	@ResponseBody
	@RequestMapping(value = "/carbrand", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> carbrand(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarDTO car) throws Exception {
		String brand = car.getC_brand();
		List<CarDTO> confirm = new ArrayList<>();
		if (brand.equals("hyundai")) {
			brand = "현대";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("genesis")) {
			brand = "제네시스";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("kia")) {
			brand = "기아";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("chevrolet")) {
			brand = "쉐보레";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("renault")) {
			brand = "르노";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("tesla")) {
			brand = "테슬라";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("benz")) {
			brand = "벤츠";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("polestar")) {
			brand = "폴스타";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("audi")) {
			brand = "아우디";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else if (brand.equals("porsche")) {
			brand = "포르쉐";
			confirm = carservice.carBrandList(brand);
			return confirm;
		} else {
			brand = "BMW";
			confirm = carservice.carBrandList(brand);
			return confirm;
		}
	}

	// 모델 선택후처리
	@ResponseBody
	@RequestMapping(value = "/carmodel", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> carmodel(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarDTO car) throws Exception {
		System.out.println(car.getC_name());
		String model = car.getC_name();
		List<CarDTO> confirm = new ArrayList<>();
		// 현대선택
		if (model.equals("ioniq")) {
			model = "아이오닉";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("ioniq5")) {
			model = "아이오닉5";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("ioniq6")) {
			model = "아이오닉6";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("kona")) {
			model = "코나";
			confirm = carservice.carModelList(model);
			return confirm;
			// 제네시스 선택
		} else if (model.equals("g80")) {
			model = "G80";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("gv60")) {
			model = "GV60";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("gv70")) {
			model = "GV70";
			confirm = carservice.carModelList(model);
			return confirm;
			// 기아 선택
		} else if (model.equals("ev6")) {
			model = "EV6";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("niro")) {
			model = "니로";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("ray")) {
			model = "레이";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("soul")) {
			model = "소울";
			confirm = carservice.carModelList(model);
			return confirm;
			// 쉐보레 선택
		} else if (model.equals("bolt")) {
			model = "볼트";
			confirm = carservice.carModelList(model);
			return confirm;
			// 르노 선택
		} else if (model.equals("twizy")) {
			model = "트위지";
			confirm = carservice.carModelList(model);
			return confirm;
			// 테슬라 선택
		} else if (model.equals("model3")) {
			model = "모델3";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("modelS")) {
			model = "모델S";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("modelX")) {
			model = "모델X";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("modelY")) {
			model = "모델Y";
			confirm = carservice.carModelList(model);
			return confirm;
			// 벤츠 선택
		} else if (model.equals("eqa")) {
			model = "EQA";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("eqb")) {
			model = "EQB";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("eqc")) {
			model = "EQC";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("eqe")) {
			model = "EQE";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("eqs")) {
			model = "EQS";
			confirm = carservice.carModelList(model);
			return confirm;
			// BMW 선택
		} else if (model.equals("i3")) {
			model = "i3";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("i4")) {
			model = "i4";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("ix3")) {
			model = "ix3";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("ix")) {
			model = "ix";
			confirm = carservice.carModelList(model);
			return confirm;
			// 아우디 선택
		} else if (model.equals("e-tron")) {
			model = "e-트론";
			confirm = carservice.carModelList(model);
			return confirm;
		} else if (model.equals("e-tron-gt")) {
			model = "e-트론 GT";
			confirm = carservice.carModelList(model);
			return confirm;
			// 포르쉐 선택
		} else if (model.equals("taycan")) {
			model = "타이칸";
			confirm = carservice.carModelList(model);
			return confirm;
			// 폴스타 선택
		} else {
			model = "폴스타";
			confirm = carservice.carModelList(model);
			return confirm;
		}
	}

	// 아무것도 체크하지않았을때
	@ResponseBody
	@RequestMapping(value = "/resetList", method = RequestMethod.POST, consumes = "application/json;")
	public List<CarDTO> resetList(@RequestParam(required = false, defaultValue = "1") int pageNum,
			@RequestBody CarDTO car) throws Exception {
		System.out.println("노쳌!?!?!?!?!?!?!?!?!?!?!?!?");
		System.out.println(car);

		List<CarDTO> confirm = carservice.CarList(pageNum);
		return confirm;
	}

}
