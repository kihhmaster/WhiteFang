// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/jquery/dist/jquery.min.js'
import '~/node_modules/zurb-twentytwenty/js/jquery.event.move.js'
import '~/node_modules/zurb-twentytwenty/js/jquery.twentytwenty.js'
import { Swiper, Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs} from 'swiper'
Swiper.use([ Pagination, Scrollbar, Navigation, Controller, Autoplay, Mousewheel, Parallax, EffectFade, EffectCoverflow, Thumbs])
document.addEventListener('DOMContentLoaded', () => {
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
		// autoplay: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 200,
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
		},
  });
	const sliderAdvantages = new Swiper(".slider__advantages", {
		spaceBetween: 30,
		speed: 600,
		freeMode: true,
		loop: true,
		pagination: false,
		initialSlide: 0,
		setWrapperSize: true,
		centeredSlides: true,
		slidesPerView: 'auto',
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


})
