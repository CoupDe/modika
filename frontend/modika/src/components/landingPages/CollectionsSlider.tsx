import { motion } from "framer-motion";
import React from "react";
import { collectionPreview } from "../../images/collectionsBag/collection";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
const CollectionsSlider = () => {
  return (
    <section className="mb-32 h-[calc(400px+2rem)]" role="slider-bag">
      <h3 className="text-slate-500 text-2xl italic mb-6">Наши коллекции</h3>
      <Carousel
        className="h-full"
        animation="fade"
        navButtonsAlwaysVisible
        autoPlay={false}
        interval={15000}
        cycleNavigation
        indicatorContainerProps={{
          className: "absolute bottom-10 z-10",
        }}
      >
        {/* className="h-full flex flex-row overflow-x-auto dark:text-white" */}
        <div
          aria-label="slider"
          className="grid snap-x snap-start grid-flow-col px-8 overflow-x-scroll gap-3 overscroll-x-contain lg:auto-cols-[35%] md:auto-cols-[50%] auto-cols-[100%]  dark:text-white"
        >
          {collectionPreview.pink.map((pinkBag, index) => (
            <img
              className="p-1 object-cover justify-self-center  max-h-[400px]"
              src={pinkBag}
              key={"pink" + index}
            />
          ))}
        </div>
        <div
          aria-label="slider"
          className="grid snap-x snap-start grid-flow-col px-8 overflow-x-scroll gap-3 overscroll-x-contain lg:auto-cols-[35%] md:auto-cols-[50%] auto-cols-[100%]  dark:text-white"
        >
          {collectionPreview.cream.map((pinkBag, index) => (
            <img
              className="p-1 object-cover justify-self-center  max-h-[400px]"
              src={pinkBag}
              key={"cream" + index}
            />
          ))}
        </div>
        <div
          aria-label="slider"
          className="grid snap-x snap-start grid-flow-col px-8 overflow-x-scroll gap-3 overscroll-x-contain lg:auto-cols-[35%] md:auto-cols-[50%] auto-cols-[100%]  dark:text-white"
        >
          {collectionPreview.white.map((pinkBag, index) => (
            <img
              className="p-1 object-cover justify-self-center  max-h-[400px]"
              src={pinkBag}
              key={"white" + index}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default CollectionsSlider;
