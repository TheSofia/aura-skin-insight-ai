
import { Channel, DirectMessage, Message } from "@/types/chat";

export const mockChannels: Channel[] = [
  { id: 'glow', name: 'Glow Seekers', unread: 3 },
  { id: 'acne', name: 'Acne Warriors', unread: 0 },
  { id: 'over40', name: 'Over-40 Radiance', unread: 1 },
  { id: 'sensitive', name: 'Sensitive Skin Solutions', unread: 0 },
  { id: 'product-rec', name: 'Product Recommendations', unread: 5 },
];

export const mockDirectMessages: DirectMessage[] = [
  { id: 'user1', name: 'Sarah K.', avatar: '/placeholder.svg', status: 'online', unread: 2 },
  { id: 'user2', name: 'Alex M.', avatar: '/placeholder.svg', status: 'offline', unread: 0 },
  { id: 'user3', name: 'Jamie R.', avatar: '/placeholder.svg', status: 'online', unread: 0 },
];

export const mockMessages: Message[] = [
  { 
    id: 'm1', 
    user: { id: 'user1', name: 'Sarah K.', avatar: '/placeholder.svg' }, 
    text: "Has anyone tried the new vitamin C serum from GlowLabs? I'm considering adding it to my morning routine.",
    timestamp: new Date(new Date().getTime() - 60 * 60 * 1000).toISOString(),
    reactions: ['👍', '❤️']
  },
  { 
    id: 'm2', 
    user: { id: 'you', name: 'You', avatar: '/placeholder.svg' }, 
    text: "I've been using it for about 2 weeks now! My skin definitely feels brighter. I've noticed it works better when I apply it right after cleansing while my skin is still slightly damp.",
    timestamp: new Date(new Date().getTime() - 30 * 60 * 1000).toISOString(),
    reactions: ['👍']
  },
  { 
    id: 'm3', 
    user: { id: 'user3', name: 'Jamie R.', avatar: '/placeholder.svg' }, 
    text: "I've heard mixed reviews. I think it depends on your skin type. It was a bit too strong for my sensitive skin, but my friend with combination skin loves it.",
    timestamp: new Date(new Date().getTime() - 15 * 60 * 1000).toISOString(),
    reactions: []
  },
  { 
    id: 'm4', 
    user: { id: 'user1', name: 'Sarah K.', avatar: '/placeholder.svg' }, 
    text: "Thanks for the feedback! I have normal to dry skin, so I might give it a try. Do you notice any issues with layering it under sunscreen?",
    timestamp: new Date(new Date().getTime() - 5 * 60 * 1000).toISOString(),
    reactions: []
  },
];
