import { ArrowRight } from "lucide-react";
import { AnimationProps, motion } from "motion/react";
import { NavigationControls } from "../NavigationControls";

const TextLine = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.span
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
export const HeroText = () => {
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
          We are the
        </motion.span>
        <motion.span
          className="text-5xl"
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          low-flow specialist
        </motion.span>
      </div>

      <div className="w-full h-1/2 flex flex-row gap-5 text-white">
        <div className="h-full w-1/2 flex flex-col justify-center gap-5">
          <div className="flex flex-row items-center gap-5">
            <motion.div
              className="w-8 h-8 bg-[#0050FF] rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
            <motion.h3
              className="text-2xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Pharmaceutical
            </motion.h3>
          </div>
          <p className="w-full text-left pr-10">
            <TextLine delay={1.6}>
              Bronkhorst is the leader in mass flow meters and controllers
            </TextLine>
            <TextLine delay={1.8}>
              technology for gases and liquids, pressure controllers and
              evaporation
            </TextLine>
            <TextLine delay={2}>
              systems. We are the low-flow specialist.
            </TextLine>
          </p>
          <motion.div
            className="w-[400px] h-[80px] mt-5 border-2 border-white/10 backdrop-blur-[14px] bg-black/10 rounded-md p-5 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.span
              className="text-base"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              View our Gas Flow solutions
            </motion.span>
            <motion.div
              //   left to right animation
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
