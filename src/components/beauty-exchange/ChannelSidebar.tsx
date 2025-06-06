
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Users, User, Plus } from "lucide-react";
import { Channel, DirectMessage } from "@/types/chat";

interface ChannelSidebarProps {
  channels: Channel[];
  directMessages: DirectMessage[];
  activeChannel: string;
  onChannelSelect: (channelId: string) => void;
}

export const ChannelSidebar = ({ 
  channels, 
  directMessages, 
  activeChannel, 
  onChannelSelect 
}: ChannelSidebarProps) => {
  return (
    <Card className="glass-card p-4 mb-4">
      <div className="mb-4">
        <h2 className="text-lg font-light tracking-wider mb-2 flex items-center">
          <Users className="h-4 w-4 mr-2" />
          Community Channels
        </h2>
        <ul className="space-y-2">
          {channels.map(channel => (
            <li key={channel.id} 
                className={`flex items-center justify-between p-2 rounded-lg transition-colors
                         ${activeChannel === channel.id ? 'bg-beautyagent-light-grey' : ''}`}
                style={{ cursor: 'pointer !important' }}
                onClick={() => onChannelSelect(channel.id)}>
              <span className="flex items-center" style={{ cursor: 'pointer !important' }}>
                <span className="text-sm" style={{ cursor: 'pointer !important' }}># {channel.name}</span>
              </span>
              {channel.unread > 0 && (
                <span className="bg-beautyagent-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-badge-pulse"
                      style={{ cursor: 'pointer !important' }}>
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
                className="flex items-center justify-between p-2 rounded-lg transition-colors"
                style={{ cursor: 'pointer !important' }}>
              <span className="flex items-center" style={{ cursor: 'pointer !important' }}>
                <span className="relative" style={{ cursor: 'pointer !important' }}>
                  <Avatar className="h-6 w-6 mr-2" style={{ cursor: 'pointer !important' }}>
                    <img src={dm.avatar} alt={dm.name} style={{ cursor: 'pointer !important' }} />
                  </Avatar>
                  <span className={`absolute bottom-0 right-1 h-2 w-2 rounded-full ${dm.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}
                        style={{ cursor: 'pointer !important' }}></span>
                </span>
                <span className="text-sm" style={{ cursor: 'pointer !important' }}>{dm.name}</span>
              </span>
              {dm.unread > 0 && (
                <span className="bg-beautyagent-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-badge-pulse"
                      style={{ cursor: 'pointer !important' }}>
                  {dm.unread}
                </span>
              )}
            </li>
          ))}
          <li className="flex items-center p-2 text-beautyagent-medium-grey transition-colors"
              style={{ cursor: 'pointer !important' }}>
            <Plus className="h-4 w-4 mr-1" style={{ cursor: 'pointer !important' }} />
            <span className="text-sm" style={{ cursor: 'pointer !important' }}>New Message</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};
