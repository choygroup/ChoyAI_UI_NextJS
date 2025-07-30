import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Menu, Send, Paperclip, Search, Sparkles } from "lucide-react";

interface ChatInterfaceProps {
  onMenuToggle: () => void;
}

export function ChatInterface({ onMenuToggle }: ChatInterfaceProps) {
  const [message, setMessage] = useState("");

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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="md:hidden"
          >
            <Menu className="size-4" />
          </Button>
          <h1 className="text-xl font-bold">Chat</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 size-4" />
            <Input 
              placeholder="Search conversations..." 
              className="pl-10 w-64 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400"
            />
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <main className="flex-1 p-6">
        <div className="max-w-[1600px] mx-auto h-full flex flex-col items-center justify-center">

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
        </div>
      </main>
    </div>
  );
}