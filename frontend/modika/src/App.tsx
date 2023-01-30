import { useState } from "react";
import reactLogo from "./assets/react.svg";
import modikaLogo from "./images/modikaLogo.svg";
import "./App.css";
import { motion, Variants } from "framer-motion";

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
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  return (
    <div className="App">
      <div className="example">
        <svg viewBox="0 0 300 300">
          <motion.g>
            <div style={{ height: "300px", width: "300px" }}>
              <motion.path
                d="M110 0 c-29 -15 -63 -65 -63 -94 0 -31 34 -80 67 -95 30 -15 42
              -15 75 -6 42 13 78 58 78 99 0 39 -29 83 -65 98 -43 18 -52 17 -92 -2z m96
              -24 c31 -16 46 -65 31 -100 -15 -37 -37 -50 -82 -50 -71 0 -106 84 -56 137 23
              25 74 31 107 13z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 2,
                }}
                x="1"
                y="1"
                width="1"
                height="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></motion.path>
            </div>
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
              x1="13.25"
              y1="13.5"
              x2="8.25"
              y2="13.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></motion.line>
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
              x1="8.25"
              y1="8.5"
              x2="13.25"
              y2="8.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></motion.line>
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
              x1="8.25"
              y1="11"
              x2="13.25"
              y2="11"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></motion.line>

            <motion.circle
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2,
              }}
              cx="3"
              cy="11"
              r="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></motion.circle>
          </motion.g>
        </svg>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
