function downOrderCount(elmId) {
  var $elm = document.getElementById(elmId);
  if ($elm.value != 0) $elm.value--;
}
function upOrderCount(elmId,p_stock) {
	console.log("엥?");
  var $elm = document.getElementById(elmId);
 
  console.log(p_stock);
  if($elm.value < p_stock) $elm.value++;
}


// 토글쇼
function toggleShow(id) {
  var x = document.getElementById(id);

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function reverseArrow(clicked) {
  var i = clicked.querySelector("i");
  if (i.innerHTML == "expand_more") {
    i.innerHTML = "expand_less";
  } else {
    i.innerHTML = "expand_more";
  }
}

// UI (제조사 선택 후 모델 셀렉트창 보여주기)
function showModelSelect() {
  var makerSelect = document.getElementById("makerSelect");
  var maker = makerSelect.options[makerSelect.selectedIndex].value;

  // model select창 안보이게
  // 새로 제조사 선택 시에 누적되는 것 방지
  var carModels = document.getElementsByName("model");
  for (var i = 0; i < carModels.length; i++) {
    carModels[i].style.display = "none";
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

  //show model select창
  model.style.display = "block";
}

// Validation
// 이메일 체크
// var checkSignUpForm = () => {
//   var $email = document.getElementById("email");
//   if (/\S+@\S+\.\S/.test($email.value) == false) {
//     alert("이메일 형식에 맞게 작성해주세요.");
//   }
// };

// 로컬 내비게이션 메뉴 on 활성화
var addOnLnb = (obj) => {
  var $nav = obj.parentNode;
  var aList = $nav.getElementsByTagName("a");

  for (let i = 0; i < aList.length; i++) {
    aList[i].classList.remove("on_lnb");
  }

  obj.classList.add("on_lnb");
};

// 글로벌 내비게이션 메뉴 on 활성화
var addOnGnb = (obj) => {
  console.log("test");
  var $nav = obj.parentNode;
  var aList = $nav.getElementsByTagName("a");

  for (let i = 0; i < aList.length; i++) {
    aList[i].classList.remove("on_gnb");
  }

  obj.classList.add("on_gnb");
};

// Car 갤러리

// changeFocusImage
function changeFocusImage(obj) {
  let src = obj.getAttribute("src");
  var $focusImage = document.getElementById("focusImage");
  $focusImage.setAttribute("src", src);

  // active
  var $thumbnails = document.getElementsByClassName("thumbnail");

  for (let i = 0; i < $thumbnails.length; i++) {
    // activeThumb 가지고 있는 인덱스 찾기
    if ($thumbnails[i].classList.contains("activeThumb")) {
      $thumbnails[i].classList.remove("activeThumb");
      break;
    }
  }

  obj.classList.add("activeThumb");
}

// prevImage()
function wanderImage(num) {
  // 이미지 갯수 ($thumbnails.length)
  var $thumbnails = document.getElementsByClassName("thumbnail");

  // 현재 이미지 인덱스 찾기
  var currentImageIdx;
  let $focusImage = document.getElementById("focusImage");
  let focusSrc = $focusImage.getAttribute("src");

  let thumbSrc;
  for (let i = 0; i < $thumbnails.length; i++) {
    thumbSrc = $thumbnails[i].getAttribute("src");
    // console.log(thumbSrc);

    if (focusSrc === thumbSrc) {
      currentImageIdx = i;
      break;
    }
  }

  // prev 이미지
  if (num < 0) {
    if (currentImageIdx == 0) {
      $focusImage.setAttribute(
        "src",
        $thumbnails[$thumbnails.length - 1].getAttribute("src")
      );
    } else {
      $focusImage.setAttribute(
        "src",
        $thumbnails[currentImageIdx - 1].getAttribute("src")
      );
    }
    activeThumb(-1);
  } else {
    // next 이미지
    if (currentImageIdx == $thumbnails.length - 1) {
      $focusImage.setAttribute("src", $thumbnails[0].getAttribute("src"));
    } else {
      $focusImage.setAttribute(
        "src",
        $thumbnails[currentImageIdx + 1].getAttribute("src")
      );
    }
    activeThumb(1);
  }
}

function activeThumb(num) {
  var $thumbnails = document.getElementsByClassName("thumbnail");

  for (let i = 0; i < $thumbnails.length; i++) {
    // activeThumb 가지고 있는 인덱스 찾기
    if ($thumbnails[i].classList.contains("activeThumb")) {
      $thumbnails[i].classList.remove("activeThumb");

      if (num > 0) {
        if (i == $thumbnails.length - 1) {
          $thumbnails[0].classList.add("activeThumb");
        } else {
          $thumbnails[i + num].classList.add("activeThumb");
        }
      } else {
        if (i == 0) {
          $thumbnails[$thumbnails.length - 1].classList.add("activeThumb");
        } else {
          $thumbnails[i + num].classList.add("activeThumb");
        }
      }

      break;
    }
  }
}

// 이벤트리스너
// 이벤트 리스너
/*
window.addEventListener("DOMContentLoaded", () => {
  var $thumbnails = document.getElementsByClassName("thumbnail");
  var $gallery_photo = document.getElementById("gallery_photo");

  //썸네일 호버하면 메인이미지 다 안보이게 하고 (d-show를 다 지우고)
  //호버한 이미지를 보이게 한다 (d-show)
  for (let i = 0; i < $thumbnails.length; i++) {
    $thumbnails[i].addEventListener("mouseover", function () {
      // thumbnail 이미지에 호버하면
      let src = this.getAttribute("src");
      // gallery photo
      let $mainImage = this.parentNode.parentNode.children[0].children[0];
      console.log($mainImage);
      $mainImage.setAttribute("src", src);
    });
  }
});
*/

// 로그인, 회원가입 시, 멤버타입 바꾸기
function changeMemberType(obj) {
  // 선택한 버튼 active 활성화하기
  let btnGroupDiv = document.getElementsByClassName("selectMemberType")[0];
  for (let i = 0; i < btnGroupDiv.children.length; i++) {
    btnGroupDiv.children[i].classList.remove("activeMemberType");
  }
  obj.classList.add("activeMemberType");

  // 폼 바꾸기
  if (obj.innerText == "일반사용자") {
    document.getElementById("dealerForm").style.display = "none";
    document.getElementById("userForm").style.display = "block";
  } else {
    document.getElementById("userForm").style.display = "none";
    document.getElementById("dealerForm").style.display = "block";
  }
}

function mOverLogo(obj) {
  obj.innerHTML = "TrueCar";
}
function mOutLogo(obj) {
  obj.innerHTML = "PulseCar";
}

// Scroll
let scrollCnt = 0;
let carAppearCnt = 0;
let taycanAddr = "./images/img_taycan/2022-Porsche-Taycan_0.jpg";
let evTronAddr =
  "https://static.tcimg.net/vehicles/primary/1207e3ea26813dac/2022-Audi-e-tron_GT-white-full_color-driver_side_profile.png?bg=white&fill=solid&fit=fill&h=700&w=1400";
let ioniq6Addr =
  "https://static.tcimg.net/vehicles/primary/4a7866824972888d/2023-Hyundai-IONIQ_5-white-full_color-driver_side_profile.png?bg=white&fill=solid&fit=fill&h=700&w=1400";
let ev6Addr =
  "https://static.tcimg.net/vehicles/primary/c8ab8b02569d371b/2022-Kia-EV6-white-full_color-driver_side_profile.png?h=700&w=1400";

window.onscroll = function () {
  scrollCnt++;

  headerReverse();
  carAnimate();
  carAnimate2();
};

function headerReverse() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("headerWrap").classList.add("headerReverse");
  } else {
    document.getElementById("headerWrap").classList.remove("headerReverse");
  }
}
function carAnimate() {
  var carAnimImage = document.getElementById("carAnimImage");
  var rotateSign = document.getElementById("rotateSign");

  if (scrollCnt > 50 && scrollY < 300 && carAppearCnt === 1) {
    carAnimImage.classList.remove("carAppear", "carAppearR");
    carAppearCnt = 0;
    carAnimImage.src = taycanAddr;

    rotateSign.classList.remove("signAppear");
  }

  if (scrollY > 1000 && carAppearCnt === 0) {
    carAnimImage.classList.add("carAppear");
    carAppearCnt = 1;

    rotateSign.classList.add("signAppear");
  }
}

// 어라운드 뷰 클릭 시 차 등장
function carAppearR(obj) {
  var carAnimImage = document.getElementById("carAnimImage");
  carAnimImage.classList.remove(...carAnimImage.classList);

  let pOBjText = obj.nextElementSibling.innerText;
  if (pOBjText.includes("ev-tron")) {
    carAnimImage.src = evTronAddr;
  } else if (pOBjText.includes("ioniq6")) {
    carAnimImage.src = ioniq6Addr;
  } else if (pOBjText.includes("EV6")) {
    carAnimImage.src = ev6Addr;
  }
  carAnimImage.classList.add("carAppearR");
}
function carAppearL(obj) {
  var carAnimImage = document.getElementById("carAnimImage");
  carAnimImage.classList.remove(...carAnimImage.classList);

  let pOBjText = obj.nextElementSibling.innerText;
  console.log(pOBjText.includes("taycan"));
  if (pOBjText.includes("taycan")) {
    carAnimImage.src = taycanAddr;
  }

  carAnimImage.classList.add("carAppear");
}

function carAnimate2() {
  var carAnimImage2 = document.getElementById("carAnimImage2");
  var carAnimImage3 = document.getElementById("carAnimImage3");

  if (scrollCnt > 50 && scrollY < 2800) {
    carAnimImage2.classList.remove("fade-in");
    carAnimImage3.classList.remove("fade-in2");
  }

  if (scrollY > 3150) {
    carAnimImage2.classList.add("fade-in");
  }
  if (scrollY > 3654) {
    carAnimImage3.classList.add("fade-in2");
  }
}
