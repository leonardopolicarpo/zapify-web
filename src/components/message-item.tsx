import { Avatar } from "@/components/avatar";
import { MessageStatus } from "@/components/message-status";
import { messageVariants } from "@/styles/anaimation-variants/message";
import { Message } from "@/types/message";
import { motion } from "framer-motion";

export const MessageItem = ({ message }: { message: Message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex gap-3 mb-4 ${message.isOwn ? 'justify-end' : 'justify-start'}`}
    >
      {!message.isOwn && (
        <Avatar name={message.sender.name} type={message.sender.type} />
      )}
      
      <div className={`max-w-[70%] ${message.isOwn ? 'order-first' : ''}`}>
        <motion.div 
          className={`rounded-lg px-4 py-2 ${
            message.isOwn 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-900'
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <p className="text-sm">{message.content}</p>
        </motion.div>
        <div className={`flex items-center gap-2 mt-1 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
          <p className="text-xs text-gray-500">
            {formatTime(message.timestamp)}
          </p>
          {message.isOwn && <MessageStatus status={message.status} />}
        </div>
      </div>
      
      {message.isOwn && (
        <Avatar name={message.sender.name} type={message.sender.type} />
      )}
    </motion.div>
  );
};