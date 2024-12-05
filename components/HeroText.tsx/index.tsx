import { ArrowRight } from "lucide-react";
import { AnimationProps, motion } from "motion/react";
import { NavigationControls } from "../NavigationControls";
import { useState } from "react";

const TextLine = ({
  children,
  delay,
  key,
}: {
  children: React.ReactNode;
  delay: number;
  key: string | number;
}) => (
  <motion.span
    key={key}
    className="block text-base w-full"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.43, 0.13, 0.23, 0.96],
    }}
  >
    {children}
  </motion.span>
);

interface HeroTextProps {
  isSecondVideoStarted: boolean;
}

export const HeroText = ({ isSecondVideoStarted }: HeroTextProps) => {
  const [currentContent] = useState({
    firstSection: {
      firstLine: "We are the",
      secondLine: "low-flow specialist",
    },
    bottomSection: {
      highlighted: "Pharmaceutical",
      description: [
        "Bronkhorst is the leader in mass flow meters and controllers",
        "technology for gases and liquids, pressure controllers and",
        "evaporation systems. We are the low-flow specialist.",
      ],
      cta: "View our Gas Flow solutions",
    },
    secondContent: {
      highlighted: "Surface treatment",
      description: [
        "Bronkhorst is the leader in mass flow meters and controllers",
        "technology for gases and liquids, pressure controllers and",
        "evaporation systems. We are the low-flow specialist.",
      ],
      cta: "Explore Pharmaceutical Solutions",
    },
  });

  const textVariants: AnimationProps["variants"] = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: custom * 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  const content = isSecondVideoStarted
    ? currentContent.secondContent
    : currentContent.bottomSection;

  return (
    <section className="w-full h-full px-28 z-30">
      <div className="w-full h-1/2 flex flex-col gap-3 justify-center text-white">
        <motion.span
          className="text-5xl"
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {currentContent.firstSection.firstLine}
        </motion.span>
        <motion.span
          className="text-5xl"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {currentContent.firstSection.secondLine}
        </motion.span>
      </div>

      <div className="w-full h-1/2 flex flex-row gap-5 text-white">
        <div className="h-full w-1/2 flex flex-col justify-center gap-5">
          <div className="flex flex-row items-center gap-5">
            <motion.div
              key={`dot-${isSecondVideoStarted}`}
              className="w-8 h-8 bg-[#0050FF] rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
            <motion.h3
              key={`highlighted-${isSecondVideoStarted}`}
              className="text-2xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {content.highlighted}
            </motion.h3>
          </div>
          <p className="w-full text-left pr-10">
            {content.description.map((line, index) => (
              <TextLine
                key={`description-${isSecondVideoStarted}-${index}`}
                delay={1.6 + index * 0.2}
              >
                {line}
              </TextLine>
            ))}
          </p>
          <motion.div
            key={`cta-container-${isSecondVideoStarted}`}
            className="w-[400px] h-[80px] mt-5 border-2 border-white/10 backdrop-blur-[14px] bg-black/10 rounded-md p-5 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.span
              key={`cta-text-${isSecondVideoStarted}`}
              className="text-base"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              {content.cta}
            </motion.span>
            <motion.div
              key={`cta-arrow-${isSecondVideoStarted}`}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              <ArrowRight />
            </motion.div>
          </motion.div>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-end items-end">
          <NavigationControls />
        </div>
      </div>
    </section>
  );
};
