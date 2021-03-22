
onload = function(){
    adjustMainPageElementsPosition();
}
const customPaintings = document.querySelector('.custom-paintings');
const mainArtText =  document.querySelector('.mmain-art-text');
const menuUl = document.querySelector(".menu-ul");
const menu = document.querySelector(".menu");

function adjustMainPageElementsPosition(){
    customPaintings.style.opacity = "1";
    customPaintings.style.transition = "1.1s ease-out";
    menuUl.style.opacity = "1";
    menuUl.style.transition = "0.7s ease-out";
}


const hamburger_menu = document.querySelectorAll(".openHamburger");


hamburger_menu.forEach(openHambMenu => {

    openHambMenu.addEventListener('click', () =>{
    menu.classList.toggle("open");
    menu.style.transition = "0.7s ease-out";
});

});




document.addEventListener('mousemove', moveText);

function moveText(event){
    this.querySelectorAll('.reading-text').forEach(layer => {
        var horizontal = (window.innerWidth - event.pageX  * 10) /100 ;
        var vertical = (window.innerHeight - event.pageY * 10) / 100 ;
        layer.style.transform = `translate(${horizontal}px,${vertical}px)`;
    });
}



const bottomWhiteCover = document.querySelector(".whiteBottomCoverWhenChangeMenu");
const topWhiteCover = document.querySelector(".whiteTopCoverWhenChangeMenu");

function growMainCoverHeight(){

    topWhiteCover.classList.add('growBottomWhiteCoverHeight');
    bottomWhiteCover.classList.add('growBottomWhiteCoverHeight');
    setTimeout(function(){
        window.location.href = "paintingsContent.html";
    },4000)

}


const openLeftToRead = document.querySelector(".openLeftReadingText");
const openRightToRead = document.querySelector(".openRightReadingText");
const actualText = document.querySelectorAll(".actualText");
const  readSection=  document.querySelector(".readSection");

function openTwoSectionsToRead(){
    openRightToRead.style.height = "auto";
    openRightToRead.style.transition = "all 0.8 ease-in";
    openLeftToRead.style.height = "auto";
    openLeftToRead.style.transition = "all 0.8 ease-in";
    closeAboutDescription.style.display = "block";
    closeAboutDescription.style.transition = "3s ease";
    readSection.classList.toggle("readSectionClassListAdd");
    readSection.style.transition = "0.5s ease";
    actualText.forEach( (text) => {
        text.style.opacity = "1";
        text.style.transition = "all 2s ease";
    });
}
const closeAboutDescription = document.querySelector(".closeAboutDescriptionSections");

closeAboutDescription.addEventListener('click', () => {
    openRightToRead.style.height = "0vh";
    openLeftToRead.style.height = "0vh";
    closeAboutDescription.style.display = "block";
    readSection.classList.toggle("readSectionClassListAdd");
    actualText.forEach( (text) => {
        text.style.opacity = "1";
        text.style.transition = "all 2s ease";
    });
});



const pictureToChangeWhenResize = document.querySelector(".right-main-img");
const mediaQuerryLessThen = matchMedia("(max-width:800px)");

function changeRightMainImageWhenResize(mediaQuerryLessThen){
    if (mediaQuerryLessThen.matches){
        pictureToChangeWhenResize.style.backgroundImage = "url('Images/changePic.jpg')";
    }
    else{
        pictureToChangeWhenResize.style.backgroundImage = "url('Images/second_img.jpg')";
    }
}
mediaQuerryLessThen.addEventListener('change',changeRightMainImageWhenResize);
changeRightMainImageWhenResize(mediaQuerryLessThen);


const customPaintingsText = document.querySelector(".customPaintingsText");
const insideLeft = document.querySelector(".inside-left");

const zoomedImage = document.querySelector(".customPaintingsDrop");
const magnifyingGlass = document.querySelector(".magnifyingGlass");


const insideTightText = document.querySelector(".inside-right-text");
const line = document.querySelector(".line");


function openCustomPaintings(){
    customPaintings.classList.toggle("custom-paintingsClick");
    customPaintings.classList.toggle("custom-paintings");
    customPaintingsText.classList.toggle("customPaintingsTextAddClass");
    insideLeft.classList.toggle("opacityClass");
    magnifyingGlass.classList.toggle("magnifyingGlassModify");
    zoomedImage.classList.toggle("scalePicture");
    insideTightText.classList.toggle("inside-right-textToggle");
    line.classList.toggle("line-toggle");
}


function changeMainMediaPicture(event){
    const eventObject = event.target;
    if(eventObject.childNodes.tagName = "IMG"){
        document.querySelector(".mainMediaPicture").setAttribute("src", eventObject.getAttribute("src"));
    }

}



