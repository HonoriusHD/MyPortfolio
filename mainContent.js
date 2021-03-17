 
window.onload = function(){
	RoundPhotoChangePos();
	MainOverlayTextChangePos();
	ChangeMainLeftContentBg();
}

var mainRightOverlayText = document.querySelector(".main-right-overlay-text");
var containProjects = document.querySelector(".contain-projects");

 function OpenProjects(){
 	mainRightOverlayText.style.opacity = "0";
 	mainRightOverlayText.style.transition = "0.7s ease";
 	containProjects.style.opacity = "1";
	containProjects.style.zIndex = "20";
	containProjects.style.transition = "opacity 0.7s ease-in 0.3s";
	containProjects.style.transform = "scale(1)";
 }




 var designProjects = document.querySelector(".design-projects");
 var webProjects = document.querySelector(".web-projects");

 function OpenWebProjects(){
	webProjects.style.opacity = "1";
	webProjects.style.transition = "0.5s ease";
	designProjects.style.opacity = "0";
	designProjects.style.transform = "scale(0)";
 }
 function OpenDesignProjects(){
	designProjects.style.opacity = "1";
	designProjects.style.transform = "scale(1)";
	designProjects.style.transition = " opacity 0.5s ease";
	webProjects.style.opacity = "0";
}



var roundProfilePic = document.querySelector(".contain-image");
var  mainOverlayText = document.querySelector(".main-right-overlay-text");
var mainLeftContent = document.querySelector(".main-left-content");

function MainOverlayTextChangePos(){
	mainOverlayText.style.left = "50%";
	mainOverlayText.style.transition = "1.8s ease";
	mainOverlayText.style.opacity = "1";
}

function RoundPhotoChangePos(){
	roundProfilePic.style.top = "80px";
	roundProfilePic.style.transition = "1.8s ease";
	roundProfilePic.style.opacity = "1";
}

function ChangeMainLeftContentBg(){
	mainLeftContent.style.backgroundColor = "#bb41bb";
	mainLeftContent.style.transition = "1s ease 1.3s";
}
