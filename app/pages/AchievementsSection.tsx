import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

interface Achievement {
  prefix?: string;
  metric: string;
  value: string;
  postfix?: string;
}

const AchievementsSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  const achievementsList: Achievement[] = [
    {
      metric: "Projects",
      value: "100",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Users",
      value: "100,000",
    },
    {
      metric: "Awards",
      value: "7",
    },
    {
      metric: "Years",
      value: "5",
    },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              {loaded && (
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
              )}
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
