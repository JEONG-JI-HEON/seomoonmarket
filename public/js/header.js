let gnb = document.querySelector('.gnb');
let gnbMenu = document.querySelectorAll('.gnb_menu');
let header = document.querySelector('#header');



gnbMenu.forEach(gnbMenu =>{
  let lnb = gnbMenu.lastElementChild;
  let lnb_bg = document.querySelector('.lnb_bg');
  let gnbmenuA = gnbMenu.childNodes[1];
  let star =gnbmenuA.childNodes[3];

  
  gnbMenu.addEventListener('mouseenter',()=>{
    star.style.display = 'block';
    lnb_bg.style.opacity = 1;
    header.style.backgroundColor = '#000';
    header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.9);';
    
    lnb.style.display = 'flex';
    lnb.style.height = '100%';
    lnb.style.opacity = 1;
  })

  gnbMenu.addEventListener('mouseleave',()=>{
    star.style.display = 'none';
    lnb_bg.style.opacity = 0;
    header.style.backgroundColor = 'inherit';
    header.style.borderBottom = 'none';

    lnb.style.display = 'none';
    lnb.style.height = 0;
    lnb.style.opacity = 0;
  })
})
