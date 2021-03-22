
const toggleShowcase = document.querySelectorAll(".toggle-showcase");
const paintingsShowcase = document.querySelector('.open-paintings-showcase');

toggleShowcase.forEach((element) =>{
    element.addEventListener("click", () =>{

        paintingsShowcase.classList.toggle("open-paintings-showcase-open-close");
    });
});