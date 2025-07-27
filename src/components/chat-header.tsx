import { MoreVertical, Phone, Video, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar } from './avatar';
import { Conversation } from '@/types/conversation';

export const ChatHeader = ({ conversation }: { conversation: Conversation | null }) => {
  if (!conversation) return null;

  return (
    <motion.div 
      className="bg-white border-b border-gray-200 p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={conversation.title} type={conversation.type === 'ai' ? 'ai' : 'contact'} isOnline={conversation.isOnline} />
          <div>
            <h2 className="font-medium text-gray-900">{conversation.title}</h2>
            {conversation.type === 'group' && conversation.participants && (
              <p className="text-sm text-gray-500">{conversation.participants.join(', ')}</p>
            )}
            {conversation.type === 'direct' && conversation.isOnline !== undefined && (
              <motion.p 
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {conversation.isOnline ? 'Online' : 'Offline'}
              </motion.p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {[Phone, Video, Info, MoreVertical].map((Icon, index) => (
            <motion.button
              key={index}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5 text-gray-600" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
