import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Menu, 
  Send, 
  Paperclip, 
  Search, 
  Sparkles, 
  Plus, 
  MoreHorizontal, 
  Mic, 
  Phone, 
  Video, 
  Monitor,
  Info,
  CheckSquare,
  VolumeX,
  Clock,
  Heart,
  X,
  ThumbsDown,
  CircleSlash,
  MinusCircle,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface ChatInterfaceProps {
  onMenuToggle: () => void;
}

// Mock data for personas and conversations
const personas = [
  {
    id: 'choy',
    name: 'Choy AI',
    description: 'Your personal AI assistant',
    avatar: '/placeholder-avatar.jpg',
    lastMessage: 'How can I help you today?',
    unreadCount: 0,
    isActive: true,
    time: 'now'
  },
  {
    id: 'tony',
    name: 'Tony Stark',
    description: 'Genius, billionaire, playboy, philanthropist',
    avatar: '/placeholder-avatar.jpg',
    lastMessage: "Let's build something amazing together!",
    unreadCount: 2,
    isActive: true,
    time: '2:30 PM'
  },
  {
    id: 'rose',
    name: 'Rose Dawson',
    description: 'From Titanic, elegant and inspiring',
    avatar: '/placeholder-avatar.jpg',
    lastMessage: 'A woman\'s heart is a deep ocean of secrets...',
    unreadCount: 1,
    isActive: true,
    time: 'Yesterday'
  }
];

const conversationHistory = [
  "New conversation",
  "AI Development Tips",
  "Project Planning Session",
  "Creative Writing Help",
  "Business Strategy",
  "Yesterday's Chat"
];

export function ChatInterface({ onMenuToggle }: ChatInterfaceProps) {
  const [message, setMessage] = useState("");
  const [selectedPersona, setSelectedPersona] = useState(personas[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border flex-shrink-0 flex flex-col">
        {/* Sidebar Header */}
        <div className="px-0 py-4 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground px-4">AI Personas</h2>
          </div>
        </div>

                {/* Personas Section */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-0 py-4">
                           <div className="space-y-0">
                {personas.map((persona) => (
                <div
                  key={persona.id}
                  className={`flex items-center space-x-3 p-4 cursor-pointer transition-colors ${
                    selectedPersona.id === persona.id
                      ? 'bg-accent/20'
                      : 'hover:bg-accent/10'
                  }`}
                  onClick={() => setSelectedPersona(persona)}
                >
                  <div className="relative">
                    <Avatar className="size-12">
                      <AvatarImage src={persona.avatar} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                        {persona.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {persona.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full size-5 flex items-center justify-center">
                        {persona.unreadCount}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground truncate">{persona.name}</h3>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{persona.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate flex-1">{persona.lastMessage}</p>
                      {persona.isActive && (
                        <div className="size-2 bg-green-500 rounded-full ml-2 flex-shrink-0"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>


      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="size-10">
              <AvatarImage src={selectedPersona.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                {selectedPersona.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
                           <div>
                 <h1 className="text-lg font-semibold">{selectedPersona.name}</h1>
                 <p className="text-xs text-muted-foreground">Online</p>
               </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" title="Audio call">
              <Phone className="size-5" />
            </Button>
            <Button variant="ghost" size="sm" title="Video call">
              <Video className="size-5" />
            </Button>
            <Button variant="ghost" size="sm" title="Screen share">
              <Monitor className="size-5" />
            </Button>
            <Button variant="ghost" size="sm" title="Search">
              <Search className="size-5" />
            </Button>
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" title="More options">
                  <MoreHorizontal className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Info className="size-4 mr-2" />
                  Contact info
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CheckSquare className="size-4 mr-2" />
                  Select messages
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <VolumeX className="size-4 mr-2" />
                  Mute notifications
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Clock className="size-4 mr-2" />
                  Disappearing messages
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="size-4 mr-2" />
                  Add to favorites
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <X className="size-4 mr-2" />
                  Close chat
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <ThumbsDown className="size-4 mr-2" />
                  Report
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CircleSlash className="size-4 mr-2" />
                  Block
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MinusCircle className="size-4 mr-2" />
                  Clear chat
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 className="size-4 mr-2" />
                  Delete chat
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto h-full flex flex-col">
            {/* Welcome Message */}
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="size-16">
                  <AvatarImage src={selectedPersona.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                    {selectedPersona.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h2 className="text-2xl font-bold">{selectedPersona.name}</h2>
                  <p className="text-sm text-muted-foreground">{selectedPersona.description}</p>
                </div>
              </div>

              <div className="space-y-3 max-w-md">
                <h1 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                  {selectedPersona.id === 'choy' ? 'Ask me anything...' : 
                   selectedPersona.id === 'tony' ? 'Ready to innovate?' :
                   'Let\'s have a meaningful conversation...'}
                </h1>
                <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                  {selectedPersona.id === 'choy' ? 'I\'m here to help you with any questions or tasks you have in mind.' :
                   selectedPersona.id === 'tony' ? 'Let\'s build something extraordinary together. What\'s your next big idea?' :
                   'Every conversation is a chance to discover something beautiful. What\'s on your mind?'}
                </p>
              </div>


            </div>

                         {/* Message Input */}
             <div className="mt-6">
               <div className="relative bg-secondary rounded-3xl border border-border/50 shadow-lg backdrop-blur-sm">
                 <div className="flex items-center px-4 py-3">
                   <Button variant="ghost" size="sm" className="size-8 p-0 mr-2">
                     <Plus className="size-5 text-muted-foreground" />
                   </Button>
                   <Input
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     onKeyPress={handleKeyPress}
                     placeholder={`Ask ${selectedPersona.name}`}
                     className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
                   />
                                        <div className="flex items-center space-x-2 ml-2">
                       <Button variant="ghost" size="sm" className="size-8 p-0">
                         <Paperclip className="size-4 text-muted-foreground" />
                       </Button>
                       <Button variant="ghost" size="sm" className="size-8 p-0">
                         <Mic className="size-4 text-muted-foreground" />
                       </Button>
                       <Button 
                         onClick={handleSendMessage}
                         size="sm" 
                         className="size-8 p-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                         disabled={!message.trim()}
                       >
                         <Send className="size-4" />
                       </Button>
                     </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </main>


    </div>
  );
}