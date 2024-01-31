var vishvas=gsap.timeline();

vishvas.from(".nav1",{
    y:400,
    opacity:0
})
vishvas.from(".p-house p ",{
   y:-100,
   duration:0.2,
   opacity:0,
   delay:0.3,
})
vishvas.from(".page1 h1",{
    x:700,
    opacity:0,
    duration:0.1,
})
vishvas.from(".page1 h2",{
   opacity:0,
   duration:3,
})


gsap.from(".page2",{
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 30%",
    }
})

gsap.from(".rgt h1",{
    x:700,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 30%",
    }
})

gsap.from(".abt1",{
    x:700,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 30%",
    }
})

gsap.from(".page3",{
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 10%"
    }
})
gsap.from(".page3 .ser2",{
    x:-700,
    duration:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:"body",
        start:"top 30%",
    }
})
gsap.from(".page3 h1 ",{
    x:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page3-1 .pat1",
        scroller:"body",
        start:"top 10%",
    }
})

gsap.from(".page4  ",{
    x:700,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page4 ",
        scroller:"body",
        start:"top 30%",
    }
})

gsap.from(".page5  ",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page5 ",
        scroller:"body",
        start:"top 30%",
    }
})

gsap.from(".page5 .line1 ",{
    scale:2,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".page5 .line1 ",
        scroller:"body",
        start:"top 30%",
    }
})

gsap.from(".page5 .line2 ",{
    rotate:360,
    duration:1,
    scrollTrigger:{
        trigger:".page5 .line2 ",
        scroller:"body",
        start:"top 30%",
    }
})



