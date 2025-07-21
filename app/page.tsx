"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { ToDo } from "@/components/ToDo";
import { News } from "@/components/News";
import { ComingSoon } from "@/components/ComingSoon";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState("chat");
  const [selectedItem, setSelectedItem] = useState({ label: "Chat / Talk", tooltip: "Choy AI, your personal assistant" });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (item: any) => {
    setSelectedItem(item);
    if (item.label === "Tasks / To-Do") {
      setCurrentView("todo");
    } else if (item.label === "News") {
      setCurrentView("news");
    } else if (item.comingSoon) {
      setCurrentView("coming-soon");
    } else {
      setCurrentView("chat");
    }
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleProfileClick = () => {
    setSelectedItem({ label: "Profile Settings", tooltip: "User profile and settings" });
    setCurrentView("coming-soon");
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "chat":
        return <ChatInterface onMenuToggle={toggleSidebar} />;
      case "todo":
        return <ToDo onMenuToggle={toggleSidebar} />;
      case "news":
        return <News onMenuToggle={toggleSidebar} />;
      case "coming-soon":
        return (
          <ComingSoon 
            onMenuToggle={toggleSidebar}
            title={selectedItem.label}
            description={selectedItem.tooltip}
          />
        );
      default:
        return <ChatInterface onMenuToggle={toggleSidebar} />;
    }
  };

  return (
    <div className="dark">
      <div className="flex h-screen bg-background text-foreground overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={toggleSidebar}
          onNavigate={handleNavigation}
          onProfileClick={handleProfileClick}
          currentView={currentView}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}