// Select elements from the DOM
const wrapper = document.querySelector("#wrapperAroundView");
const carImage = document.querySelector("#carAnimImage");
const rotateSign = document.querySelector("#rotateSign");

// Previous rotation value
let save = 0;
let dragged = 0;
// sum = save + dragged
let sum = 0;

// Drag sensitivity
const sensitivity = 50;

let clickedSrc = "";
let changeSrc = "";

// Get the X Position when the mouse is clicked down
carImage.addEventListener("mousedown", function (e) {
  const x = e.clientX;

  // 마우스 클릭 시의 image src
  clickedSrc = carImage.src;

  wrapper.addEventListener("mousemove", rotate);
  function rotate(e) {
    rotateSign.classList.remove("signAppear");
    rotateSign.classList.remove("signAppearFastly");

    dragged = parseInt((e.clientX - x) / sensitivity);
    console.log("마우스 드래그 중");

    sum = save + dragged;
    // 우측으로 끌었다면
    if (dragged >= 0) {
      sum = sum % 35;
    } else {
      if (sum < 0) {
        sum += 36;
      }
    }
    changeSrc = clickedSrc.replace(/Taycan_[0-9]+/, "Taycan_" + sum);
    // console.log(changeSrc);
    carImage.src = changeSrc;

    wrapper.style.cursor = "grabbing";
  }

  // Remove the event and cursor icon on mouse release
  window.addEventListener("mouseup", function () {
    rotateSign.classList.add("signAppearFastly");

    wrapper.removeEventListener("mousemove", rotate);

    wrapper.style.cursor = "default";
    console.log("마우스 땜");

    // 현재 이미지 저장
    save = sum;
    // dragged 초기화
    dragged = 0;

    // console.log("save : " + save);
  });
});
