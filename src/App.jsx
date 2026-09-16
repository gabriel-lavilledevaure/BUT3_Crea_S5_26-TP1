import { useState } from "react";

import Social from "./components/Social";
import SocialDetails from "./components/SocialDetails";
import Toggle from "./components/Toggle";
import data from "./data/data";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const totalFollowers = data.reduce((total, card) => total + card.total, 0);

  return (
    <main
      className={`${darkMode ? "dark" : ""} bg-background text-text-primary relative min-h-screen`}
    >
      <div className="bg-top-background absolute top-0 left-0 h-60 w-full rounded-b-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-10">
        <header className="mb-12 flex items-center justify-between">
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
        </header>

        <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {data.map((card) => (
            <li key={`social-${card.platform}`}>
              <Social
                platform={card.platform}
                icon={card.icon}
                user={card.user}
                total={card.total}
                today={card.today}
              />
            </li>
          ))}
        </ul>

        <h2 className="text-text-secondary mt-12 mb-6 text-2xl font-bold">
          Overview - Today
        </h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((card) =>
            card.statistics.map((stat, index) => (
              <li key={`${card.platform}-${stat.indicator}-${index}`}>
                <SocialDetails
                  platform={card.platform}
                  icon={card.icon}
                  indicator={stat.indicator}
                  amount={stat.amount}
                  percentage={stat.percentage}
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;
