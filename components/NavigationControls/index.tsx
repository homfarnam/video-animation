import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const NavigationControls = () => {
  return (
    <div className="z-50 flex flex-row justify-center gap-4">
      <motion.button
        className="w-14 h-14 flex items-center justify-center"
        initial={{ opacity: 0, x: +50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>
      <motion.div
        className="h-40 w-[2px] bg-white/20"
        initial={{ height: 0 }}
        animate={{ height: "160px" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.button
        className="w-14 h-14 flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
};
