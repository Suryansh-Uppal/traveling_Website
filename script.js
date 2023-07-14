const nextButton = document.querySelector('.span-next');
const prevButton = document.querySelector('.span-prev');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

nextButton.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > numberOfSlides-1){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
}

prevButton.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides-1;
    }
    slides[slideNumber].classList.add('active');
}