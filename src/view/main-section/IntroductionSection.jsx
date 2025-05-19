import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function IntroductionSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens only once
    threshold: 0.5, // Trigger when 10% of the component is visible
  });
  return (
    <div
      className="px-[15vw] h-[100vh] flex items-center relative z-[100] bg-[white]"
      ref={ref}
    >
      <motion.div
        initial={{ y: 500 }}
        animate={inView ? { y: 0 } : { y: 500 }}
        // exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-[100]"
      >
        <div className="text-center text-[72px] font-bold">
          RICO RAHADIAN IS AN ACCOMPLISED SCULPTURE ARTIST FROM INDONESIA
        </div>
        <div className="text-center mx-[10vw] mt-4">
          Redy Rahadian believes in inspiring others. He is passionate in
          introducing new ways to explore solid materials, presenting a
          completely new way to see and use an object. He exposes the world to
          creations that are sometimes peculiar but wondrous. Redy Rahadian
          breaks boundaries and steps out of boxes. He takes others to bravely
          venture roads that are less traveled.
        </div>
      </motion.div>
    </div>
  );
}

export default IntroductionSection;
