import { motion } from "framer-motion";
import { Avatar } from "@/components/avatar";
import { typingVariants } from "@/styles/anaimation-variants/typing";

export const TypingIndicator = ({ name }: { name: string }) => {
  return (
    <motion.div
      variants={typingVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex items-center gap-3 mb-4"
    >
      <Avatar name={name} type="contact" />
      <div className="bg-gray-100 rounded-lg px-4 py-2">
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-600">{name} está digitando</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gray-400 rounded-full"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};