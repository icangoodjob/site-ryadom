document.addEventListener("DOMContentLoaded",(function(){$(document).ready((function(){$.each($(".checkbox"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".checkbox",(function(e){return $(this).hasClass("active")?$(this).find("input").prop("checked",!1):$(this).find("input").prop("checked",!0),$(this).toggleClass("active"),!1}))})),$(document).ready((function(){$(".food__slider").slick({arrows:!0,dots:!1,adaptiveHeight:!1,slidesToShow:2,slidesToScroll:1,speed:1e3,easing:"ease",infinite:!0,initialSlide:0,fade:!1,autoplay:!1,autoplaySpeed:2e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0,draggable:!1,swipe:!0,touchMove:!0,waitForAnimate:!0,variableWidth:!0,appendArrows:$(".food__slider-controls"),responsive:[{breakpoint:1190,settings:{slidesToShow:2,arrows:!0}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:3,arrows:!1}},{breakpoint:580,settings:{slidesToShow:3,slidesToScroll:3,arrows:!1}}]}),$(".slick-next").on("click",(function(){$(".food__slider").slick("slickNext")})),$(".slick-prev").on("click",(function(){$(".food__slider").slick("slickPrev")}))})),$(document).ready((function(){$(".home__slider").slick({arrows:!1,dots:!0,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1,speed:700,cssEase:"linear",infinite:!1,initialSlide:0,fade:!0,autoplay:!1,autoplaySpeed:4e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0,draggable:!0,swipe:!0,touchMove:!0,waitForAnimate:!0,appendDots:$(".home-slider__controls"),responsive:[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:580,settings:{slidesToShow:1}}]})}));const e=document.querySelectorAll(".products__container");for(let t of e)productSwiper=new Swiper(t,{loop:!1,slidesPerGroup:1,slidesPerView:4,speed:800,observer:!0,observeParents:!0,observeSlideChildren:!0,grabCursor:!1,simulateTouch:!1,watchOverflow:!0,loopAdditionalSlides:2,preloadImages:!1,watchSlidesProgress:!0,slideClass:"product__card",wrapperClass:"products__wrapper",navigation:{nextEl:"[data-arrow-next]",prevEl:"[data-arrow-prev]"},breakpoints:{300:{slidesPerView:1,watchSlidesVisibility:!0,spaceBetween:15,simulateTouch:!0},360:{slidesPerView:2,watchSlidesVisibility:!0,spaceBetween:15,simulateTouch:!0},992:{slidesPerView:3,watchSlidesVisibility:!0,spaceBetween:24},1210:{slidesPerView:4,watchSlidesVisibility:!0,spaceBetween:24}}});const t=document.querySelector(".recipes__container"),i=(new Swiper(t,{loop:!1,slidesPerGroup:1,slidesPerView:2,speed:800,observer:!0,observeParents:!0,observeSlideChildren:!0,grabCursor:!1,simulateTouch:!1,watchOverflow:!0,loopAdditionalSlides:1,preloadImages:!1,watchSlidesProgress:!0,slideClass:"recipes__item",wrapperClass:"recipes__wrapper",navigation:{nextEl:".recipes__controls .arrow-next",prevEl:".recipes__controls .arrow-prev"},breakpoints:{300:{direction:"vertical",slidesPerView:2,spaceBetween:16,watchSlidesVisibility:!0,simulateTouch:!0},767:{direction:"horizontal",slidesPerView:2,watchSlidesVisibility:!0,spaceBetween:24},992:{direction:"horizontal",slidesPerView:2,watchSlidesVisibility:!0,spaceBetween:24}}}),document.querySelectorAll(".min-slider-recipes"));for(let e of i){new Swiper(e,{direction:"vertical",loop:!1,slidesPerGroup:1,slidesPerView:3,spaceBetween:8,speed:500,observer:!0,observeParents:!0,observeSlideChildren:!0,watchOverflow:!0,loopAdditionalSlides:1,preloadImages:!1,simulateTouch:!1,slideClass:"min-slider-recipes__picture",wrapperClass:"min-slider-recipes__wrapper",navigation:{nextEl:e.querySelector(".min-recipes__controls .arrow-next"),prevEl:e.querySelector(".min-recipes__controls .arrow-prev")}})}const s=document.querySelector(".provider__container"),o=(new Swiper(s,{loop:!1,slidesPerGroup:1,slidesPerView:3,speed:800,observer:!0,observeParents:!0,observeSlideChildren:!0,grabCursor:!1,watchOverflow:!0,loopAdditionalSlides:1,preloadImages:!1,watchSlidesProgress:!0,slideClass:"provider__item",wrapperClass:"provider__wrapper",navigation:{nextEl:".provider__controls .arrow-next",prevEl:".provider__controls .arrow-prev"},breakpoints:{300:{slidesPerView:1,watchSlidesVisibility:!0,spaceBetween:15,simulateTouch:!0},375:{slidesPerView:2,watchSlidesVisibility:!0,spaceBetween:15,simulateTouch:!0},767:{slidesPerView:2,watchSlidesVisibility:!0,spaceBetween:24,simulateTouch:!1},992:{slidesPerView:3,watchSlidesVisibility:!0,spaceBetween:24,simulateTouch:!1}}}),document.querySelectorAll(".images-provider"));for(let e=0;e<o.length;e++){let t=o[e];new Swiper(t,{loop:!1,slidesPerGroup:1,slidesPerView:3,speed:800,observer:!0,observeParents:!0,observeSlideChildren:!0,grabCursor:!1,watchOverflow:!0,watchSlidesProgress:!0,simulateTouch:!0,slideClass:"images-provider__item",wrapperClass:"images-provider__wrapper",breakpoints:{300:{slidesPerView:3,watchSlidesVisibility:!0,spaceBetween:8},375:{slidesPerView:2,watchSlidesVisibility:!0,spaceBetween:8},767:{slidesPerView:2,watchSlidesVisibility:!0,spaceBetween:14},992:{slidesPerView:3,watchSlidesVisibility:!0,spaceBetween:14}}})}function r(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("hidden")}document.querySelectorAll(".question__title").forEach((function(e){e.addEventListener("click",r)}));let c=document.querySelectorAll(".tabs__content"),l=document.querySelectorAll(".tabs__item");for(let e=0;e<l.length;e++)l[e].addEventListener("click",(()=>{c.forEach((e=>{e.classList.add("hidden")})),l.forEach((e=>{e.classList.remove("active")})),c[e].classList.remove("hidden"),l[e].classList.add("active")}));const a=document.querySelector(".menu"),n=document.querySelector(".menu__icon");function d(){a.classList.toggle("menu-open"),n.classList.toggle("active")}n.addEventListener("click",(function(e){d()})),document.addEventListener("click",(function(e){const t=e.target,i=t==a||a.contains(t),s=t==n,o=a.classList.contains("menu-open");i||s||!o||d()}));const u=document.querySelector(".catalog__box"),p=document.querySelector(".catalog__icon");document.addEventListener("click",(function(e){const t=e.target;(event.target.closest(".catalog__icon")||event.target.closest(".catalog__text"))&&(u.classList.toggle("catalog-open"),p.classList.toggle("active"));event.target.closest(".catalog")||(u.classList.remove("catalog-open"),p.classList.remove("active"));if(t.closest("[data-catalog-item]")){const e=t.dataset.catalogItem,i=document.querySelector(`[data-catalog-content="${e}"]`);if(i){const e=document.querySelector(".current"),s=document.querySelector(".open");e&&(e.classList.remove("current"),s.classList.remove("open")),t.classList.toggle("current"),i.classList.toggle("open")}}}));const m=document.querySelector(".search-header__form");document.addEventListener("click",(function(e){let t=e.target;t.closest(".search-header__form")&&m.classList.toggle("focus");t.closest(".search-header__form")||m.classList.remove("focus")}));const h=document.querySelectorAll("[data-favorite-button]"),w=(document.querySelectorAll("[favorite-modal]"),document.querySelectorAll("[data-delete]"));for(let e=0;e<h.length;e++)favoriteItem=h[e],favoriteItem.addEventListener("click",(function(e){this.classList.add("favorite-choice");const t=this.dataset.favoriteButton;document.getElementById(t);document.querySelectorAll(".favorite-choice").forEach((function(e){e.addEventListener("click",(function(){this.nextElementSibling.classList.add("open-modal")})),w.forEach((function(e){e.addEventListener("click",(function(){let e=this.closest(".modal");e.classList.remove("open-modal"),e.previousElementSibling.classList.remove("favorite-choice")}))}))}))}));const v=document.querySelectorAll("[data-modal-button]"),g=document.querySelectorAll("[data-modal-close]"),S=document.querySelectorAll("[data-modal]");function f(){document.body.classList.remove("lock")}v.forEach((function(e){e.addEventListener("click",(function(){const e=this.dataset.modalButton,t=document.getElementById(e);t.classList.add("open-modal"),t.querySelector(".modal__content").addEventListener("click",(e=>{e.stopPropagation()})),document.body.classList.add("lock")}))})),g.forEach((e=>{e.addEventListener("click",(function(){!function(e){e.classList.remove("open-modal"),f()}(this.closest(".modal")),document.querySelector(".choice-header__checkbox").classList.remove("active")}))})),S.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),this.classList.remove("open-modal"),document.querySelector(".choice-header__checkbox").classList.remove("active"),f()}))}));let _={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return _.Android()||_.BlackBerry()||_.iOS()||_.Opera()||_.Windows()}};_.any()&&document.body.classList.add("touch")}));