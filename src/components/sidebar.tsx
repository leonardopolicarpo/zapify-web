import { useState } from "react";
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConversationItem } from "./conversation-item";

export const Sidebar = ({ 
  conversations, 
  activeConversationId, 
  onConversationSelect 
}: { 
  conversations: Conversation[]; 
  activeConversationId: string | null; 
  onConversationSelect: (id: string) => void; 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      className="w-80 bg-white border-r border-gray-200 flex flex-col"
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="p-4 border-b border-gray-200">
        <motion.h1 
          className="text-xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Conversas
        </motion.h1>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar conversas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </motion.div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence>
          {filteredConversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ConversationItem
                conversation={conversation}
                isActive={activeConversationId === conversation.id}
                onClick={() => onConversationSelect(conversation.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};