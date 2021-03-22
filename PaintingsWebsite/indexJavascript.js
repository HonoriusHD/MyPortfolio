
//   index.html functionality


window.onload = function(){
    loadingBar();
    changeWords();
}

const loadingWordsArray = ["&#x3F4&#x3F5&#x3E7&#x3EF&#x3D8&#x3FB&#x3FD","&#x3DF&#x3FD&#x3F7&#x3F4&#xFC&#x3DF&#x3C9",
    "L&#x3F0&#x3F4&#x3F5&#x3E7&#x3E0&#x3DE", "L&#x3EC&#x3E3&#x3DC&#x3DB&#x3D8&#x3D6",
    "L&#x3F0&#x3F4&#x3F5&#x3E7&#x3E0&#x3DE", "L&#x3EC&#x3E3&#x3DC&#x3DB&#x3D8&#x3D6",
    "LO&#x3F0&#x3EF&#x3D8&#x3FB&#x3FD", "LO&#x3F7&#x3F4&#xFC&#x3DF&#x3C9","LOA&#x3EF&#x3D8&#x3FB&#x3FD",
    "LO&#x3F0&#x3EF&#x3D8&#x3FB&#x3FD", "LO&#x3F7&#x3F4&#xFC&#x3DF&#x3C9","LOA&#x3EF&#x3D8&#x3FB&#x3FD",
    "LOA&#xFC&#x3DF&#x3C9","LOAD&#x3E0&#x3DE", "LOAD&#x3D8&#x3D6",
    "LOA&#xFC&#x3DF&#x3C9","LOAD&#x3E0&#x3DE", "LOAD&#x3D8&#x3D6",
    "LOADI&#x3FB&#x3FD", "LOADI&#x3DF&#x3C9","LOADIN&#x3FD",
    "LOADIN&#x3D6","LOADING","LOADING","LOADING"];
 var word = 0;
 const stopChangeWords = setInterval(changeWords,80);
 const words = document.getElementById("words");
 const loadingWordsDiv = document.getElementById("loading-words");
 const mainSection =  document.getElementById("main-section");


 const progressBar = document.getElementById("actual-progress-bar");
 const stopLoadingBar = setInterval(loadingBar,35);
 var countProgressBarWidth = 0;


function loadingBar(){
    if(countProgressBarWidth == 100){
        clearInterval(stopLoadingBar);
      
    }
    else{
        countProgressBarWidth++;
        progressBar.style.width = countProgressBarWidth + "%";
        
        if(countProgressBarWidth == 84){
            scaleLoadingWords();
        }
    }
}

function changeWords(){
    if(word == loadingWordsArray.length - 1){
        word = 1;
    }
    else{
        words.style.opacity = 0;
    }
    nextWord();
}

function nextWord(){
    words.innerHTML = loadingWordsArray[word++];
    words.style.opacity = 1;
}

function scaleLoadingWords(){
    loadingWordsDiv.style.transition = "all 4.4s";
    loadingWordsDiv.style.transform = "scale(34.4)";

    setTimeout(function(){
         mainSection.style.opacity = "0.2";
         mainSection.style.transition = "all 1s ease";
        }, 1000);
}

    setTimeout(function(){
        clearInterval(stopChangeWords);        
    },5000);
    setTimeout(function(){
        window.location.href = "mainContent.html"
        
    },5200);
