// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/jquery/dist/jquery.min.js'
import '~/node_modules/zurb-twentytwenty/js/jquery.event.move.js'
import '~/node_modules/zurb-twentytwenty/js/jquery.twentytwenty.js'
// import '~/node_modules/wow.js/dist/wow.js'
import lax from 'lax.js'
import WOW from 'wow.js'
// import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
import WZoom from "vanilla-js-wheel-zoom/dist/wheel-zoom.min.js";
import { Swiper, Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs, EffectCreative,} from 'swiper'
Swiper.use([ Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs, EffectCreative])

document.addEventListener('DOMContentLoaded', () => {
	// Show HTML element
	// Fancybox.show([{ 
	// 	src: "#dialog-content", 
	// 	type: "inline" 
	// }]);
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
			default_offset_pct: 0.3, // How much of the before image is visible when the page loads
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
		speed: 8000,
    centeredSlides: true,
		autoplay: true,
    loop: true,
  });
	let doctorcolsswiper = new Swiper(".doctor-cols-swiper", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 300,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".doctor-cols-swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".doctor-cols-swiper-button-next",
			prevEl: ".doctor-cols-swiper-button-prev",
		},
		on: {
			slideChange : function() {
				let paginationAllActive = document.querySelector(".pagination__AllActive--doctors")
				let bulletsAll = paginationAllActive.querySelectorAll(".swiper-pagination-bullet")
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper")
				sliderdoctorSmoll.forEach(elem => {
					let idex = elem.swiper.realIndex
					illuminationBjllets(bulletsAll, idex)
				});	
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					let eee = elem.swiper.slides[idex]
					console.log(slideHieght)
					console.log(eee)
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			},
			beforeResize: function() {
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper")
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			}
		}
		
	});
	let doctorcolsswiper2 = new Swiper(".doctor-cols-swiper2", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 300,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".doctor-cols-swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".doctor-cols-swiper-button-next",
			prevEl: ".doctor-cols-swiper-button-prev",
		},
		on: {
			slideChange : function() {
				// let paginationAllActive = document.querySelector(".pagination__AllActive--doctors")
				// let bulletsAll = paginationAllActive.querySelectorAll(".swiper-pagination-bullet")
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper2")
				// sliderdoctorSmoll.forEach(elem => {
				// 	let idex = elem.swiper.realIndex
				// 	illuminationBjllets(bulletsAll, idex)
				// });	
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper2 > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					let eee = elem.swiper.slides[idex]
					console.log(slideHieght)
					console.log(eee)
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			},
			beforeResize: function() {
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper2")
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper2 > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			}
		}
		
	});
	let doctorcolsswiper3 = new Swiper(".doctor-cols-swiper3", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 300,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".doctor-cols-swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".doctor-cols-swiper-button-next",
			prevEl: ".doctor-cols-swiper-button-prev",
		},
		on: {
			slideChange : function() {
				// let paginationAllActive = document.querySelector(".pagination__AllActive--doctors")
				// let bulletsAll = paginationAllActive.querySelectorAll(".swiper-pagination-bullet")
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper3")
				// sliderdoctorSmoll.forEach(elem => {
				// 	let idex = elem.swiper.realIndex
				// 	illuminationBjllets(bulletsAll, idex)
				// });	
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper3 > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					let eee = elem.swiper.slides[idex]
					console.log(slideHieght)
					console.log(eee)
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			},
			beforeResize: function() {
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper3")
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper3 > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			}
		}
		
	});
	let doctorcolsswiper4 = new Swiper(".doctor-cols-swiper4", {
		slidesPerView: 1,
		effect: 'fade',
		speed: 300,
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: ".doctor-cols-swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".doctor-cols-swiper-button-next",
			prevEl: ".doctor-cols-swiper-button-prev",
		},
		on: {
			slideChange : function() {
				// let paginationAllActive = document.querySelector(".pagination__AllActive--doctors")
				// let bulletsAll = paginationAllActive.querySelectorAll(".swiper-pagination-bullet")
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper4")
				// sliderdoctorSmoll.forEach(elem => {
				// 	let idex = elem.swiper.realIndex
				// 	illuminationBjllets(bulletsAll, idex)
				// });	
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper4 > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					let eee = elem.swiper.slides[idex]
					console.log(slideHieght)
					console.log(eee)
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			},
			beforeResize: function() {
				let sliderdoctorSmoll = document.querySelectorAll(".doctor-cols-swiper4")
				sliderdoctorSmoll.forEach(elem => {
					let swiperWrapperDoctorSmoll = document.querySelector(".doctor-cols-swiper4 > .swiper-wrapper")
					let idex = elem.swiper.realIndex
					let slideHieght = elem.swiper.slides[idex].querySelector(".doctor-cols-carousel__row").offsetHeight
					swiperWrapperDoctorSmoll.style.height = slideHieght + "px"
				});	
			}
		}
		
	});
	const sliderRooms = new Swiper(".slider__rooms", {
    spaceBetween: 0,
    slidesPerView: 1,
		speed: 4000,
    centeredSlides: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: true,
    loop: true,
		pagination: {
			el: '.swiper-pagination__rooms',
			type: 'bullets',
			clickable: true,
		},
		on: {
			slideChange : function() {
				let paginationAllActive = document.querySelector(".pagination__AllActive")
				let bulletsAll = paginationAllActive.querySelectorAll(".swiper-pagination-bullet")
				let sliderRooms = document.querySelectorAll(".slider__rooms")
				sliderRooms.forEach(elem => {
					let idex = elem.swiper.realIndex
					illuminationBjllets(bulletsAll, idex)
				});

					
				
			}, 
		}
  });

	function illuminationBjllets (bullets, indexSlide) {
		if(indexSlide == 0) {
			bullets.forEach(el => {
				el.classList.remove("bulletActive")
			})
		}
		bullets.forEach(el => {
			if(el.classList.contains('swiper-pagination-bullet-active')){
				el.classList.add("bulletActive")
			}
		})
	}
	const sliderAdvantages = new Swiper(".slider__advantages", {
		speed: 600,
		loop: true,
		pagination: false,
		slidesPerView: 1,
		centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next--advantages",
      prevEl: ".swiper-button-prev--advantages"
    }
  });


	let humburger = document.querySelectorAll(".humburger")

	if(humburger !== null) {
		let overlay = document.querySelectorAll(".overlay__wrapp")
		let overlayClase = document.querySelectorAll(".overlay__clase")
		humburger.forEach(item => {
			item.addEventListener("click", ()=>{
				overlay.forEach(i => {
					i.classList.add("active");
					i.classList.remove("animate__fadeOutRight");
					i.classList.add("animate__fadeInRight");
				})
				

			}) 
		})
		overlay.forEach(close => {
			close.addEventListener("click", ()=>{
				overlay.forEach(i => {
					i.classList.add("animate__fadeOutRight"); 
					i.classList.remove("animate__fadeInRight");
					setTimeout(()=>{
						i.classList.remove("active");
					}, 600)
				})
	
			}) 
		})
		overlayClase.forEach(close => {
			close.addEventListener("click", ()=>{
				overlay.forEach(i => {
					i.classList.add("animate__fadeOutRight"); 
					i.classList.remove("animate__fadeInRight");
					setTimeout(()=>{
						i.classList.remove("active");
					}, 600)
				})
	
			}) 
		})


	}



	let overlayFirstLevel = document.querySelectorAll(".overlay__firstLevel");
	for(let i=0; i<overlayFirstLevel.length; i++) {
		overlayFirstLevel[i].addEventListener("mouseenter", showSub, false);
		overlayFirstLevel[i].addEventListener("mouseleave", hideSub, false);
		// overlayFirstLevel[i].addEventListener("click", clickshow, false);
	}
	function showSub(e) {
		if(this.children.length>1) {
				this.children[2].classList.add("active", "animate__fadeInRight");
				this.children[2].classList.remove("animate__fadeOutRight");

		} else {
				return false;
		}
	}
	function hideSub(e) {
			if(this.children.length>1) {
				this.children[2].classList.remove("animate__fadeInRight");
				this.children[2].classList.add("animate__fadeOutRight");
				setTimeout(()=>{
					this.children[2].classList.remove("active");
				}, 450)

			} else {
				return false;
			}
	}
	// let overlaySecondList = document.querySelector(".overlay__secondList")

	// function clickshow(e) {
	// 	if(this.children.length>1) {
	// 			this.children[3].classList.toggle("active");
				

	// 	} else {
	// 			return false;
	// 	}
	// }
	const sliderDoctorsThumds = new Swiper(".slider__doctors__thumds", {

		direction: 'vertical',
		spaceBetween: 10,
		centeredSlides: true,
		centeredSlidesBounds: true,
		slidesPerView: 3,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			// when window width is >= 320px
			769: {
				spaceBetween: 10,
				loop: false,
				slidesPerView: 3,
				freeMode: true,
				watchSlidesProgress: true,
				direction: 'horizontal',
			},
		}
			// when window width is >= 480px
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
	let paralax = document.getElementById("toothID");

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
		var move = (scrollYCenter - paralaxYCenter) * moveCoef + 50;

		paralax.style.backgroundPositionY = move + "px";
	}
	let aboutUs = new Swiper(".aboutUs", {
		direction: "vertical",
		speed:  3000,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		transformEl: {

		},
		// touchAngle: 60,
		edgeSwipeThreshold:300,
		navigation: {
			nextEl: ".swiper-button-next__aboutUs",
			prevEl: ".swiper-button-prev__aboutUs",
		},
		mousewheel: true,
		on: {

			slideChange : function() {
				let workSliderDesc = document.querySelectorAll(".aboutUs")
				workSliderDesc.forEach(elem => {
					let idex = elem.swiper.realIndex
					menuCheck(elem.swiper.slides[idex])
					ShowUpElement(idex)
					
				});
			}, 
		}



	});
	function ShowUpElement (n) {
		let idexUpElement = n;
		console.log(idexUpElement)
		let UpElement1 = document.querySelector(".UpElement__1")
		let UpElement2 = document.querySelector(".UpElement__2")
		let UpElement3 = document.querySelector(".UpElement__3")
		let UpElement4 = document.querySelector(".UpElement__4")
		switch (idexUpElement) {
			case 0:
				UpElement1.classList.add("showUpElement");
				UpElement2.classList.remove("showUpElement");
				UpElement3.classList.remove("showUpElement");
				UpElement4.classList.remove("showUpElement");
				break;
			case 1:
				UpElement1.classList.remove("showUpElement");
				UpElement2.classList.add("showUpElement");
				UpElement3.classList.remove("showUpElement");
				UpElement4.classList.remove("showUpElement");
				break;
			case 2:
				UpElement1.classList.remove("showUpElement");
				UpElement2.classList.add("showUpElement");
				UpElement3.classList.remove("showUpElement");
				UpElement4.classList.remove("showUpElement");
				break;
			case 3:
				UpElement1.classList.remove("showUpElement");
				UpElement2.classList.remove("showUpElement");
				UpElement3.classList.remove("UpElement__3__delay");
				UpElement3.classList.add("showUpElement");
				UpElement4.classList.remove("showUpElement");
				break;
			case 4:
				UpElement1.classList.remove("showUpElement");
				UpElement2.classList.remove("showUpElement");
				UpElement3.classList.remove("showUpElement");
				UpElement4.classList.add("showUpElement");
				UpElement4.style.transform = "translateY(-70%)"
				// UpElement4.classList.add("UpElement__4__delay");
				UpElement3.classList.add("UpElement__3__delay");
				break;
			case 5:
				UpElement1.classList.remove("showUpElement");
				UpElement2.classList.remove("showUpElement");
				UpElement3.classList.remove("showUpElement");
				UpElement4.classList.remove("UpElement__4__delay");
				UpElement4.classList.add("showUpElement");
				if (document.documentElement.clientWidth < 425) {
					UpElement4.style.transform = "translateY(-350%)";
				} else if(document.documentElement.clientWidth < 576){
					UpElement4.style.transform = "translateY(-200%)";
				} else {
					UpElement4.style.transform = "translateY(-110%)";
				}
				break;
			case 6:
				UpElement1.classList.remove("showUpElement");
				UpElement2.classList.remove("showUpElement");
				UpElement3.classList.remove("showUpElement");
				UpElement4.classList.remove("showUpElement");
				UpElement4.classList.add("UpElement__4__delay");
				break;
			default:
				UpElement1.classList.remove("showUpElement");
				UpElement2.classList.remove("showUpElement");
				UpElement3.classList.remove("showUpElement");
				UpElement4.classList.remove("showUpElement");
				UpElement4.classList.remove("UpElement__4__delay");
		}

	}
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
	const sliderCompany = new Swiper(".slider__company", {
		speed: 600,
		loop: true,
		spaceBetween: 30,
		pagination: false,
		slidesPerView: 2,
		centeredSlides: true,
		autoplay: true,
		speed: 2000,
		navigation: {
			nextEl: ".swiper-button-next__company",
			prevEl: ".swiper-button-prev__company",
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 3,
			},
		}
		// thumbs: {
		// 	swiper: sliderDoctorsThumds,
		// 	autoScrollOffset: 3,
		// 	multipleActiveThumbs: false
		// },
	});
	$(function($) {
		$(document).on("click",'.show-more', function(){
			$(this).toggleClass('active');
			$(this).next('.show-more__content').toggleClass('active');
		
		});
	});
		let doctorswiper = new Swiper(".doctor-swiper", {
			slidesPerView: 1,
			keyboard: {
				enabled: true,
			},
			speed: 1000,
			pagination: {
				el: ".doctor-swiper-pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: ".doctor-swiper-button-next",
				prevEl: ".doctor-swiper-button-prev",
			},
		});

		let awardsswiper = new Swiper(".awards-swiper", {
			slidesPerView: 2,
			spaceBetween: 20,
			speed: 1000,
			navigation: {
				nextEl: ".awards__prev",
				prevEl: ".awards__next",
			},
		});


	let equipmentswiper = new Swiper(".equipment-swiper", {
		slidesPerView: "auto",
		spaceBetween: 30,
		speed: 6000,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		navigation: {
				nextEl: ".equipment-swiper-button-next",
				prevEl: ".equipment-swiper-button-prev",
			},
	});
	let newsswiper = new Swiper(".news-swiper", {
		slidesPerView: 1,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: ".news-swiper-pagination",
			clickable: true,
		},

	});

	let newsotherswiper = new Swiper(".news-other-swiper", {
		slidesPerView: 1,
		keyboard: {
			enabled: true,
		},
		autoplay: true,
		effect: 'fade',
		speed: 2000,
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: ".news-other-swiper-button-next",
			prevEl: ".news-other-swiper-button-prev",
		},
	});
	let servicesswiper = new Swiper(".services-swiper", {
		slidesPerView: 1,
		mousewheel: true,
		keyboard: {
			enabled: true,
		},
		autoplay: {
	 		delay: 5000,
 		},
	});


})
