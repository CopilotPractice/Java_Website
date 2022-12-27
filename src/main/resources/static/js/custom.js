function clickEvent(p_go, item) {

	var up;

	up = confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까?")
	if (up) {
		if (p_go == 'buyProductForm') {
			location.href = "loginForm?go=" + p_go
		}

		location.href = "loginForm?go=" + p_go + "&id=" + item;
	} else {
		return false;
	}

}



function clickEvent1(p_go) {
	var up;

	up = confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까?")

	if (up) {
		var item1 = document.getElementById("p_price").value;
		var item2 = document.getElementById("qtt").value;
		var item3 = document.getElementById("p_name").value;
		var item4 = document.getElementById("id").value;
		var item5 = document.getElementById("p_num").value;

		location.href = "loginForm?go=" + p_go + "&p_price=" + item1 + "&quantity=" + item2 + "&p_name=" + item3 + "&id=" + item4 + "&p_num=" + item5;
	} else {
		return false;
	}

}
function clickEvent2(p_go, item) {
	up = confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까?")
	if (up) {
		location.href = "loginForm?go=" + p_go + "&p_num=" + item;
	} else {
		return false;
	}
}

function deleteEvent() {
	alert("삭제된 게시물 입니다")
}
function reportEvent() {
	var win;
	var popupX = (window.screen.width / 2) - (600 / 2);
	// 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음

	var popupY = (window.screen.height / 2) - (650 / 2);
	// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	win = window.open("/report", "report", "width=600,height=650,left=" + popupX + ",top=" + popupY);
}

function clickEvent(p_go) {
	var up;
	up = confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까?")
	if (up) {
		console.log(p_go)
		location.href = "loginForm?go=" + p_go;
	} else {
	}
}

function deleteEvent() {
	alert("삭제된 게시물 입니다")
}
function reportEvent() {
	var win;
	var popupX = (window.screen.width / 2) - (600 / 2);
	// 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음

	var popupY = (window.screen.height / 2) - (650 / 2);
	// 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
	win = window.open("/report", "report", "width=600,height=650,left=" + popupX + ",top=" + popupY);
}
function bbsdelete(num) {
	if (confirm("정말 삭제하시겠습니까?")) {
		location.href = "/delete?num=" + num + "&orderBy=bbs_writedate&bbsDiv=" + null + "&searchText=" + null;
	} else {

	}
}

function goBack(go) {
	var c = confirm("정말 뒤로가시겠습니까?");
	if (c) {
		console.log(go);
		if (go == 'shop') {
			category = document.getElementById("category").value;
			location.href = "/shop?list=p_num&category=" + category;
		} else if (go == 'bbs') {
			location.href = "/bbs?orderBy=bbs_writedate&bbsDiv=" + null + "&searchText=" + null;
		}
	} else {

	}
}

function cmdelete(cm_num, id, bbs_num) {
	if (confirm("입력하신 댓글이 삭제됩니다")) {
		location.href = "/bbscommentdelete?cm_num=" + cm_num + "&id=" + id + "&bbs_num=" + bbs_num;
	} else {

	}
}

function priceTotal() {
	return document.getElementById("totalPrice").innerHTML;
}

function pleaseLogin() {
	alert("로그인 후 이용바랍니다")
	return false;
}

function loginGo() {
	var name = window.location.pathname
	console.log(name);
}

function realDel() {

	var result = confirm('정말로 삭제하시겠습니까?')
	if (result) {
		var item1 = document.getElementById("p_num").value;
		var item2 = document.getElementById("p_category").value;
		location.href = "deleteProduct?p_num=" + item1 + "&p_category=" + item2;
	} else {

	}
}

function productupdateForm() {

	var item1 = document.getElementById("p_num").value;
	var item2 = document.getElementById("p_name").value;
	var item3 = document.getElementById("p_price").value;
	var item4 = document.getElementById("p_stock").value;
	var item5 = document.getElementById("p_category").value;
	var item6 = document.getElementById("p_content").value;


	location.href = "productupdateForm?p_num=" + item1 + "&p_name=" + item2 + "&p_price=" + item3 + "&p_stock=" + item4 + "&p_category=" + item5 + "&p_content=" + item6;

}

function checkId() {
	var id = $('#id').val(); //id값이 "id"인 입력란의 값을 저장
	$.ajax({
		url: '/idCheck', //Controller에서 요청 받을 주소
		type: 'post', //POST 방식으로 전달
		data: {
			id: id
		},
		success: function(result) { //컨트롤러에서 넘어온 cnt값을 받는다 
			if (result == 0) {
				$('#idck').val('1');
				$('.id_ok').css("display", "inline-block");
				$('.id_already').css("display", "none");
			} else {
				$('#idck').val('0');
				$('.id_already').css("display", "inline-block");
				$('.id_ok').css("display", "none");
			}
		},
		error: function() {
			alert("에러입니다");
		}
	});
};

function dealercheckId() {
	var dr_id = $('#dr_id').val();
	$.ajax({
		url: '/dealeridCheck', //Controller에서 요청 받을 주소
		type: 'post', //POST 방식으로 전달
		data: {
			dr_id: dr_id
		},
		success: function(result) { //컨트롤러에서 넘어온 cnt값을 받는다 
			if (result == 0) {
				$('#dealeridck').val('1');
				$('.dr_id_ok').css("display", "inline-block");
				$('.dr_id_already').css("display", "none");
			} else {
				$('#dealeridck').val('0');
				$('.dr_id_already').css("display", "inline-block");
				$('.dr_id_ok').css("display", "none");
			}
		},
		error: function() {
			alert("에러입니다");
		}
	});
};

function bbs(orderby) {
	var orderby = "/" + orderby;
	var bbsDiv = $('#bbsDiv').val();
	var searchText = $('#searchText').val();

	$.ajax({
		url: orderby, //Controller에서 요청 받을 주소
		type: 'post', //POST 방식으로 전달
		data: {
			bbsDiv: bbsDiv,
			searchText: searchText
		},
		success: function(result) { //컨트롤러에서 넘어온 cnt값을 받는다 

		},
		error: function() {
			alert("게시판 정렬 에러 발생");
		}
	});
}




function emailAuthClick() {
	var email = $('#email').val();
	if (email == '') {
		alert("이메일을 입력해주세요.");
		return false;
	}

	$.ajax({
		type: 'POST',
		url: './emailConfirm',
		data: { email: email },
		success: function(confirm) {
			alert("인증번호가 발송되었습니다.");
			$('#email_auth_cd').val(confirm);
		},
		error: function() {
			alert("메일 발송에 실패했습니다.");
		}
	});
};

function dealerEmailAuthClick() {
	var dr_email = $('#dr_email').val();
	if (dr_email == '') {
		alert("이메일을 입력해주세요.");
		return false;
	}

	$.ajax({
		type: 'POST',
		url: './emailConfirm',
		data: { email: dr_email },
		success: function(confirm) {
			alert("인증번호가 발송되었습니다.");
			$('#dr_email_auth_cd').val(confirm);
		},
		error: function() {
			alert("메일 발송에 실패했습니다.");
		}
	});
};

function idCk() {

	var ck = $("#idck").val();

	console.log(ck);
	if (ck == 0) {
		$("#id").focus();
		return false;
	} else {

		var email_auth_cd = $("#email_auth_cd").val();

		if ($('#email_auth_key').val() == "") {
			alert("인증번호를 입력해주세요.");
			return false;
		}

		if ($('#email_auth_key').val() != email_auth_cd) {
			alert("인증번호가 일치하지 않습니다.");
			return false;
		}

		return true;
	}
}

function FindPwEmailClick() {

	var id = $('#id').val();
	var email = $('#email').val();

	if (id == '') {
		alert("아이디를 입력해주세요.");
		return false;
	}

	if (email == '') {
		alert("이메일을 입력해주세요.");
		return false;
	}

	$.ajax({
		type: 'POST',
		url: './idAndEmailMatching',
		async: false,
		data: {
			id: id,
			email: email
		},
		success: function(result) {
			if (result == 1) {
				$.ajax({
					type: 'POST',
					url: './emailPasswordChange',
					async: false,
					data: { email: email },
					success: function(confirm) {
						alert("인증번호가 발송되었습니다.");
						$('#email_auth_cd').val(confirm);
						console.log($('#email_auth_cd').val());
					},
					error: function() {
						alert("메일 발송에 실패했습니다.");
					}
				});

			} else {
				alert("아이디 혹은 이메일이 다릅니다.")
			}
		},
		error: function() {
			alert("비밀번호 찾기 인증 오류발생");
		}
	});
}

function findIdCk() {
	var email_auth_cd = $("#email_auth_cd").val();
	console.log("들어옴");
	if ($('#email_auth_key').val() == "") {
		alert("인증번호를 입력해주세요.");
		return false;
	}

	if ($('#email_auth_key').val() != email_auth_cd) {
		alert("인증번호가 일치하지 않습니다.");
		return false;
	}

	return true;
}

function dealeridCk() {

	var ck = $("#dealeridck").val();

	console.log(ck);
	if (ck == 0) {
		$("#dr_id").focus();
		return false;
	} else {

		var dr_email_auth_cd = $("#dr_email_auth_cd").val();

		if ($('#dr_email_auth_key').val() == "") {
			alert("인증번호를 입력해주세요.");
			return false;
		}

		if ($('#dr_email_auth_key').val() != dr_email_auth_cd) {
			alert("인증번호가 일치하지 않습니다.");
			return false;
		}

		return true;
	}

}

function jusoCallBack(zipNo, roadAddrPart1, roadAddrPart2, jibunAddr, addrDetail) {
	$("#tp_address_add_zip_code").val(zipNo);
	$("#tp_address_add_road_address").val(roadAddrPart1);
	$("#tp_address_add_number_address").val(jibunAddr);
	$("#tp_address_add_desc_address").val(roadAddrPart2 + " " + addrDetail);
	
	$("#address").val(jibunAddr + " " + roadAddrPart2 + " " + addrDetail);
	$("#dr_c_address").val(jibunAddr + " " + roadAddrPart2 + " " + addrDetail);

}
function openPopup() {
	window.open("jusoPopup", "pop", "width=570,height=420, scrollbars=yes, resizable=yes");
}

	
function openUdelete(){
	window.open("/openUdeleteForm", "탈퇴 사유", "width=600,height=650");
}

function udelete(){
		if (confirm("회원탈퇴와 함께 모든 기록이 삭제됩니다 탈퇴하시겠습니까?")) {
			alert('계정이 삭제되었습니다');
			opener.location.href = "/logout";
			true;
        } else {
        	false;
        }
}

	
function openMessage(id){
	window.open("messagePopup?id="+id,"쪽지함","width=570,height=420, scrollbars=yes, resizable=yes")
}

function realReservation(){
	
	up = confirm("예약을 누르시면 딜러에게 연락처와 이름 정보가 넘어갑니다.\n정말로 예약을 진행하시겠습니까?")
	if(up){
		alert("예약이 완료 되었습니다");
	}else{
		return false;
	}
}

function openCarReserForm(){
	window.open("/car_reservationForm", "예약", "width=600,height=650");
}

function userReserFinish(c_num,id){
	
	var up = confirm("정말로 거래 확정을 누르시겠습니까?\n확정 된 시점부터는 취소가 불가합니다.")
	if(up){
		location.href = "confirmReser?id="+id+"&c_num="+c_num;		
	}else{
		
	}
}

function drReserConfirm(c_num,id){
	
	var up = confirm("정말로 거래 완료를 누르시겠습니까?\n완료 된 시점부터는 취소가 불가합니다.")
	if(up){
		location.href = "drConfirmReser?id="+id+"&c_num="+c_num;		
	}else{
		
	}
	
}


function carStorage(c_num){
	
	if(localStorage.length==0){
		localStorage.setItem("carstorage1",c_num);
	}else if(localStorage.length==1){
		localStorage.setItem("carstorage2",localStorage.getItem("carstorage1"));
		localStorage.setItem("carstorage1",c_num);
	}else if(localStorage.length==2){
		localStorage.setItem("carstorage3",localStorage.getItem("carstorage2"));
		localStorage.setItem("carstorage2",localStorage.getItem("carstorage1"));
		localStorage.setItem("carstorage1",c_num);
	}else if(localStorage.length==3){
		localStorage.setItem("carstorage4",localStorage.getItem("carstorage3"));
		localStorage.setItem("carstorage3",localStorage.getItem("carstorage2"));
		localStorage.setItem("carstorage2",localStorage.getItem("carstorage1"));
		localStorage.setItem("carstorage1",c_num);
	}else {
		localStorage.setItem("carstorage5",localStorage.getItem("carstorage4"));
		localStorage.setItem("carstorage4",localStorage.getItem("carstorage3"));
		localStorage.setItem("carstorage3",localStorage.getItem("carstorage2"));
		localStorage.setItem("carstorage2",localStorage.getItem("carstorage1"));
		localStorage.setItem("carstorage1",c_num);
	}
	console.log(localStorage.getItem("carstorage1"));
	console.log(localStorage.getItem("carstorage2"));
	console.log(localStorage.getItem("carstorage3"));
	console.log(localStorage.getItem("carstorage4"));
	
}
