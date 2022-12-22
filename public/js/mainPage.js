let firstmoon = document.querySelector('.main_visual .moon');
let firsttitle = document.querySelector('.main_visual .mv_title');
let firsttext = document.querySelector('.main_visual .right_txt')

let secondmoon = document.querySelector('.section1 .moon');
let secondtitle = document.querySelector('.section1 .sec1_title');
let secondtext = document.querySelector('.section1 .sec1_txt')
let secondCon = document.querySelector('.section1 .youtube_wrap')

let thirdText1 = document.querySelector('.section2 .mv_text>strong');
let thirdText2 = document.querySelector('.section2 .mv_text>p');
let thirdCon = document.querySelector('.section2 .mySwiper2');

let forthText1 = document.querySelector('.section3 .mv_text>strong');
let forthText2 = document.querySelector('.section3 .mv_text>p');
let forthCon = document.querySelector('.section3 .img_slide');


/* 첨부터 함수는 실행되어야하는데 처음화면때 700px이상인지 이하인지 파악*/
window.onload = function(){
  if(window.innerWidth <= 700){
    window.addEventListener('scroll', fadeEffectM);
  } else if(window.innerWidth > 700){
    window.addEventListener('scroll', fadeEffectP);
  };
};

/* 반응형 */
window.addEventListener('resize', () => {
  if (window.innerWidth <= 700) {
    window.removeEventListener('scroll', fadeEffectP);
    window.addEventListener('scroll', fadeEffectM);
  } else {
    window.addEventListener('scroll', fadeEffectP);
    window.removeEventListener('scroll', fadeEffectM);
  }
})

/* 현재 창이 700px보다 클때 */
function fadeEffectP(){
  /* 지금 세로스크롤의 퍼센트값 */
  let nowHeight = Math.floor((window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100);
  
  if(nowHeight >= 10){
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
  };
  
  if(nowHeight >= 15 && nowHeight < 46){
    secondmoon.classList.add('fadeIn05');
    secondmoon.classList.remove('fadeOut05');
    secondtitle.classList.add('fadeIn06');
    secondtitle.classList.remove('fadeOut06');
    secondtext.classList.add('fadeIn06');
    secondtext.classList.remove('fadeOut06');
    secondCon.classList.add('fadeIn07');
    secondCon.classList.remove('fadeOut07');
  } else {
    secondmoon.classList.remove('fadeIn05');
    secondmoon.classList.add('fadeOut05');
    secondtitle.classList.remove('fadeIn06');
    secondtitle.classList.add('fadeOut06');
    secondtext.classList.remove('fadeIn06');
    secondtext.classList.add('fadeOut06');
    secondCon.classList.remove('fadeIn07');
    secondCon.classList.add('fadeOut07');
  };
  
  
  if(nowHeight >= 45 && nowHeight < 80 ){
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
  };
  
  if(nowHeight >= 71 && nowHeight < 99){
    forthText1.classList.add('fadeIn05');
    forthText1.classList.remove('fadeOut05');
    forthText2.classList.add('fadeIn06');
    forthText2.classList.remove('fadeOut06');
    forthCon.classList.add('fadeIn07');
    forthCon.classList.remove('fadeOut07');
  } else {
    forthText1.classList.remove('fadeIn05');
    forthText1.classList.add('fadeOut05');
    forthText2.classList.remove('fadeIn06');
    forthText2.classList.add('fadeOut06');
    forthCon.classList.remove('fadeIn07');
    forthCon.classList.add('fadeOut07');
  };
}

/* 현재 창이 700px보다 작을때 */
function fadeEffectM(){
  /* 지금 세로스크롤의 퍼센트값 */
  let nowHeight = Math.floor((window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100);
  
  if(nowHeight >= 13){
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
  };
  
  if(nowHeight >= 15 && nowHeight < 37){
    secondmoon.classList.add('fadeIn05');
    secondmoon.classList.remove('fadeOut05');
    secondtitle.classList.add('fadeIn06');
    secondtitle.classList.remove('fadeOut06');
    secondtext.classList.add('fadeIn06');
    secondtext.classList.remove('fadeOut06');
    secondCon.classList.add('fadeIn07');
    secondCon.classList.remove('fadeOut07');
  } else {
    secondmoon.classList.remove('fadeIn05');
    secondmoon.classList.add('fadeOut05');
    secondtitle.classList.remove('fadeIn06');
    secondtitle.classList.add('fadeOut06');
    secondtext.classList.remove('fadeIn06');
    secondtext.classList.add('fadeOut06');
    secondCon.classList.remove('fadeIn07');
    secondCon.classList.add('fadeOut07');
  };
  
  
  if(nowHeight >= 39 && nowHeight < 74 ){
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
  };
  
  if(nowHeight >= 63 && nowHeight < 99){
    forthText1.classList.add('fadeIn05');
    forthText1.classList.remove('fadeOut05');
    forthText2.classList.add('fadeIn06');
    forthText2.classList.remove('fadeOut06');
    forthCon.classList.add('fadeIn07');
    forthCon.classList.remove('fadeOut07');
  } else {
    forthText1.classList.remove('fadeIn05');
    forthText1.classList.add('fadeOut05');
    forthText2.classList.remove('fadeIn06');
    forthText2.classList.add('fadeOut06');
    forthCon.classList.remove('fadeIn07');
    forthCon.classList.add('fadeOut07');
  };
}