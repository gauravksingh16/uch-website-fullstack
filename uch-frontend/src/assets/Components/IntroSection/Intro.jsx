import React, { useRef, useEffect } from "react";
import styles from "./Intro.module.css";
import { gsap } from "gsap";

const Intro = () => {
  const mousePointRef = useRef(null);

  useEffect(() => {
    const mousePoint = mousePointRef.current;
    const heroSection = document.querySelector(`.${styles.heroSection}`);

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
          x: clientX - rect.left,
          y: clientY - rect.top,
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
    <div className={styles.heroSection}>
      <div className={styles.mousePoint} ref={mousePointRef}>
        <div className={styles.mouseText}>Explore the Store</div>
        <div className={styles.mouseImg}>
          <img
            src="https://static.thenounproject.com/png/2748-200.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.subheading}>Find your own</div>
        <div className={styles.heading}>Unique Combination.</div>
      </div>
    </div>
  );
};

export default Intro;
