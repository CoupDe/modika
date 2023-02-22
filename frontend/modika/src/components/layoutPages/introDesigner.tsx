import { motion, Variants } from "framer-motion";
import photo from "../../images/photoDesigner.jpeg";
const textSpawn: Variants = {
  initial: { z: -5, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};
const textVariant: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
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
const introDesigner = () => {
  return (
    <motion.section className="relative bg-slate-100 mb-6">
      <motion.div className="mx-auto ">
        <motion.div
          role="card"
          className="flex flex-col items-center md:flex-row  justify-start border   border-slate-400 rounded-xl bg-slate-200 text-slate-500 p-2 md:p-20 mt-2"
        >
          <motion.div
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="min-w-max "
          >
            <motion.img
              className="w-44 h-44  rounded-full shadow-lg "
              src={photo}
              alt="designer photo"
            />
            <motion.h5 className="pt-2 text-xl font-medium text-slate-600">
              Ксения Щербакова
            </motion.h5>
            <motion.p className="py-2">Главный дизайнер</motion.p>
          </motion.div>
          <motion.div
            variants={textSpawn}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
            className="bg-slate-300 md:ml-20 w-full rounded-md text-left p-2"
          >
            <motion.p
              variants={textVariant}
              className="leading-relaxed text-lg text-justify indent-4"
            >
              Как дизайнер, я воплощаю в своих работах следующие идеи:
            </motion.p>
            <motion.p
              variants={textVariant}
              className="leading-relaxed text-justify indent-7"
            >
              <em>Функциональность</em> - я стремлюсь создать сумки, которые не
              только красивы, но и удобны в использовании, имеют много отделений
              и удобные для хранения вещей.
            </motion.p>
            <motion.p
              variants={textVariant}
              className="leading-relaxed text-justify indent-7"
            >
              <em>Элегантность</em> - я хочу, чтобы мои сумки были не только
              удобными, но и элегантными, выглядящими красиво и стильно в любом
              образе.
            </motion.p>{" "}
            <motion.p
              variants={textVariant}
              className="leading-relaxed text-justify indent-7"
            >
              <em>Качество</em> - я выбираю только лучшие материалы, такие как
              кожа, чтобы обеспечить длительную жизнь моим сумкам.
            </motion.p>{" "}
            <motion.p
              variants={textVariant}
              className="leading-relaxed text-justify indent-7"
            >
              <em>Индивидуальность</em> - я стремлюсь добавлять свою
              индивидуальную тонкую ноту в каждую сумку, чтобы они выделялись
              среди других.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default introDesigner;
