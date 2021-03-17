var contentBoxParagraphs = document.querySelectorAll(".content-box p");
var i = 0;

window.onload = function(){
	ParagraphEffect();
}


function ParagraphEffect(){

	if (i == contentBoxParagraphs.length){
		location.href = "mainContent.html";
		return;
	}

	contentBoxParagraphs[i].style.opacity = "1";
	contentBoxParagraphs[i].style.transition = "1s ease-in-out";	
	
	setTimeout(()=>{
		contentBoxParagraphs[i].style.opacity = "0";
		contentBoxParagraphs[i].style.transition = "0.4s ease-in-out";
		i++;
		ParagraphEffect();
	},2500);


}

