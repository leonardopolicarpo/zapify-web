import { useEffect, useRef } from "react";
import { User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatHeader } from '@/components/chat-header';
import { MessageInput } from '@/components/message-input';
import { MessageItem } from '@/components/message-item';
import { TypingIndicator} from '@/components/type-indicator';

export const ChatWindow = ({ 
  conversation, 
  messages, 
  onSendMessage,
  isTyping 
}: { 
  conversation: Conversation | null; 
  messages: Message[]; 
  onSendMessage: (content: string) => void; 
  isTyping: boolean;
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!conversation) {
    return (
      <motion.div 
        className="flex-1 flex items-center justify-center bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <User className="w-8 h-8 text-gray-400" />
          </motion.div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Selecione uma conversa</h3>
          <p className="text-gray-600">Escolha uma conversa da lista para começar a chatear</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ChatHeader conversation={conversation} />
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {messages.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))}
          </AnimatePresence>
          
          <AnimatePresence>
            {isTyping && (
              <TypingIndicator name={conversation.title} />
            )}
          </AnimatePresence>
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <MessageInput onSendMessage={onSendMessage} />
    </motion.div>
  );
};