export const move = {
  hidden: (i) => ({
    y: "100%",
    x: i[0],
  }),
  moveUp: {
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  moveRight: {
    x: "10px",
    transition: {
      delay: 0.8,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  moveLeft: {
    x: "-10px",
    transition: {
      delay: 0.8,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const imgChange = {
  hidden: {
    display: "block",
  },
  show: (i) => ({
    display: "none",
    transition: {
      duration: 0.6,
      delay: i,
      ease: "easeInOut",
    },
  }),
};

export const containerUp = {
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  show: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    display: "none",
    transition: {
      delay: 4,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
