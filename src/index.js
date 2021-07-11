import "./styles.css";

//돔 선택하고, 모달 열기 눌렀을 때, display:none -> flex 로 나타남
const open = document.getElementById("open");
const close = document.getElementById("close");
//class 로 되어있는 것은 쿼리로 선택 가능
//클래스 이름으로 찾을 땐 .  적어주기
const modal = document.querySelector(".modal-wrapper");
modal.style.display = "flex";

open.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};
