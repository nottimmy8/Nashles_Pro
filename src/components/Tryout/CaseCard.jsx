import React from "react";
import { motion } from "framer-motion";
import "./CaseCard.css";

const CaseCard = ({ titlePart1, titlePart2, slug, image1x }) => {
  return (
    <article className="pickup-li">
      <a href={`/cases/${slug}`} aria-label={titlePart1} className="pickup-a">
        <motion.div
          className="mq pickup-h1 cases-h1 clip-y serif"
          initial={{ x: 0 }}
          animate={{ x: -143.846 }} // Matches original transform
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        >
          <div className="h1 p o">
            <div className="w t">
              <div
                className="thumb bg-img"
                style={{ backgroundImage: `url(${image1x})` }}
              >
                <img
                  src={`${image1x}.webp`}
                  alt={`${titlePart1} ${titlePart2}`}
                />
              </div>
              <div className="l">{titlePart1}</div>
            </div>
            <div className="w t">
              <div className="l">{titlePart2}</div>
            </div>
          </div>
        </motion.div>
      </a>
    </article>
  );
};

export default CaseCard;
