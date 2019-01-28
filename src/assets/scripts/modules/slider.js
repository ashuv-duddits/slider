export default function Slider(option){
    console.log("dfgndfgk");
    const left = document.querySelector(option.l);
    const right = document.querySelector(option.r);
    const slider = document.querySelector(option.list);
    const computed = getComputedStyle(slider);
    const sliderWidth = parseInt(getComputedStyle(slider).width);
    var sliderItemsAmount = slider.children.length;
    
    right.addEventListener("click", function(e) {
      e.preventDefault();
      let currentRight = parseInt(computed.right);
    
      if (!currentRight) {
        currentRight = 0;
      }
      if ((currentRight%sliderWidth==0)||(currentRight==0)){
        if (currentRight < (sliderItemsAmount-1)*sliderWidth) {
          slider.style.right = currentRight + sliderWidth + "px";
        }
      }
    });
    
    left.addEventListener("click", function(e) {
      e.preventDefault();
      let currentRight = parseInt(computed.right);
    
      if (!currentRight) {
        currentRight = 0;
      }
      if ((currentRight%sliderWidth==0)||(currentRight==0)){
        if (currentRight > 0) {
          slider.style.right = currentRight - sliderWidth + "px";
        }
      }
    });
    
}