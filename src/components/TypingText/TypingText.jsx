import { useRef } from "react";
import { motion, useInView } from "motion/react";
const TypingText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const firstText = "Hello! Im mrakasondara.";
  return (
    <h2
      ref={ref}
      className="font-suse font-bold text-xl text-sub tracking-wide"
    >
      {firstText.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {index > 6 ? (
            <span className="text-alternate">{letter}</span>
          ) : (
            letter
          )}
        </motion.span>
      ))}
    </h2>
  );
};

export default TypingText;
