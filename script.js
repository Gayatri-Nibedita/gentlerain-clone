AOS.init({
    duration: 1000,
    once: true
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".horizontal-track", {
    xPercent: -300,
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal",
        pin: true,
        scrub: 1,
        end: "+=2000"
    }
});

ScrollTrigger.config({
    ignoreMobileResize: true
});
