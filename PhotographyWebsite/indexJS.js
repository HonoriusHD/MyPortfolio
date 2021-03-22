var allSlideImages = document.querySelectorAll(".allImages");
var containSlides = document.querySelector(".slides");
var nextButton = document.querySelector(".next-btn");
var prevButton = document.querySelector(".prev-btn");
var singleText = document.querySelectorAll(".text");
var activeChild = document.querySelector(".activeChild");
var slideNumber = 1;
var flagForPressedLeftRightBtn = 1;
var oneSlideLength = allSlideImages[0].clientWidth; 

// fix image slides to left

function FloatSlidesToLeft(){
	allSlideImages[0].style.opacity = "1";
	allSlideImages.forEach((slide, index) =>{
		slide.style.left = index * 100 + "%";
	});
}

FloatSlidesToLeft();


//create next button


nextButton.addEventListener("click", ChangeSlideToRight);

function ChangeSlideToRight(){
	
	if(flagForPressedLeftRightBtn == 2){
		slideNumber++;
	}
	if (slideNumber >= 4){
		slideNumber = 0;

	}

	singleText.forEach((text) =>{
		text.classList.remove("active");
	});

	singleText[slideNumber].classList.add("active");
	flagForPressedLeftRightBtn = 1;
	GoToTheSlide(slideNumber);
	slideNumber++;
}


//create next button


prevButton.addEventListener("click", ChangeSlideToLeft);

function ChangeSlideToLeft(){
	if(flagForPressedLeftRightBtn == 1){
		slideNumber--;
	}
	if (slideNumber <= 0){
		slideNumber = 4;
	}

	singleText.forEach((text) =>{
		text.classList.remove("active");
	});

	flagForPressedLeftRightBtn = 2;
	slideNumber--;
	singleText[slideNumber].classList.add("active");
	GoToTheSlide(slideNumber);
}


function GoToTheSlide(slideNumber){
	if (slideNumber == 1){
		activeChild.classList.remove("activeChild");
	}
	containSlides.style.transform = "translate(-" + slideNumber * oneSlideLength + "px)";
}


// make slide go auto


(function AutoSlide()
	{
		setInterval(function()
		{
			ChangeSlideToRight()
		},4500);
	}
)();



//set images margin for .animate-header-equipment-photos depending on the screen


var checkQueryForMobile = matchMedia("(max-width:500px)");
var headerEquipmentPhotos = document.querySelectorAll(".header-equipment-photos img");

function MarginValueBetweeenImages(checkQueryForMobile){

	if (checkQueryForMobile.matches){
		headerEquipmentPhotos.forEach((images) =>{
			images.classList.add("animate-header-equipment-photos-setMobileMargin");
		});
	}
	else{
		headerEquipmentPhotos.forEach((images) =>{
			images.classList.add("animate-header-equipment-photos-setDesktopMargin");
		});
	}
}


MarginValueBetweeenImages(checkQueryForMobile);



var OpenOverlayImages = document.querySelector(".open-overlay-images-wrapper");
var overlayImages = document.querySelector(".open-overlay-images");


function OpenOverlayImagesWrapper(){
	OpenOverlayImages.style.width = "100%";
	OpenOverlayImages.style.transition = "0.8s ease";
	overlayImages.style.opacity = "1";
	overlayImages.style.transition = "0.5s ease 0.7s";
}

function CloseOverlayImagesWrapper(){
	OpenOverlayImages.style.width = "0";
	OpenOverlayImages.style.transition = "1s ease";
	overlayImages.style.opacity = "0";
	overlayImages.style.transition = "0.2s ease";
}



var OpenOverlayPhotos = document.querySelector(".overlay-about-photos-wrapper");
var overlayPhotosH1 = document.querySelector(".overlay-about-photos-wrapper h1");
var overlayPhotos = document.querySelector(".overlay-about-photos");

function OpenMoreAboutPhotos(){
	OpenOverlayPhotos.style.width = "100%";
	OpenOverlayPhotos.style.transition = "1s ease";
	overlayPhotos.style.opacity = "1";
	overlayPhotos.style.transition = "1s ease";
	overlayPhotosH1.style.opacity = "1";
	overlayPhotosH1.style.transition = "1s ease 0.5s";
}

function CloseOverlayPhotosWrapper(){
	OpenOverlayPhotos.style.width = "0";
	OpenOverlayPhotos.style.transition = "1s ease";
	overlayPhotos.style.opacity = "0";
	overlayPhotos.style.transition = "1s ease 0.2s";
	overlayPhotosH1.style.opacity = "0";
	overlayPhotosH1.style.transition = "0.3s ease";
}

var headerDiv = document.querySelector("header");
window.onscroll = function(){
	var scrollFromTop = document.documentElement.scrollTop;
	if (scrollFromTop > 1){
		headerDiv.style.height = "70px";
		headerDiv.style.transition = "0.5s";
	}
	else{
		headerDiv.style.height = "90px";
		headerDiv.style.trnsition = "0.3";
	}
};



