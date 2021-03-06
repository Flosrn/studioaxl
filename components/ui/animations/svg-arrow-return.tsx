import React, { useEffect } from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const onScrollAnimation = (target: string, trigger: string, values: any) => {
  if (isMobile) {
    gsap.registerPlugin(ScrollTrigger);

    const gspaValues = values;
    gspaValues.scrollTrigger = {
      trigger,
      toggleActions: "play none none reverse",
    };
    return gsap.to(target, gspaValues);
  }
};

const onHoverAnimation = (target: string, values: any) => {
  return gsap.to(target, values);
};

const ArrowReturn: React.FC = () => {
  const arrowValues = { y: 30 };
  const circleArrowValues = { x: 23, y: -11 };

  useEffect(() => {
    onScrollAnimation(".arrow", "#svgAdvertasing", arrowValues);
    onScrollAnimation("#circleArrow", "#svgAdvertasing", circleArrowValues);
  }, []);

  const handleMouseEnter = () => {
    onHoverAnimation(".arrow", arrowValues);
    onHoverAnimation("#circleArrow", circleArrowValues);
  };

  const handleMouseLeave = () => {
    onHoverAnimation(".arrow", { y: 0 });
    onHoverAnimation("#circleArrow", { x: 0, y: 0 });
  };

  return (
    <div
      className="transform rotate-90 -mt-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/">
        <a>
          <svg viewBox="0 0 219.23 177.55" width="250" height="250">
            <circle id="circleArrow" cx={104.2} cy={97.83} r={17.93} fill="#fde0e0" />
            <path
              className="arrow"
              d="M133 87.87l-10.39 10.34-10.34-10.34"
              fill="none"
              stroke="#161615"
              strokeMiterlimit={10}
              strokeWidth={2}
            />
            <path
              className="arrow"
              fill="none"
              stroke="#161615"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M122.61 98.22L122.61 61.78"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default ArrowReturn;
