import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { toast } from "sonner";
import CustomCursor from "@/components/ui/CustomCursor";
import { 
  MessageSquare, 
  Users, 
  Send, 
  Image, 
  Heart, 
  Plus, 
  User, 
  ChevronRight,
  ArrowLeft
} from "lucide-react";

// Mock data for chat channels
const mockChannels = [
  { id: 'glow', name: 'Glow Seekers', unread: 3 },
  { id: 'acne', name: 'Acne Warriors', unread: 0 },
  { id: 'over40', name: 'Over-40 Radiance', unread: 1 },
  { id: 'sensitive', name: 'Sensitive Skin Solutions', unread: 0 },
  { id: 'product-rec', name: 'Product Recommendations', unread: 5 },
];

// Mock data for direct messages
const mockDirectMessages = [
  { id: 'user1', name: 'Sarah K.', avatar: '/placeholder.svg', status: 'online', unread: 2 },
  { id: 'user2', name: 'Alex M.', avatar: '/placeholder.svg', status: 'offline', unread: 0 },
  { id: 'user3', name: 'Jamie R.', avatar: '/placeholder.svg', status: 'online', unread: 0 },
];

// Mock data for messages in a channel
const mockMessages = [
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

const BeautyExchange = () => {
  const navigate = useNavigate();
  const [activeChannel, setActiveChannel] = useState('glow');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);
  const [channels, setChannels] = useState(mockChannels);
  const [directMessages, setDirectMessages] = useState(mockDirectMessages);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom of messages on load or when new messages arrive
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: `m${Date.now()}`,
      user: { id: 'you', name: 'You', avatar: '/placeholder.svg' },
      text: message,
      timestamp: new Date().toISOString(),
      reactions: []
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simulate a response after a short delay
    if (messages.length % 3 === 0) {
      setTimeout(() => {
        const responseMessage = {
          id: `m${Date.now() + 1}`,
          user: { id: 'user1', name: 'Sarah K.', avatar: '/placeholder.svg' },
          text: "That's really helpful to know! I think I'll try it out this weekend.",
          timestamp: new Date().toISOString(),
          reactions: []
        };
        setMessages(prev => [...prev, responseMessage]);
      }, 3000);
    }
  };
  
  const addReaction = (messageId: string, reaction: string) => {
    const updatedMessages = messages.map(msg => {
      if (msg.id === messageId) {
        const hasReaction = msg.reactions.includes(reaction);
        return {
          ...msg,
          reactions: hasReaction 
            ? msg.reactions.filter(r => r !== reaction) 
            : [...msg.reactions, reaction]
        };
      }
      return msg;
    });
    
    setMessages(updatedMessages);
  };
  
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.round(diffMins / 60)}h ago`;
    
    return date.toLocaleDateString();
  };
  
  const shareEntry = () => {
    toast.success("Diary entry shared", {
      description: "Your insights have been shared with the group"
    });
  };
  
  const shareProduct = () => {
    toast.success("Product recommendation shared", {
      description: "Your product suggestion has been sent"
    });
  };
  
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-beautyagent-off-white">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center mb-6">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-light tracking-wider text-beautyagent-deeper-grey">
              BeautyExchange
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar for channels and DMs */}
            <div className="md:col-span-1">
              <Card className="glass-card p-4 mb-4">
                <div className="mb-4">
                  <h2 className="text-lg font-light tracking-wider mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Community Channels
                  </h2>
                  <ul className="space-y-2">
                    {channels.map(channel => (
                      <li key={channel.id} 
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-beautyagent-light-grey transition-colors
                                   ${activeChannel === channel.id ? 'bg-beautyagent-light-grey' : ''}`}
                          onClick={() => setActiveChannel(channel.id)}>
                        <span className="flex items-center">
                          <span className="text-sm"># {channel.name}</span>
                        </span>
                        {channel.unread > 0 && (
                          <span className="bg-beautyagent-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-badge-pulse">
                            {channel.unread}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-lg font-light tracking-wider mb-2 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Direct Messages
                  </h2>
                  <ul className="space-y-2">
                    {directMessages.map(dm => (
                      <li key={dm.id} 
                          className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-beautyagent-light-grey transition-colors">
                        <span className="flex items-center">
                          <span className="relative">
                            <Avatar className="h-6 w-6 mr-2">
                              <img src={dm.avatar} alt={dm.name} />
                            </Avatar>
                            <span className={`absolute bottom-0 right-1 h-2 w-2 rounded-full ${dm.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                          </span>
                          <span className="text-sm">{dm.name}</span>
                        </span>
                        {dm.unread > 0 && (
                          <span className="bg-beautyagent-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-badge-pulse">
                            {dm.unread}
                          </span>
                        )}
                      </li>
                    ))}
                    <li className="flex items-center p-2 text-beautyagent-medium-grey cursor-pointer hover:text-beautyagent-dark-grey transition-colors">
                      <Plus className="h-4 w-4 mr-1" />
                      <span className="text-sm">New Message</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
            
            {/* Main chat area */}
            <div className="md:col-span-3 flex flex-col">
              <Card className="glass-card p-4 mb-4 flex-grow">
                <div className="mb-4 border-b border-beautyagent-light-grey pb-2 flex justify-between items-center">
                  <h2 className="text-xl font-light tracking-wider flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    {channels.find(c => c.id === activeChannel)?.name || 'Chat'}
                  </h2>
                  <div className="text-sm text-beautyagent-medium-grey">
                    {messages.length} messages
                  </div>
                </div>
                
                <div className="overflow-y-auto h-[60vh] px-2">
                  {messages.map((msg, index) => (
                    <div 
                      key={msg.id} 
                      className={`mb-4 ${msg.user.id === 'you' ? 'ml-auto max-w-[80%]' : 'mr-auto max-w-[80%]'}`}
                    >
                      <div 
                        className={`glass-card p-3 animate-chat-bubble ${
                          msg.user.id === 'you' 
                            ? 'bg-beautyagent-light-grey border-beautyagent-light-grey ml-auto' 
                            : 'bg-white border-white'
                        }`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <div className="flex items-center mb-1">
                          <Avatar className="h-6 w-6 mr-2">
                            <img src={msg.user.avatar} alt={msg.user.name} />
                          </Avatar>
                          <span className="text-sm font-medium">
                            {msg.user.id === 'you' ? 'You' : msg.user.name}
                          </span>
                          <span className="text-xs text-beautyagent-medium-grey ml-2">
                            {formatTimestamp(msg.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm">{msg.text}</p>
                        
                        {/* Reactions */}
                        {msg.reactions.length > 0 && (
                          <div className="flex gap-1 mt-2">
                            {[...new Set(msg.reactions)].map((reaction) => (
                              <button 
                                key={reaction} 
                                className="bg-beautyagent-light-grey/50 rounded-full px-2 py-0.5 text-xs"
                                onClick={() => addReaction(msg.id, reaction)}
                              >
                                {reaction} {msg.reactions.filter(r => r === reaction).length}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Reaction buttons */}
                      <div className="flex justify-end mt-1 gap-1">
                        <button 
                          className="text-beautyagent-medium-grey hover:text-beautyagent-accent transition-colors"
                          onClick={() => addReaction(msg.id, '❤️')}
                        >
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>
                
                <div className="mt-4">
                  <div className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      variant="notebook"
                      enableAutocorrect={true}
                      className="flex-grow focus-animation"
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      variant="default"
                      className="glass-button"
                      disabled={!message.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 mt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs flex-grow"
                      onClick={shareProduct}
                    >
                      Share Product
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs flex-grow"
                      onClick={shareEntry}
                    >
                      Share Diary Entry
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs"
                    >
                      <Image className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautyExchange;
