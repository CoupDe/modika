import { useState } from "react";
import reactLogo from "./assets/react.svg";
import modikaLogo from "./images/modikaLogo.svg";
import "./App.css";
import { motion, Variants } from "framer-motion";
import LoadingScreen from "./components/animation/LoadingScreen";
import NavBar from "./components/NavBar/NavBar";
import MainLayout from "./containers/MainLayout";

function App() {
  const [count, setCount] = useState(0);
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 2 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  return (
    <div className="App ">
      <MainLayout />
    </div>
  );
}

export default App;
