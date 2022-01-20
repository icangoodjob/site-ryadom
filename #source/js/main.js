document.addEventListener("DOMContentLoaded", function() {

	/*Custom checkbox*/
	$(document).ready(function() {
	//CHECKBOX
	$.each($('.checkbox'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function(event) {
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active');
		
		return false;
	});
});


	/*================== Slick-slider for food__slider ====================*/
	$(document).ready(function(){
		$('.food__slider').slick({
			arrows: true,
			dots: false,
			adaptiveHeight: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			speed: 1000,
			easing: 'ease',
			infinite: true,
			initialSlide: 0,
			fade: false,
			autoplay: false,
			autoplaySpeed: 2000,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			draggable: false,
			swipe: true,
			touchMove: true,
		// Дожидаемся полной анимации и только потом можем переключать на следующий(-ие) слайд(-ы)
		waitForAnimate: true,
		// Убрать ширину,которую по умолчанию задает slick
		variableWidth: true,
		appendArrows: $('.food__slider-controls'),
		// appendDots: $('.slider__controls'),
		responsive: [
		{
			breakpoint: 1190,
			settings: {
				slidesToShow: 2,
				arrows: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
			}
		}
		]
	});
		$('.slick-next').on('click', function() {
			$('.food__slider').slick('slickNext');
		});
		$('.slick-prev').on('click', function() {
			$('.food__slider').slick('slickPrev');
		});
	});

	/*================== Slick-slider for home__slider ====================*/
	$(document).ready(function(){
		$('.home__slider').slick({
			arrows: false,
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 700,
			cssEase: 'linear',
			infinite: false,
			initialSlide: 0,
			fade: true,
			autoplay: false,
			autoplaySpeed: 4000,
			pauseOnFocus: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			draggable: true,
			swipe: true,
			touchMove: true,
		// Дожидаемся полной анимации и только потом можем переключать на следующий(-ие) слайд(-ы)
		waitForAnimate: true,
		appendDots: $('.home-slider__controls'),
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});
	});


	/*================== PRODUCT SLIDER ====================*/
	const productSliders = document.querySelectorAll('.products__container');
	for (let product of productSliders) {
		productSwiper = new Swiper(product, {
			loop: false,
			slidesPerGroup: 1,
			slidesPerView: 4,
			speed: 800,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			grabCursor: false,
			simulateTouch: false,
			watchOverflow: true,
			loopAdditionalSlides: 2,
			preloadImages: false,
			watchSlidesProgress: true,
			slideClass: 'product__card',
			wrapperClass: 'products__wrapper',
			navigation: {
				nextEl: '[data-arrow-next]',
				prevEl: '[data-arrow-prev]',
			},
			breakpoints: {
				300: {
					slidesPerView: 1,
					watchSlidesVisibility: true,
					spaceBetween: 15,
					simulateTouch: true,
				},
				360: {
					slidesPerView: 2,
					watchSlidesVisibility: true,
					spaceBetween: 15,
					simulateTouch: true,
				},
				992: {
					slidesPerView: 3,
					watchSlidesVisibility: true,
					spaceBetween: 24,
				},
				1210: {
					slidesPerView: 4,
					watchSlidesVisibility: true,
					spaceBetween: 24,
				},
			},
		});
	};


	/*================== RECIPES-SLIDER ====================*/
	const recipesSlider = document.querySelector('.recipes__container');
	const recipesSwiper = new Swiper(recipesSlider, {
		loop: false,
		
		slidesPerGroup: 1,
		slidesPerView: 2,
		speed: 800,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		grabCursor: false,
		simulateTouch: false,
		watchOverflow: true,
		loopAdditionalSlides: 1,
		preloadImages: false,
		watchSlidesProgress: true,
		slideClass: 'recipes__item',
		wrapperClass: 'recipes__wrapper',
		navigation: {
			nextEl: '.recipes__controls .arrow-next',
			prevEl: '.recipes__controls .arrow-prev',
		},
		breakpoints: {
			300: {
				direction: "vertical",
				slidesPerView: 2,
				spaceBetween: 16,
				watchSlidesVisibility: true,
				simulateTouch: true,
			},
			767: {
				direction: "horizontal",
				slidesPerView: 2,
				watchSlidesVisibility: true,
				spaceBetween: 24,
			},
			992: {
				direction: "horizontal",
				slidesPerView: 2,
				watchSlidesVisibility: true,
				spaceBetween: 24,
			},
		},
	});

	/*================== RECIPES MIN-SLIDER ====================*/
	const recipesMinSliders = document.querySelectorAll('.min-slider-recipes');
	for (let minRecipes of recipesMinSliders) {
		const recipesMinSwiper = new Swiper(minRecipes, {
			direction: "vertical",
			loop: false,
			slidesPerGroup: 1,
			slidesPerView: 3,
			spaceBetween: 8,
			speed: 500,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			watchOverflow: true,
			loopAdditionalSlides: 1,
			preloadImages: false,
			simulateTouch: false,
			slideClass: 'min-slider-recipes__picture',
			wrapperClass: 'min-slider-recipes__wrapper',
			navigation: {
				nextEl: minRecipes.querySelector('.min-recipes__controls .arrow-next'),
				prevEl: minRecipes.querySelector('.min-recipes__controls .arrow-prev')
			},
		});
	}


	/*================== PROVIDER-SLIDER ====================*/
	const providerSlider = document.querySelector('.provider__container');
	const providerSwiper = new Swiper(providerSlider, {
		loop: false,
		slidesPerGroup: 1,
		slidesPerView: 3,
		speed: 800,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		grabCursor: false,
		watchOverflow: true,
		loopAdditionalSlides: 1,
		preloadImages: false,
		watchSlidesProgress: true,
		slideClass: 'provider__item',
		wrapperClass: 'provider__wrapper',
		navigation: {
			nextEl: '.provider__controls .arrow-next',
			prevEl: '.provider__controls .arrow-prev',
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
				watchSlidesVisibility: true,
				spaceBetween: 15,
				simulateTouch: true,
			},
			375: {
				slidesPerView: 2,
				watchSlidesVisibility: true,
				spaceBetween: 15,
				simulateTouch: true,
			},
			767: {
				slidesPerView: 2,
				watchSlidesVisibility: true,
				spaceBetween: 24,
				simulateTouch: false,
			},
			992: {
				slidesPerView: 3,
				watchSlidesVisibility: true,
				spaceBetween: 24,
				simulateTouch: false,
			},
		},
	});

	/*================== PROVIDER IMAGE-SLIDER ====================*/
	const providerSliderImages = document.querySelectorAll('.images-provider');
	for (let i = 0; i < providerSliderImages.length; i++){
		let providerSliderImage = providerSliderImages[i];
		const providerImagesSwiper = new Swiper(providerSliderImage, {
			loop: false,
			slidesPerGroup: 1,
			slidesPerView: 3,
			speed: 800,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			grabCursor: false,
			watchOverflow: true,
			watchSlidesProgress: true,
			simulateTouch: true,
			slideClass: 'images-provider__item',
			wrapperClass: 'images-provider__wrapper',
			breakpoints: {
				300: {
					slidesPerView: 3,
					watchSlidesVisibility: true,
					spaceBetween: 8,
				},
				375: {
					slidesPerView: 2,
					watchSlidesVisibility: true,
					spaceBetween: 8,
				},
				767: {
					slidesPerView: 2,
					watchSlidesVisibility: true,
					spaceBetween: 14,
				},
				992: {
					slidesPerView: 3,
					watchSlidesVisibility: true,
					spaceBetween: 14,
				},
			},
		});
	}


	/*================== ACCORDEON QUESTION ====================*/
	const accordeonTitle = document.querySelectorAll(".question__title");
	accordeonTitle.forEach(function (item) {
		item.addEventListener('click', showContent);
	})
	function showContent() {
		this.classList.toggle('active');
		this.nextElementSibling.classList.toggle('hidden');
	}

	/*================== TABS ====================*/
	let tabContent = document.querySelectorAll(".tabs__content");
	let tabItem = document.querySelectorAll(".tabs__item");

// For each element with class 'tabs__item'
for (let i = 0; i < tabItem.length; i++) {
  // if the element was hovered
  //you can replace mouseover with click
  tabItem[i].addEventListener("click", () => {
    // Add to all containers class 'hidden'
    tabContent.forEach((item) => {
    	item.classList.add("hidden");
    });
    // Clean all links from class 'active'
    tabItem.forEach((item) => {
    	item.classList.remove("active");
    });
    // Make visible correct tab content and add class to item
    tabContent[i].classList.remove("hidden");
    tabItem[i].classList.add("active");
  });
}

/*================== MENU-NAV ====================*/
const menuBody = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu__icon');

function menuOpen(){
	menuBody.classList.toggle('menu-open');
	menuIcon.classList.toggle('active');
}
menuIcon.addEventListener('click', function(e) {
	menuOpen();
});

document.addEventListener('click', function(e) {
	const target = e.target;
	const its_menu = target == menuBody || menuBody.contains(target);
	const its_btnMenu = target == menuIcon;
	const menu_is_active = menuBody.classList.contains('menu-open');
	if (!its_menu && !its_btnMenu && menu_is_active) {
		menuOpen();
	}
});


/*================== CATALOG MENU ====================*/
const catalogBox = document.querySelector('.catalog__box');
const catalogIcon = document.querySelector('.catalog__icon');

document.addEventListener('click', catalogActions);

function catalogActions(e){
	const target = e.target;
	if (event.target.closest('.catalog__icon') || event.target.closest('.catalog__text')){
		catalogBox.classList.toggle('catalog-open');
		catalogIcon.classList.toggle('active');
	}
	if(!event.target.closest('.catalog')){
		catalogBox.classList.remove('catalog-open');
		catalogIcon.classList.remove('active');
	}

	if (target.closest('[data-catalog-item]')){
		const catalogItemId = target.dataset.catalogItem;
		const catalogContent = document.querySelector(`[data-catalog-content="${catalogItemId}"]`);
		if (catalogContent){
			const activeCatalogItem = document.querySelector('.current');
			const activeCatalogContent = document.querySelector('.open');
			if (activeCatalogItem){
				activeCatalogItem.classList.remove('current');
				activeCatalogContent.classList.remove('open');
			}
			target.classList.toggle('current');
			catalogContent.classList.toggle('open');
		}
	}
}

/*================== HEADER SEARCH ====================*/
const searchForm = document.querySelector('.search-header__form');
document.addEventListener('click', searchActions);
function searchActions(e){
	let target = e.target;
	if (target.closest('.search-header__form')){
		searchForm.classList.toggle('focus');
	}
	if (!target.closest('.search-header__form')){
		searchForm.classList.remove('focus');
	}
}

/*================== FAVORITE ====================*/

const favoriteIcons = document.querySelectorAll('[data-favorite-button]');
const favoriteModals = document.querySelectorAll('[data-favorite-modal]');
const deleteFavorite = document.querySelectorAll('[data-delete]');

for (let i = 0; i < favoriteIcons.length; i++){
	favoriteItem = favoriteIcons[i];
	favoriteItem.addEventListener('click', function(e){
		this.classList.add('favorite-choice');
		const favoriteModalId = this.dataset.favoriteButton;
		const favoriteModal = document.getElementById(favoriteModalId);
		let favoriteActive = document.querySelectorAll('.favorite-choice');
		favoriteActive.forEach(function(elemActive){
			elemActive.addEventListener('click', function(){
				this.nextElementSibling.classList.add('open-modal')
			})
			deleteFavorite.forEach(function(deletebtn) {
				deletebtn.addEventListener('click', function(){
					let currentModal = this.closest('.modal');
					currentModal.classList.remove('open-modal');
					currentModal.previousElementSibling.classList.remove('favorite-choice');
				});
			});
		});
	});
}


/*================== MODALS ====================*/

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

function bodyLock(){
	document.body.classList.add('lock');
}
function bodyUnLock(){
	document.body.classList.remove('lock');
}
function closeModal(currentModal){
	currentModal.classList.remove('open-modal');
	bodyUnLock();
}

// Кнопки - Открыть Модалку
modalButtons.forEach(function(item){
	item.addEventListener('click', function () {
		const modalId = this.dataset.modalButton;
		const modal = document.getElementById(modalId);
		modal.classList.add('open-modal');
		modal.querySelector('.modal__content').addEventListener('click', (e) => {
			e.stopPropagation();
		})
		bodyLock();
	})
})

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(item =>  {
	item.addEventListener('click', function(){
		let currentModal = this.closest('.modal');
		closeModal(currentModal);
		document.querySelector('.choice-header__checkbox').classList.remove('active');
	})
})


// Закрытие модалок по фейду
allModals.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		this.classList.remove('open-modal');
		document.querySelector('.choice-header__checkbox').classList.remove('active');
		bodyUnLock();
	});
});

/* Проверка мобильного браузера */
let isMobile = { Android: function () { 
	return navigator.userAgent.match(/Android/i); 
}, 
BlackBerry: function () { 
	return navigator.userAgent.match(/BlackBerry/i); 
}, 
iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); 
}, 
Opera: function () { return navigator.userAgent.match(/Opera Mini/i); 
}, 
Windows: function () { return navigator.userAgent.match(/IEMobile/i); 
}, 
any: function () { 
	return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	/* Добавление класса touch для HTML если браузер мобильный */
	function addTouchClass() {
	// Добавление класса _touch для HTML если браузер мобильный
	if (isMobile.any()) document.body.classList.add('touch');
}
addTouchClass();

});

