
var tl = gsap.timeline();

tl.from('#txt h1 span', {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3
});


gsap.to('#txt h1', {
    scrollTrigger: {
        trigger: '#page1',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    },
    scale: 0.5,
    opacity: 0,
});
