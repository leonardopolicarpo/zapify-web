export interface Conversation {
  id: string;
  title: string;
  type: 'direct' | 'group' | 'ai';
  lastMessage?: string;
  timestamp: Date;
  unreadCount: number;
  avatar?: string;
  participants?: string[];
  isOnline?: boolean;
  isTyping?: boolean;
}