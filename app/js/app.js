// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Pagination, Scrollbar, Navigation, Controller, Autoplay } from 'swiper'
Swiper.use([ Pagination, Scrollbar, Navigation, Controller, Autoplay ])
document.addEventListener('DOMContentLoaded', () => {

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


})
