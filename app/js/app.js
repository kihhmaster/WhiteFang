// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/jquery/dist/jquery.min.js'
import '~/node_modules/zurb-twentytwenty/js/jquery.event.move.js'
import '~/node_modules/zurb-twentytwenty/js/jquery.twentytwenty.js'
// import '~/node_modules/wow.js/dist/wow.js'
import lax from 'lax.js'
import WOW from 'wow.js'
import WZoom from "vanilla-js-wheel-zoom/dist/wheel-zoom.min.js";
import { Swiper, Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs, EffectCreative} from 'swiper'
Swiper.use([ Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs, EffectCreative])

document.addEventListener('DOMContentLoaded', () => {
	let wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
		}
	);
	wow.init();


	let card = document.querySelector(".card")
	let buttonCards = document.querySelector(".button__cards")
	if(buttonCards !=null) {
		buttonCards.addEventListener("click", ()=>{
			card.classList.add("active")
		})
	}
	$(function(){
		$("#container1").twentytwenty();
	});
	$(function(){
		$(".twentytwenty-container").twentytwenty({
			default_offset_pct: 0.7, // How much of the before image is visible when the page loads
			// orientation: 'vertical', // Orientation of the before and after images ('horizontal' or 'vertical')
			// before_label: 'January 2017', // Set a custom before label
			// after_label: 'March 2017', // Set a custom after label
			no_overlay: true, //Do not show the overlay with before and after
			// move_slider_on_hover: true, // Move slider on mouse hover?
			move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
			click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
		});
	});
	const sliderAnimals = new Swiper(".slider__animals", {
    spaceBetween: 0,
    slidesPerView: 3,
		speed: 2000,
    centeredSlides: true,
		autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
	const sliderRooms = new Swiper(".slider__rooms", {
    spaceBetween: 0,
    slidesPerView: 1,
		speed: 2000,
    centeredSlides: true,
		pagination: {
			el: '.swiper-pagination__rooms',
			type: 'bullets',
			clickable: true,
		},
  });
	const sliderAdvantages = new Swiper(".slider__advantages", {
		spaceBetween: 30,
		speed: 600,
		loop: true,
		pagination: false,
		slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next--advantages",
      prevEl: ".swiper-button-prev--advantages"
    }
  });

	let overlay = document.querySelector(".overlay")
	let humburger = document.querySelector(".humburger")
	let overlayClase = document.querySelector(".overlay__clase")
	if(overlay !== null) {
		humburger.addEventListener("click", ()=>{
			overlay.classList.add("active");
			overlay.classList.add("animate__fadeInRight");
			overlay.classList.remove("animate__fadeOutRight");
 

		}) 
	}
	if(overlayClase !==null) {
		overlayClase.addEventListener("click", ()=>{
			overlay.classList.add("animate__fadeOutRight"); 
			overlay.classList.remove("animate__fadeInRight");
			setTimeout(()=>{
				overlay.classList.remove("active");
			}, 600)

		}) 
	}

	let overlayFirstLevel = document.querySelectorAll(".overlay__firstLevel");
	for(var i=0; i<overlayFirstLevel.length; i++) {
		overlayFirstLevel[i].addEventListener("mouseenter", showSub, false);
		overlayFirstLevel[i].addEventListener("mouseleave", hideSub, false);
		overlayFirstLevel[i].addEventListener("click", clickshow, false);
	}
	function showSub(e) {
		if(this.children.length>1) {
				this.children[1].classList.add("active", "animate__fadeInRight");
				this.children[1].classList.remove("animate__fadeOutRight");

		} else {
				return false;
		}
	}
	function hideSub(e) {
			if(this.children.length>1) {
				this.children[1].classList.remove("active");
				this.children[1].classList.remove("animate__fadeInRight");
			} else {
				return false;
			}
	}
	function clickshow(e) {
		if(this.children.length>1) {
				this.children[1].classList.toggle("active");
				

		} else {
				return false;
		}
	}
	const sliderDoctorsThumds = new Swiper(".slider__doctors__thumds", {
		spaceBetween: 10,
		loop: true,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
	});
	const sliderDoctors = new Swiper(".slider__doctors", {
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next_slider__doctors",
			prevEl: ".swiper-button-prev__slider__doctors",
		},
		thumbs: {
			swiper: sliderDoctorsThumds,
			autoScrollOffset: 3,
			multipleActiveThumbs: false
		},
	});

	// sliderDoctors.controller.control = sliderDoctorsThumds;
	// sliderDoctorsThumds.controller.control = sliderDoctors;
	WZoom.create('#myContent', {
    type: 'html',
		minScale: 1,
		maxScale: 2,
		height: 750,
		width: null,
		disableWheelZoom: false,
		speed: 10,
		alignContent: 'bottom',
		watchImageChange: true,
	});

	// const tooth = document.querySelector('.tooth');
	// tooth.classList.remove('tooth-transition');

	// // Добавить наблюдение за появлением элемента
	// const observer = new IntersectionObserver(entries => {
	// 	entries.forEach(entry => {
	// 		if (entry.isIntersecting) {
	// 			tooth.classList.add('tooth-transition');
	// 			return;
	// 		}
	// 		tooth.classList.remove('tooth-transition');
	// 	});
	// });
	// observer.observe(document.querySelector('.advantages__tooth'));
	var paralax = document.getElementById("toothID");

	/* коэфициент сдвига: 1 сдвиг равный смещению по оси Y, 0 без сдвига */

	if(paralax !==null) {
		var moveCoef = 0.2;
		window.addEventListener("scroll", scroll);
		window.addEventListener("resize", scroll);
		scroll();
	}


	function scroll() {
		/* берём огнаничивающий прямоугольник паралакса относительно окна (фрейма) */
		var r = paralax.getBoundingClientRect();

		/* центр паралакса */
		var paralaxYCenter = r.y + r.height / 10;
		/* центр экрана */
		var scrollYCenter = window.innerHeight / 2;

		/* Вычисляем смещение */
		var move = (scrollYCenter - paralaxYCenter) * moveCoef - 50;

		paralax.style.backgroundPositionY = move + "px";
	}
	let aboutUs = new Swiper(".aboutUs", {
		direction: "vertical",
		speed: 2500,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		effect: 'fade',
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: ".swiper-button-next__aboutUs",
			prevEl: ".swiper-button-prev__aboutUs",
		},
		mousewheel: true,
		on: {

			// slideNextTransitionStart: function() {
			// 	let workSliderDesc = document.querySelectorAll(".aboutUs")
			// 	workSliderDesc.forEach(elem => {
			// 		let idex = elem.swiper.realIndex
			// 		DelSlider(elem.swiper.slides[idex-1])
			// 		console.log("slideNextTransitionStart") 

      //   });

			// },
			slideChange : function() {
				let workSliderDesc = document.querySelectorAll(".aboutUs")
				workSliderDesc.forEach(elem => {
					let idex = elem.swiper.realIndex
					menuCheck(elem.swiper.slides[idex])
				});
			}, 
			// slidePrevTransitionEnd: function() {
			// 	let workSliderDesc = document.querySelectorAll(".aboutUs")
			// 	workSliderDesc.forEach(elem => {
			// 		let idex = elem.swiper.realIndex
			// 		tabSlider(elem.swiper.slides[idex])
			// 		console.log("slidePrevTransitionEnd")


      //   });
			// },
			// slidePrevTransitionStart: function() {
			// 	let workSliderDesc = document.querySelectorAll(".aboutUs")
			// 	workSliderDesc.forEach(elem => {
			// 		let idex = elem.swiper.realIndex
			// 		DelSlider(elem.swiper.slides[idex + 1])
			// 		console.log("slidePrevTransitionStart")

      //   });
			// } 
		}

	});
	function menuCheck (el) {
		let slideClass = el;
		console.log(slideClass)
		let topMenuWhite = document.querySelector(".topMenu__white")
		let topMenuBlack = document.querySelector(".topMenu__black")
		slideClass.classList.forEach(item  => {
			console.log(item)
			if( item == "menuWhite") {
				topMenuWhite.classList.remove("hidde")
				topMenuBlack.classList.add("hidde")
			} else if (item == "menuBlack"){
				topMenuBlack.classList.remove("hidde")
				topMenuWhite.classList.add("hidde")
			}
		})
	}
	function DelSlider(delSlide) {
		let e = delSlide;
		console.log(e)
		console.log("DelSlider")
		let sectionCenterImg = e.querySelector('.section__center__img')
		let startDescElementRight  = e.querySelector('.start__desc__elementRight')
		let startDescElementLeft  = e.querySelector('.start__desc__elementLeft ')
		if(sectionCenterImg !=null ) {
			sectionCenterImg.classList.add('animate__fadeOut')
			console.log("animate__fadeOut")
			setTimeout(() => {
				sectionCenterImg.classList.remove('animate__fadeOut');
			}, 6000)
		}
		if(startDescElementRight !=null ) {
			startDescElementRight.classList.add('animate__fadeOut')
			console.log("animate__fadeOut")
			setTimeout(() => {
				startDescElementRight.classList.remove('animate__fadeOut');
				console.log("DELL animate__fadeOut")
			}, 6000)

		}
		if(startDescElementLeft !=null ) {
			startDescElementLeft.classList.add('animate__fadeOut')
			console.log("animate__fadeOut")
			setTimeout(() => {
				startDescElementLeft.classList.remove('animate__fadeOut');
			}, 6000)

		}
	}
	function tabSlider(idexSlide) {
		let e = idexSlide
		console.log(e)
		console.log("tabSlider")
		let sectionCenterImg = e.querySelector('.section__center__img')
		let startDescElementRight  = e.querySelector('.start__desc__elementRight')
		let startDescElementLeft  = e.querySelector('.start__desc__elementLeft ')
		if(sectionCenterImg !=null ) {
			sectionCenterImg.classList.add('animate__fadeIn')
			console.log("DELL animate__fadeIn")
			setTimeout(() => {
				sectionCenterImg.classList.remove('animate__fadeIn');
			}, 3500)
		}
		if(startDescElementRight !=null ) {
			startDescElementRight.classList.add('animate__fadeIn')
			console.log("animate__fadeIn")
			setTimeout(() => {
				startDescElementRight.classList.remove('animate__fadeIn');
			}, 3500)

		}
		if(startDescElementLeft !=null ) {
			startDescElementLeft.classList.add('animate__fadeIn')
			console.log("animate__fadeIn")
			setTimeout(() => {
				startDescElementLeft.classList.remove('animate__fadeIn');
			}, 3500)

		}


		// let workSliderDescTabs = document.querySelectorAll(".workSliderDesc__tabs");
		// let workSliderDescTabsItem = document.querySelectorAll(".workSliderDesc__tabs__tab");
		// for(let i = 0; i< workSliderDescTabsItem.length; i++) {
		// 	const workSliderDescTabsItemAttr = workSliderDescTabsItem[i].getAttribute("data-tab-content");
		// 	if(idexSlide == workSliderDescTabsItemAttr){
		// 		workSliderDescTabsItem[i].classList.add("active", "animate__backInDown");
		// 	} else{
		// 		workSliderDescTabsItem[i].classList.remove("active", "animate__backInDown");
		// 	}
		// }
	}
})
