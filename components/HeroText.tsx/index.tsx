import { AnimationProps, motion } from "motion/react";

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

      <div className="w-full h-1/2 flex flex-col justify-center text-white">
        <div className="flex flex-row items-center gap-5">
          <motion.div
            className="w-8 h-8 bg-[#0050FF] rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          />
          <h3 className="text-2xl">Pharmaceutical</h3>
        </div>
      </div>
    </section>
  );
};
