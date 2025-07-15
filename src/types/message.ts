interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: {
    id: string;
    name: string;
    avatar?: string;
    type: 'user' | 'ai' | 'contact';
  };
  isOwn: boolean;
  status?: 'sent' | 'delivered' | 'read';
}