import { Bot, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar } from './avatar';
import { conversationVariants } from '@/styles/anaimation-variants/conversation';
import { Conversation } from '@/types/conversation';

export const ConversationItem = ({ 
  conversation, 
  isActive, 
  onClick 
}: { 
  conversation: Conversation;
  isActive: boolean; 
  onClick: () => void; 
}) => {
  const getTypeIcon = () => {
    switch (conversation.type) {
      case 'group':
        return <Users className="w-4 h-4" />;
      case 'ai':
        return <Bot className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    } else if (days === 1) {
      return 'Ontem';
    } else {
      return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    }
  };

  return (
    <motion.div
      variants={conversationVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer transition-colors ${
        isActive ? 'bg-blue-50 border-r-2 border-blue-500' : ''
      }`}
    >
      <Avatar name={conversation.title} type={conversation.type === 'ai' ? 'ai' : 'contact'} isOnline={conversation.isOnline} />
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h3 className="font-medium text-gray-900 truncate">{conversation.title}</h3>
            {getTypeIcon()}
          </div>
          <span className="text-xs text-gray-500">{formatTime(conversation.timestamp)}</span>
        </div>
        
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-gray-600 truncate">
            {conversation.isTyping ? (
              <span className="text-blue-600 italic">digitando...</span>
            ) : (
              conversation.lastMessage
            )}
          </p>
          <AnimatePresence>
            {conversation.unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center"
              >
                {conversation.unreadCount}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};