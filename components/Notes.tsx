import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Menu, Plus, Search, List, LayoutGrid } from "lucide-react";

const pinned = ["Youtube Learning", "FOUNDER-DEVELOPER AI MASTERY", "Training On FOUNDATIONAL (SUR)"];
const objects = ["Ideas", "Notes", "Data", "DevOps CLI", "Pages", "Weblinks", "Youtube Learning", "Youtube Watch", "Bookmarks"];
const notes = [
  {
    id: 1,
    title: "Complete AI Mastery Course: From Zero to Hero",
    tags: [],
    updated: "July 21, 2025, 01:50 AM",
    created: "July 21, 2025, 01:35 AM",
    content: "Course Overview\nA comprehensive 12-month program designed to transform beginners into AI practitioners with real-world application skills. This course combines theoretical foundations with hands-on projects and industry-relevant applications.\n\nPhase 1: Foundation & Mindset (Month 1)",
  },
  {
    id: 2,
    title: "FOUNDER-DEVELOPER AI MASTERY",
    tags: [],
    updated: "July 21, 2025, 01:51 AM",
    created: "July 21, 2025, 01:22 AM",
    content: "COMPLETE STEP-BY-STEP COURSE OUTLINE: PHASE 1: TECHNICAL FOUNDATIONS (Month 1-2)\nWeek 1-2: Programming Fundamentals\nPython basics: variables, functions, loops, conditionals\nData structures: lists, dictionaries, sets, tuples",
  },
  {
    id: 3,
    title: "CHOY AI SYSTEMS-DEVELOPMENT ROADMAP",
    tags: [],
    updated: "July 21, 2025, 01:20 AM",
    created: "July 21, 2025, 01:04 AM",
    content: "SHORT COURSE OUTLINE: MONTH 1: CORE ARCHITECTURE\nWeek 1-2: Advanced Python & Bot Framework\nAdvanced Telegram bot architecture with state management",
  },
  {
    id: 4,
    title: "Founding Full-Stack Developer - ChoyAI",
    tags: [],
    updated: "July 20, 2025, 05:25 PM",
    created: "July 20, 2025, 05:25 PM",
    content: "Build the Future of AI-Powered Productivity | Equity Opportunity\nAbout ChoyAI\nWe're building a revolutionary JARVIS-style AI assistant that automates life and supercharges productivity. ChoyAI integrates 14 smart modules (chat, calendar, email, crypto, tasks, ...)",
  },
  {
    id: 5,
    title: "Choy AI Essential Skills Requirements Matrix",
    tags: [],
    updated: "July 20, 2025, 05:16 PM",
    created: "July 20, 2025, 05:15 PM",
    content: "MUST-HAVE SKILLS ONLY (No Fluff)\nBackend Skills: Python 3.11+, FastAPI/Flask, SQLite\nFrontend Skills: Next.js, React.js, Tailwind CSS\nAI/ML: Prompt Engineering, ...",
  },
  {
    id: 6,
    title: "Python & AI Courses",
    tags: [],
    updated: "July 20, 2025, 05:01 PM",
    created: "July 20, 2025, 04:34 PM",
    content: "1. Basic To Advanced Python Masterclass\n2. MASTER MODERN DATABASES USING AI\n2a. SQL FOR DATA MANAGEMENT USING AI\n2b. NoSQL Using AI: Smarter, Scalable Data Management\n3. AGENTIC AI & AUTOMATION\n4. Generative AI Mastery\n5. AI-POWERED SOFTWARE DEVELOPMENT & TESTING",
  },
  {
    id: 7,
    title: "New AI Tools",
    tags: [],
    updated: "July 19, 2025, 09:00 PM",
    created: "July 19, 2025, 09:00 PM",
    content: "1. Portal\n2. Computer X",
  },
  {
    id: 8,
    title: "Feature Request for Google Tasks App",
    tags: [],
    updated: "July 19, 2025, 08:55 PM",
    created: "July 19, 2025, 08:55 PM",
    content: "Hi Google Tasks Team,\nThanks for building such a clean and reliable task manager! I use it daily, but here are a few key feature suggestions that could make the app significantly more powerful and user-friendly: 1. Dark Mode for Mobile App UI ...",
  },
  {
    id: 9,
    title: "AI Personalization",
    tags: [],
    updated: "July 19, 2025, 08:51 PM",
    created: "July 19, 2025, 06:49 PM",
    content: "I want ChatGPT to be my business and life mentor, sharp-minded friend, and no ...",
  },
  {
    id: 10,
    title: "Shahin's YT Details",
    tags: [],
    updated: "July 19, 2025, 06:53 PM",
    created: "July 19, 2025, 06:32 PM",
    content: "Channel URL: https://www.youtube.com/@dishti24bd\nChannel Mail: dishti24bd@gmail.com\nAdsense Mail: dishti24sports@gmail.com\nAdsense Owner Info: MOHAMMAD HOSSAIN\nVerified on May 16, 2025\nAddress: Asset Panorama, Flat-C2, 99/D, Boro Moghbazar, ...",
  },
];

const columns = ["Title", "Tags", "Last updated", "Created at"];

interface NotesProps {
  onMenuToggle: () => void;
}

export function Notes({ onMenuToggle }: NotesProps) {
  const [view, setView] = useState<'list' | 'card'>("list");

  return (
    <div className="flex min-h-screen bg-background text-foreground w-full">
      {/* Sidebar */}
      <aside className="w-80 bg-background border-r border-border flex-shrink-0 flex flex-col">
        <div className="p-4 border-b border-border">
          <Input placeholder="Search" className="bg-background border-border text-foreground" />
          <Button className="w-full mt-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground border-border" variant="secondary">
            <Plus className="mr-2 size-4" /> New note
          </Button>
        </div>
        <div className="p-4 border-b border-border">
          <div className="text-xs text-muted-foreground mb-2">Pinned</div>
          <ul className="space-y-1">
            {pinned.map((item) => (
              <li key={item} className="text-sm text-muted-foreground hover:bg-accent/10 rounded px-2 py-1 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="text-xs text-muted-foreground mb-2">Objects</div>
          <ul className="space-y-1">
            {objects.map((item) => (
              <li key={item} className="text-sm text-muted-foreground hover:bg-accent/10 rounded px-2 py-1 cursor-pointer flex items-center">
                <span className="mr-2">{item === "Notes" ? <span className="w-2 h-2 bg-blue-500 rounded-full inline-block mr-2" /> : null}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-t border-border text-xs text-muted-foreground">Tags</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16">
          <div className="flex items-center space-x-3">
            <h1 className="text-lg font-semibold text-foreground">Notes</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant={view === 'list' ? "secondary" : "ghost"} size="icon" onClick={() => setView('list')} className="hover:bg-accent/10"><List className="size-4" /></Button>
            <Button variant={view === 'card' ? "secondary" : "ghost"} size="icon" onClick={() => setView('card')} className="hover:bg-accent/10"><LayoutGrid className="size-4" /></Button>
            <Button variant="secondary" className="ml-2 bg-secondary hover:bg-secondary/80 border-border"><Plus className="mr-2 size-4" /> New</Button>
          </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 p-6 w-full">
          <div className="w-full">
          {view === 'list' ? (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 text-muted-foreground">
                    <th className="px-4 py-2 font-semibold border-b border-border">#</th>
                    {columns.map((col) => (
                      <th key={col} className="px-4 py-2 font-semibold border-b border-border">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {notes.map((note, idx) => (
                    <tr key={note.id} className="border-b border-border hover:bg-accent/10 transition-colors">
                      <td className="px-4 py-2 text-muted-foreground">{idx + 1}</td>
                      <td className="px-4 py-2 text-foreground font-medium cursor-pointer hover:underline">{note.title}</td>
                      <td className="px-4 py-2 text-muted-foreground">{note.tags.join(", ")}</td>
                      <td className="px-4 py-2 text-muted-foreground">{note.updated}</td>
                      <td className="px-4 py-2 text-muted-foreground">{note.created}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {notes.map((note) => (
                <Card key={note.id} className="bg-card border-border rounded-lg p-4 flex flex-col h-40 hover:bg-accent/10 transition-colors cursor-pointer">
                  <h2 className="font-semibold text-foreground text-sm mb-3 line-clamp-3 flex-1">{note.title}</h2>
                  <div className="mt-auto">
                    <span className="text-xs text-muted-foreground">{note.created}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
          </div>
        </div>
      </main>
    </div>
  );
} 