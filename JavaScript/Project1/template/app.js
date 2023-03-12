// do something!

if (getCookie("navigationOpen") == null) {
  let value = nav_open(null);
  setCookie("navigationOpen", value);
} else if (getCookie("navigationOpen") == "true") {
  document.querySelector("nav").classList.add("active");
}

window.addEventListener("load", () => {
  document.querySelector(".toggle").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("active");
    remove_preload();
    let check = document.querySelector(".active");
    let value = nav_open(check);
    setCookie("navigationOpen", value);
  });
});

body_visible();

// Cookie SET
function setCookie(name, value) {
  let date = new Date();
  date.setDate(date.getDate() + 1); //쿠키 날짜 하루로 설정, 늘리면 오래갑니다.. 

  document.cookie = name + "=" + value + ";expires=" + date.toUTCString();
}

//Cookie GET
function getCookie(name) {
  let value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}

//body : visibility :visible 로 변경
function body_visible() {
  let body = document.querySelector("body");
  body.style.visibility = "visible";
}

//preload 클래스 삭제
function remove_preload() {
  document.querySelector("body").classList.remove("preload");
}

//네비게이션이 열려져있는 상태인지 확인
function nav_open(check) {
  if (check == null) {
    return false;
  }
  return true;
}


