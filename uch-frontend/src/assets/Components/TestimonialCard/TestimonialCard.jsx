import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.user}>
        <div className={styles.profilePic}>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="User"
          />
        </div>
        <div className={styles.userDets}>
          <div  className={styles.name}>John Doe</div>
          <div className={styles.ratings}>Ratings</div>
        </div>
      </div>
      <div className={styles.testimonialContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          laborum, nobis tempore architecto quisquam quaerat alias vel? Id,
          animi culpa.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
