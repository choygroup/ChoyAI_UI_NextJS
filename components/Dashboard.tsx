"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Calendar, 
  Phone, 
  Bell, 
  Settings, 
  Minimize2, 
  Maximize2, 
  Plus,
  Search,
  Clock,
  Mail,
  User,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  GripVertical
} from "lucide-react";

interface DashboardProps {
  onMenuToggle: () => void;
}

interface DashboardCard {
  id: string;
  title: string;
  type: 'schedule' | 'phoneCalls' | 'reminders' | 'notes' | 'notifications' | 'emailBriefing';
  content: React.ReactNode;
}

// Mock data for dashboard widgets
const scheduleData = [
  { time: "6AM", event: "Morning Routine" },
  { time: "7AM", event: "Team Meeting", current: true },
  { time: "8AM", event: "Project Review" },
  { time: "9AM", event: "Client Call" },
  { time: "10AM", event: "Break" }
];

const phoneCallsData = [
  { name: "You", status: "Completed", date: "Yesterday", icon: Phone },
  { name: "You", status: "Completed", date: "Wednesday", icon: Phone },
  { name: "You", status: "Completed", date: "Monday", icon: Phone },
  { name: "You", status: "Missed", date: "Friday", icon: Phone }
];

const remindersData = [
  { time: "2:30 PM", text: "Submit project proposal" },
  { time: "5:00 PM", text: "Team standup meeting" }
];

const notesData = [
  { title: "Software Design Patterns - Essential Guide", content: "Singleton, Factory, Observer patterns..." }
];

const notificationsData = [
  {
    title: "Login successfully",
    content: "Dear Customer, You successfully logged in to BRAC Bank...",
    type: "success"
  },
  {
    title: "AI Automation Society (Skool)",
    content: "1 new notification since 9:09 pm (Aug 7, 2025)",
    type: "info"
  }
];

export function Dashboard({ onMenuToggle }: DashboardProps) {
  const [currentTime] = useState("7AM");
  const [activeTab, setActiveTab] = useState("upcoming");
  
  // Initialize cards with localStorage persistence
  const [cards, setCards] = useState<DashboardCard[]>(() => {
    // Try to load saved card order from localStorage
    if (typeof window !== 'undefined') {
      const savedOrder = localStorage.getItem('dashboard-card-order');
      if (savedOrder) {
        try {
          const savedIds = JSON.parse(savedOrder);
          const defaultCards = [
            {
              id: "schedule",
              title: "Schedule",
              type: "schedule",
              content: (
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Schedule</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Minimize2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative flex-1">
                    <div className="overflow-y-auto h-full pr-2">
                      {scheduleData.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 mb-3">
                          <div className={`text-sm font-medium w-12 ${item.current ? 'text-red-500' : 'text-muted-foreground'}`}>
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <div className={`text-sm ${item.current ? 'text-red-500 font-medium' : ''}`}>
                              {item.event}
                            </div>
                            {item.current && (
                              <div className="w-full h-0.5 bg-red-500 mt-1 relative">
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button size="sm" className="absolute bottom-0 right-0">
                      <Plus className="size-4 mr-1" />
                      Event +
                    </Button>
                  </div>
                </div>
              )
            },
            {
              id: "phoneCalls",
              title: "Phone Calls",
              type: "phoneCalls",
              content: (
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Phone Calls</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Minimize2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-3">
                    {phoneCallsData.map((call, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="size-8">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              <User className="size-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">{call.name}</div>
                            <div className="text-xs text-muted-foreground">{call.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="size-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{call.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button size="sm" className="w-full mt-4">
                    <Plus className="size-4 mr-1" />
                    Call +
                  </Button>
                </div>
              )
            },
            {
              id: "reminders",
              title: "Reminders",
              type: "reminders",
              content: (
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Reminders</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Minimize2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex space-x-1">
                      <Button 
                        variant={activeTab === "upcoming" ? "default" : "ghost"} 
                        size="sm"
                        onClick={() => setActiveTab("upcoming")}
                      >
                        Upcoming
                      </Button>
                      <Button 
                        variant={activeTab === "past" ? "default" : "ghost"} 
                        size="sm"
                        onClick={() => setActiveTab("past")}
                      >
                        Past
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    {activeTab === "upcoming" ? (
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">
                          No upcoming reminders. Tell Martin to set a reminder. He'll send you a text message then.
                        </p>
                        {remindersData.map((reminder, index) => (
                          <div key={index} className="flex items-center space-x-3 mb-2">
                            <Clock className="size-4 text-muted-foreground" />
                            <div>
                              <div className="text-sm font-medium">{reminder.time}</div>
                              <div className="text-sm text-muted-foreground">{reminder.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">
                        No past reminders
                      </div>
                    )}
                  </div>
                  
                  <Button size="sm" className="w-full mt-4">
                    <Plus className="size-4 mr-1" />
                    Reminder +
                  </Button>
                </div>
              )
            },
            {
              id: "notes",
              title: "Notes",
              type: "notes",
              content: (
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Notes</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Minimize2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search notes" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <select className="text-sm border rounded px-2 py-1 bg-background">
                        <option>Normal</option>
                      </select>
                      <Button variant="ghost" size="sm" className="font-bold">B</Button>
                      <Button variant="ghost" size="sm" className="italic">I</Button>
                      <Button variant="ghost" size="sm" className="underline">U</Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-2">
                    {notesData.map((note, index) => (
                      <div key={index} className="p-3 border rounded-lg bg-accent/20">
                        <div className="text-sm font-medium">{note.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">{note.content}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            },
            {
              id: "notifications",
              title: "Notifications",
              type: "notifications",
              content: (
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                    <Button variant="ghost" size="sm">
                      <Bell className="size-4" />
                    </Button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {notificationsData.map((notification, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium">{notification.title}</div>
                          <Button variant="ghost" size="sm">
                            <Mail className="size-4" />
                          </Button>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {notification.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            },
            {
              id: "emailBriefing",
              title: "Email Briefing",
              type: "emailBriefing",
              content: (
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Email Briefing</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="size-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Minimize2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">
                        Daily Briefing: Calendar Reminder and Key Global News Highlights
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">Updated 20h ago</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Daily Briefing for Thursday, August 7, 2025
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Calendar Events</h4>
                      <div className="p-3 border rounded-lg bg-accent/20">
                        <div className="text-sm font-medium">Pay Shobuj</div>
                        <div className="text-xs text-muted-foreground">Time: All day</div>
                        <div className="text-xs text-muted-foreground">Details: No additional description provided</div>
                        <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                          View Event
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          ];
          
          // If we have saved order, reorder the cards accordingly
          if (savedOrder) {
            const reorderedCards = savedIds.map((id: string) => 
              defaultCards.find(card => card.id === id)
            ).filter(Boolean) as DashboardCard[];
            
            // Add any missing cards (in case new cards were added)
            const missingCards = defaultCards.filter(card => 
              !savedIds.includes(card.id)
            );
            
            return [...reorderedCards, ...missingCards];
          }
          
          return defaultCards;
        } catch (error) {
          console.error('Error parsing saved card order:', error);
        }
      }
    }
    
    // Default cards if no saved order or error
    return [
      {
        id: "schedule",
        title: "Schedule",
        type: "schedule",
        content: (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Schedule</h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Settings className="size-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Minimize2 className="size-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative flex-1">
              <div className="overflow-y-auto h-full pr-2">
                {scheduleData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-3">
                    <div className={`text-sm font-medium w-12 ${item.current ? 'text-red-500' : 'text-muted-foreground'}`}>
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm ${item.current ? 'text-red-500 font-medium' : ''}`}>
                        {item.event}
                      </div>
                      {item.current && (
                        <div className="w-full h-0.5 bg-red-500 mt-1 relative">
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <Button size="sm" className="absolute bottom-0 right-0">
                <Plus className="size-4 mr-1" />
                Event +
              </Button>
            </div>
          </div>
        )
      },
      {
        id: "phoneCalls",
        title: "Phone Calls",
        type: "phoneCalls",
        content: (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Phone Calls</h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Settings className="size-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Minimize2 className="size-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3">
              {phoneCallsData.map((call, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="size-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        <User className="size-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{call.name}</div>
                      <div className="text-xs text-muted-foreground">{call.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="size-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{call.status}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Button size="sm" className="w-full mt-4">
              <Plus className="size-4 mr-1" />
              Call +
            </Button>
          </div>
        )
      },
      {
        id: "reminders",
        title: "Reminders",
        type: "reminders",
        content: (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Reminders</h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Settings className="size-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Minimize2 className="size-4" />
                </Button>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex space-x-1">
                <Button 
                  variant={activeTab === "upcoming" ? "default" : "ghost"} 
                  size="sm"
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </Button>
                <Button 
                  variant={activeTab === "past" ? "default" : "ghost"} 
                  size="sm"
                  onClick={() => setActiveTab("past")}
                >
                  Past
                </Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {activeTab === "upcoming" ? (
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    No upcoming reminders. Tell Martin to set a reminder. He'll send you a text message then.
                  </p>
                  {remindersData.map((reminder, index) => (
                    <div key={index} className="flex items-center space-x-3 mb-2">
                      <Clock className="size-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">{reminder.time}</div>
                        <div className="text-sm text-muted-foreground">{reminder.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground">
                  No past reminders
                </div>
              )}
            </div>
            
            <Button size="sm" className="w-full mt-4">
              <Plus className="size-4 mr-1" />
              Reminder +
            </Button>
          </div>
        )
      },
      {
        id: "notes",
        title: "Notes",
        type: "notes",
        content: (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Notes</h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Settings className="size-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Minimize2 className="size-4" />
                </Button>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                <Input 
                  placeholder="Search notes" 
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <select className="text-sm border rounded px-2 py-1 bg-background">
                  <option>Normal</option>
                </select>
                <Button variant="ghost" size="sm" className="font-bold">B</Button>
                <Button variant="ghost" size="sm" className="italic">I</Button>
                <Button variant="ghost" size="sm" className="underline">U</Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2">
              {notesData.map((note, index) => (
                <div key={index} className="p-3 border rounded-lg bg-accent/20">
                  <div className="text-sm font-medium">{note.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{note.content}</div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "notifications",
        title: "Notifications",
        type: "notifications",
        content: (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <Button variant="ghost" size="sm">
                <Bell className="size-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4">
              {notificationsData.map((notification, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">{notification.title}</div>
                    <Button variant="ghost" size="sm">
                      <Mail className="size-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {notification.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "emailBriefing",
        title: "Email Briefing",
        type: "emailBriefing",
        content: (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Email Briefing</h2>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Settings className="size-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Minimize2 className="size-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">
                  Daily Briefing: Calendar Reminder and Key Global News Highlights
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Updated 20h ago</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Daily Briefing for Thursday, August 7, 2025
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Calendar Events</h4>
                <div className="p-3 border rounded-lg bg-accent/20">
                  <div className="text-sm font-medium">Pay Shobuj</div>
                  <div className="text-xs text-muted-foreground">Time: All day</div>
                  <div className="text-xs text-muted-foreground">Details: No additional description provided</div>
                  <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                    View Event
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ];
  });
  
  // Save card order to localStorage whenever it changes
  const saveCardOrder = (newCards: DashboardCard[]) => {
    if (typeof window !== 'undefined') {
      const cardIds = newCards.map(card => card.id);
      localStorage.setItem('dashboard-card-order', JSON.stringify(cardIds));
    }
  };

  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    e.dataTransfer.setData('text/plain', cardId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetCardId: string) => {
    e.preventDefault();
    const draggedCardId = e.dataTransfer.getData('text/plain');
    
    if (draggedCardId === targetCardId) return;

    const draggedIndex = cards.findIndex(card => card.id === draggedCardId);
    const targetIndex = cards.findIndex(card => card.id === targetCardId);
    
    const newCards = [...cards];
    const [draggedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);
    
    setCards(newCards);
    saveCardOrder(newCards); // Save the new order to localStorage
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Main Dashboard Content */}
      <main className="flex-1 p-4 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onMenuToggle} className="md:hidden">
              <Calendar className="size-5" />
            </Button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Thursday, August 7, 2025</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-none">
          {cards.map((card, index) => (
            <Card 
              key={card.id}
              className="h-96 p-4 cursor-move hover:shadow-lg transition-shadow"
              draggable
              onDragStart={(e) => handleDragStart(e, card.id)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, card.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <GripVertical className="size-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">{card.title}</span>
                </div>
              </div>
              {card.content}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
} 