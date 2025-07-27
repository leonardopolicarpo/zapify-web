import { useState } from "react";
import { Send, Smile, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';

export const MessageInput = ({ onSendMessage }: { onSendMessage: (content: string) => void }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div 
      className="bg-white border-t border-gray-200 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-end gap-2">
        <motion.button 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Paperclip className="w-5 h-5 text-gray-600" />
        </motion.button>
        
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite uma mensagem..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
            rows={1}
          />
        </div>
        
        <motion.button 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Smile className="w-5 h-5 text-gray-600" />
        </motion.button>
        
        <motion.button
          onClick={handleSend}
          disabled={!message.trim()}
          className={`p-2 rounded-full transition-colors ${
            message.trim() 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          whileHover={message.trim() ? { scale: 1.1 } : {}}
          whileTap={message.trim() ? { scale: 0.9 } : {}}
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};