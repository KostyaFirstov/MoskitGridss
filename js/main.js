$(document).ready(function(){
    $(".info__slider").owlCarousel({
          loop: true,
          margin: 10,
          dots: false,
          autoplay: true, 
          smartSpeed: 1400,
          autoplayTimeout: 4000,
          items: 1,
          mouseDrag: false,
          nav: true, 
      responsive:{
          0:{
              items:3
          },
          991:{
              items:1
          }
    }
  
      });
  
      $(".reviews__carousel").owlCarousel({
          loop: true, 
          margin: 80,
          nav: true, 
          items: 1.5,
          center: true,
          navigationText : ["",""],
          responsive:{
            0:{
              items: 1,
              margin: 20,
            },
            700:{
              items: 1.5,
              margin: 80,
            }
      }
      });
  });  


  const scrollImations = (entries, observer) => {
    entries.forEach((entry) => {

      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }


  
  const options = {
    threshold: 0
  };
  const observer = new IntersectionObserver(scrollImations);
  
  const boxes = document.querySelectorAll('.anim');
  boxes.forEach((box) => {
    observer.observe(box);
  });


  function slowScroll(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
  }
  


  const scrollBtn = document.querySelector('.btn__up')


  window.onscroll = () => {
    if(window.scrollY > 400){
      scrollBtn.classList.add('show');
    }
    else {
      scrollBtn.classList.remove('show');
    }
  }


  $(document).ready(function(){
    $('.open-button').click(function() 
    {
            if(!$('.menu-button').hasClass('open-done'))
            {
                $('body').addClass('stop-scrolling')
                $('.info__btn').removeClass('usage')
                $('.menu-button').addClass('open-done');
                $('.menu-block-1').addClass('open-done');
                $('.desarr').addClass('open-done')
                setTimeout(function(){$('.menu-block-2').addClass('open-done')}, 100);
                setTimeout(function(){$('.menu-link-1').addClass('open-done')}, 500);
                setTimeout(function(){$('.menu-link-2').addClass('open-done')}, 600);
                setTimeout(function(){$('.menu-link-3').addClass('open-done')}, 700);
                setTimeout(function(){$('.menu-link-4').addClass('open-done')}, 800);
                
            }
            else
            {
                $('.menu-button').removeClass('open-done');
                $('.menu-link-1').removeClass('open-done');
                $('.desarr').removeClass('open-done')
                setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 100);
                setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 200);
                setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 300);
                setTimeout(function(){$('.menu-block-1').removeClass('open-done')}, 800);
                setTimeout(function(){$('.menu-block-2').removeClass('open-done')}, 600);
                setTimeout(function(){$('.info__btn').addClass('usage')}, 1300)
                $('body').removeClass('stop-scrolling')
            }
    });
    });



const serviceBtn = document.querySelectorAll('.services__btn');

const serviceInfo = document.querySelectorAll('.services__info')

serviceBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        let btnParent = btn.parentElement;
        let btnNeib = btnParent.nextElementSibling;

        if(btnNeib.style.maxHeight){
            btnNeib.style.maxHeight = null;
            btn.classList.remove('active');
        }else{
          isServiceActive();
          btn.classList.add('active');
        btnNeib.style.maxHeight = btnNeib.scrollHeight + "px";
        }
    });
});


function isServiceActive(btn){
serviceInfo.forEach(function(item){
  if(item.style.maxHeight){
    item.style.maxHeight = null;
    serviceBtn.forEach(function(btn){
    btn.classList.remove('active')
    })}
})
}



const canvasBtn = document.querySelectorAll('.canvas__btn');

const canvasInfo = document.querySelectorAll('.canvas__info');

canvasBtn.forEach(function(btn){
  btn.addEventListener('click', function(){
      let btnParent = btn.parentElement;
      let btnNeib = btnParent.nextElementSibling;

      if(btnNeib.style.maxHeight){
          btnNeib.style.maxHeight = null;
          btn.classList.remove('active');
      }else{
        isCanvasActive();
        btn.classList.add('active');
        btnNeib.style.maxHeight = btnNeib.scrollHeight + "px";
      }
  });
});


function isCanvasActive(btn){
  canvasInfo.forEach(function(item){
if(item.style.maxHeight){
  item.style.maxHeight = null;;
  canvasBtn.forEach(function(btn){
  btn.classList.remove('active');
  })}
})
}


function chooseGrid(){


  const filterBtn = document.querySelectorAll('.calculate__filter');
  const filterTable = document.querySelectorAll('.calculate__image');
  
  function findTable(items, category){
    items.forEach(function(card){
      const isItemFiltered = card.classList.contains(category);
      if(!isItemFiltered){
        card.classList.add('none');
      }
      else{
        card.classList.remove('none');
      }
    })
  }
  
  filterBtn.forEach(function(button){
    button.addEventListener('click', function(){
      isActive()
      button.classList.add('active')
      const btnData = button.dataset.filter;
      findTable(filterTable, btnData);
    })
  })


  function isActive(){
    filterBtn.forEach(function(button){
      const haveActive = button.classList.contains('active');
      if(haveActive){
        button.classList.remove('active');
      }
    })
  }


  }
  
  chooseGrid();




const openHelpModal = document.querySelectorAll('.btn-help, .repair__call');
const helpModal = document.querySelector('.modal-window'); 
const modalHelp = document.querySelector('.modal-help');
const closeHelpModal = document.querySelector('.close-window-btn');

openHelpModal.forEach(function(btn){
  btn.addEventListener('click', function(){
  helpModal.classList.add('active');
  modalHelp.classList.add('active');
  document.body.classList.add('stop');
})
});

closeHelpModal.addEventListener('click', function(){
  helpModal.classList.remove('active');
  document.body.classList.remove('stop');
  modalHelp.classList.remove('active');
})

modalHelp.addEventListener('click', event => {
  event.stopPropagation()
})

helpModal.addEventListener('click', function(){
  helpModal.classList.remove('active');
  document.body.classList.remove('stop');
  modalHelp.classList.remove('active');
})


document.addEventListener("DOMContentLoaded", function(){
        
    let phoneInputs = document.querySelectorAll('input[data-tel-input]');
  
    let getInputNumbersValue = function(input){
      return input.value.replace(/\D/g,"");
    }
  
    let onPhoneInput = function(e){
      let input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
      formattedInputValue = "";
      selectionStart = input.selectionStart;
  
      if(!inputNumbersValue){
        return  input.value = "";
      }
  
      if(input.value.length != selectionStart){
        if(e.data && /\D/g.test(e.data)){
          input.value = inputNumbersValue;
        }
        return
      }
  
  
      if(["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1){
        if(inputNumbersValue[0] == "9"){
          inputNumbersValue = "7" + inputNumbersValue;
        }
        let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
        formattedInputValue = firstSymbols + " ";
        if(inputNumbersValue.length > 1){
          formattedInputValue += "(" + inputNumbersValue.substring(1,4)
        }
        if(inputNumbersValue.length >= 5){
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if(inputNumbersValue.length >= 8){
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if(inputNumbersValue.length >= 10){
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      }
      else{
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    }
  
  
    let onPhoneKeyDown = function(e){
      let input = e.target;
      if(e.keyCode == 8 && getInputNumbersValue(input).length ==1){
        input.value = "";
      }
    }
  
    let onPhonePaste = function(e){
      let pasted = e.clipboardData || window.clipboardData,
      input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
  
      if(pasted){
        let pastedText = pasted.getData("Text");
        if(/\D/g.test(pastedText)){
          input.value = inputNumbersValue;
        }
      }
    }
  
    for(i=0; i<phoneInputs.length; i++){
      let input =  phoneInputs[i];
      input.addEventListener("input", onPhoneInput);
      input.addEventListener("keydown", onPhoneKeyDown);
      input.addEventListener("paste", onPhonePaste);
      }
    })
  


    function resultCalculate(){

        const getCanvas = document.querySelector('#info-canvas');
        const getColor = document.querySelector('#info-color');
        const getWidth = document.querySelector('#info-width');
        const getHeight = document.querySelector('#info-height');
        const getAmount = document.querySelector('#info-amount');
        const getDelivery = document.querySelector('#delivery');
        const getMotage = document.querySelector('#motage');
        const totalResultMeters = document.querySelector('#meters');
        const totalResultPrice = document.querySelector('#price');
        const btnFilterSlider = document.querySelector('.calculate__filter-slider');
        const btnFilterDoor = document.querySelector('.calculate__filter-door'); 
        const btnFilterUsual = document.querySelector('.calculate__filter-usual'); 
        const gray = document.querySelector('.gray');
      
      
        let totalCanvas;
        let totalColor;
        let totalWidth;
        let totalHeight;
        let totalAmount;
        let totalDelivery;
        let totalMotage;
      
      

        getCanvas.addEventListener('input', function() {
          getCanvas.classList.add('choose');
          let canvasPrice = getCanvas.value;
          totalCanvas = canvasPrice;
            if(totalCanvas === 'Стандарт'){
              totalCanvas = 1290;
            }
            if(totalCanvas === 'Антимошка'){
              totalCanvas = 2190;
            }
            if(totalCanvas === 'Антикошка'){
              totalCanvas = 2590;
            }
            if(totalCanvas === 'Антиптица'){
              totalCanvas = 3090; 
            }
            if(totalCanvas === 'Ультравью'){
              totalCanvas = 2090;
            }
            if(totalCanvas === 'Антипыль'){
              totalCanvas = 3290;
            }
            if(totalCanvas === 'Светоотражающее'){
              totalCanvas = 3290;
          }
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        })
 
      
        getColor.addEventListener('input', function(){
          getColor.classList.add('choose');
          let colorPrice = getColor.value;
          totalColor = colorPrice;
          if(totalColor === 'Белый'){
            totalColor = 0;
          }
          if(totalColor === 'Коричневый'){
            totalColor = 30;
          }
          if(totalColor === 'Серый'){
            totalColor = 'Gray';
          }
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        })
      
      
        getWidth.addEventListener('input', function(){
          getWidth.classList.add('choose');
          let widthPrice = getWidth.value;
          totalWidth = widthPrice / 1000;
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        });
      
      
        getHeight.addEventListener('input', function(){
          getHeight.classList.add('choose');
          let heightPrice = getHeight.value;
          totalHeight = heightPrice / 1000;
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        });
      
      
        getAmount.addEventListener('input', function(){
          getAmount.classList.add('choose');
          let amountPrice = getAmount.value;
          totalAmount = amountPrice;
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        })
      
      
      
        getDelivery.addEventListener('input', function(){
          getDelivery.classList.toggle('choose');
          if(getDelivery.classList.contains('choose')){
          totalDelivery = getDelivery.value;
          totalDelivery = 600;
        }else{
          totalDelivery = getDelivery.value;
          totalDelivery = 0;
        }
        resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        })
      
      
        getMotage.addEventListener('input', function(){
          getMotage.classList.toggle('choose');
          if(getMotage.classList.contains('choose') && btnFilterUsual.classList.contains('active')){
          totalMotage = getMotage.value;
          totalMotage = 400;
        }else{
          totalMotage = getMotage.value;
          totalMotage = 0;
        }
        resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        })
      
      
      btnFilterSlider.addEventListener('click', function(){
        if(btnFilterSlider.classList.contains('active')){
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        }
      })


      btnFilterDoor.addEventListener('click', function(){
        if(btnFilterDoor.classList.contains('active')){
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        }
      })

      btnFilterUsual.addEventListener('click', function(){
        if(btnFilterUsual.classList.contains('active')){
          resultSum(totalWidth, totalHeight, totalAmount, totalCanvas, totalColor, totalDelivery, totalMotage);
        }
      })
      
      
      function resultSum(width, height, amount, canvas, color, delivery, montage){


        if(btnFilterSlider.classList.contains('active')){
          gray.classList.add('none')
        }else{
          gray.classList.remove('none')
        }
        if(!getCanvas.classList.contains('choose')){
          canvas = 1290;
        }
        if(!getCanvas.classList.contains('choose') && !btnFilterSlider.classList.contains('active')){
          canvas = 1290;
        }
        if(!getCanvas.classList.contains('choose') && btnFilterSlider.classList.contains('active')){
          canvas = 3100;
        }
        if(canvas === 1290 && btnFilterSlider.classList.contains('active')){
          canvas = 3100;
        }
        if(canvas === 2190 && btnFilterSlider.classList.contains('active')){
          canvas = 4000;
        }
        if(canvas === 2590 && btnFilterSlider.classList.contains('active')){
          canvas = 4200;
        }
        if(canvas === 3090 && btnFilterSlider.classList.contains('active')){
          canvas = 4500; 
        }
        if(canvas === 2090 && btnFilterSlider.classList.contains('active')){
          canvas = 3700;
        }
        if(canvas === 3290 && btnFilterSlider.classList.contains('active')){
          canvas = 5000;
        }
        if(canvas === 3290 && btnFilterSlider.classList.contains('active')){
          canvas = 5000;
        }
        if(!getCanvas.classList.contains('choose') && btnFilterDoor.classList.contains('active')){
          canvas = 2400;
        }
        if(canvas === 1290 && btnFilterDoor.classList.contains('active')){
          canvas = 2400;
        }
        if(canvas === 2190 && btnFilterDoor.classList.contains('active')){
          canvas = 3300;
        }
        if(canvas === 2590 && btnFilterDoor.classList.contains('active')){
          canvas = 3600;
        }
        if(canvas === 3090 && btnFilterDoor.classList.contains('active')){
          canvas = 3900; 
        }
        if(canvas === 2090 && btnFilterDoor.classList.contains('active')){
          canvas = 3150;
        }
        if(canvas === 3290 && btnFilterDoor.classList.contains('active')){
          canvas = 4350;
        }
        if(canvas === 3290 && btnFilterDoor.classList.contains('active')){
          canvas = 4350;
        }
        if(!getWidth.classList.contains('choose')){
            width = 0;
        }
        if(!getHeight.classList.contains('choose')){
            height = 0;
        }
        if(!getColor.classList.contains('choose')){
          color = 0;
        }
        if(color === 30 && btnFilterSlider.classList.contains('active') || color === 30 && btnFilterDoor.classList.contains('active')){
          color = 100;
        }
        if(color === 'Gray' && btnFilterSlider.classList.contains('active')){
          color = 0;
        }
        if(color === 'Gray' && btnFilterDoor.classList.contains('active')){
          color = 500;
        }
        if(color === 'Gray' && canvas === 1290){
          color = 710;
        }
        if(color === 'Gray' && canvas === 2590){
          color = 360;
        }
        if(color === 'Gray' && canvas === 2190){
          color = 230;
        }
        if(color === 'Gray' && canvas === 3090){
          color = 400;
        }
        if(color === 'Gray' && canvas === 2090){
          color = 230;
        }
        if(color === 'Gray' && canvas === 3290){
          color = 600;
        }
        if(!getDelivery.classList.contains('choose')){
          delivery = 0;
        }
        if(!getMotage.classList.contains('choose')){
          montage = 0;
        }
        if(getMotage.classList.contains('choose') && btnFilterSlider.classList.contains('active')){
          montage = 600
        }
        if(getMotage.classList.contains('choose') && btnFilterDoor.classList.contains('active')){
          montage = 800
        }
        if(!getAmount.classList.contains('choose')){
          amount = 1;
        }
        if(totalAmount < 1){
          amount = 0;
        }
      
        let resultMeters = width * height;

        let resultPrice;

        

        if(resultMeters > 0 && resultMeters <= 1 && btnFilterUsual.classList.contains('active') && canvas === 1290){
          canvas = 1290;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterUsual.classList.contains('active') && canvas === 2190){
          canvas = 2190;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterUsual.classList.contains('active') && canvas === 2590){
          canvas = 2590;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterUsual.classList.contains('active') && canvas === 3090){
          canvas = 3090;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterUsual.classList.contains('active') && canvas === 2090){
          canvas = 2090;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterUsual.classList.contains('active') && canvas === 3290){
          canvas = 3290;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterDoor.classList.contains('active') && canvas === 2400){
          canvas = 2400;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterDoor.classList.contains('active') && canvas === 3300){
          canvas = 3300;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterDoor.classList.contains('active') && canvas === 3600){
          canvas = 3600;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterDoor.classList.contains('active') && canvas === 3900){
          canvas = 3900;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterDoor.classList.contains('active') && canvas === 3150){
          canvas = 3150;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterDoor.classList.contains('active') && canvas === 4350){
          canvas = 4350;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterSlider.classList.contains('active') && canvas === 3100){
          canvas = 3100;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterSlider.classList.contains('active') && canvas === 4000){
          canvas = 4000;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterSlider.classList.contains('active') && canvas === 4200){
          canvas = 4200;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterSlider.classList.contains('active') && canvas === 4500){
          canvas = 4500;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterSlider.classList.contains('active') && canvas === 3700){
          canvas = 3700;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
        if(resultMeters > 0 && resultMeters <= 1 && btnFilterSlider.classList.contains('active') && canvas === 5000){
          canvas = 5000;
          resultPrice = (canvas * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }
       if(resultMeters > 1){
          resultPrice = ((resultMeters * canvas) * amount) + color + delivery + montage;
          totalResultMeters.innerText = resultMeters.toFixed(2);
          totalResultPrice.innerText = resultPrice.toFixed(0);
        }

      
      
      

      }
      }
      
      resultCalculate();



const repairBtn = document.querySelectorAll('.repair-btn');
const repairInfo = document.querySelectorAll('.repair__info');


repairBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        btnNeib = btn.nextElementSibling;
        if(btnNeib.classList.contains('active')){
          btn.classList.remove('active');
          btnNeib.classList.remove('active');
        }else{
          isRepair(btn);
          btn.classList.add('active')
          btnNeib.classList.add('active')
        }
    })
});


function isRepair(){
    repairInfo.forEach(function(el){
        el.classList.remove('active')
        repairBtn.forEach(function(btn){
          btn.classList.remove('active');
        })
    })
};


