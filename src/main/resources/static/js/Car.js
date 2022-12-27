
 function CarCheck() { //차종류
	
 	var chk = document.getElementsByName("Car"); // 체크박스객체를 담는다

 	var len = chk.length;    //체크박스의 전체 개수

 	var checkRow = '';      //체크된 체크박스의 value를 담기위한 변수

 	var checkCnt = 0;        //체크된 체크박스의 개수

 	var checkLast = '';      //체크된 체크박스 중 마지막 체크박스의 인덱스를 담기위한 변수

 	var rowid = [];             //체크된 체크박스의 모든 value 값을 담는다

 	var cnt = 0;



 	for (var i = 0; i < len; i++) {

 		if (chk[i].checked == true) {

 			checkCnt++;        //체크된 체크박스의 개수

 			checkLast = i;     //체크된 체크박스의 인덱스

 		}

 	}



 	for (var i = 0; i < len; i++) {

 		if (chk[i].checked == true) {  //체크가 되어있는 값 구분

			checkRow = chk[i].value;



			if (checkCnt == 1) {                            //체크된 체크박스의 개수가 한 개 일때,

 				//rowid += "'" + checkRow + "'";        //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
 				rowid.push(checkRow);

 			} else {                                            //체크된 체크박스의 개수가 여러 개 일때,

 				if (i == checkLast) {                     //체크된 체크박스 중 마지막 체크박스일 때,

 					//rowid += "'" + checkRow + "'";  //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
 					rowid.push(checkRow);

 				} else {

 					//rowid += "'" + checkRow + "',";	 //'value',의 형태 (뒤에 ,(콤마)가 붙게)         			
 					rowid.push(checkRow);

 				}



 			}

 			cnt++;

 			checkRow = '';    //checkRow초기화.

 		}



 //산업스파이 다녀감
 	}
 		//console.log(rowid);    //'value1', 'value2', 'value3' 의 형태로 출력된다.

 		/*let httpRequest = new XMLHttpRequest();
		
 		console.log(rowid);
		
 		const str = {
 			scail: rowid,
 		};
		
 		const obj = JSON.stringify(str);
 		//console.log(obj);
		
 		httpRequest.responseType = "json";
 		httpRequest.open('POST','/carCheck',true);
 		httpRequest.setRequestHeader('Content-Type','application/json');
 		httpRequest.send(obj);
		
		
 		httpRequest.onload = () => {
 			if (httpRequest.readyState === httpRequest.DONE) {
 			    if (httpRequest.status === 200) {
 			      //console.log(httpRequest.response);
			      
 			      var data = httpRequest.response;
 				  //console.log(data);
			      
 				  let htmlStr = '';
				  
 			      for(var i=0;i<data.length;i++){
 					  //console.log(data[i]);
				

 				  htmlStr += `
					
 					<img
 						src="images/ev/hyundai/kona/kona_1.JPG"
 						alt="Alps"
 						class="car-image2" />
 					<div class="w3-container w3-center">
 						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
 						<p>${data[i].cp_price}  원</p>
 					</div>
						
          		  `;
				  
 				  	var carlist = document.getElementById("carList");
 				  	//console.log(carlist);
 					carlist.innerHTML = htmlStr;
					
 					}
 			    }
 			  }
 		};*/
		
 		return rowid;
		
 }
 

function toggleDiv() { //기존의 리스트 div영역째로 숨기기
  const div = document.getElementById('my_div');
  
  if(div.style.display === 'none')  {
  }else {
    div.style.display = 'none';
  }

} 



/*function fromday(){
	const fromday = document.getElementById("fromdate").value;
	console.log(fromday);

	let httpRequest = new XMLHttpRequest();
		
	const str = {
		c_year : fromday,
	};

	const obj = JSON.stringify(str);

	console.log(obj);

	httpRequest.responseType = "json";
	httpRequest.open('POST','/carfromday',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

	httpRequest.onload = () => {
		if (httpRequest.readyState === httpRequest.DONE) {
			if(httpRequest.status === 200){
				
				var data = httpRequest.response;
				console.log(data);
				
				var htmlStr ='';

				for(var i=0;i<data.length;i++){
					//console.log(data[i]);
					
					htmlStr += `
					
					<img
						src="images/ev/hyundai/kona/kona_1.JPG"
						alt="Alps"
						class="car-image2" />
					<div class="w3-container w3-center">
						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
						<p>${data[i].cp_price}  원</p>
					</div>
						
         		  `;
				  
				  	var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
				}

			}
		}
	};
	

}


function today(){
	const today = document.getElementById("todate").value;
	console.log(today);

	let httpRequest = new XMLHttpRequest();

	const str = {
		c_year : today,
	};

	const obj = JSON.stringify(str);

	console.log(obj);

	httpRequest.responseType = "json";
	httpRequest.open('POST','/cartoday',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

	httpRequest.onload = () => {
		if (httpRequest.readyState === httpRequest.DONE) {
			if(httpRequest.status === 200){
				//console.log(httpRequest.response);
				var data = httpRequest.response;
				console.log(data);
				
				var htmlStr ='';

				for(var i=0;i<data.length;i++){
					//console.log(data[i]);
					
					htmlStr += `
					
					<img
						src="images/ev/hyundai/kona/kona_1.JPG"
						alt="Alps"
						class="car-image2" />
					<div class="w3-container w3-center">
						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
						<p>${data[i].cp_price}  원</p>
					</div>
						
         		  `;
				  
				  	var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
				}

			}
		}
	};

}*/

function Listday(){ //연식 선택
	const fromday = document.getElementById("fromdate").value;
	const today = document.getElementById("todate").value;
	console.log(fromday);
	console.log(today);
	
	//let httpRequest = new XMLHttpRequest();
	
	if(today===""){
		
	/*	const str = {
			c_year : fromday,
		};

	const obj = JSON.stringify(str);

	console.log(obj);

	httpRequest.responseType = "json";
	httpRequest.open('POST','/carfromday',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

	httpRequest.onload = () => {
		if (httpRequest.readyState === httpRequest.DONE) {
			if(httpRequest.status === 200){
				
				var data = httpRequest.response;
				//console.log(data);
				
				var htmlStr ='';
				
				if(data.length==0){
					  //console.log("값이 없습니당");
					  
					  let htmlStr = '';
					  
					  htmlStr += `
					  
					  
					<CENTER><img src="images/empty.png"/></CENTER>
					<div class="w3-container w3-center">
						<h3>여긴 텅 비어있습니다</h3>
					</div>
					  
					  `;
					  
					  var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					
				  }else{

				for(var i=0;i<data.length;i++){
					//console.log(data[i]);
					
					htmlStr += `
					
					<img
						src="images/ev/hyundai/kona/kona_1.JPG"
						alt="Alps"
						class="car-image2" />
					<div class="w3-container w3-center">
						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
						<p>${data[i].cp_price}  원</p>
					</div>
						
         		  `;
				  
				  	var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
				}
				}
			}
		}
	};*/
	return fromday;

	}else if(fromday===""){
		/*const str = {
		c_year : today,
		};

		const obj = JSON.stringify(str);
	
		console.log(obj);
	
		httpRequest.responseType = "json";
		httpRequest.open('POST','/cartoday',true);
		httpRequest.setRequestHeader('Content-Type','application/json');
		httpRequest.send(obj);
	
		httpRequest.onload = () => {
			if (httpRequest.readyState === httpRequest.DONE) {
				if(httpRequest.status === 200){
					//console.log(httpRequest.response);
					var data = httpRequest.response;
					console.log(data);
					
					if(data.length==0){
					  console.log("값이 없습니당");
					  
					  let htmlStr = '';
					  
					  htmlStr += `
					  
					  
					<CENTER><img src="images/empty.png"/></CENTER>
					<div class="w3-container w3-center">
						<h3>여긴 텅 비어있습니다</h3>
					</div>
					  
					  `;
					  
					  var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					
				  }else{
					
					var htmlStr ='';
	
					for(var i=0;i<data.length;i++){
						//console.log(data[i]);
						
						htmlStr += `
						
						<img
							src="images/ev/hyundai/kona/kona_1.JPG"
							alt="Alps"
							class="car-image2" />
						<div class="w3-container w3-center">
							<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
							<p>${data[i].cp_price}  원</p>
						</div>
							
	         		  `;
					  
					  	var carlist = document.getElementById("carList");
					  	console.log(carlist);
						carlist.innerHTML = htmlStr;
						
					}
					}
				}
			}
		};*/
		return today;

	}else if(today==="" && fromday===""){
		return;
		/*console.log(rowday);
		
		const str = {
			year : rowday,
		};
		
		const obj = JSON.stringify(str);
	
		console.log(obj);
	
		httpRequest.responseType = "json";
		httpRequest.open('POST','/carallday',true);
		httpRequest.setRequestHeader('Content-Type','application/json');
		httpRequest.send(obj);
	
		httpRequest.onload = () => {
			if (httpRequest.readyState === httpRequest.DONE) {
				if(httpRequest.status === 200){
					//console.log(httpRequest.response);
					var data = httpRequest.response;
					console.log(data);
					
					var htmlStr ='';
					
					if(data.length==0){
					  console.log("값이 없습니당");
					  
					  let htmlStr = '';
					  
					  htmlStr += `
					  
					  
					<CENTER><img src="images/empty.png"/></CENTER>
					<div class="w3-container w3-center">
						<h3>여긴 텅 비어있습니다</h3>
					</div>
					  
					  `;
					  
					  var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					
				  }else{
	
					for(var i=0;i<data.length;i++){
						//console.log(data[i]);
						
						htmlStr += `
						
						<img
							src="images/ev/hyundai/kona/kona_1.JPG"
							alt="Alps"
							class="car-image2" />
						<div class="w3-container w3-center">
							<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
							<p>${data[i].cp_price}  원</p>
						</div>
							
	         		  `;
					  
					  	var carlist = document.getElementById("carList");
					  	console.log(carlist);
						carlist.innerHTML = htmlStr;
						
					}
					}
	
				}
			}
		};
		
	}*/
	}else {
	var rowday = [];
		rowday.push(fromday);
		rowday.push(today);
	return rowday;
	}
}

function MileCheck() { //차종류
	
	var chk = document.getElementsByName("Mile"); // 체크박스객체를 담는다

	var len = chk.length;    //체크박스의 전체 개수

	var checkRow = '';      //체크된 체크박스의 value를 담기위한 변수

	var checkCnt = 0;        //체크된 체크박스의 개수

	var checkLast = '';      //체크된 체크박스 중 마지막 체크박스의 인덱스를 담기위한 변수

	var rowid = [];             //체크된 체크박스의 모든 value 값을 담는다

	var cnt = 0;



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {

			checkCnt++;        //체크된 체크박스의 개수

			checkLast = i;     //체크된 체크박스의 인덱스

		}

	}



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {  //체크가 되어있는 값 구분

			checkRow = chk[i].value;



			if (checkCnt == 1) {                            //체크된 체크박스의 개수가 한 개 일때,

				rowid.push(checkRow);

			} else {                                            //체크된 체크박스의 개수가 여러 개 일때,

				if (i == checkLast) {                     //체크된 체크박스 중 마지막 체크박스일 때,

					rowid.push(checkRow);

				} else {

					rowid.push(checkRow);

				}



			}

			cnt++;

			checkRow = '';    //checkRow초기화.

		}



//산업스파이 다녀감
	}
	/*console.log(rowid.length);
	console.log(rowid[0]);

		let httpRequest = new XMLHttpRequest();

		console.log(rowid);
		
		const str = {
			mile: rowid,
		};
		
		const obj = JSON.stringify(str);
		console.log(obj);
		
		httpRequest.responseType = "json";
		httpRequest.open('POST','/carmile',true);
		httpRequest.setRequestHeader('Content-Type','application/json');
		httpRequest.send(obj);
		
		httpRequest.onload = () => {
			if (httpRequest.readyState === httpRequest.DONE) {
			    if (httpRequest.status === 200) {
			      //console.log(httpRequest.response);
			      
			      var data = httpRequest.response;
				  //console.log(data);
			      
			      if(data.length==0){
					  console.log("값이 없습니당");
					  
					  let htmlStr = '';
					  
					  htmlStr += `
					  
					  
					<CENTER><img src="images/empty.png"/></CENTER>
					<div class="w3-container w3-center">
						<h3>여긴 텅 비어있습니다</h3>
					</div>
					  
					  `;
					  
					  var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					
				  }else{
				  
				  let htmlStr = '';
				  
			      for(var i=0;i<data.length;i++){
					  console.log(data[i]);
				

				  htmlStr += `
					
					<img
						src="images/ev/hyundai/kona/kona_1.JPG"
						alt="Alps"
						class="car-image2" />
					<div class="w3-container w3-center">
						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
						<p>${data[i].cp_price}  원</p>
					</div>
						
         		  `;
				  
				  	var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					}
					}
			    }
			  }
		};*/
		return rowid;
}

function PriceCheck(){
	
	var chk = document.getElementsByName("Price"); // 체크박스객체를 담는다

	var len = chk.length;    //체크박스의 전체 개수

	var checkRow = '';      //체크된 체크박스의 value를 담기위한 변수

	var checkCnt = 0;        //체크된 체크박스의 개수

	var checkLast = '';      //체크된 체크박스 중 마지막 체크박스의 인덱스를 담기위한 변수

	var rowid = [];             //체크된 체크박스의 모든 value 값을 담는다

	var cnt = 0;



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {

			checkCnt++;        //체크된 체크박스의 개수

			checkLast = i;     //체크된 체크박스의 인덱스

		}

	}



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {  //체크가 되어있는 값 구분

			checkRow = chk[i].value;



			if (checkCnt == 1) {                            //체크된 체크박스의 개수가 한 개 일때,

				rowid.push(checkRow);

			} else {                                            //체크된 체크박스의 개수가 여러 개 일때,

				if (i == checkLast) {                     //체크된 체크박스 중 마지막 체크박스일 때,

					rowid.push(checkRow);

				} else {

					rowid.push(checkRow);

				}



			}

			cnt++;

			checkRow = '';    //checkRow초기화.

		}
	}
	
	/*let httpRequest = new XMLHttpRequest();

	console.log(rowid);

	const str = {
		price: rowid,
	};
	
	const obj = JSON.stringify(str);
	
	httpRequest.responseType = "json";
	httpRequest.open('POST','/carprice',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

	httpRequest.onload = () => {
			if (httpRequest.readyState === httpRequest.DONE) {
			    if (httpRequest.status === 200) {
			      //console.log(httpRequest.response);
			      
			      var data = httpRequest.response;
				  //console.log(data.length);
			      
			      if(data.length==0){
					  console.log("값이 없습니당");
					  
					  let htmlStr = '';
					  
					  htmlStr += `
					  
					  
					<CENTER><img src="images/empty.png"/></CENTER>
					<div class="w3-container w3-center">
						<h3>여긴 텅 비어있습니다</h3>
					</div>
					  
					  `;
					  
					  var carlist = document.getElementById("carList");
				  	//console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					
				  }else{
				  
				  let htmlStr = '';
				  
			      for(var i=0;i<data.length;i++){
					  //console.log(data[i]);
				

				  htmlStr += `
					
					<img
						src="images/ev/hyundai/kona/kona_1.JPG"
						alt="Alps"
						class="car-image2" />
					<div class="w3-container w3-center">
						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
						<p>${data[i].cp_price}  원</p>
					</div>
						
         		  `;
				  
				  	var carlist = document.getElementById("carList");
				  	//console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					}
					}
			    }
			  }
		};*/

	return rowid;
}


function AddressCheck() { //지역리스트
	
	var chk = document.getElementsByName("Address"); // 체크박스객체를 담는다

	var len = chk.length;    //체크박스의 전체 개수

	var checkRow = '';      //체크된 체크박스의 value를 담기위한 변수

	var checkCnt = 0;        //체크된 체크박스의 개수

	var checkLast = '';      //체크된 체크박스 중 마지막 체크박스의 인덱스를 담기위한 변수

	var rowid = [];             //체크된 체크박스의 모든 value 값을 담는다

	var cnt = 0;



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {

			checkCnt++;        //체크된 체크박스의 개수

			checkLast = i;     //체크된 체크박스의 인덱스

		}

	}



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {  //체크가 되어있는 값 구분

			checkRow = chk[i].value;



			if (checkCnt == 1) {                            //체크된 체크박스의 개수가 한 개 일때,

				//rowid += "'" + checkRow + "'";        //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
				rowid.push(checkRow);

			} else {                                            //체크된 체크박스의 개수가 여러 개 일때,

				if (i == checkLast) {                     //체크된 체크박스 중 마지막 체크박스일 때,

					//rowid += "'" + checkRow + "'";  //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
					rowid.push(checkRow);

				} else {

					//rowid += "'" + checkRow + "',";	 //'value',의 형태 (뒤에 ,(콤마)가 붙게)         			
					rowid.push(checkRow);

				}



			}

			cnt++;

			checkRow = '';    //checkRow초기화.

		}



//산업스파이 다녀감
	}
	/*	//console.log(rowid);    //'value1', 'value2', 'value3' 의 형태로 출력된다.

		let httpRequest = new XMLHttpRequest();
		
		console.log(rowid);
		
		const str = {
			address: rowid,
		};
		
		const obj = JSON.stringify(str);
		//console.log(obj);
		
		httpRequest.responseType = "json";
		httpRequest.open('POST','/caraddress',true);
		httpRequest.setRequestHeader('Content-Type','application/json');
		httpRequest.send(obj);
		
		httpRequest.onload = () => {
			if (httpRequest.readyState === httpRequest.DONE) {
			    if (httpRequest.status === 200) {
			      console.log(httpRequest.response);
			      
			      var data = httpRequest.response;
				  //console.log(data);
				  //console.log(date.length);
				  
				  if(data.length==0){
					  console.log("값이 없습니당");
					  
					  let htmlStr = '';
					  
					  htmlStr += `
					  
					  
					<CENTER><img src="images/empty.png"/></CENTER>
					<div class="w3-container w3-center">
						<h3>여긴 텅 비어있습니다</h3>
					</div>
					  
					  `;
					  
					  var carlist = document.getElementById("carList");
				  	//console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					
				  }else{
			      
				  let htmlStr = '';
				  
			      for(var i=0;i<data.length;i++){
					  console.log(data[i]);
				

				  htmlStr += `
					
					<img
						src="images/ev/hyundai/kona/kona_1.JPG"
						alt="Alps"
						class="car-image2" />
					<div class="w3-container w3-center">
						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
						<p>${data[i].cp_price}  원</p>
					</div>
						
         		  `;
				  
				  	var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					}
					}
			    }
			  }
		};*/
		return rowid;
}

function ResetList(user){

	let httpRequest = new XMLHttpRequest();

	const str = {
		reset:"reset",
	};

	const obj = JSON.stringify(str);

		httpRequest.responseType = "json";
 		httpRequest.open('POST','/resetList',true);
 		httpRequest.setRequestHeader('Content-Type','application/json');
 		httpRequest.send(obj);
		
		
 		httpRequest.onload = () => {
 			if (httpRequest.readyState === httpRequest.DONE) {
 			    if (httpRequest.status === 200) {
 			      //console.log(httpRequest.response);
			      
 			      let data = httpRequest.response;
 				  //console.log(data);
			      
 				  let htmlStr = '';
				  
 			      for(var i=0;i<data.length;i++){
 					  //console.log(data[i]);
				

 				  htmlStr += `
					
				   <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
							 `;
				  
 				  	var carlist = document.getElementById("carList");
 				  	//console.log(carlist);
 					carlist.innerHTML = htmlStr;
					
 					}
 			    }
 			  }
 		};
		return;
}


function OptionCheck(){
	
	var chk = document.getElementsByName("Option"); // 체크박스객체를 담는다

	var len = chk.length;    //체크박스의 전체 개수

	var checkRow = '';      //체크된 체크박스의 value를 담기위한 변수

	var checkCnt = 0;        //체크된 체크박스의 개수

	var checkLast = '';      //체크된 체크박스 중 마지막 체크박스의 인덱스를 담기위한 변수

	var rowid = [];             //체크된 체크박스의 모든 value 값을 담는다

	var cnt = 0;



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {

			checkCnt++;        //체크된 체크박스의 개수

			checkLast = i;     //체크된 체크박스의 인덱스

		}

	}



	for (var i = 0; i < len; i++) {

		if (chk[i].checked == true) {  //체크가 되어있는 값 구분

			checkRow = chk[i].value;



			if (checkCnt == 1) {                            //체크된 체크박스의 개수가 한 개 일때,

				//rowid += "'" + checkRow + "'";        //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
				rowid.push(checkRow);

			} else {                                            //체크된 체크박스의 개수가 여러 개 일때,

				if (i == checkLast) {                     //체크된 체크박스 중 마지막 체크박스일 때,

					//rowid += "'" + checkRow + "'";  //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
					rowid.push(checkRow);

				} else {

					//rowid += "'" + checkRow + "',";	 //'value',의 형태 (뒤에 ,(콤마)가 붙게)         			
					rowid.push(checkRow);

				}



			}

			cnt++;

			checkRow = '';    //checkRow초기화.

		}
	
	}
	
	/*let httpRequest = new XMLHttpRequest();
		
		console.log(rowid);
		
		const str = {
			option: rowid,
		};
		
		const obj = JSON.stringify(str);
		//console.log(obj);
		
		httpRequest.responseType = "json";
		httpRequest.open('POST','/caroption',true);
		httpRequest.setRequestHeader('Content-Type','application/json');
		httpRequest.send(obj);
		
		httpRequest.onload = () => {
			if (httpRequest.readyState === httpRequest.DONE) {
			    if (httpRequest.status === 200) {
			      console.log(httpRequest.response);
			      
			      var data = httpRequest.response;
				  //console.log(data);
				  
				  if(data.length==0){
					  console.log("값이 없습니당");
					  
					  let htmlStr = '';
					  
					  htmlStr += `
					  
					  
					<CENTER><img src="images/empty.png"/></CENTER>
					<div class="w3-container w3-center">
						<h3>여긴 텅 비어있습니다</h3>
					</div>
					  
					  `;
					  
					  var carlist = document.getElementById("carList");
				  	//console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					
				  }else{
			      
				  let htmlStr = '';
				  
			      for(var i=0;i<data.length;i++){
					  console.log(data[i]);
				

				  htmlStr += `
					
					<img
						src="images/ev/hyundai/kona/kona_1.JPG"
						alt="Alps"
						class="car-image2" />
					<div class="w3-container w3-center">
						<p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
						<p>${data[i].cp_price}  원</p>
					</div>
						
         		  `;
				  
				  	var carlist = document.getElementById("carList");
				  	console.log(carlist);
					carlist.innerHTML = htmlStr;
					
					}
			    }
			    }
			  }
		};*/
	return rowid;
}

function ModelSelect(){

console.log("시작");

console.log(maker);

	let hyundai = hyundaiSelect();
	console.log(hyundai);
	let genesis = genesisSelect();
	console.log(genesis);
	let kia = kiaSelect();
	console.log(kia);
	let chevrolet = chevroletSelect();
	console.log(chevrolet);
	let renault = renaultSelect();
	console.log(renault);
	let tesla = teslaSelect();
	console.log(tesla);
	let benz = benzSelect();
	console.log(benz);
	let bmw = bmwSelect();
	console.log(bmw);
	let audi = audiSelect();
	console.log(audi);
	let porsche = porscheSelect();
	console.log(porsche);
	let polestar = polestarSelect();
	console.log(polestar);
  
  if(hyundai!==""){
    var maker = hyundai;
    console.log("현대");
  }else if(genesis!==""){
    var maker = genesis;
    console.log("제네시스");
  }else if(kia!==""){
    var maker = kia;
    console.log("기아");
  }else if(chevrolet!==""){
    var maker = chevrolet;
    console.log("쉐보레");
  }else if(renault!==""){
    var maker = renault;
    console.log("르노");
  }else if(tesla!==""){
    var maker = tesla;
    console.log("테슬라");
  }else if(benz!==""){
    var maker = benz;
    console.log("벤츠");
  }else if(bmw!==""){
    var maker = bmw;
    console.log("비엠더블유");
  }else if(audi!==""){
    var maker = audi;
    console.log("아우디");
  }else if(porsche!==""){
    var maker = porsche;
    console.log("포르쉐");
  }else if(polestar!==""){
    var maker = polestar;
    console.log("폴스타");
  }else {
	  console.log("노쳌!?!?!?!?!?!??")
  }

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <img
          src="images/ev/hyundai/kona/kona_1.JPG"
          alt="Alps"
          class="car-image2" />
        <div class="w3-container w3-center">
          <p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
          <p>${data[i].cp_price}  원</p>
        </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

    hyundai = "";
	genesis = "";
	kia = "";
	chevrolet = "";
	renault = "";
	tesla = "";
	benz = "";
	bmw = "";
	audi = "";
	porsche = "";
	polestar = "";
  console.log("마지막");
}

function hyundaiSelect(user){

  var makerSelect = document.getElementById("model_hyundai");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  return maker;
}

function genesisSelect(user){

  var makerSelect = document.getElementById("model_genesis");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  
  

  return maker;
}

function kiaSelect(user){

  var makerSelect = document.getElementById("model_kia");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  

  return maker;
}

function chevroletSelect(user){

  var makerSelect = document.getElementById("model_chevrolet");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };
  

  return maker;
}

function renaultSelect(user){

  var makerSelect = document.getElementById("model_renault");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  

  return maker;
}

function teslaSelect(user){

  var makerSelect = document.getElementById("model_tesla");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  

  return maker;
}

function benzSelect(user){

  var makerSelect = document.getElementById("model_benz");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };
  

  return maker;
}

function bmwSelect(user){

  var makerSelect = document.getElementById("model_bmw");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  

  return maker;
}

function audiSelect(user){

  var makerSelect = document.getElementById("model_audi");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  

  return maker;
}

function porscheSelect(user){

  var makerSelect = document.getElementById("model_porsche");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  

  return maker;
}

function polestarSelect(user){

  var makerSelect = document.getElementById("model_polestar");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  let httpRequest = new XMLHttpRequest();

  console.log(maker);
  
  const str = {
	  c_name : maker,
	}
	
	console.log(str);

  const obj = JSON.stringify(str);

  httpRequest.responseType = "json";
	httpRequest.open('POST','/carmodel',true);
	httpRequest.setRequestHeader('Content-Type','application/json');
	httpRequest.send(obj);

  httpRequest.onload = () => {
    if(httpRequest.readyState === httpRequest.DONE){
      if(httpRequest.status === 200){
        let data = httpRequest.response;

        if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <div class="car-card">
					   <a href="/car_detail?num=${data[i].c_num}&userid=${user}">
					   <img
					   src="/image/${data[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${data[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${data[i].c_year}년식</span>
					   <span class="partition-right" >${data[i].c_mile}km</span>
					   <span >${data[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${data[i].cp_price} 원</p>
					 </a>
					 </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
      }
    }
  };

  

  return maker;
}

function showModelSelect() {
  var makerSelect = document.getElementById("makerSelect");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;
  //options[makerSelect.selectedIndex] = <option value="값" id="값">값</option>
  //options[makerSelect.selectedIndex].value = 위에의 value값만 가져옴

  // model select창 안보이게
  // 새로 제조사 선택 시에 누적되는 것 방지
  var models = document.getElementsByName("model");
  for (var i = 0; i < models.length; i++) {
    models[i].style.display = "none";
  }

  // model select창 선택
  switch (maker) {
    case "hyundai":
      var model = document.getElementById("model_" + maker);
      break;
    case "genesis":
      var model = document.getElementById("model_" + maker);
      break;
    case "kia":
      var model = document.getElementById("model_" + maker);
      break;
    case "chevrolet":
      var model = document.getElementById("model_" + maker);
      break;
    case "renault":
      var model = document.getElementById("model_" + maker);
      break;
    case "tesla":
      var model = document.getElementById("model_" + maker);
      break;
    case "benz":
      var model = document.getElementById("model_" + maker);
      break;
    case "bmw":
      var model = document.getElementById("model_" + maker);
      break;
    case "audi":
      var model = document.getElementById("model_" + maker);
      break;
    case "porsche":
      var model = document.getElementById("model_" + maker);
      break;
    case "polestar":
      var model = document.getElementById("model_" + maker);
      break;

    default:
      break;
  }

 /*console.log(maker);

  let httpRequest = new XMLHttpRequest();

  const str = {
    c_brand : maker,
  }

  const obj=JSON.stringify(str);

  httpRequest.responseType = "json";
  httpRequest.open('POST','/carbrand',true);
  httpRequest.setRequestHeader('Content-Type','application/json');
  httpRequest.send(obj);

  httpRequest.onload = () => {
    if (httpRequest.readyState === httpRequest.DONE) {
        if (httpRequest.status === 200) {
          //console.log(httpRequest.response);
          
          let data = httpRequest.response;
        //console.log(data.length);
          
          if(data.length==0){
          console.log("값이 없습니당");
          
          let htmlStr = '';
          
          htmlStr += `
          
          
        <CENTER><img src="images/empty.png"/></CENTER>
        <div class="w3-container w3-center">
          <h3>여긴 텅 비어있습니다</h3>
        </div>
          
          `;
          
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        
        }else{
        
        let htmlStr = '';
        
          for(var i=0;i<data.length;i++){
          //console.log(data[i]);
      

        htmlStr += `
        
        <img
          src="images/ev/hyundai/kona/kona_1.JPG"
          alt="Alps"
          class="car-image2" />
        <div class="w3-container w3-center">
          <p> 〔 ${data[i].c_brand} 〕 ${data[i].c_name} / ${data[i].c_grade}</p>
          <p>${data[i].cp_price}  원</p>
        </div>
          
             `;
        
          var carlist = document.getElementById("carList");
          //console.log(carlist);
        carlist.innerHTML = htmlStr;
        
        }
        }
        }
      }
  };*/


  //show model select창
  if(maker!==""){
	  model.style.display = "block";
  }

  return maker;
}


function AllCheck(user){

	let car = CarCheck(); //차종
	let brand = showModelSelect(); //제조사
	//let model = ModelSelect(); //모델
	let mile = MileCheck(); //주행거리
	let price = PriceCheck(); //가격
	let address = AddressCheck(); //지역
	let option = OptionCheck(); //옵션
	let day = Listday(); //연식

	if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //7개 1
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}
							}
							}

							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
                  src="images/ev/hyundai/ionic6/ionic6_1.JPG"
                  alt="Alps"
                  class="car-image2" />
                <p class="w3-large" th:utext="${arr[i].c_name}">{이름}</p>
                <p>
                  <span class="partition-right" th:utext="${arr[i].c_year}년식">{연식}</span>
                  <span class="partition-right" th:utext="${arr[i].c_mile}km">{주행거리}</span>
                  <span th:utext="${arr[i].cp_address}">{지역}</span>
                </p>
                <p class="w3-large" th:utext="${arr[i].cp_price}+'원'">{가격}</p>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}
}
}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0){ //6개 2
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
							
							}

							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && brand.length!==0){ //6개 3
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}
							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0 && day.length!==0 && brand.length!==0){ //6개 4
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}

							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //6개 5
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}

							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}else if(car.length!==0 && mile.length!==0 && address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //6개 6
		console.log(car);
		console.log(mile);
		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num ==	miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);						
							}
							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}else if(car.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //6개 7
		console.log(car);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}

							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}else if(mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //6개 8
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){


					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
							}

							}
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
					}
 		  }
	   }
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0){ //5개 9
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0 && day.length!==0){ //5개 10
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0 && brand.length!==0){ //5개 11
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && option.length!==0 && day.length!==0){ //5 12
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && option.length!==0 && brand.length!==0){ //5 13
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(option);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && day.length!==0 && brand.length!==0){ //5 14
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && address.length!==0 && option.length!==0 && day.length!==0){ //5 15
		console.log(car);
		console.log(mile);
		console.log(address);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && address.length!==0 && option.length!==0 && brand.length!==0){ //5 16
		console.log(car);
		console.log(mile);
		console.log(address);
		console.log(option);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && address.length!==0 && day.length!==0 && brand.length!==0){ //5 17
		console.log(car);
		console.log(mile);
		console.log(address);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //5 18
		console.log(car);
		console.log(mile);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0){ //5 19
		console.log(car);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
			   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && brand.length!==0){ //5 20
		console.log(car);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && price.length!==0 && address.length!==0 && day.length!==0 && brand.length!==0){ //5 21
		console.log(car);
		console.log(price);
		console.log(address);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && price.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //5 22
		console.log(car);
		console.log(price);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //5 23
		console.log(car);
		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	
 	}else if(mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0){ //5 24

		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){
			      
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(pricedata[j]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0 && brand.length!==0){ //5 25

		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(mile.length!==0 && price.length!==0 && address.length!==0 && day.length!==0 && brand.length!==0){ //5 26

		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(day);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(mile.length!==0 && price.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //5 27

		console.log(mile);
		console.log(price);
		console.log(option);
		console.log(day);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(mile.length!==0 && address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //5 28

		console.log(mile);
		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();

						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(miledata[k]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //5 29

		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
						}
						}
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
						 <img
							 src="images/ev/hyundai/kona/kona_1.JPG"
							 alt="Alps"
							 class="car-image2" />
						 <div class="w3-container w3-center">
							 <p> 〔 ${arr[i].c_brand} 〕 ${arr[i].c_name} / ${arr[i].c_grade}</p>
							 <p>${arr[i].cp_price}  원</p>
						 </div>
							 
						`;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
}
					}
				}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && address.length!==0){ //4 30
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(address);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && option.length!==0){ //4 31
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(option);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;

					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(optiondata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && day.length!==0){ //4 32
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0 && brand.length!==0){ //4 33
		console.log(car);
		console.log(mile);
		console.log(price);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && address.length!==0 && option.length!==0){ //4 34
		console.log(car);
		console.log(mile);
		console.log(address);
		console.log(option);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && address.length!==0 && day.length!==0){ //4 35
		console.log(car);
		console.log(mile);
		console.log(address);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && address.length!==0 && brand.length!==0){ //4 36
		console.log(car);
		console.log(mile);
		console.log(address);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && option.length!==0 && day.length!==0){ //4 37
		console.log(car);
		console.log(mile);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && option.length!==0 && brand.length!==0){ //4 38
		console.log(car);
		console.log(mile);
		console.log(option);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && day.length!==0 && brand.length!==0){ //4 39
		console.log(car);
		console.log(mile);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && price.length!==0 && address.length!==0 && option.length!==0){ //4 40
		console.log(car);
		console.log(price);
		console.log(address);
		console.log(option);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && price.length!==0 && address.length!==0 && day.length!==0){ //4 41
		-
		console.log(car);
		console.log(price);
		console.log(address);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && price.length!==0 && address.length!==0 && brand.length!==0){ //4 42
		console.log(car);
		console.log(price);
		console.log(address);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && price.length!==0 && option.length!==0 && day.length!==0){ //4 43
		console.log(car);
		console.log(price);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
				   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && price.length!==0 && option.length!==0 && brand.length!==0){ //4 44
		console.log(car);
		console.log(price);
		console.log(option);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && price.length!==0 && day.length!==0 && brand.length!==0){ //4 45
		console.log(car);
		console.log(price);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && address.length!==0 && option.length!==0 && day.length!==0){ //4 46
		console.log(car);
		console.log(address);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){


			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //4 47
		console.log(car);
		console.log(option);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && address.length!==0 && option.length!==0 && brand.length!==0){ //4 48
		console.log(car);
		console.log(address);
		console.log(option);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		
		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			
					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							
								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && address.length!==0 && day.length!==0 && brand.length!==0){ //4 49
		console.log(car);
		console.log(address);
		console.log(day);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(addressdata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && price.length!==0 && address.length!==0 && option.length!==0){ //4 50

		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(option);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

			      
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
								arr.push(price[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && price.length!==0 && address.length!==0 && day.length!==0){ //4 51

		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(day);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){


					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && price.length!==0 && address.length!==0 && brand.length!==0){ //4 52

		console.log(mile);
		console.log(price);
		console.log(address);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){


					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && price.length!==0 && option.length!==0 && day.length!==0){ //4 53

		console.log(mile);
		console.log(price);
		console.log(option);
		console.log(day);

		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		
		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){
			
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && price.length!==0 && day.length!==0 && brand.length!==0){ //4 54

		console.log(mile);
		console.log(price);
		console.log(day);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){


			      
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && price.length!==0 && option.length!==0 && brand.length!==0){ //4 55

		console.log(mile);
		console.log(price);
		console.log(option);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

	
		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

	
			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && address.length!==0 && option.length!==0 && day.length!==0){ //4 56

		console.log(mile);
		console.log(address);
		console.log(option);
		console.log(day);


		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);


				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(miledata[k]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //4 57

		console.log(mile);
		console.log(option);
		console.log(day);
		console.log(brand);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					
						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(miledata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(miledata[k].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(miledata[k]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && address.length!==0 && day.length!==0 && brand.length!==0){ //4 58

		console.log(mile);
		console.log(address);
		console.log(day);
		console.log(brand);


		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		
				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(miledata[k]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(mile.length!==0 && address.length!==0 && option.length!==0 && brand.length!==0){ //4 59

		console.log(mile);
		console.log(address);
		console.log(option);
		console.log(brand);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(miledata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(miledata[k].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(miledata[k]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(price.length!==0 && address.length!==0 && option.length!==0 && day.length!==0){ //4 60

		console.log(price);
		console.log(address);
		console.log(option);
		console.log(day);


		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);


			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

			      
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(address.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //4 61

		console.log(address);
		console.log(option);
		console.log(day);
		console.log(brand);

		
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);


					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){


					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(addressdata[l]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(price.length!==0 && option.length!==0 && day.length!==0 && brand.length!==0){ //4 62

		console.log(price);
		console.log(option);
		console.log(day);
		console.log(brand);

		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){


					   let pricedata = pricehttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(optiondata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(price.length!==0 && address.length!==0 && option.length!==0 && brand.length!==0){ //4 63

		console.log(price);
		console.log(address);
		console.log(option);
		console.log(brand);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		
			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == branddata[c].c_num){
								arr.push(pricedata[j]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(price.length!==0 && address.length!==0 && day.length!==0 && brand.length!==0){ //4 64

		console.log(price);
		console.log(address);
		console.log(day);
		console.log(brand);

 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

	
			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){


					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(pricedata);
					   console.log(addressdata);
					   console.log(daydata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
						for(var c=0;c<branddata.length;c++){
							if(pricedata[j].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
							if(daydata[b].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
					}
								}
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
}
}
}
	}else if(car.length!==0 && mile.length!==0 && price.length!==0){ //3 66
		console.log(car);
		console.log(mile);
		console.log(price);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
			

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let miledata = milehttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(miledata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var k=0;k<miledata.length;k++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == miledata[k].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && mile.length!==0 && address.length!==0){ //3 67
		console.log(car);
		console.log(mile);
		console.log(address);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let addressdata = addresshttp.response;

					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(addressdata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var l=0;l<addressdata.length;l++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == addressdata[l].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && mile.length!==0 && option.length!==0){ //3 68
		console.log(car);
		console.log(mile);
		console.log(option);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 
		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let optiondata = optionhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(optiondata);

					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var a=0;a<optiondata.length;a++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == optiondata[a].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && mile.length!==0 && day.length!==0){ //3 69
		console.log(car);
		console.log(mile);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 	
		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && mile.length!==0 && brand.length!==0){ //3 70
		console.log(car);
		console.log(mile);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == miledata[k].c_num){
							if(miledata[k].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && price.length!==0 && address.length!==0){ //3 71
		console.log(car);
		console.log(price);
		console.log(address);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let addressdata = addresshttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(addressdata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var l=0;l<addressdata.length;l++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == addressdata[l].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && price.length!==0 && option.length!==0){ //3 72
		console.log(car);
		console.log(price);
		console.log(option);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
	
		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let optiondata = optionhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(optiondata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var a=0;a<optiondata.length;a++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == optiondata[a].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && price.length!==0 && day.length!==0){ //3 73
		console.log(car);
		console.log(price);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && price.length!==0 && brand.length!==0){ //3 74
		console.log(car);
		console.log(price);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
			
		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(pricedata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == pricedata[j].c_num){
							if(pricedata[j].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && address.length!==0 && option.length!==0){ //3 75
		console.log(car);
		console.log(address);
		console.log(option);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);



		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			
					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

						
							
			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   let optiondata = optionhttp.response;

					   console.log(typedata);
					   console.log(addressdata);
					   console.log(optiondata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
						for(var a=0;a<optiondata.length;a++){
							if(typedata[i].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == optiondata[a].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && address.length!==0 && day.length!==0){ //3 76
		console.log(car);
		console.log(address);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 	
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);


		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){
				
			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(addressdata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && address.length!==0 && brand.length!==0){ //3 77
		console.log(car);
		console.log(address);
		console.log(brand);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){

								
							
			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   let branddata = brandhttp.response;
					   
					   console.log(typedata);
					   console.log(addressdata);
					   console.log(branddata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
						for(var c=0;c<branddata.length;c++){
							if(typedata[i].c_num == addressdata[l].c_num){
							if(addressdata[l].c_num == branddata[c].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && option.length!==0 && day.length!==0){ //3 78
		console.log(car);
		console.log(option);
		console.log(day);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
	
		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			const str = {
			year : rowday,
		};
		}else {
		const carday = {
			c_year : day,
		};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){

			      
					   let typedata = carhttp.response;
					   let optiondata = optionhttp.response;
					   let daydata = dayhttp.response;
					   
					   console.log(typedata);
					   console.log(optiondata);
					   console.log(daydata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var a=0;a<optiondata.length;a++){
						for(var b=0;b<daydata.length;b++){
							if(typedata[i].c_num == optiondata[a].c_num){
							if(optiondata[a].c_num == daydata[b].c_num){
								arr.push(typedata[i]);
							}
						}
							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
		}
	}
}
	}else if(car.length!==0 && mile.length!==0){ //7개 1
		console.log(car);
		console.log(mile);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {

							
			      
					   let typedata = carhttp.response;
					   let miledata = milehttp.response;
					   
					   console.log(typedata);
					   console.log(miledata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var k=0;k<miledata.length;k++){
							if(typedata[i].c_num == miledata[k].c_num){

								arr.push(typedata[i]);

							}
						}
							   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
	}else if(car.length!==0 && price.length!==0){ //7개 1
		console.log(car);
		console.log(price);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);
		

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {

							
			      
					   let typedata = carhttp.response;
					   let pricedata = pricehttp.response;
					  
					   console.log(typedata);
					   console.log(pricedata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var j=0;j<pricedata.length;j++){

							if(typedata[i].c_num == pricedata[j].c_num){

								arr.push(typedata[i]);

							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
	}else if(car.length!==0 && address.length!==0){ //7개 1
		console.log(car);
		console.log(address);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);
 		
		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);


		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

			addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){			
			      
					   let typedata = carhttp.response;
					   let addressdata = addresshttp.response;
					   
					   console.log(typedata);
					   console.log(addressdata);
					   
					   let arr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						for(var l=0;l<addressdata.length;l++){
							if(typedata[i].c_num == addressdata[l].c_num){

								arr.push(typedata[i]);

							   }
						   }
					   }
					   console.log(arr);
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
				}
			}
		}
	}else if(car.length!==0){ //7개 1
		console.log(car);

		//차종
		let carhttp = new XMLHttpRequest();

		const cartype = {
			scail : car,
		}

		const objtype = JSON.stringify(cartype);
 		console.log(objtype);
		
 		carhttp.responseType = "json";
 		carhttp.open('POST','/carCheck',true);
 		carhttp.setRequestHeader('Content-Type','application/json');
 		carhttp.send(objtype);

		carhttp.onload = () => {
		if (carhttp.readyState === carhttp.DONE) {
		if (carhttp.status === 200) {

					   let typedata = carhttp.response;
					   
					   console.log(typedata);
					   console.log(typedata.length);

					  
					   if(typedata.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   let htmlarr = new Array();
					   
					   for(var i=0;i<typedata.length;i++){
						   //console.log(typedata[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${typedata[i].c_num}&userid=${user}">
					   <img
					   src="/image/${typedata[i].img_dir_1}"
					   alt="Alps"
					   class="car-image2" />
					 <p class="w3-large" >${typedata[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${typedata[i].c_year}년식</span>
					   <span class="partition-right" >${typedata[i].c_mile}km</span>
					   <span >${typedata[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${typedata[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;

						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;

						 htmlarr[i] += htmlStr;
						 
						 }//for문 end

						 /*console.log(htmlarr);
						 console.log(htmlarr.length)

						 let htmlpage = '';
						 let ahtml = '';
						 let bhtml = '';

						 const htmllist = htmlarr.length; //13
						 let total = Math.ceil(htmllist / 8) //2 하단의 총페이지수
						 let pagegroup = 1; //1
						 let pagecount = total; //2
						 let lastnum = pagegroup * pagecount; //2
						 if(lastnum > total){
							lastnum = total;
						 }
						 let firstnum = lastnum - (pagecount-1); //1
						 console.log(firstnum)
						 console.log(lastnum)
							
							// 1~5만큼 페이지네이션 그려줌
							for (let i = firstnum; i <= lastnum; i++) {
							  htmlpage += `<a href="car" id="page${i}">${i}</button>`
							  for (let j = 0; j < 8; j++) {
									ahtml += htmlarr[j];
								for (let l = 8; l < htmlarr.length; l++) {
									bhtml += htmlarr[l];
								}
								
								
							  }
							}
							console.log(ahtml)
							console.log(bhtml)

							var page = document.getElementById("page");
							page.innerHTML = htmlpage;

							var page1 = document.getElementById("page1");
							page1.innerHTML = ahtml;
							
							var page2 = document.getElementById("page2");
							page2.innerHTML = bhtml;*/


						 }

						}
					}
				}	
	}else if(mile.length!==0){ //7개 1

		console.log(mile);

		//주행거리
		 let milehttp = new XMLHttpRequest();

		 const carmile = {
			 mile: mile,
		 };
		 
		 const objmile = JSON.stringify(carmile);
		 console.log(objmile);

				milehttp.responseType = "json";
				milehttp.open('POST','/carmile',true);
				milehttp.setRequestHeader('Content-Type','application/json');
				milehttp.send(objmile);

				milehttp.onload = () => {
				if (milehttp.readyState === milehttp.DONE) {
				if (milehttp.status === 200) {


					   let miledata = milehttp.response;

					   console.log(miledata);

					   if(miledata.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<miledata.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${miledata[i].c_num}&userid=${user}">
					   <img
					   src="/image/${miledata[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${miledata[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${miledata[i].c_year}년식</span>
					   <span class="partition-right" >${miledata[i].c_mile}km</span>
					   <span >${miledata[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${miledata[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
	}else if(price.length!==0){ //7개 1

		console.log(price);

		//가격
 		let pricehttp = new XMLHttpRequest();

		 const carprice = {
			price : price,
			}

			const objprice = JSON.stringify(carprice);
			console.log(objprice);

	
			pricehttp.responseType = "json";
			pricehttp.open('POST','/carprice',true);
			pricehttp.setRequestHeader('Content-Type','application/json');
			pricehttp.send(objprice);

			pricehttp.onload = () => {
			if (pricehttp.readyState === pricehttp.DONE) {
			if (pricehttp.status === 200) {


					   let arr = pricehttp.response;
					   
					   console.log(arr);
					
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
	}else if(address.length!==0){ //7개 1

		console.log(address);

		 //지역
		 let addresshttp = new XMLHttpRequest();

		const caraddress = {
			address: address,
		};
		
		const objaddress = JSON.stringify(caraddress);
		//console.log(obj);

		
					addresshttp.responseType = "json";
					addresshttp.open('POST','/caraddress',true);
					addresshttp.setRequestHeader('Content-Type','application/json');
					addresshttp.send(objaddress);

					addresshttp.onload = () =>{
					if(addresshttp.readyState === addresshttp.DONE){
					if(addresshttp.status===200){					

					   let arr = addresshttp.response;
					   
					   console.log(arr);
					   
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   alt="Alps"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>   

					 
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
	}else if(option.length!==0){ //7개 1

		console.log(option);

		//옵션
		let optionhttp = new XMLHttpRequest();
		
		const caroption = {
			option: option,
		};
		
		const objoption = JSON.stringify(caroption);
		//console.log(obj);

		
						optionhttp.responseType = "json";
						optionhttp.open('POST','/caroption',true);
						optionhttp.setRequestHeader('Content-Type','application/json');
						optionhttp.send(objoption);

						optionhttp.onload = () =>{
						if(optionhttp.readyState===optionhttp.DONE){
						if(optionhttp.status===200){

			      
					   let arr = optionhttp.response;
					   
					   console.log(arr);
					   
					   
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   alt="Alps"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
	}else if(day.length!==0){ //7개 1

		console.log(day);

		let carday = "";
		let str = "";
		
		//연식
		let dayhttp = new XMLHttpRequest();

		if(day.length===2){
			str = {
			year : day,
		};
		}else {
			carday = {
				c_year : day,
			};
		}

		const objday = JSON.stringify(carday);
		//console.log(objday);


							dayhttp.responseType = "json";
							dayhttp.open('POST','/carfromday',true);
							dayhttp.setRequestHeader('Content-Type','application/json');
							dayhttp.send(objday);

							dayhttp.onload = () => {
							if(dayhttp.readyState===dayhttp.DONE){
							if(dayhttp.status===200){		
			      
					   let arr = dayhttp.response;
					   
					   console.log(arr);
					   
					  
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `
						 
					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>    
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
	}else if(brand.length!==0){ //7개 1

		console.log(brand);

		//제조사
		let brandhttp = new XMLHttpRequest();

		const carbrand = {
			c_brand : brand,
		}

		const objbrand=JSON.stringify(carbrand);

		
								brandhttp.responseType = "json";
								brandhttp.open('POST','/carbrand',true);
								brandhttp.setRequestHeader('Content-Type','application/json');
								brandhttp.send(objbrand);
								
								brandhttp.onload = () => {
								if(brandhttp.readyState===brandhttp.DONE){
								if(brandhttp.status===200){


					   let arr = brandhttp.response;

					   console.log(arr);
					   
					   if(arr.length==0){
						   console.log("값이 없습니당");
						   
						   let htmlStr = '';
						   
						   htmlStr += `
						   
						   
						 <CENTER><img src="images/empty.png"/></CENTER>
						 <div class="w3-container w3-center">
							 <h3>여긴 텅 비어있습니다</h3>
						 </div>
						   
						   `;
						   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 
					   }else{
					   
					   let htmlStr = '';
					   
					   for(var i=0;i<arr.length;i++){
						   //console.log(data[i]);
					 
	 
					   htmlStr += `

					   <div class="car-card">
					   <a href="/car_detail?num=${arr[i].c_num}&userid=${user}">
					   <img
					   src="/image/${arr[i].img_dir_1}"
					   class="car-image2" />
					 <p class="w3-large" >${arr[i].c_name}</p>
					 <p>
					   <span class="partition-right" >${arr[i].c_year}년식</span>
					   <span class="partition-right" >${arr[i].c_mile}km</span>
					   <span >${arr[i].cp_address}</span>
					 </p>
					 <p class="w3-large" >${arr[i].cp_price} 원</p>
					 </a>
					 </div>  
							 `;
					   
						   var carlist = document.getElementById("carList");
						   //console.log(carlist);
						 carlist.innerHTML = htmlStr;
						 
						 }
						 }
						}
					}
				}	
	}else {
		ResetList(user);
	}
			}
		

