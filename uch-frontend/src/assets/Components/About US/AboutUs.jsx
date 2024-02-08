import React, { useRef, useEffect } from "react";
import styles from "./AboutUs.module.css";
import { gsap } from "gsap";

const AboutUs = () => {
  const mousePointRef = useRef(null);

  useEffect(() => {
    const mousePoint = mousePointRef.current;
    const heroSection = document.querySelector(`.${styles.AboutUsWrapper}`);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = heroSection.getBoundingClientRect();

      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        gsap.to(mousePoint, {
          x: clientX - rect.left - 70,
          y: clientY - rect.top - 70,
          scale: 1,
          opacity: 1,
          duration: 0.5,
        });
      }
    };

    const handleMouseLeave = () => {
      // Mouse leaves the hero section
      gsap.to(mousePoint, { scale: 0, opacity: 0, duration: 0.5 });
    };

    heroSection.addEventListener("mousemove", handleMouseMove);
    heroSection.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      heroSection.removeEventListener("mousemove", handleMouseMove);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mousePointRef]);

  return (
    <div className={styles.AboutUsWrapper}>
      <div className={styles.mousePoint} ref={mousePointRef}></div>
      <div className={styles.gradient}></div>
      <div className={styles.TextContent}>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est
          ipsa animi quia odio, facilis quo? Voluptatem ad dolore unde?
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
