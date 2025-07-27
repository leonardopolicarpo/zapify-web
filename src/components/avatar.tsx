import { User, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export const Avatar = ({ /* name, */ type, isOnline }: { name: string; type: 'user' | 'ai' | 'contact'; isOnline?: boolean }) => {
  const getIcon = () => {
    switch (type) {
      case 'ai':
        return <Bot className="w-4 h-4" />;
      case 'user':
        return <User className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'ai':
        return 'bg-purple-500';
      case 'user':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      <motion.div 
        className={`w-10 h-10 rounded-full ${getBgColor()} flex items-center justify-center text-white text-sm font-medium`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {getIcon()}
      </motion.div>
      {isOnline !== undefined && (
        <motion.div 
          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
            isOnline ? 'bg-green-500' : 'bg-gray-400'
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </div>
  );
};