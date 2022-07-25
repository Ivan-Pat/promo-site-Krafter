'use strict '

import CastomSelect from "./modules/custom-select";
import JustValidate from 'just-validate';
import Swiper, { Navigation, Pagination } from "swiper";
import InputMask from "inputmask";



document.addEventListener('DOMContentLoaded', ()=> {
  /*  home page custom select */

const select1 = new CastomSelect("#select-1")
/* END /// home page custom select */

/* button nav-menu mobile*/

const burger = document.querySelector(".burger")
burger.addEventListener("click", clickBurger)
const navBody = document.querySelector(".header__nav") 
const body = document.querySelector('body')
function clickBurger(e) {
    let event = e.target
    navBody.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
    body.classList.toggle("body-fixed")
}

/* END ///  button nav-menu mobile */

/* section pop-up*/
const buttonTel = document.querySelectorAll(".button-tel")
for (let i =0; i < buttonTel.length; i++) {
  buttonTel[i].addEventListener("click", clickPopUp);
}
const widgetLinkBut = document.querySelector(".widget-link-butt").addEventListener("click", clickPopUp)
const popUp = document.querySelector(".pop-up")

const popUpBtnClose =document.querySelector(".pop-up__button--close").addEventListener("click", clickPopUp);

function clickPopUp() {
  popUp.classList.toggle("pop-up_acive");
  body.classList.toggle("body-fixed")
}
/*validate tel*/ 

let inputsTel = document.querySelectorAll("input[type='tel']");
let im = new InputMask("+ 7 (999) 999-99-99")
im.mask(inputsTel);
/*validate name*/



const validation = new JustValidate("#form", {
  errorFieldCssClass: 'is-invalid',
  tooltip: {position: 'right'},
})

validation.addField("#popUpName", [
  {
    rule: 'minLength',
    value: 2,
    errorMessage: "Минимум 2 сивола"
  }, 
  {
    rule: 'required',
    errorMessage: "Обязательное поле"
  }
]).addField('#popUpTel', [
  {
    rule: 'required',
    errorMessage: "Обязательное поле",
  },  
])
/*END ///  section pop-up*/

/*    wiget-nav*/
const wigetNav = document.querySelector(".widget-navigation");
const widgetNavButton = document.querySelector(".widget-navigation-button")
widgetNavButton.addEventListener("click", clickWidget)

function clickWidget() {
  wigetNav.classList.toggle("widget-navigation_active");
  widgetNavButton.classList.toggle("widget-but_active")
}


/* END   wiget-nav*/

/* button list footer*/
const footerBut = document.querySelector('.footer__body').addEventListener('click', clickFooterBtn);

function clickFooterBtn(e) {
    let elem = e.target; 
    if (elem.className == "footer-body-title") {
        let elemChild = elem.nextElementSibling;
    
        elemChild.hidden = !elemChild.hidden;
        elem.lastChild.classList.toggle("footer-title_active")
    }
}

/* END /// button list footer*/


/*home page slider-promo*/


let sliderPromo = new Swiper('.promo-slider', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
  
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 0,
    loop: false,
    grabCursor: true,
    enabled: false,
  
      breakpoints: {
        760: {
          slidesPerView: 1,
          //slidesPerGroup: 1,
          watchOverflow: false, 
          enabled: true,
          loop: false,
          grabCursor: true,
        }, 
      },
  });

/* END ///home page slider-promo*/

/*home page slide products*/
const sliderProducts = new Swiper(".product__slider", {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: false,
  initialSlide: 2,
  breakpoints: {
    960: {
      slidesPerView: 2,
    }, 
  }
})

/* END ///home page slide products*/


/* ///scroll to top */
const scrollTop = document.querySelector(".scroll-top")
scrollTop.addEventListener("click", clickScrollTop)

function clickScrollTop(){
  window.scrollTo({
    top,
    behavior: "smooth"
  })
}
window.addEventListener("scroll", windowScroll)

function windowScroll(){

  if (window.pageYOffset > 800 && !scrollTop.classList.contains("scroll-top_active")) {
    
    scrollTop.classList.toggle("scroll-top_active")
  } else if (window.pageYOffset < 800 && scrollTop.classList.contains("scroll-top_active")) {
    scrollTop.classList.toggle("scroll-top_active")
  }
}
/* END ///scroll to top */



})
