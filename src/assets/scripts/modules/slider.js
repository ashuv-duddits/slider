export default function Slider(option) {

  const left = document.querySelector(option.l);
  const right = document.querySelector(option.r);
  const slider = document.querySelector(option.list);
  const widthItemSlider = slider.children[0].getBoundingClientRect().width;

  var sliderItems = Array.from(slider.children);

  let isAnimate = false;

  //Кнопки управления слайдером

  right.addEventListener("click", function (e) {
    e.preventDefault();
    if (!isAnimate) {
      let animation = function () {
        return new Promise(function (resolve) {
          //Функция анимации
          let animate = function(options) {

            var start = performance.now();

            requestAnimationFrame(function animate(time) {
              // timeFraction от 0 до 1
              var timeFraction = (time - start) / options.duration;
              if (timeFraction > 1) timeFraction = 1;

              // текущее состояние анимации
              var progress = options.timing(timeFraction)

              options.draw(progress);

              if (timeFraction < 1) {
                isAnimate = true;
                requestAnimationFrame(animate);
              } else {
                isAnimate = false;
                resolve();
              }
            });
          }
          animate({
            duration: 500,
            timing: function (timeFraction) {
              return Math.pow(timeFraction, 2);
            },
            draw: function (progress) {
              slider.style.right = progress * widthItemSlider + 'px';
            }
          });
        })
      }

      animation().then(function () {
        let deleteElem = sliderItems.shift();
        sliderItems.push(deleteElem);
        slider.innerHTML = "";
        sliderItems.forEach((item) => {
          slider.appendChild(item);
        })
        slider.style.right = 0 + 'px';
      })
    }

  });

  left.addEventListener("click", function (e) {
    e.preventDefault();
    if (!isAnimate) {
      let deleteElem = sliderItems.pop();
      sliderItems.unshift(deleteElem);
      slider.innerHTML = "";
      sliderItems.forEach((item) => {
        slider.appendChild(item);
      })
      slider.style.right = widthItemSlider + 'px';
  
      //Функция анимации
      let animate = function(options) {
  
        var start = performance.now();
  
        requestAnimationFrame(function animate(time) {
          // timeFraction от 0 до 1
          var timeFraction = (time - start) / options.duration;
          if (timeFraction > 1) timeFraction = 1;
  
          // текущее состояние анимации
          var progress = options.timing(timeFraction)
  
          options.draw(progress);
  
          if (timeFraction < 1) {
            isAnimate = true;
            requestAnimationFrame(animate);
          }else{
            isAnimate = false;
          }
        });
      }
      animate({
        duration: 500,
        timing: function (timeFraction) {
          return Math.pow(timeFraction, 2);
        },
        draw: function (progress) {
          slider.style.right = (1 - progress) * widthItemSlider + 'px';
        }
      });
    }

  });
}