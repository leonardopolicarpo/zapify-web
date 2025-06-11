'use client';
import { useState } from 'react';
import { ChatWindow, MessageInterface } from '@/components/chat/ChatWindow';
import { MessageInput } from '@/components/chat/MessageInput';
import { ChatHeader } from '@/components/chat/ChatHeader';

export default function ChatPage() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<MessageInterface[]>([
    { id: '1', text: 'Oi!', sender: 'other' },
    { id: '2', text: 'E aí!', sender: 'me' },
  ]);


  const handleSend = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: '10', text, sender: 'me' },
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: '10', text: 'Beleza!', sender: 'other' },
      ]);
      setIsTyping(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto border border-zinc-300 dark:border-zinc-700 rounded shadow bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
      <ChatHeader title="Chat com Fulano" />
      <ChatWindow messages={messages} isTyping={isTyping} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}
