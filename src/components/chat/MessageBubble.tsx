import { motion } from 'framer-motion';

type MessageBubbleProps = {
  text: string;
  isOwn: boolean;
};

export const MessageBubble = ({ text, isOwn }: MessageBubbleProps) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`px-4 py-2 rounded-lg max-w-[75%] text-sm
          ${isOwn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        {text}
      </motion.div>
    </div>
  );
};
