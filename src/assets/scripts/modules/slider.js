export default function Slider(option){

    const left = document.querySelector(option.l);
    const right = document.querySelector(option.r);
    const slider = document.querySelector(option.list);

    var sliderItems = Array.from(slider.children);
    
    right.addEventListener("click", function(e) {
      e.preventDefault();
      let deleteElem = sliderItems.shift();
      sliderItems.push(deleteElem);
      slider.innerHTML = "";
      sliderItems.forEach((item)=>{
        slider.appendChild(item);
      })
      
    });
    
    left.addEventListener("click", function(e) {
      e.preventDefault();
      let deleteElem = sliderItems.pop();
      sliderItems.unshift(deleteElem);
      slider.innerHTML = "";
      sliderItems.forEach((item)=>{
        slider.appendChild(item);
      })
    });
    
}