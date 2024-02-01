const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function lodinganimation(){

    gsap.from(".page1 h1",{
          y:20,
          opacity:0,
          delay:0.5,
          duration:0.8,
          stagger:0.2
    })
}

lodinganimation()