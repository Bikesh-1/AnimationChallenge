gsap.to("#page1 #toppage",{
    scale:10,
    duration:2,
    stagger: 1,
    delay: 1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scoller:"#toppager",
        start:"top top",
        end:"bottom top",
        pin:true,
        scrub:2,
    }
})
