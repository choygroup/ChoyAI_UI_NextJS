import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
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
  Crown,
  ArrowRight
} from "lucide-react";

// Core AI Section
const coreAIItems = [
  { 
    icon: MessageSquare, 
    label: "Chat / Talk", 
    href: "#", 
    tooltip: "Choy AI, your personal assistant",
    active: true 
  },
];

// Productivity Section
const productivityItems = [
  { 
    icon: Calendar, 
    label: "Reminders / Calendar", 
    href: "#", 
    tooltip: "Google Calendar" 
  },
  { 
    icon: CheckSquare, 
    label: "Tasks / To-Do", 
    href: "#", 
    tooltip: "Google Tasks" 
  },
  { 
    icon: StickyNote, 
    label: "Notes", 
    href: "#", 
    tooltip: "Google Keep" 
  },
  { 
    icon: Cloud, 
    label: "Cloud Drive", 
    href: "#", 
    tooltip: "Google Drive" 
  },
  { 
    icon: Newspaper, 
    label: "News", 
    href: "#", 
    tooltip: "Latest category-wise news + AI summarizer" 
  },
  { 
    icon: Mail, 
    label: "Mail", 
    href: "#", 
    tooltip: "Gmail API + GPT-4o drafting engine" 
  },
  { 
    icon: MessageCircle, 
    label: "Messaging Hub", 
    href: "#", 
    tooltip: "FB, IG, LI, X, Telegram, WhatsApp" 
  },
  { 
    icon: Share2, 
    label: "Social Media", 
    href: "#", 
    tooltip: "FB, IG, LI, X for AI content generation" 
  },
];

// Business & Finance Section
const businessFinanceItems = [
  { 
    icon: DollarSign, 
    label: "Finance", 
    href: "#", 
    tooltip: "Your accounts manager + AI assistant" 
  },
  { 
    icon: FolderKanban, 
    label: "Projects", 
    href: "#", 
    tooltip: "Trello or ClickUp + AI assistant" 
  },
  { 
    icon: TrendingUp, 
    label: "Trading", 
    href: "#", 
    tooltip: "Your expert trading AI assistant" 
  },
];

// AI Utility Agents Section
const aiUtilityItems = [
  { 
    icon: Phone, 
    label: "Call Agent", 
    href: "#", 
    tooltip: "Your AI assistant on call ~ $0.006/min" 
  },
  { 
    icon: Globe, 
    label: "Online Agent", 
    href: "#", 
    tooltip: "Uber, Booking, etc. + AI assistant" 
  },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
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
        fixed left-0 top-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:z-0
      `}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <div className="flex items-center space-x-2">
              <div className="size-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="size-4 text-sidebar-primary-foreground" />
              </div>
              <span className="text-sidebar-foreground font-semibold">Choy AI Sidebar V2</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="md:hidden text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <X className="size-4" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            {/* Core AI Section */}
            <div className="px-3">
              <div className="px-3 py-2 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 Core AI
              </div>
              <nav className="space-y-1">
                {coreAIItems.map((item) => (
                  <Tooltip key={item.label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant={item.active ? "secondary" : "ghost"}
                        className={`w-full justify-start ${
                          item.active 
                            ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90" 
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                        asChild
                      >
                        <a href={item.href}>
                          <item.icon className="mr-3 size-4" />
                          {item.label}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border">
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </nav>
            </div>

            <Separator className="my-4 mx-3" />

            {/* Productivity Section */}
            <div className="px-3">
              <div className="px-3 py-2 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 Productivity
              </div>
              <nav className="space-y-1">
                {productivityItems.map((item) => (
                  <Tooltip key={item.label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        asChild
                      >
                        <a href={item.href}>
                          <item.icon className="mr-3 size-4" />
                          {item.label}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border">
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </nav>
            </div>

            <Separator className="my-4 mx-3" />

            {/* Business & Finance Section */}
            <div className="px-3">
              <div className="px-3 py-2 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 Business &amp; Finance
              </div>
              <nav className="space-y-1">
                {businessFinanceItems.map((item) => (
                  <Tooltip key={item.label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        asChild
                      >
                        <a href={item.href}>
                          <item.icon className="mr-3 size-4" />
                          {item.label}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border">
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </nav>
            </div>

            <Separator className="my-4 mx-3" />

            {/* AI Utility Agents Section */}
            <div className="px-3">
              <div className="px-3 py-2 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                🔹 AI Utility Agents
              </div>
              <nav className="space-y-1">
                {aiUtilityItems.map((item) => (
                  <Tooltip key={item.label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        asChild
                      >
                        <a href={item.href}>
                          <item.icon className="mr-3 size-4" />
                          {item.label}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-border">
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom section */}
          <div className="p-4 space-y-4">
            {/* Upgrade Card */}
            <Card className="bg-gradient-to-br from-sidebar-primary/10 to-sidebar-primary/5 border-sidebar-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="size-4 text-sidebar-primary" />
                  <span className="text-sm font-medium text-sidebar-foreground">Upgrade to Pro</span>
                </div>
                <p className="text-xs text-sidebar-foreground/70 mb-3">
                  Get your free AI save all dashboards, templates and estimators for life.
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground"
                >
                  Get Choy UI Kit
                  <ArrowRight className="ml-2 size-3" />
                </Button>
              </CardContent>
            </Card>

            {/* User Avatar */}
            <div className="flex items-center justify-end">
              <Avatar className="size-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                  U
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}