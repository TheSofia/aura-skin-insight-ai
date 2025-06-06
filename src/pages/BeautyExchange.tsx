import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import CustomCursor from "@/components/ui/CustomCursor";
import { ArrowLeft } from "lucide-react";
import { ChannelSidebar } from "@/components/beauty-exchange/ChannelSidebar";
import { ChatArea } from "@/components/beauty-exchange/ChatArea";
import { mockChannels, mockDirectMessages, mockMessages } from "@/data/mockChatData";
import { Channel, DirectMessage, Message } from "@/types/chat";

const BeautyExchange = () => {
  const navigate = useNavigate();
  const [activeChannel, setActiveChannel] = useState('glow');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [channels, setChannels] = useState<Channel[]>(mockChannels);
  const [directMessages, setDirectMessages] = useState<DirectMessage[]>(mockDirectMessages);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage: Message = {
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
        const responseMessage: Message = {
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
              Synaptic Flow
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar for channels and DMs */}
            <div className="md:col-span-1">
              <ChannelSidebar
                channels={channels}
                directMessages={directMessages}
                activeChannel={activeChannel}
                onChannelSelect={setActiveChannel}
              />
            </div>
            
            {/* Main chat area */}
            <div className="md:col-span-3 flex flex-col">
              <ChatArea
                activeChannel={activeChannel}
                channels={channels}
                messages={messages}
                message={message}
                onMessageChange={setMessage}
                onSendMessage={handleSendMessage}
                onAddReaction={addReaction}
                onShareProduct={shareProduct}
                onShareEntry={shareEntry}
                formatTimestamp={formatTimestamp}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautyExchange;
