import { motion } from "framer-motion";
import React from "react";
import { collectionPreview } from "../../images/collectionsBag/collection";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
const CollectionsSlider = () => {
  return (
    <section className="mb-16 h-[400px] " role="slider-bag">
      <h3 className="text-slate-500 text-2xl italic mb-6">Наши коллекции</h3>
      <Carousel
        className="h-full relative flex flex-col"
        animation="fade"
        navButtonsAlwaysVisible
        autoPlay={false}
        interval={15000}
        cycleNavigation
        indicatorContainerProps={{
          className: "mt-6",
        }}
      >
        <div aria-label="slider" className="h-full flex flex-row overflow-x-auto dark:text-white">
          {collectionPreview.pink.map((pinkBag, index) => (
            <img className="w-1/5 h-full" src={pinkBag} key={"pink" + index} />
          ))}
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"></div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700  dark:text-white">
          slide 3
        </div>
      </Carousel>
    </section>
  );
};

export default CollectionsSlider;
