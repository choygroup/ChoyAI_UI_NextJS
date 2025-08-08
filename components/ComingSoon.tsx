import { Button } from "./ui/button";
import { Menu, Clock, Sparkles, Calendar, Cloud, Mail, MessageCircle, Share2, DollarSign, FolderKanban, TrendingUp, Phone, Globe, StickyNote, Newspaper } from "lucide-react";
import { Card } from "./ui/card";

interface ComingSoonProps {
  onMenuToggle: () => void;
  title: string;
  description: string;
}

export function ComingSoon({ onMenuToggle, title, description }: ComingSoonProps) {
  // Function to get the appropriate icon based on the title
  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('calendar') || lowerTitle.includes('reminder')) return Calendar;
    if (lowerTitle.includes('cloud') || lowerTitle.includes('drive')) return Cloud;
    if (lowerTitle.includes('mail') || lowerTitle.includes('email')) return Mail;
    if (lowerTitle.includes('messaging') || lowerTitle.includes('hub')) return MessageCircle;
    if (lowerTitle.includes('social') || lowerTitle.includes('media')) return Share2;
    if (lowerTitle.includes('finance') || lowerTitle.includes('money')) return DollarSign;
    if (lowerTitle.includes('project')) return FolderKanban;
    if (lowerTitle.includes('trading')) return TrendingUp;
    if (lowerTitle.includes('call') || lowerTitle.includes('phone')) return Phone;
    if (lowerTitle.includes('online') || lowerTitle.includes('agent')) return Globe;
    if (lowerTitle.includes('note')) return StickyNote;
    if (lowerTitle.includes('news')) return Newspaper;
    return Clock; // Default icon
  };

  const IconComponent = getIcon(title);

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center space-x-4">
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="space-y-6 max-w-md mx-auto">
          {/* Category Icon */}
          <div className="flex justify-center mb-6">
            <div className="size-16 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-xl flex items-center justify-center shadow-lg">
              <IconComponent className="size-8 text-white" />
            </div>
          </div>
          
          {/* Title with Gradient */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">{title}</h1>
          
          {/* Coming Soon Text */}
          <p className="text-muted-foreground mb-2">Coming Soon...</p>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground">{description}</p>
          
          {/* Feature in Development Card */}
          <Card className="bg-card border-border p-6 mt-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="size-5 text-foreground" />
                <h3 className="font-semibold text-foreground">Feature in Development</h3>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                We're working hard to bring you this amazing feature. Stay tuned for updates and be the first to experience the future of AI-powered productivity tools.
              </p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                <span>Development in progress</span>
              </div>
            </div>
          </Card>
          

        </div>
      </div>
    </div>
  );
}