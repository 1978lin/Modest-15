//slider "SWIPER" init

//modal show by scroll

function modalShow() {
  document.querySelector(".send_message").classList.remove("modal_hide");
}
function modalHide() {
  document.querySelector(".send_message").classList.add("modal_hide");
}

function showModalByScroll() {
  if (
    window.pageYOffset >
    document.body.scrollHeight - window.visualViewport.height * 1.1
  ) {
    modalShow();
  } else {
    modalHide();
  }
}
window.addEventListener("scroll", showModalByScroll);
