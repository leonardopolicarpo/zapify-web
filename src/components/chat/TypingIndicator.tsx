import { motion } from 'framer-motion';

export const TypingIndicator = () => {
  return (
    <div className="flex justify-start px-4 py-2">
      <motion.div
        className="bg-gray-200 rounded-full px-3 py-2 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Fulano está digitando...
      </motion.div>
    </div>
  );
};
