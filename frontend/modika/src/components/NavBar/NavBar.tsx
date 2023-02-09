import { motion } from "framer-motion";
import React, { useState } from "react";
import modikaLogo from "../../images/modikaLogo.svg";
import Logo from "../animation/Logo/Logo";
import {
  containerVariants,
  itemVariants,
  navContainerVariant,
} from "./NavVariants";

const links = [
  { path: "#", name: "home" },
  { path: "#", name: "about" },
  { path: "#", name: "store" },
  { path: "#", name: "collection" },
];
const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.nav
      variants={navContainerVariant}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between p-5 bg-slate-100"
    >
      <Logo isLoading={false} />
      <motion.div
        layout
        className="flex"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link, i) => (
          <React.Fragment key={i}>
            <motion.a
              variants={itemVariants}
              href={link.path}
              className={
                "block px-4 py-2 shadow-md text-slate-900  hover:text-slate-500 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out "
              }
            >
              {link.name}
            </motion.a>
            {i < links.length - 1 && (
              <span className="inline-block w-[1px] bg-slate-500 " />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
