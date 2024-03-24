import React from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from "react";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

export default function Animations() {


  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();
  

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char,i) => {

      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
              scrollTrigger: {
                  trigger: char,
                  start: 'top 70%',
                  end: 'bottom 30%',
                  scrub: true,
              },
              opacity: 0.2,
              stagger: 0.1,
      })
  })

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      //FIRST TO SECOND

    tl

    .to(".carousel-content", {
      ease: "none",
      x: () => -(cont.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: cont,
        pin: cont,
        start: "center center",
        end: () => "+=" + (cont.scrollWidth - window.innerWidth),
        scrub: true,
        invalidateOnRefresh: true,
      }
    })
    
    .to(".fill-in", {
      height: "110%",
      ease: "linear", 
        scrollTrigger: {
          trigger: ".how-does-steps",
          start: "top bottom", // Start when the bottom of the viewport touches the bottom of .project-one
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })
    
    })
  }, [])


  return (
    <group >
    </group>
  );
}