import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { ILoading } from "../../../containers/type";

const Logo: React.FC<ILoading> = ({ isLoading, handleIsLoading }) => {
  {
    console.log(isLoading);
  }
  const navBarLogo: Variants = {
    initial: { x: -200 },
    animate: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 1,
        type: "spring",
      },
    },
  };
  const loadingLogo: Variants = {
    initial: { x: 0, opacity: 1, scale: 1 },
    animate: {
      x: 500,
      opacity: 0,
      scale: 0.5,
      transition: {
        delay: 1,
        duration: 0.3,
        type: "spring",
      },
      //   transitionEnd: {
      //     display: "none",
      //   },
    },
  };
  const loadingPath: Variants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: {
        duration: 1,
        repeatType: "loop",
        repeatDelay: 2,
      },
    },

    exit: { x: -1000 },
  };
  return (
    <AnimatePresence>
      <motion.svg
        key={1}
        className={`border-collapse w-300 ${isLoading ? `h-32` : "h-10"} shadow-md`}
        viewBox="0 0 159 67"
        version="1.1"
        {...(isLoading && { onAnimationComplete: handleIsLoading })}
        // onAnimationComplete={isLoading ? handleIsLoading : undefined}
        variants={isLoading ? loadingLogo : navBarLogo}
        initial="initial"
        animate="animate"
      >
        <motion.g>
          <motion.path
            className={`${isLoading ? "stroke-lime-800" : "stroke-slate-500"}`}
            //   stroke="#00b400"
            variants={isLoading ? loadingPath : navBarLogo}
            d="M 6.625 32.304688 C 5.699219 39.480469 5.300781 45.597656 5.699219 46.128906 C 6.890625 47.191406 7.550781 44.535156 8.613281 35.359375 L 9.539062 27.519531 L 14.308594 36.292969 C 16.960938 41.210938 19.476562 45.199219 19.875 45.199219 C 20.273438 45.199219 22.65625 41.210938 25.175781 36.160156 L 29.679688 27.253906 L 31.003906 36.824219 C 31.667969 42.140625 32.726562 46.527344 33.523438 46.527344 C 34.183594 46.527344 34.449219 44.535156 34.050781 41.476562 C 33.523438 38.816406 32.859375 33.101562 32.328125 28.847656 C 31.800781 24.726562 31.003906 21.269531 30.476562 21.269531 C 29.945312 21.269531 27.425781 25.789062 25.042969 31.238281 C 22.523438 36.691406 20.273438 41.210938 19.875 41.210938 C 19.476562 41.210938 16.695312 36.292969 13.78125 30.308594 L 8.347656 19.410156 Z M 6.625 32.304688 "
            initial="initial"
            animate="animate"
            fill={!isLoading ? "black" : "none"}
          ></motion.path>

          <motion.path
            stroke="grey"
            variants={loadingPath}
            initial="initial"
            animate="animate"
            d="M 43.59375 23.796875 C 40.546875 26.984375 39.75 28.847656 39.75 33.632812 C 39.75 41.609375 45.050781 46.527344 53.53125 46.527344 C 63.46875 46.527344 69.429688 38.285156 66.25 28.714844 C 64.394531 22.863281 59.890625 19.941406 53 19.941406 C 48.628906 19.941406 46.640625 20.738281 43.59375 23.796875 Z M 57.636719 23.265625 C 67.707031 27.386719 66.515625 41.609375 55.914062 44.269531 C 43.0625 47.324219 36.171875 28.449219 48.230469 23.132812 C 53.398438 21.003906 52.335938 20.871094 57.636719 23.265625 Z M 57.636719 23.265625 "
            fill={!isLoading ? "black" : "none"}
          ></motion.path>
          <motion.path
            stroke="grey"
            d="M 72.875 33.101562 L 72.875 46.527344 L 79.632812 46.527344 C 85.328125 46.527344 86.921875 45.863281 90.234375 42.671875 C 95.265625 37.621094 95.53125 29.777344 91.027344 24.460938 C 88.511719 21.535156 86.523438 20.738281 80.425781 20.207031 L 72.875 19.675781 Z M 87.980469 25.390625 C 90.628906 27.386719 91.425781 29.246094 91.425781 32.96875 C 91.425781 35.628906 90.894531 38.550781 90.363281 39.347656 C 88.640625 41.875 83.738281 43.867188 78.96875 43.867188 L 74.199219 43.867188 L 74.199219 22.597656 L 79.367188 22.597656 C 82.546875 22.597656 85.726562 23.664062 87.980469 25.390625 Z M 87.980469 25.390625 "
            variants={loadingPath}
            initial="initial"
            animate="animate"
            fill={!isLoading ? "black" : "none"}
          ></motion.path>
          <motion.path
            stroke="grey"
            d="M 99.375 33.234375 C 99.375 41.210938 99.90625 46.527344 100.699219 46.527344 C 101.496094 46.527344 102.023438 41.210938 102.023438 33.234375 C 102.023438 25.257812 101.496094 19.941406 100.699219 19.941406 C 99.90625 19.941406 99.375 25.257812 99.375 33.234375 Z M 99.375 33.234375 "
            variants={loadingPath}
            initial="initial"
            animate="animate"
            fill={!isLoading ? "black" : "none"}
          ></motion.path>

          <motion.path
            stroke="grey"
            d="M 108.648438 33.234375 C 108.648438 41.210938 109.179688 46.527344 109.976562 46.527344 C 110.769531 46.527344 111.300781 43.734375 111.300781 40.148438 L 111.433594 33.898438 L 116.996094 40.148438 C 120.175781 43.734375 123.488281 46.527344 124.417969 46.527344 C 125.476562 46.527344 123.488281 43.601562 120.046875 39.882812 C 116.734375 36.292969 113.949219 32.835938 113.949219 32.304688 C 113.949219 31.773438 116.46875 28.714844 119.515625 25.65625 C 126.273438 18.742188 124.019531 18.078125 116.601562 24.726562 L 111.300781 29.511719 L 111.300781 24.726562 C 111.300781 22.066406 110.769531 19.941406 109.976562 19.941406 C 109.179688 19.941406 108.648438 25.257812 108.648438 33.234375 Z M 108.648438 33.234375 "
            variants={loadingPath}
            initial="initial"
            animate="animate"
            fill={!isLoading ? "black" : "none"}
          ></motion.path>
          <motion.path
            className={`${isLoading ? "stroke-lime-800" : "stroke-slate-500"}`}
            //   stroke="#00b400"
            d="M 136.609375 28.847656 C 129.71875 42.671875 128.261719 46.527344 129.851562 46.527344 C 130.644531 46.527344 133.558594 41.609375 136.210938 35.761719 L 141.113281 24.992188 L 146.015625 35.761719 C 148.664062 41.609375 151.449219 46.527344 152.242188 46.527344 C 153.699219 46.527344 150.519531 38.417969 144.292969 26.1875 L 140.980469 19.941406 Z M 136.609375 28.847656 "
            variants={isLoading ? loadingPath : navBarLogo}
            initial="initial"
            animate="animate"
            fill={!isLoading ? "black" : "none"}
          ></motion.path>
        </motion.g>
      </motion.svg>
    </AnimatePresence>
  );
};

export default Logo;
