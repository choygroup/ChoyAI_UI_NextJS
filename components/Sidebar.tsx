import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Switch } from "./ui/switch";
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
  Settings,
  Bell,
  Palette,
  Languages,
  Volume2,
  HelpCircle,
  LogOut,
  ChevronDown,
  Shield,
  Database,
  Smartphone
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
    comingSoon: false
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
  const { logout } = useAuth();
  
  // Settings state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("general");
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  
  const [settings, setSettings] = useState({
    theme: "dark",
    accentColor: "default",
    language: "auto-detect",
    spokenLanguage: "english",
    voice: "maple",
    followUpSuggestions: true,
    notifications: true,
    dataSharing: false
  });

  const renderNavItems = (items: any[]) => {
    return items.map((item) => {
      const isCurrentlyActive = (currentView === "chat" && item.label === "Chat / Talk") || 
                               (currentView === "todo" && item.label === "Tasks / To-Do") ||
                               (currentView === "news" && item.label === "News") ||
                               (currentView === "notes" && item.label === "Notes") ||
                               (currentView === "calendar" && item.label === "Reminders / Calendar");
      
      return (
        <Button
          key={item.label}
          variant="ghost"
          className={`w-full ${isOpen ? 'justify-start' : 'justify-center'} text-left h-auto py-2 px-3 transition-colors duration-200 ${
            isCurrentlyActive
              ? "bg-black/40 text-foreground"
              : "hover:bg-black/30 hover:text-foreground"
          }`}
          onClick={() => onNavigate(item)}
          title={!isOpen ? item.label : undefined}
        >
          <item.icon className={`${isOpen ? 'mr-3' : ''} size-4 flex-shrink-0`} />
          {isOpen && <span className="text-sm">{item.label}</span>}
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
          relative h-full bg-zinc-950 border-r border-border
          transition-all duration-300 ease-in-out
          ${isOpen ? 'w-80' : 'w-16'}
        `}>


          {/* Sidebar Content */}
          <div className="flex flex-col h-full">
            {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
            <div className="flex items-center space-x-3 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-foreground hover:bg-accent/10 flex-shrink-0"
              >
                <Menu className="size-4" />
              </Button>
              {isOpen && (
                <>
                  <div className="size-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="size-4 text-foreground" />
              </div>
                  <span className="text-foreground font-semibold">Choy AI</span>
                </>
              )}
            </div>
            {isOpen && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
                className="text-foreground hover:bg-accent/10 flex-shrink-0"
            >
              <X className="size-4" />
            </Button>
            )}
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 min-h-0">
            {/* Core AI Section */}
            <div className={isOpen ? "px-4" : "px-2"}>
              {isOpen && (
                <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 Core AI
              </div>
              )}
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(coreAIItems)}
              </nav>
            </div>

            {isOpen && <Separator className="my-2 mx-4 bg-border" />}

            {/* Productivity Section */}
            <div className={isOpen ? "px-4" : "px-2"}>
              {isOpen && (
                <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 Productivity
              </div>
              )}
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(productivityItems)}
              </nav>
            </div>

            {isOpen && <Separator className="my-2 mx-4 bg-border" />}

            {/* Business & Finance Section */}
            <div className={isOpen ? "px-4" : "px-2"}>
              {isOpen && (
                <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 Business &amp; Finance
              </div>
              )}
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(businessFinanceItems)}
              </nav>
            </div>

            {isOpen && <Separator className="my-2 mx-4 bg-border" />}

            {/* AI Utility Agents Section */}
            <div className={isOpen ? "px-4" : "px-2"}>
              {isOpen && (
                <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                🔹 AI Utility Agents
              </div>
              )}
              <nav className="space-y-0.5 mb-2">
                {renderNavItems(aiUtilityItems)}
              </nav>
            </div>
          </div>

          {/* Bottom section - Fixed at bottom */}
          <div className="border-t border-border p-3 flex-shrink-0 bg-accent/50">
            {/* User Profile with Settings */}
            <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
              <DialogTrigger asChild>
            <Button
              variant="ghost"
                  className={`w-full ${isOpen ? 'justify-start' : 'justify-center'} text-foreground p-3 rounded-lg hover:bg-transparent`}
                  title={!isOpen ? "Shanchoy Noor - Settings" : undefined}
            >
                  <Avatar className={`${isOpen ? 'mr-3' : ''} size-10 ring-2 ring-border`}>
                <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-accent text-foreground font-semibold">
                      SN
                </AvatarFallback>
              </Avatar>
                  {isOpen && (
              <div className="flex flex-col items-start min-w-0">
                      <span className="text-sm font-semibold text-foreground hover:text-foreground">Shanchoy Noor</span>
                      <span className="text-xs text-muted-foreground hover:text-muted-foreground">shanchoyzone@gmail.com</span>
                    </div>
                  )}
                </Button>
              </DialogTrigger>
              
              {/* Settings Modal */}
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden p-0">
                <div className="flex h-[600px]">
                  {/* Settings Sidebar */}
                  <div className="w-64 border-r border-border bg-muted/10">
                    <DialogHeader className="p-6 pb-4">
                      <DialogTitle className="text-lg font-semibold">Settings</DialogTitle>
                    </DialogHeader>
                    
                    <div className="px-3 space-y-1">
                      {[
                        { id: "general", label: "General", icon: Settings },
                        { id: "notifications", label: "Notifications", icon: Bell },
                        { id: "personalization", label: "Personalization", icon: Palette },
                        { id: "apps", label: "Connected apps", icon: Smartphone },
                        { id: "data", label: "Data controls", icon: Database },
                        { id: "security", label: "Security", icon: Shield },
                        { id: "account", label: "Account", icon: User }
                      ].map((tab) => (
                        <Button
                          key={tab.id}
                          variant="ghost"
                          className={`w-full justify-start text-sm h-10 ${
                            activeSettingsTab === tab.id ? "bg-accent text-accent-foreground" : ""
                          }`}
                          onClick={() => setActiveSettingsTab(tab.id)}
                        >
                          <tab.icon className="size-4 mr-3" />
                          {tab.label}
                        </Button>
                      ))}
                    </div>
                    
                    <Separator className="my-4 mx-3" />
                    
                    <div className="px-3 space-y-1">
                      <Button variant="ghost" className="w-full justify-start text-sm h-10">
                        <HelpCircle className="size-4 mr-3" />
                        Help
                        <ChevronDown className="size-4 ml-auto" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-sm h-10 text-red-400 hover:text-red-300 hover:bg-red-950/20"
                        onClick={() => setLogoutDialogOpen(true)}
                      >
                        <LogOut className="size-4 mr-3" />
                        Log out
                      </Button>
                    </div>
                  </div>
                  
                  {/* Settings Content */}
                  <div className="flex-1 overflow-y-auto">
                    {activeSettingsTab === "general" && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">General</h2>
                        
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Theme</label>
                            </div>
                            <Button variant="outline" className="text-sm">
                              Dark <ChevronDown className="size-4 ml-2" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Accent color</label>
                            </div>
                            <Button variant="outline" className="text-sm">
                              Default <ChevronDown className="size-4 ml-2" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Language</label>
                            </div>
                            <Button variant="outline" className="text-sm">
                              Auto-detect <ChevronDown className="size-4 ml-2" />
                            </Button>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <label className="text-sm font-medium">Spoken language</label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  For best results, select the language you mainly speak. If it's not listed,
                                  it may still be supported via auto-detection.
                                </p>
                              </div>
                              <Button variant="outline" className="text-sm">
                                English <ChevronDown className="size-4 ml-2" />
                              </Button>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <label className="text-sm font-medium">Voice</label>
              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Volume2 className="size-4 mr-2" />
                                  Play
                                </Button>
                                <Button variant="outline" className="text-sm">
                                  Maple <ChevronDown className="size-4 ml-2" />
            </Button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Show follow up suggestions in chats</label>
                            </div>
                            <Switch 
                              checked={settings.followUpSuggestions}
                              onCheckedChange={(checked) => 
                                setSettings(prev => ({ ...prev, followUpSuggestions: checked }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeSettingsTab === "notifications" && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Notifications</h2>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Enable notifications</label>
                              <p className="text-xs text-muted-foreground mt-1">
                                Get notified about new messages and updates
                              </p>
                            </div>
                            <Switch 
                              checked={settings.notifications}
                              onCheckedChange={(checked) => 
                                setSettings(prev => ({ ...prev, notifications: checked }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeSettingsTab === "data" && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Data controls</h2>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Share data for improvements</label>
                              <p className="text-xs text-muted-foreground mt-1">
                                Help improve our AI by sharing your conversations
                              </p>
                            </div>
                            <Switch 
                              checked={settings.dataSharing}
                              onCheckedChange={(checked) => 
                                setSettings(prev => ({ ...prev, dataSharing: checked }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Other tabs content */}
                    {activeSettingsTab === "personalization" && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Personalization</h2>
                        <p className="text-muted-foreground">Personalization settings coming soon...</p>
                      </div>
                    )}
                    
                    {activeSettingsTab === "apps" && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Connected apps</h2>
                        <p className="text-muted-foreground">No connected apps yet.</p>
                      </div>
                    )}
                    
                    {activeSettingsTab === "security" && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Security</h2>
                        <p className="text-muted-foreground">Security settings coming soon...</p>
                      </div>
                    )}
                    
                    {activeSettingsTab === "account" && (
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Account</h2>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">Email</label>
                            <p className="text-sm text-muted-foreground">shanchoyzone@gmail.com</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Plan</label>
                            <p className="text-sm text-muted-foreground">Free</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          </div>
        </div>
      </div>
      
      {/* Logout Confirmation Dialog */}
      <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <DialogContent className="max-w-md p-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Are you sure you want to log out?</h3>
            <p className="text-sm text-muted-foreground">
              Log out of ChoyAI as<br />
              shanchoyzone@gmail.com?
            </p>
            
            <div className="space-y-3 pt-4">
                             <Button 
                 onClick={() => {
                   logout();
                   setLogoutDialogOpen(false);
                   setSettingsOpen(false);
                 }}
                 className="w-full bg-white text-black hover:bg-gray-100 border border-gray-300"
               >
                 Log out
               </Button>
              
              <Button 
                variant="outline"
                onClick={() => setLogoutDialogOpen(false)}
                className="w-full bg-transparent border-gray-600 text-foreground hover:bg-accent"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}