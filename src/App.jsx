import { useState } from "react";
import { getIcon } from "./utils/Icons";
import { motion } from "motion/react";

import Social from "./components/Social";
import SocialDetails from "./components/SocialDetails";
import Toggle from "./components/Toggle";
import data from "./data/data";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const totalFollowers = data.reduce((total, card) => total + card.total, 0);

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },

    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const detailVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },

    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <main
      className={`${darkMode ? "dark" : ""} bg-background text-text-primary relative min-h-screen`}
    >
      <div className="bg-top-background absolute top-0 left-0 h-60 w-full rounded-b-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-10">
        <motion.header
          className="mb-12 flex items-center justify-between"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-2xl font-bold">Social Media Dashboard</h1>

            <p className="text-text-secondary mt-1 text-sm font-bold">
              Total Followers: {totalFollowers}
            </p>
          </div>

          <Toggle
            label1="Dark Mode"
            active={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </motion.header>

        <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {data.map((card, index) => (
            <motion.li
              key={`social-${card.platform}`}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <Social
                platform={card.platform}
                icon={getIcon(card.platform)}
                user={card.user}
                total={card.total}
                today={card.today}
              />
            </motion.li>
          ))}
        </ul>

        <motion.h2
          className="text-text-secondary mt-12 mb-6 text-2xl font-bold"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          Overview - Today
        </motion.h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((card) =>
            card.statistics.map((stat, index) => (
              <motion.li
                key={`${card.platform}-${stat.indicator}-${index}`}
                variants={detailVariants}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.08,
                }}
                whileHover={{
                  scale: 1.03,
                }}
              >
                <SocialDetails
                  icon={getIcon(card.platform)}
                  upIcon={getIcon("Up")}
                  downIcon={getIcon("Down")}
                  indicator={stat.indicator}
                  amount={stat.amount}
                  percentage={stat.percentage}
                />
              </motion.li>
            )),
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;
