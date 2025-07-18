import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { 
  Search, 
  Menu, 
  Paperclip, 
  Send, 
  Sparkles,
  TrendingUp,
  Image,
  Code,
  Lightbulb
} from "lucide-react";

interface ChatInterfaceProps {
  onMenuToggle: () => void;
}

const suggestionButtons = [
  { 
    text: "What's the latest tech trend?", 
    icon: TrendingUp,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  { 
    text: "How does this work?", 
    icon: Lightbulb,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  { 
    text: "Generate an image of a cat", 
    icon: Image,
    gradient: "from-green-500/20 to-teal-500/20"
  },
  { 
    text: "Generate a REST API with Express.js", 
    icon: Code,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  { 
    text: "What's the best UX for onboarding?", 
    icon: Sparkles,
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
];

export function ChatInterface({ onMenuToggle }: ChatInterfaceProps) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="md:hidden"
          >
            <Menu className="size-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="size-6 bg-primary rounded-md flex items-center justify-center">
              <Sparkles className="size-3 text-primary-foreground" />
            </div>
            <span className="font-medium">Choy AI Sidebar V2</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-muted rounded-md text-sm text-muted-foreground">
            <Search className="size-4" />
            <span>Search...</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
        {/* Welcome Message */}
        <div className="text-center space-y-2 mb-8">
          <div className="size-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="size-8 text-primary" />
          </div>
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Ask me anything...
          </h1>
          <p className="text-muted-foreground max-w-md">
            I'm here to help you with any questions or tasks you have in mind.
          </p>
        </div>

        {/* Chat Input */}
        <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
          <div className="flex items-center space-x-2 p-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <Paperclip className="size-4" />
            </Button>
            <Input
              placeholder="Ask me anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="size-4" />
            </Button>
          </div>
        </Card>

        {/* Suggestion Buttons */}
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl">
          {suggestionButtons.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleSuggestionClick(suggestion.text)}
              className={`
                relative overflow-hidden border-border/50 hover:border-border
                bg-gradient-to-r ${suggestion.gradient}
                hover:shadow-lg transition-all duration-200
                backdrop-blur-sm
              `}
            >
              <suggestion.icon className="mr-2 size-4" />
              {suggestion.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}