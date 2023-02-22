import { motion, Variants } from "framer-motion";
import React from "react";
import { introBags } from "../../images/const";
interface brandImageSpawn {
  top: string;
  left: string;
  photo: string;
}
const imagesSpawnVariants: Variants = {
  initial: { z: -300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const imageVariant: Variants = {
  initial: { opacity: 0, scale: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};
const coords = [
  { top: "top-10", left: "left-10" },
  { top: "top-10", left: "left-1/2" },
  { top: "top-72", left: "left-24" },
  { top: "top-44", left: "left-44" },
  { top: "top-96", left: "left-1/2" },
];
const imageSpawn: brandImageSpawn[] = coords.map((coord, index) => {
  return { ...coord, photo: introBags[index] };
});

const BrandIntro = () => {
  const [index, setIndex] = React.useState<number>(0);

  return (
    <motion.section
      layout
      className="px-5 flex flex-column flex-wrap items-center h-screen  md:content-around content-center  justify-center"
      role="brand-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <motion.div
        className="whitespace-normal flex flex-col font-light text-slate-500 w-screen lg:w-1/2"
        role="brand-text"
      >
        <motion.h1
          className="text-2xl text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <em>Modika</em> - бренд сумок из кожи для стильных женщин.
        </motion.h1>
        <motion.p
          className="text-left text-lg font-light mt-2 text-slate-500 indent-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Это бренд женских сумок из кожи с богатым опытом и высоким качеством
          производства. Мы уделяем большое внимание деталям, используем только
          лучшую кожу и надежные фурнитуры, чтобы обеспечить долговечность и
          удобство в использовании наших сумок.
        </motion.p>
        <motion.p
          className="text-left text-lg font-light mt-2  text-slate-500 indent-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Мы также обеспечиваем широкий выбор стилей и цветов, чтобы подобрать
          сумку идеально подходящую для любого случая. Выбирая "Modika", вы
          получаете не только элегантный аксессуар, но и надежный и долговечный
          продукт.
        </motion.p>
        <motion.p
          className="text-left text-lg font-light mt-2 text-slate-500 indent-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Мы гарантируем высокое качество и исключительный дизайн наших сумок,
          чтобы вы всегда выглядели и чувствовали себя на высоте.
        </motion.p>
      </motion.div>
      <motion.div
        layout
        role="brand-image"
        // className="lg:h-4/5 lg:w-2/4 md:h-3/6 flex items-center justify-center "
        className={`sm:flex  lg:h-4/5 lg:w-1/2 lg:relative md:w-screen hidden flex-wrap justify-center md:h-1/2`}
        variants={imagesSpawnVariants}
        initial={"initial"}
        animate={"show"}
      >
        {imageSpawn.map((spawn, index) => (
          <motion.img
            variants={imageVariant}
            key={index}
            src={spawn.photo}
            // className="w-44 h-44 rounded-full absolute top-0 left-0"
            className={`w-32 h-32 rounded-full
              lg:absolute ${spawn.top} ${spawn.left}  `}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BrandIntro;
