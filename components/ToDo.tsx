import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Menu, Plus, MoreHorizontal, Archive, Search, Inbox, Calendar, CheckCircle, MoreVertical, ChevronDown, Bell } from "lucide-react";

// --- MOCK DATA ---

interface Task {
    text: string;
    time?: string;
    subtext?: string;
}

const topNavItems = [
    { icon: Inbox, label: "Inbox" },
    { icon: Calendar, label: "Today", count: 1 },
    { icon: Calendar, label: "Upcoming" },
    { icon: CheckCircle, label: "Completed" },
    { icon: MoreVertical, label: "More" },
];

const projects = [
    { name: "To Do", count: 12, active: true },
    { name: "CART", count: 17 },
    { name: "GOALS", count: 7 },
    { name: "VISION", count: 5 },
    { name: "SUPPORT", count: 2 },
];

const taskSections: { title: string; count: number; tasks: Task[] }[] = [
    { title: "Maintain", count: 4, tasks: [
        { text: "clean room", time: "Yesterday 1 PM" },
        { text: "organise phone gallery" },
        { text: "organize notion" },
        { text: "organize drive" },
    ]},
    { title: "Update", count: 2, tasks: [
        { text: "renew passport" },
        { text: "bring diploma certificate" },
    ]},
    { title: "Projects", count: 2, tasks: [
        { text: "buy a wp theme at $32", subtext: "for nasim" },
        { text: "deposit 5k in crypto fund", subtext: "for raihan" },
    ]},
    { title: "Someday", count: 4, tasks: [
        { text: "photoshoot by ariful" },
        { text: "resume bsc" },
        { text: "visit garments", subtext: "for choy wear" },
        { text: "get a driving licence" },
    ]},
];

// --- COMPONENT ---
interface ToDoProps {
  onMenuToggle: () => void;
}

export function ToDo({ onMenuToggle }: ToDoProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground w-full">
        {/* To-Do Sidebar */}
        <aside className="w-80 bg-background border-r border-border flex-shrink-0 flex flex-col p-6 space-y-4">
            <Input placeholder="Search" className="bg-background border-border w-full" />
            <Button variant="secondary" className="w-full">
                <Plus className="mr-2 size-4" /> Add task
            </Button>
            
            <nav className="flex-1 space-y-4 overflow-y-auto pt-4">
                <ul className="space-y-1">
                    {topNavItems.map(item => (
                        <li key={item.label}>
                            <a href="#" className="flex items-center space-x-3 text-muted-foreground hover:bg-accent/10 px-2 py-1.5 rounded-md text-sm">
                                <item.icon className="size-4" />
                                <span>{item.label}</span>
                                {item.count && <span className="ml-auto text-xs bg-muted/50 text-muted-foreground px-1.5 rounded-full">{item.count}</span>}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="pt-4">
                    <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-2">My Projects <span className="text-xs ml-1">USED: 5/5</span></h3>
                    <ul className="space-y-1">
                        {projects.map(project => (
                             <li key={project.name}>
                                <a href="#" className={`flex items-center space-x-3 text-sm px-2 py-1.5 rounded-md ${project.active ? 'bg-destructive/90 text-destructive-foreground' : 'text-muted-foreground hover:bg-accent/10'}`}>
                                    <span className="font-mono text-muted-foreground">#</span>
                                    <span>{project.name}</span>
                                    <span className="ml-auto text-xs text-muted-foreground">{project.count}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col w-full">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center space-x-4">
                    <h1 className="text-lg font-semibold text-foreground">Task</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <Archive className="mr-2 size-4" />
                        +1 archived section
                    </Button>
                </div>
            </div>

            {/* Task Board */}
            <div className="flex-1 p-6 w-full">
                
                {/* Task Board */}
                <div className="flex gap-6 overflow-x-auto pb-4 min-w-0">
                    {taskSections.map((section) => (
                    <div key={section.title} className="space-y-4 min-w-[300px] flex-shrink-0">
                        <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <h2 className="font-semibold">{section.title}</h2>
                            <span className="text-sm text-muted-foreground">{section.count}</span>
                        </div>
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <MoreHorizontal className="size-4" />
                        </Button>
                        </div>
                        <div className="space-y-2">
                        {section.tasks.map((task, index) => (
                            <Card key={index} className="bg-card border-border">
                            <CardContent className="p-3 flex items-start space-x-3">
                                <Checkbox id={`task-${section.title}-${index}`} className="mt-1 border-border" />
                                <div className="flex-1">
                                <label htmlFor={`task-${section.title}-${index}`} className="text-sm font-medium">{task.text}</label>
                                {task.time && <p className="text-xs text-red-500 mt-1">{task.time}</p>}
                                {task.subtext && <p className="text-xs text-muted-foreground mt-1">{task.subtext}</p>}
                                </div>
                            </CardContent>
                            </Card>
                        ))}
                        </div>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground hover:text-foreground">
                        <Plus className="mr-2 size-4" />
                        Add task
                        </Button>
                    </div>
                    ))}
                    
                    {/* Add New Section Button */}
                    <div className="min-w-[300px] flex-shrink-0 flex items-center justify-center">
                      <Button variant="outline" className="w-full h-32 border-dashed border-border text-muted-foreground hover:text-foreground hover:border-foreground">
                        <Plus className="mr-2 size-4" />
                        Add section
                      </Button>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
} 