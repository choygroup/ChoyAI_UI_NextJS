import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import {
  MessageSquare,
  Calendar,
  CheckSquare,
  StickyNote,
  Cloud,
  Newspaper,
  Mail,
  MessageCircle,
  Share2,
  DollarSign,
  FolderKanban,
  TrendingUp,
  Phone,
  Globe,
  Menu,
  X,
  User,
  ChevronRight
} from "lucide-react";

// Core AI Section
const coreAIItems = [
  { 
    icon: MessageSquare, 
    label: "Chat / Talk", 
    href: "#", 
    tooltip: "Choy AI, your personal assistant",
    active: true,
    comingSoon: false
  },
];

// Productivity Section
const productivityItems = [
  { 
    icon: Calendar, 
    label: "Reminders / Calendar", 
    href: "#", 
    tooltip: "Google Calendar",
    comingSoon: true
  },
  { 
    icon: CheckSquare, 
    label: "Tasks / To-Do", 
    href: "#", 
    tooltip: "Tasks",
    comingSoon: false
  },
  { 
    icon: StickyNote, 
    label: "Notes", 
    href: "#", 
    tooltip: "Notes",
    comingSoon: true
  },
  { 
    icon: Cloud, 
    label: "Cloud Drive", 
    href: "#", 
    tooltip: "Google Drive",
    comingSoon: true
  },
  { 
    icon: Newspaper, 
    label: "News", 
    href: "#", 
    tooltip: "Latest category-wise news + AI summarizer",
    comingSoon: false
  },
  { 
    icon: Mail, 
    label: "Mail", 
    href: "#", 
    tooltip: "Gmail API + GPT-4o drafting engine",
    comingSoon: true
  },
  { 
    icon: MessageCircle, 
    label: "Messaging Hub", 
    href: "#", 
    tooltip: "FB, IG, LI, X, Telegram, WhatsApp",
    comingSoon: true
  },
  { 
    icon: Share2, 
    label: "Social Media", 
    href: "#", 
    tooltip: "FB, IG, LI, X for AI content generation",
    comingSoon: true
  },
];

// Business & Finance Section
const businessFinanceItems = [
  { 
    icon: DollarSign, 
    label: "Finance", 
    href: "#", 
    tooltip: "Your accounts manager + AI assistant",
    comingSoon: true
  },
  { 
    icon: FolderKanban, 
    label: "Projects", 
    href: "#", 
    tooltip: "Trello or ClickUp + AI assistant",
    comingSoon: true
  },
  { 
    icon: TrendingUp, 
    label: "Trading", 
    href: "#", 
    tooltip: "Your expert trading AI assistant",
    comingSoon: true
  },
];

// AI Utility Agents Section
const aiUtilityItems = [
  { 
    icon: Phone, 
    label: "Call Agent", 
    href: "#", 
    tooltip: "Your AI assistant on call ~ $0.006/min",
    comingSoon: true
  },
  { 
    icon: Globe, 
    label: "Online Agent", 
    href: "#", 
    tooltip: "Uber, Booking, etc. + AI assistant",
    comingSoon: true
  },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (item: any) => void;
  onProfileClick: () => void;
  currentView: string;
}

export function Sidebar({ isOpen, onToggle, onNavigate, onProfileClick, currentView }: SidebarProps) {
  const allItems = [...coreAIItems, ...productivityItems, ...businessFinanceItems, ...aiUtilityItems];

  const renderNavItems = (items: any[]) => {
    return items.map((item) => {
      const isCurrentlyActive = (currentView === "chat" && item.label === "Chat / Talk") || 
                               (currentView === "todo" && item.label === "Tasks / To-Do") ||
                               (currentView === "news" && item.label === "News") ||
                               (currentView === "notes" && item.label === "Notes");
      
      return (
        <Button
          key={item.label}
          variant="ghost"
          className={`w-full justify-start text-left h-auto py-2 px-3 transition-colors duration-200 ${
            isCurrentlyActive
              ? "bg-black/40 text-foreground"
              : "hover:bg-black/30 hover:text-foreground"
          }`}
          onClick={() => onNavigate(item)}
        >
          <item.icon className="mr-3 size-4 flex-shrink-0" />
          <span className="text-sm">{item.label}</span>
        </Button>
      );
    });
  };

  return (
    <div className="h-full relative">
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar Container */}
      <div className="fixed inset-y-0 left-0 z-40">
        {/* Main Sidebar */}
        <div className={`
          relative h-full w-80 bg-zinc-950 border-r border-border
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Chevron Icon */}
          <button
            className={`absolute -right-8 top-1/2 -translate-y-1/2 h-12 w-8
              bg-zinc-950 rounded-r border-r border-t border-b border-border
              flex items-center justify-center z-50`}
            onClick={onToggle}
          >
            <ChevronRight
              className={`text-foreground/70 size-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Sidebar Content */}
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="size-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="size-4 text-foreground" />
              </div>
              <span className="text-foreground font-semibold">Choy AI</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="md:hidden text-foreground hover:bg-accent/10 flex-shrink-0"
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 min-h-0">
            {/* Core AI Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 Core AI
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(coreAIItems)}
              </nav>
            </div>

            <Separator className="my-2 mx-4 bg-border" />

            {/* Productivity Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 Productivity
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(productivityItems)}
              </nav>
            </div>

            <Separator className="my-2 mx-4 bg-border" />

            {/* Business & Finance Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 Business &amp; Finance
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(businessFinanceItems)}
              </nav>
            </div>

            <Separator className="my-2 mx-4 bg-border" />

            {/* AI Utility Agents Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 AI Utility Agents
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(aiUtilityItems)}
              </nav>
            </div>
          </div>

          {/* Bottom section - Fixed at bottom */}
          <div className="border-t border-border p-3 flex-shrink-0 bg-accent/50">
            {/* User Profile */}
            <Button
              variant="ghost"
              className="w-full justify-start text-foreground p-3 rounded-lg hover:bg-transparent"
              onClick={onProfileClick}
            >
              <Avatar className="size-10 mr-3 ring-2 ring-border">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-accent text-foreground font-semibold">
                  AC
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start min-w-0">
                <span className="text-sm font-semibold text-foreground hover:text-foreground">Alex Chen</span>
                <span className="text-xs text-muted-foreground hover:text-muted-foreground">Premium User</span>
              </div>
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}