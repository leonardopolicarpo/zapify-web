export const mockMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      content: 'Oi, tudo bem?',
      timestamp: new Date('2024-01-15T10:30:00'),
      sender: { id: '2', name: 'João Silva', type: 'contact' },
      isOwn: false,
    },
    {
      id: '2',
      content: 'Oi João! Tudo ótimo, e você?',
      timestamp: new Date('2024-01-15T10:32:00'),
      sender: { id: '1', name: 'Você', type: 'user' },
      isOwn: true,
    },
    {
      id: '3',
      content: 'Também estou bem! Queria conversar sobre o projeto',
      timestamp: new Date('2024-01-15T10:33:00'),
      sender: { id: '2', name: 'João Silva', type: 'contact' },
      isOwn: false,
    },
  ],
  '2': [
    {
      id: '1',
      content: 'Pessoal, vamos fazer a reunião às 14h hoje?',
      timestamp: new Date('2024-01-15T09:15:00'),
      sender: { id: '2', name: 'João Silva', type: 'contact' },
      isOwn: false,
    },
    {
      id: '2',
      content: 'Perfeito para mim!',
      timestamp: new Date('2024-01-15T09:16:00'),
      sender: { id: '1', name: 'Você', type: 'user' },
      isOwn: true,
    },
    {
      id: '3',
      content: 'Também posso participar',
      timestamp: new Date('2024-01-15T09:17:00'),
      sender: { id: '3', name: 'Maria Santos', type: 'contact' },
      isOwn: false,
    },
  ],
  '3': [
    {
      id: '1',
      content: 'Olá! Como posso ajudar você hoje?',
      timestamp: new Date('2024-01-15T08:45:00'),
      sender: { id: 'ai', name: 'Assistente IA', type: 'ai' },
      isOwn: false,
    },
    {
      id: '2',
      content: 'Preciso de ajuda com React',
      timestamp: new Date('2024-01-15T08:46:00'),
      sender: { id: '1', name: 'Você', type: 'user' },
      isOwn: true,
    },
    {
      id: '3',
      content: 'Claro! Ficarei feliz em ajudar com React. Qual é sua dúvida específica?',
      timestamp: new Date('2024-01-15T08:47:00'),
      sender: { id: 'ai', name: 'Assistente IA', type: 'ai' },
      isOwn: false,
    },
  ],
};