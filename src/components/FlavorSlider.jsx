import React, { useRef } from "react";
import { flavorlists } from "../constants";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";

const FlavorSlider = () => {
  const sliderRef = useRef();
  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount + 1300}px`,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-=${scrollAmount + 1300}px`,
      ease: "power1.inOut",
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-timeline",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
