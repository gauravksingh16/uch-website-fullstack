import React from 'react'
import styles from './ProductDets.module.css'
import { IoMdColorPalette } from "react-icons/io";
import { GiRolledCloth } from "react-icons/gi";
import { TbArrowAutofitContentFilled } from "react-icons/tb";
import { BiSolidWasher } from "react-icons/bi";
import { RiStarSmileFill } from "react-icons/ri";


const ProductDets = () => {
  return (
    <div className={styles.detsContainer}>
      <div className={styles.expertNote}>
        <div className={styles.heading}>Expert Note</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nunc nec vehicula fringilla, nunc libero vestibulum est, nec
          luctus nunc nunc ac purus. Donec euismod, nunc nec vehicula fringilla,
          nunc libero vestibulum est, nec luctus nunc nunc ac purus.
        </div>
      </div>
      <div className={styles.specs}>
        <div className={styles.heading}>
            Specifications
        </div>
        <div className={styles.specsColor}>
            <IoMdColorPalette className={styles.icons} />
            <div>
                White
            </div>
        </div>
        <div className={styles.specsMaterial}>
            <GiRolledCloth className={styles.icons} />
            <div>
                Cotton
            </div>
        </div>
        <div className={styles.specsFit}>
            <TbArrowAutofitContentFilled className={styles.icons} />
            <div>
                Regular
            </div>
        </div>
        <div className={styles.specsWash}>
            <BiSolidWasher className={styles.icons} />
            <div>
                Machine Wash
            </div>
        </div>
        <div className={styles.specsRatings}>
            <RiStarSmileFill className={styles.icons} />
            <div>
                4.8
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDets
