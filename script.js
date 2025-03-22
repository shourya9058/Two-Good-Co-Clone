// Add this to your existing script.js file

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navOverlay = document.querySelector('.nav-overlay');
    const navClose = document.querySelector('.nav-close');
    
    // Function to open the menu
    function openMenu() {
        navOverlay.classList.add('active');
        hamburgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
    
    // Function to close the menu
    function closeMenu() {
        navOverlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Event listeners
    hamburgerBtn.addEventListener('click', openMenu);
    navClose.addEventListener('click', closeMenu);
    
    // Close menu when clicking escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    // Your existing JavaScript code below this line
});



function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()

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

function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()



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

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();

  // Add this to your existing script.js file

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements - fixing selector to match the HTML
    const hamburgerBtn = document.querySelector('.ri-menu-fill');
    
    // Create nav overlay since it doesn't exist in the HTML
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    navOverlay.innerHTML = `
        <div class="nav-container">
            <div class="nav-header">
                <div class="nav-close">×</div>
            </div>
            <div class="nav-links">
                <a href="#">Shop</a>
                <a href="#">Catering</a>
                <a href="#">Donate</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    `;
    document.body.appendChild(navOverlay);
    
    const navClose = document.querySelector('.nav-close');
    
    // Function to open the menu
    function openMenu() {
        navOverlay.classList.add('active');
        hamburgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
    
    // Function to close the menu
    function closeMenu() {
        navOverlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Event listeners
    hamburgerBtn.addEventListener('click', openMenu);
    navClose.addEventListener('click', closeMenu);
    
    // Close menu when clicking escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    // Custom cursor
    const cursor = document.querySelector("#cursor");
    
    document.addEventListener("mousemove", function(dets) {
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";
    });
    
    // GSAP animations
    gsap.to("#nav", {
        backgroundColor: "#000",
        duration: 0.5,
        height: "110px",
        scrollTrigger: {
            trigger: "#nav",
            scroller: "#main",
            start: "top -10%",
            end: "top -11%",
            scrub: 1
        }
    });

    // Video container animation
    gsap.to("#video-container", {
        width: "100%",
        scrollTrigger: {
            trigger: "#video-container",
            scroller: "#main",
            start: "top 55%",
            end: "top 30%",
            scrub: 2
        }
    });
    
    // Page 3 animations
    gsap.from(".child", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 70%",
            end: "top 65%",
            scrub: 1
        }
    });
});