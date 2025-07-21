import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Menu, Plus, MoreHorizontal, Archive } from "lucide-react";

const taskSections = [
  {
    title: "Maintain",
    count: 4,
    tasks: [
      { text: "clean room", time: "Yesterday 1 PM" },
      { text: "organise phone gallery" },
      { text: "organize notion" },
      { text: "organize drive" },
    ],
  },
  {
    title: "Update",
    count: 2,
    tasks: [
      { text: "renew passport" },
      { text: "bring diploma certificate" },
    ],
  },
  {
    title: "Projects",
    count: 2,
    tasks: [
      { text: "buy a wp theme at $32", subtext: "for nasim" },
      { text: "deposit 5k in crypto fund", subtext: "for raihan" },
    ],
  },
  {
    title: "Someday",
    count: 4,
    tasks: [
      { text: "photoshoot by ariful" },
      { text: "resume bsc" },
      { text: "visit garments", subtext: "for choy wear" },
      { text: "get a driving licence" },
    ],
  },
];

interface ToDoProps {
  onMenuToggle: () => void;
}

export function ToDo({ onMenuToggle }: ToDoProps) {
  return (
    <div className="flex-1 flex flex-col h-full bg-background text-foreground">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="md:hidden"
          >
            <Menu className="size-4" />
          </Button>
          <h1 className="text-xl font-bold">TO DO</h1>
        </div>
        <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Archive className="mr-2 size-4" />
                +1 archived section
            </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {taskSections.map((section) => (
          <div key={section.title} className="space-y-4">
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
                <Card key={index} className="bg-card/50">
                  <CardContent className="p-3 flex items-start space-x-3">
                    <Checkbox id={`task-${index}`} className="mt-1" />
                    <div className="flex-1">
                      <label htmlFor={`task-${index}`} className="text-sm font-medium">{task.text}</label>
                      {task.time && <p className="text-xs text-red-500">{task.time}</p>}
                      {task.subtext && <p className="text-xs text-muted-foreground">{task.subtext}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
              <Plus className="mr-2 size-4" />
              Add task
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
} 