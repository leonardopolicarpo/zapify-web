'use client'

import { useState } from "react";
import { Sidebar } from "@/components/sidebar"
import { ChatWindow } from "@/components/chat-window";

import { mockConversations } from "@/mock-data/mock-conversations";
import { mockMessages } from "@/mock-data/mock-messages";
import { Message } from "@/types/message";
import { Conversation } from "@/types/conversation";

const ChatApp = () => {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Record<string, Message[]>>(mockMessages);
  const [isTyping, setIsTyping] = useState(false);

  const activeConversation = conversations.find(c => c.id === activeConversationId) || null;
  const currentMessages = activeConversationId ? messages[activeConversationId] || [] : [];

  const handleSendMessage = (content: string) => {
    if (!activeConversationId) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      sender: { id: '1', name: 'Você', type: 'user' },
      isOwn: true,
      status: 'sent',
    };

    setMessages(prev => ({
      ...prev,
      [activeConversationId]: [...(prev[activeConversationId] || []), newMessage],
    }));

    // Update conversation last message
    setConversations(prev => prev.map(conv => 
      conv.id === activeConversationId 
        ? { ...conv, lastMessage: content, timestamp: new Date(), isTyping: false }
        : conv
    ));

    // Simulate message status updates
    setTimeout(() => {
      setMessages(prev => ({
        ...prev,
        [activeConversationId]: prev[activeConversationId]?.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        ) || []
      }));
    }, 1000);

    setTimeout(() => {
      setMessages(prev => ({
        ...prev,
        [activeConversationId]: prev[activeConversationId]?.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
        ) || []
      }));
    }, 2000);

    // Simulate AI/contact response
    if (activeConversation?.type === 'ai' || activeConversation?.type === 'direct') {
      // Show typing indicator
      setIsTyping(true);
      setConversations(prev => prev.map(conv => 
        conv.id === activeConversationId 
          ? { ...conv, isTyping: true }
          : conv
      ));

      setTimeout(() => {
        setIsTyping(false);
        setConversations(prev => prev.map(conv => 
          conv.id === activeConversationId 
            ? { ...conv, isTyping: false }
            : conv
        ));

        const responseContent = activeConversation?.type === 'ai' 
          ? 'Esta é uma resposta simulada do assistente IA. Em um ambiente real, isso seria processado por um backend.'
          : 'Obrigado pela mensagem! Esta é uma resposta simulada.';

        const response: Message = {
          id: (Date.now() + 1).toString(),
          content: responseContent,
          timestamp: new Date(),
          sender: { 
            id: activeConversation?.type === 'ai' ? 'ai' : '2', 
            name: activeConversation?.title || 'Contato', 
            type: activeConversation?.type === 'ai' ? 'ai' : 'contact' 
          },
          isOwn: false,
          status: 'sent',
        };

        setMessages(prev => ({
          ...prev,
          [activeConversationId]: [...(prev[activeConversationId] || []), response],
        }));

        setConversations(prev => prev.map(conv => 
          conv.id === activeConversationId 
            ? { ...conv, lastMessage: responseContent, timestamp: new Date() }
            : conv
        ));
      }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5s
    }
  };

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <Sidebar
        conversations={conversations}
        activeConversationId={activeConversationId}
        onConversationSelect={setActiveConversationId}
      />
      <ChatWindow
        conversation={activeConversation}
        messages={currentMessages}
        onSendMessage={handleSendMessage}
        isTyping={isTyping}
      />
    </div>
  );
};

export default ChatApp;