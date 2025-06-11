'use client';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';

export type MessageInterface = {
  id: string;
  text: string;
  sender: 'me' | 'other';
};

type ChatWindowProps = {
  messages: MessageInterface[];
};

export const ChatWindow = ({ messages, isTyping }: ChatWindowProps & { isTyping?: boolean }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          text={msg.text}
          isOwn={msg.sender === 'me'}
        />
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
};

