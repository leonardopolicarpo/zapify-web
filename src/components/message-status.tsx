import { motion } from 'framer-motion';
import { Check, CheckCheck } from 'lucide-react';

export const MessageStatus = ({ status }: { status?: 'sent' | 'delivered' | 'read' }) => {
  if (!status) return null;

  const getStatusIcon = () => {
    switch (status) {
      case 'sent':
        return <Check className="w-4 h-4 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-4 h-4 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="flex items-center"
    >
      {getStatusIcon()}
    </motion.div>
  );
};