import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
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
  User
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
  {
    icon: StickyNote, // Reuse or pick a suitable icon
    label: "Notes",
    href: "#",
    tooltip: "Your notes and knowledge base",
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
    tooltip: "Google Tasks",
    comingSoon: false
  },
  { 
    icon: StickyNote, 
    label: "Notes", 
    href: "#", 
    tooltip: "Google Keep",
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
        <Tooltip key={item.label}>
          <TooltipTrigger asChild>
            <Button
              variant={isCurrentlyActive ? "secondary" : "ghost"}
              className={`w-full justify-start text-left h-auto py-2 px-3 transition-colors duration-200 ${
                isCurrentlyActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              onClick={() => onNavigate(item)}
            >
              <item.icon className="mr-3 size-4 flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border">
            <p>{item.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      );
    });
  };

  return (
    <TooltipProvider>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 z-50 h-full w-80 bg-sidebar border-r border-sidebar-border
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:z-0
        flex-shrink-0
        overflow-x-hidden
      `}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border flex-shrink-0">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="size-8 bg-sidebar-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="size-4 text-sidebar-primary-foreground" />
              </div>
              <span className="text-sidebar-foreground font-semibold">Choy AI</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="md:hidden text-sidebar-foreground hover:bg-sidebar-accent flex-shrink-0"
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 min-h-0">
            {/* Core AI Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 Core AI
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(coreAIItems)}
              </nav>
            </div>

            <Separator className="my-2 mx-4" />

            {/* Productivity Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 Productivity
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(productivityItems)}
              </nav>
            </div>

            <Separator className="my-2 mx-4" />

            {/* Business & Finance Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 Business &amp; Finance
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(businessFinanceItems)}
              </nav>
            </div>

            <Separator className="my-2 mx-4" />

            {/* AI Utility Agents Section */}
            <div className="px-4">
              <div className="px-3 py-1.5 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 AI Utility Agents
              </div>
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(aiUtilityItems)}
              </nav>
            </div>
          </div>

          {/* Bottom section - Fixed at bottom */}
          <div className="border-t border-sidebar-border p-3 flex-shrink-0">
            {/* User Profile */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2"
                  onClick={onProfileClick}
                >
                  <Avatar className="size-8 mr-3">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                      AC
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start min-w-0">
                    <span className="text-sm font-medium">Alex Chen</span>
                    <span className="text-xs text-sidebar-foreground/70">Premium User</span>
                  </div>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border">
                <p>User profile and settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}