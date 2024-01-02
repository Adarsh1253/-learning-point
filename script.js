var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor_blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x -150 + "px";
    blur.style.top = dets.y -150+ "px";
});
var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border= "1px solid #fff";
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border= "0px solid #27c45b";
        crsr.style.backgroundColor="#27c45b"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    },
    
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    },
});

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3,
    },
});

gsap.to(".card",{
   scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 10%",
        scrub:3,
    }
});
gsap.to(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1,
    },
});
gsap.to(".colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1,
    },
});

gsap.to("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
})