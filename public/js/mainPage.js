let firstmoon = document.querySelector('.main_visual .moon');
let firsttitle = document.querySelector('.main_visual .mv_title');
let firsttext = document.querySelector('.main_visual .right_txt')

let secondmoon = document.querySelector('.section1 .moon');
let secondtitle = document.querySelector('.section1 .sec1_title');
let secondtext = document.querySelector('.section1 .sec1_txt')

let thirdText1 = document.querySelector('.section2 .mv_text>strong');
let thirdText2 = document.querySelector('.section2 .mv_text>p');
let thirdCon = document.querySelector('.section2 .mySwiper2');

window.addEventListener('scroll',()=>{
  let nowScroll = window.scrollY;
  
  if(nowScroll > 350){
    firstmoon.classList.remove('fadeIn05');
    firstmoon.classList.add('fadeOut05');
    firsttitle.classList.remove('fadeIn06');
    firsttitle.classList.add('fadeOut06');
    firsttext.classList.remove('fadeIn07');
    firsttext.classList.add('fadeOut07');
  } else{
    firstmoon.classList.add('fadeIn05');
    firstmoon.classList.remove('fadeOut05');
    firsttitle.classList.add('fadeIn06');
    firsttitle.classList.remove('fadeOut06');
    firsttext.classList.add('fadeIn07');
    firsttext.classList.remove('fadeOut07');
  }

  if(nowScroll > 500 && nowScroll < 1650){
    secondmoon.classList.add('fadeIn05');
    secondmoon.classList.remove('fadeOut05');
    secondtitle.classList.add('fadeIn06');
    secondtitle.classList.remove('fadeOut06');
    secondtext.classList.add('fadeIn07');
    secondtext.classList.remove('fadeOut07');
  } else {
    secondmoon.classList.remove('fadeIn05');
    secondmoon.classList.add('fadeOut05');
    secondtitle.classList.remove('fadeIn06');
    secondtitle.classList.add('fadeOut06');
    secondtext.classList.remove('fadeIn07');
    secondtext.classList.add('fadeOut07');
  }


  if(nowScroll > 2200 && nowScroll < 3800){
    thirdText1.classList.add('fadeIn05');
    thirdText1.classList.remove('fadeOut05');
    thirdText2.classList.add('fadeIn06');
    thirdText2.classList.remove('fadeOut06');
    thirdCon.classList.add('fadeIn07');
    thirdCon.classList.remove('fadeOut07');
  } else {
    thirdText1.classList.remove('fadeIn05');
    thirdText1.classList.add('fadeOut05');
    thirdText2.classList.remove('fadeIn06');
    thirdText2.classList.add('fadeOut06');
    thirdCon.classList.remove('fadeIn07');
    thirdCon.classList.add('fadeOut07');
  }
});