
/* button nav-menu mobile*/

const burger = document.querySelector(".burger")
burger.addEventListener("click", clickBurger)
const navBody = document.querySelector(".header__nav") 
const DOM = document.querySelector('body')
function clickBurger(e) {
    let event = e.target
    navBody.classList.toggle('nav_active');
    burger.classList.toggle('burger_active');
    DOM.classList.toggle("body-fixed")
}

/* END ///  button nav-menu mobile */

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

//* input validate*/
// import Inputmask from "./../../../node_modules/inputmask";
// import JustValidate from './../../../node_modules/just-validate/dist/just-validate.production.min';
// const inputSubscribe = document.querySelector(".footer__form");

// const validation = new JustValidate(inputSubscribe);

// validation.addField("#email-1", [
//     {
//         rule: 'required',
//         errorMessage: 'Email is required',
//       },
//       {
//         rule: 'email',
//         errorMessage: 'Email is invalid!',
//       },
//     ])

//* END /// input tel mask*/

/*home page slider-promo*/
import Swiper, { Navigation, Pagination } from "swiper";

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
        // 1440: {
        //   //loopedSlides: 9,
        //   slidesPerView: 4,
        //   watchOverflow: false,
  
        //   //slidesPerGroup: 1,
        //   //slidesPerColumn: 2,
        //   autoHeight: false,
        // }
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
  // loop: true,
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: false,
  initialSlide: 2,
  // centeredSlides: true,
  breakpoints: {
    960: {
      slidesPerView: 2,
      //slidesPerGroup: 1,
      // watchOverflow: false, 
      // enabled: true,
      // loop: false,
      // grabCursor: true,
    }, 
  }
})

/* END ///home page slide products*/