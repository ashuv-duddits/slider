export default function Slider(option){

    const left = document.querySelector(option.l);
    const right = document.querySelector(option.r);
    const slider = document.querySelector(option.list);

    var sliderItemsAmount = slider.children.length;
    var sliderItemWidth = parseInt(getComputedStyle(slider).width);
    var currentSlide = 0;
    
    right.addEventListener("click", function(e) {
      e.preventDefault();
      currentSlide++;


      if (currentSlide > sliderItemsAmount-1) {
        currentSlide = 0;
      }
      slider.style.right = currentSlide*sliderItemWidth + "px";
    });
    
    left.addEventListener("click", function(e) {
      e.preventDefault();
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = sliderItemsAmount-1;
      }
      slider.style.right = currentSlide*sliderItemWidth + "px";
    });
    
}