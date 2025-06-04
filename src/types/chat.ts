
export interface Channel {
  id: string;
  name: string;
  unread: number;
}

export interface DirectMessage {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
  unread: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  user: User;
  text: string;
  timestamp: string;
  reactions: string[];
}
