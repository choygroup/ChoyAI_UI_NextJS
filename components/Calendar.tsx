import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { 
  Menu, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  HelpCircle, 
  Settings, 
  Calendar as CalendarIcon, 
  CheckSquare, 
  Grid3X3, 
  User,
  Moon,
  Plus,
  ChevronUp,
  ChevronDown,
  MoreHorizontal
} from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  allDay?: boolean;
  calendar: string;
  color: string;
  tentative?: boolean;
}

interface CalendarView {
  type: 'month' | 'week' | 'schedule';
  label: string;
}

const calendarViews: CalendarView[] = [
  { type: 'month', label: 'Month' },
  { type: 'week', label: 'Week' },
  { type: 'schedule', label: 'Schedule' }
];

const events: CalendarEvent[] = [
  { id: '1', title: 'GP Sim (Postpaid Bill)', date: '2025-08-08', calendar: 'Shanchoy Noor', color: 'red' },
  { id: '2', title: 'Janmashtami', date: '2025-08-16', allDay: true, calendar: 'Birthdays', color: 'green' },
  { id: '3', title: 'Akhari Chahar Somba', date: '2025-08-20', allDay: true, tentative: true, calendar: 'Birthdays', color: 'green' },
  { id: '4', title: 'EMI-BB (10,600tk)', date: '2025-08-25', calendar: 'Tasks', color: 'red' },
  { id: '5', title: 'Google Drive (150tk)', date: '2025-08-27', calendar: 'Tasks', color: 'blue' },
  { id: '6', title: 'VPS Server-Contabo ($5)', date: '2025-08-30', calendar: 'Tasks', color: 'blue' },
  { id: '7', title: 'Pay Shubroto', date: '2025-09-04', calendar: 'Tasks', color: 'orange' },
  { id: '8', title: 'Rent (12,00tk)', date: '2025-09-05', calendar: 'Tasks', color: 'green' },
  { id: '9', title: 'Eid e-Milad-un Nabi', date: '2025-09-05', allDay: true, tentative: true, calendar: 'Birthdays', color: 'green' },
  { id: '10', title: 'Madhu Purnima', date: '2025-09-06', allDay: true, calendar: 'Birthdays', color: 'green' },
  { id: '11', title: 'Pay Shobuj', date: '2025-09-07', calendar: 'Tasks', color: 'orange' },
  { id: '12', title: 'GP Sim (Postpaid Bill)', date: '2025-09-08', calendar: 'Tasks', color: 'blue' },
  { id: '13', title: 'Mahalaya', date: '2025-09-21', allDay: true, calendar: 'Birthdays', color: 'green' },
  { id: '14', title: 'EMI-BB (10,600tk)', date: '2025-09-25', calendar: 'Tasks', color: 'red' },
];

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const monthDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

interface CalendarProps {
  onMenuToggle: () => void;
}

export function Calendar({ onMenuToggle }: CalendarProps) {
  const [currentView, setCurrentView] = useState<CalendarView>(calendarViews[0]);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 8)); // August 8, 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 7, 8));

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      red: 'bg-red-500',
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      orange: 'bg-orange-500',
      purple: 'bg-purple-500'
    };
    return colorMap[color] || 'bg-gray-500';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getWeekNumber = (date: Date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
  };

  const renderMonthView = () => (
    <div className="grid grid-cols-7 gap-px bg-border rounded-lg overflow-hidden">
      {/* Header */}
      {weekDays.map(day => (
        <div key={day} className="bg-accent/20 p-3 text-center text-sm font-medium text-muted-foreground">
          {day}
        </div>
      ))}
      
      {/* Calendar Grid */}
      {Array.from({ length: 35 }, (_, i) => {
        const date = new Date(2025, 7, 1);
        date.setDate(date.getDate() + i - date.getDay() + 1);
        const isCurrentMonth = date.getMonth() === 7; // August
        const isToday = date.getDate() === 8 && date.getMonth() === 7; // Aug 8
        const dayEvents = events.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate.getDate() === date.getDate() && 
                 eventDate.getMonth() === date.getMonth() && 
                 eventDate.getFullYear() === date.getFullYear();
        });
        
        return (
          <div key={i} className={`bg-background min-h-[120px] p-2 ${!isCurrentMonth ? 'opacity-40' : ''}`}>
            <div className={`text-sm mb-2 ${isToday ? 'bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold' : 'text-foreground'}`}>
              {date.getDate()}
            </div>
            <div className="space-y-1">
              {dayEvents.slice(0, 3).map(event => (
                <div key={event.id} className={`text-xs p-1 rounded ${getColorClass(event.color)} text-white truncate`}>
                  {event.title}
                </div>
              ))}
              {dayEvents.length > 3 && (
                <div className="text-xs text-muted-foreground">
                  +{dayEvents.length - 3} more
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderWeekView = () => (
    <div className="grid grid-cols-8 gap-px bg-border rounded-lg overflow-hidden">
      {/* Time column */}
      <div className="bg-accent/20">
        <div className="h-12 p-2 text-xs text-muted-foreground font-medium">GMT+06</div>
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} className="h-12 border-b border-border text-xs text-muted-foreground p-2">
            {i === 0 ? '12 AM' : i < 12 ? `${i} AM` : i === 12 ? '12 PM' : `${i - 12} PM`}
          </div>
        ))}
      </div>
      
      {/* Day columns */}
      {Array.from({ length: 7 }, (_, i) => {
        const date = new Date(2025, 7, 4 + i); // Starting from Aug 4 (Monday)
        const isToday = date.getDate() === 8; // Aug 8
        const dayEvents = events.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate.getDate() === date.getDate() && 
                 eventDate.getMonth() === date.getMonth() && 
                 eventDate.getFullYear() === date.getFullYear();
        });
        
        return (
          <div key={i} className="bg-background">
            <div className={`h-12 border-b border-border p-2 text-center ${isToday ? 'bg-blue-500/10' : ''}`}>
              <div className="text-xs text-muted-foreground">{weekDays[i]}</div>
              <div className={`text-sm font-medium ${isToday ? 'bg-blue-500 text-white w-6 h-6 rounded-full mx-auto flex items-center justify-center' : ''}`}>
                {date.getDate()}
              </div>
            </div>
            {Array.from({ length: 24 }, (_, hour) => (
              <div key={hour} className="h-12 border-b border-border relative">
                {dayEvents.map(event => (
                  <div key={event.id} className={`absolute left-1 right-1 top-1 bottom-1 ${getColorClass(event.color)} text-white text-xs p-1 rounded`}>
                    {event.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );

  const renderScheduleView = () => (
    <div className="space-y-1">
      {events
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map(event => {
          const eventDate = new Date(event.date);
          const isToday = eventDate.getDate() === 8 && eventDate.getMonth() === 7;
          return (
            <div key={event.id} className={`flex items-center space-x-4 p-3 hover:bg-accent/10 rounded-lg ${isToday ? 'bg-blue-500/5 border-l-4 border-blue-500' : ''}`}>
              <div className="text-sm text-muted-foreground min-w-[100px]">
                <div className="font-medium">
                  {eventDate.getDate()}
                </div>
                <div className="text-xs">
                  {eventDate.toLocaleDateString('en-US', { 
                    month: 'short',
                    weekday: 'short'
                  }).toUpperCase()}
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${getColorClass(event.color)} flex-shrink-0`}></div>
              <div className="text-sm text-muted-foreground min-w-[80px]">
                {event.allDay ? 'All day' : event.time || ''}
              </div>
              <div className="flex-1 text-sm">
                {event.title}
                {event.tentative && <span className="text-muted-foreground ml-2">(tentative)</span>}
              </div>
            </div>
          );
        })}
    </div>
  );

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
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Today
          </Button>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ChevronRight className="size-4" />
            </Button>
          </div>
          <span className="font-medium min-w-[200px]">
            {currentView.type === 'month' && formatDate(currentDate)}
            {currentView.type === 'week' && `${formatDate(currentDate)} Week ${getWeekNumber(currentDate)}`}
            {currentView.type === 'schedule' && 'Aug - Dec 2025'}
          </span>
          <select 
            value={currentView.type}
            onChange={(e) => {
              const selectedView = calendarViews.find(v => v.type === e.target.value);
              if (selectedView) setCurrentView(selectedView);
            }}
            className="bg-background border border-border rounded px-3 py-1 text-sm"
          >
            {calendarViews.map(view => (
              <option key={view.type} value={view.type}>
                {view.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="flex-1 p-6 overflow-auto">
        {currentView.type === 'month' && renderMonthView()}
        {currentView.type === 'week' && renderWeekView()}
        {currentView.type === 'schedule' && renderScheduleView()}
      </div>
    </div>
  );
} 