const sircleSection = document.querySelector('.skil-container');
const circles = document.querySelectorAll('.circle-lol');
const progressCircles = document.querySelectorAll('.progress');
const progressText = document.querySelectorAll('.circle-lol .circle-inner h1');
let bol = false;
const sections = document.querySelectorAll('section');
const linkes = document.querySelectorAll('.header .navbar a');
const multiText = document.querySelector('.multyple-text')
const navbarMenu = document.querySelector('.navbar');
const about = document.querySelector('.alur');

// dark mode icon
let iconMode = document.getElementById('darkMode-icon');

function darkmandLightMode(){
  let tema = localStorage.getItem('tema');

  if(!tema){
    localStorage.setItem('tema', 'light-mode')
  }

  function darkMode(){
    document.body.classList.add('dark-mode');
    if(iconMode.classList.contains('bxs-moon')){
      iconMode.classList.remove('bxs-moon');
      iconMode.classList.add('bxs-sun');
    }
    localStorage.setItem('tema', 'dark-mode');
  }

  function lightMode(){
    document.body.classList.remove('dark-mode');
    if(iconMode.classList.contains('bxs-sun')){
      iconMode.classList.remove('bxs-sun');
      iconMode.classList.add('bxs-moon');
    }
    localStorage.setItem('tema', 'light-mode');
  }

  if(tema == 'dark-mode'){
    darkMode();
  }

  iconMode.addEventListener('click', function() {
    tema = localStorage.getItem('tema')
    if(tema == 'light-mode'){
      darkMode();
    }else{
      lightMode();
    }
  })
}
darkmandLightMode();

// menu icon
const menuIcont = document.querySelector('#menu');
menuIcont.addEventListener('click', function(){
  navbarMenu.classList.toggle('menuClick');
  
})



let blumDiScroll = window.scrollY;
window.addEventListener('scroll', () => {

    let value = window.scrollY;
    let cirOfset = sircleSection.offsetTop;
    
    console.log(value + ' scroll');
    console.log(`${cirOfset - 350} ofset`);

    navbarAnimation();

    header(value)


    profesion(value);

    homeContent(value);
    
    paralaxEventText(value);

    paralaxAbout(value);

    animasiBarCircle(value,cirOfset);

    aboutAnimasi(value)

    // skil bar custom
    if(value > cirOfset - 350){
      showProg();
    };

});


// header scrol
function header(e){
    let contentHeader = document.querySelector('.header');
    contentHeader.classList.toggle('sticky', e > 37)
};

// navbar animation scroll
function navbarAnimation(){
  let indexSec = sections.length;

  while(--indexSec && window.scrollY + 50 < sections[indexSec].offsetTop){};
  linkes.forEach( e => e.classList.remove('active'));
  linkes[indexSec].classList.add('active')
}

// Profession content paralax 
function profesion(e){
    let profesi = document.querySelector('.profession-container');
    profesi.style.right = -2 * e + 'px';
    profesi.style.top = -2 * e + 'px';
}

// home content paralax 
function homeContent(e){
    let contentHome = document.querySelector('.home-content');
    contentHome.style.right = 2 * e + 'px';
    contentHome.style.top = -2 * e + 'px';
}

// paralax event Text
function paralaxEventText(e) {
  let textParalax = document.querySelector('.content-paralax');
  if (blumDiScroll <= e) {
    if (e > 56 && e < 150) {
      textParalax.style.opacity = 1;
      textParalax.style.transform = `scale(${e * .01 + 0.5})`;
    } else if (e >= 150) {
      textParalax.style.opacity = 0;
    }
  }else {
    textParalax.style.opacity = 0;
  };

  blumDiScroll = e;
}

// about content paralax
function paralaxAbout(e){
    let aboutContent = document.querySelector('.about-content');
    if (e > 902){
        aboutContent.style.opacity = 0;
    }else {
        aboutContent.style.opacity = 1;
    }
}
// animasi bar circle horizontal
const progBar = document.querySelectorAll('.progres-bar')
// show
function showProg(){
  progBar.forEach(e => {
    const value = e.dataset.lin;
    e.style.width = value + '%';
    e.style.opacity = 1;
  });
}


// animasi bar circle skils
function animasiBarCircle(val,offs){
  
  if(val > offs - 350 && bol === false){
    
    for(let i = 0; i <= circles.length; i++){
    
        let radius = progressCircles[i].r.baseVal.value;

        let circumfrence = radius * 2 * Math.PI;

        progressCircles[i].style.strokeDasharray = circumfrence;

        function setProgres(percent){
            progressCircles[i].style.strokeDashoffset = circumfrence - (percent / 100) * circumfrence;
        }

        let progress = circles[i].dataset.prog;

        progressText[i].innerHTML = progress + '%';

        setProgres(progress);

        bol = true;

    }
  }
}


function aboutAnimasi(e){
  if(e > about.offsetTop){
    about.style.animation = `alurAnimation 5s ease forwards`
  }
}


// scrol  reveal
function scrolrRe(){
    ScrollReveal({
      reset: true,
      distance: "50px",
      duration: 1000,
      delay:200
  });

  // about
  ScrollReveal().reveal('.heading', { origin: 'top' });
  ScrollReveal().reveal('.about-text', { origin: 'right',
                                          delay:300,
                                          distance: "100px",
                                      });
  ScrollReveal().reveal('.about-img', { origin: 'left',
                                        delay:300,
                                        distance: "70px",
                                      });
  
  // service
  ScrollReveal().reveal('.service-left', { origin: 'left',
                                          distance: '100px',
                                          duration: 2000 });
  ScrollReveal().reveal('.service-right', { origin: 'right',
                                            distance: '100px',
                                            duration: 2000  });
                                            
  // project
  ScrollReveal().reveal('.project-left', { origin: 'right',
                                          distance: '100px',
                                          duration: 2000 });
  ScrollReveal().reveal('.project-right', { origin: 'left',
                                            distance: '100px',
                                            duration: 2000  });
  // skils
  ScrollReveal().reveal('.skil-main', { origin: 'left',
                                          distance: '100px',
                                          duration: 2000 });
  ScrollReveal().reveal('.skil-custom', { origin: 'right',
                                            distance: '100px',
                                            duration: 2000  });
  
  // contact  
  ScrollReveal().reveal('.contact-container', { origin: 'bottom',
                                        distance: '100px',
                                        duration: 2000  });

};
scrolrRe(); 
                          
// animation typed
var typed = new Typed(multiText , {
  strings: ['Frontend Developer', 'Web Desainer', 'Backend Developer'],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});

