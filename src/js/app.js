     let nav = document.querySelector("nav")
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > 50 ){
                nav.style.backgroundColor = "black"
                nav.style.boxShadow = "10px 10px 30px #7562E0"

            }
            else{
                nav.style.backgroundColor = "transparent"
                nav.style.boxShadow = "10px 20px 30px transparent"
         

            }
        })
        if(window.innerWidth > 768){
 setInterval(()=>{
  if(window.pageYOffset > 50){
    document.querySelector(".swiper-btn").style.display = "none"
            }
            else{
  
                  document.querySelector(".swiper-btn").style.display = "flex"
            }
 },10)
        }
 gsap.registerPlugin(ScrollTrigger)
 
  gsap.from("#social",{
  scrollTrigger:{
    trigger:".social-cont",
    starrt:"bottom bottom",

    toggleActions:"play reverse play reverse"
  },
  x:1000,
          duration:1,
          stagger:0.3
        })
        
gsap.from(".hero-btn-1",{


duration:1.5,
  y:10,
  repeat:-1,

  yoyo:true,
})
gsap.from(".hero-btn-3",{


duration:1.5,
  y:10,
  repeat:-1,

  yoyo:true,
})
gsap.from(".hero-btn-2",{

duration:1.5,
  y:10,
  repeat:-1,
  delay:0.5,

  yoyo:true,
})
gsap.from(".nav-child",{
  opacity:0,
  duration:1,
  delay:1,
  stagger:0.4
})
gsap.from(".hero-img",{
  scrollTrigger:{
    trigger:".social-cont",
    starrt:"bottom bottom",

    toggleActions:"play reverse play reverse"
  },

  skew:100,
rotateY :360,

ease:"bounce",

duration:2,

})
gsap.from(".swiper-btn",{
  opacity:0.5,
  repeat:-1,
  yoyo:true,
  y:15, 
  duration:2
})
gsap.from("#heading-1",{
  x:-100,
  opacity:0,
  stagger:0.3
})
let preloader = document.querySelector(".preloader-cont")
window.addEventListener("load",()=>{
  preloader.style.display = "none"
})
if(window.innerWidth >=768){
  gsap.from(".about-me-text",{
  scrollTrigger : {

    toggleActions:"play  play ",
    trigger:"#about-me",
    start:"bottom bottom"
  },
  duration:2,
  autoRound: false,
stagger:0.4,
opacity:0,
y:100,
})
}
else{
  gsap.from(".about-me-text",{
    scrollTrigger : {
      toggleActions:"play r play",
      trigger:".about-me-text",
      start:"bottom bottom",
      end:"top top"
    },
    duration:2,
    autoRound: false,
  stagger:0.4,
  opacity:0,
  y:100,   
  })
}
if(window.innerWidth > 1024){
  gsap.from("#services",{
    scrollTrigger : {

      pin:true,
      scrub:1,
      toggleActions :"play play ",
      start : "center center",
      trigger : "#services-grid"
    },
    x:400,
    stagger:0.4,
    rotateY:"160",
opacity:0,
  }) 
}
else{
  gsap.from("#services",{
    scrollTrigger : {
      start : "top center",
      toggleActions :"play",
      trigger : "#services-grid",
      toggleActions:"play reverse play reverse"
    },
    x:200,
rotateY :160,
    opacity:0,
    ease: "power1.out"
  })
  
}
const skyElement = Array.from(document.getElementsByClassName('sky-background'));
const skyPanels = 3;
const fps = 30;
const interval = 1000 / fps;

let now;
let then = Date.now();
let delta;
let starSizeStart = 3;
let skySizeStart = 180;
let skyOpacityStart = 1;
let bgSizeStart = 20;
let mouseX = 0;
let mouseY = 0;
let docWidth = 0;
let docHeight = 0;
let centerX = 0;
let centerY = 0;

let newX = 0;
let newY = 0;
let currentX = 0;
let currentY = 0;

const randomNum = threshold => {
  return Math.random() * threshold + Math.random() * threshold;
};

const star = () => {
  const randomX = randomNum(docWidth / 2);
  const randomY = randomNum(docHeight / 2);
  const starElement = document.createElement('div');
  starElement.setAttribute('style', `left: ${randomX}px; top: ${randomY}px`);
  document.documentElement.style.setProperty('--shootingEndX', `${randomNum(500)}px`);
  document.documentElement.style.setProperty('--shootingEndY', `${randomNum(100)}px`);
  starElement.setAttribute('class', 'shootingstar');
  skyElement[0].appendChild(starElement);
  setTimeout(() => {
    starElement.classList.add('shoot');
  }, 100);

  setTimeout(() => {
    skyElement[0].removeChild(starElement);
    star();
  }, 13000);
};

document.addEventListener('DOMContentLoaded', () => {
  docWidth = document.body.offsetWidth;
  docHeight = document.body.offsetHeight;
  centerX = docWidth / 2;
  centerY = docHeight / 2;

  skyElement.forEach(bgElement => {
    for (let i = 0; i < skyPanels; i++) {
      const rotationRandomizer = (Math.random() * 1000 + Math.random() * 1000).toFixed(10);
      const panel = document.createElement('div');
      panel.setAttribute('style', `width: ${skySizeStart}%; height: ${skySizeStart}%; opacity: ${skyOpacityStart}`);
      panel.style.setProperty('--sizeDifferential', `${skySizeStart - 100}%`);
      panel.style.setProperty('--starSize', `${starSizeStart}px`);
      panel.style.setProperty('--bgSize', `${bgSizeStart}%`);
      panel.style.setProperty('--rotation', `${rotationRandomizer}deg`);
      panel.setAttribute('class', 'sky-segment');
      bgElement.appendChild(panel);
      skySizeStart -= 10;
      skyOpacityStart -= 0.15;
      starSizeStart -= 1;
      bgSizeStart -= 7;
    }
  });

  document.addEventListener('mousemove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    newX = ((0 - (mouseX - centerX)) / docHeight).toFixed(2);
    newY = ((0 - (mouseY - centerY)) / docWidth).toFixed(2);
  });

  const updatePositions = () => {
    now = Date.now();
    delta = now - then;
    if (delta > interval) {
      currentX += (newX - currentX) / 2;
      currentY += (newY - currentY) / 2;
      document.documentElement.style.setProperty('--differentialX', `${currentX}`);
      document.documentElement.style.setProperty('--differentialY', `${currentY}`);
      then = now - delta % interval;
    }
    window.requestAnimationFrame(updatePositions);
  };

  window.requestAnimationFrame(updatePositions);
  star();
});
gsap.from("#project",{
  scrollTrigger : {
    trigger:"#project-grid",
    // markers:true,
    start:"top center",
    duration:2.3,
    toggleActions:"play reverse play reverse"
  },
  y:400,
  stagger:0.4,
  opacity:0,
})
gsap.from(".calculator",{
  opacity:0,
  y:100,
  duration:2,
})
gsap.from("#form-h",{
  scrollTrigger : {
    // markers:true,
    trigger:"#form-cont",
    start:"top center",
    toggleActions:"play play reverse reverse"
  },
  opacity:0,
  x:-100
})
gsap.from("#form-i",{
  scrollTrigger : {
    // markers:true,
    trigger:"#form-cont",
    start:"top center",
    toggleActions:"play play reverse reverse"
  },
  opacity:0,
  stagger:0.3,
  x:-100
})
gsap.from("#form-h-2",{
  scrollTrigger : {
    // markers:true,
    trigger:"#form-cont",
    start:"top center",
    toggleActions:"play play reverse reverse"
  },
  opacity:0,
  x:100
})
gsap.from("#form-p",{
  scrollTrigger : {
    // markers:true,
    trigger:"#form-cont-2",
    start:"top center",
    toggleActions:"play play reverse reverse"
  },
skewX:-10
})
gsap.from("#footer-i",{
  scrollTrigger : {
    // markers:true,
    trigger:".footer",
    start:"center bottom",
    toggleActions:"play play reverse reverse"
  },
  opacity:0,
  stagger:0.3,
  x:-100
})
gsap.from("#footer-child",{
  scrollTrigger : {
    // markers:true,
    trigger:".footer",
    start:"center bottom",
    toggleActions:"play play reverse reverse"
  },
  opacity:0,
  stagger:0.3,
  x:-100
})