

let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active')
};

document.querySelector('#close-side-bar').onclick = () => {
    sideBar.classList.remove('active')
};

// search form 
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
};

window.onscroll = () => {
    sideBar.classList.remove('active');
    search.classList.remove('active');
};

// accordiance form 
var acc = document.getElementsByClassName('accordion');
for (let i = 0; i < acc.length;i++) {
  acc[i].onclick = function () {
    var content = this.nextElementSibling;
    if(content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
       content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // review section

  var swiper = new Swiper(".review-customer", {
    loop:true,
    grabCursor:true,
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
