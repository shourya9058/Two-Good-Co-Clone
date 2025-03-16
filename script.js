const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
    var videocon = document.querySelector("#video-container");

var playbtn = document.querySelector("#play");

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-70
    })
})
}
videoconAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.3
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.8
    })
}
loadingAnimation();

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelector("#child3").addEventListener("mouseenter", function() {
    gsap.to("#cursor", {
        transform: 'translate(-50%,-50%) scale(1)',
        backgroundColor: '#F8986F' 
    });
});
document.querySelector("#child3").addEventListener("mouseleave", function() {
    gsap.to("#cursor", {
        transform: 'translate(-50%,-50%) scale(0)'
    });
});

document.querySelectorAll(".child").forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        if (elem.id !== "child3") {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(1)",
                backgroundColor: '#ffffff' // White color for other elements
            });
        }
    });
    elem.addEventListener("mouseleave", function() {
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)"
        });
    });
});

cursorAnimation();