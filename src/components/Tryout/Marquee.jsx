import React from "react";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>Play Time! Let’s Have Fun! Keep Scrolling! 🎉 </span>
        {/* Duplicate the content for seamless looping */}
        <span>Play Time! Let’s Have Fun! Keep Scrolling! 🎉 </span>
      </div>
    </div>
  );
};

export default Marquee;
