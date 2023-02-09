import { motion } from "framer-motion";
import React from "react";
import photo from "../../images/photoDesigner.png";

const introDesigner = () => {
  return (
    <motion.section className="relative  bg-slate-100 pb-6">
      <motion.div className="max-w-6xl mx-auto px-4 ">
        <motion.div
          role="card"
          className="flex flex-col items-center md:flex-row  justify-start border   border-slate-400 rounded-xl bg-slate-200 text-slate-500 p-1 md:p-20"
        >
          <motion.div className="min-w-max ">
            <motion.img
              className="w-44 h-44  rounded-full shadow-lg "
              src={photo}
              alt="designer photo"
            />
            <h5 className="pt-2 text-xl font-medium text-slate-600">
              Ксения Щербакова
            </h5>
            <p className="py-2">Главный дизайнер</p>
          </motion.div>
          <motion.div className="bg-slate-300 md:ml-9 w-full rounded-md text-left p-2">
            <motion.p className="leading-relaxed text-justify indent-4">
              Как дизайнер, я воплощаю в своих работах следующие идеи:
            </motion.p>
            <motion.p className="leading-relaxed text-justify indent-7">
              <em>Функциональность</em> - я стремлюсь создать сумки, которые не
              только красивы, но и удобны в использовании, имеют много отделений
              и удобные для хранения вещей.
            </motion.p>
            <motion.p className="leading-relaxed text-justify indent-7">
              <em>Элегантность</em> - я хочу, чтобы мои сумки были не только
              удобными, но и элегантными, выглядящими красиво и стильно в любом
              образе.
            </motion.p>{" "}
            <motion.p className="leading-relaxed text-justify indent-7">
              <em>Качество</em> - я выбираю только лучшие материалы, такие как
              кожа, чтобы обеспечить длительную жизнь моим сумкам.
            </motion.p>{" "}
            <motion.p className="leading-relaxed text-justify indent-7">
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
