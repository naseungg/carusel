function newCarusel(arrImg, id){

    const items = document.querySelector('.items')

    const carusel = document.createElement('div');
    carusel.className = 'carusel';
    carusel.id = id;

    const buttonLeft = document.createElement('button');
    buttonLeft.className = 'button-left';
    buttonLeft.id = 'left';
    buttonLeft.textContent = 'Влево';

    const image = document.createElement('img');
    image.className = 'image';
    image.id = 'image';
    image.src = arrImg[0];

    const buttonRight = document.createElement('button');
    buttonRight.className = 'button-right';
    buttonRight.id = 'right';
    buttonRight.textContent = 'Вправо';

    // Добавляем элементы в карусель
    carusel.appendChild(buttonLeft);
    carusel.appendChild(image);
    carusel.appendChild(buttonRight);
    items.appendChild(carusel);

    let newSlider = {
        buttonLeft: null,
        buttonRight: null,
        image: null,
        imageSrc: arrImg,
        index: 0,
      
        start: function(){
          var that = this;
      
          var elSelector = document.querySelector('#'+ carusel.id);
      
          this.buttonLeft = elSelector.querySelector('.button-left');
          this.buttonRight = elSelector.querySelector('.button-right');
      
          this.image = elSelector.querySelector('.image');
      
          this.buttonLeft.addEventListener('click', operationClick);
          this.buttonRight.addEventListener('click', operationClick);
          
          function operationClick(eventObject) {
      
      
          let element = eventObject.currentTarget;
            
          if (element.innerHTML === 'Влево') {
            that.index--;
            if (that.index == -1) {
              that.index = 2;
            }
            that.image.src = that.imageSrc[that.index]
      
          }
          if (element.innerHTML === 'Вправо') {
            that.index++;
            if (that.index == 3) {
              that.index = 0;
            }
            that.image.src = that.imageSrc[that.index]
          }
        }
      }
      };

      return newSlider;
}