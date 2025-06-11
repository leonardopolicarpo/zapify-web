'use client';
import { useState } from 'react';

type MessageInputProps = {
  onSend: (text: string) => void;
};

export const MessageInput = ({ onSend }: MessageInputProps) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="p-4 border-t flex gap-2">
      <input
        type="text"
        className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring"
        placeholder="Digite sua mensagem..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
        onClick={handleSend}
      >
        Enviar
      </button>
    </div>
  );
};
