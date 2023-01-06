
const sideFade = document.querySelectorAll('.side-fade');
const bottom = document.querySelector('#bottom');
const solutions = document.querySelector('#solutions');


gsap.fromTo(sideFade, { x: -1000, opacity: 0 }, { duration: 1, x: 0, stagger: 0.2, opacity: 1, ease: "circ" });

gsap.fromTo(bottom, { y: 1000, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "circ" });
gsap.to(solutions, { duration: 0.8, opacity: 1, delay: 0.5 });