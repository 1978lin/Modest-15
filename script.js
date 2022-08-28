const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 1500,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

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
