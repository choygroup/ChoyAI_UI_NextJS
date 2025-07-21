import { Button } from "./ui/button";
import { Menu } from "lucide-react";

interface ComingSoonProps {
  onMenuToggle: () => void;
  title: string;
  description: string;
}

export function ComingSoon({ onMenuToggle, title, description }: ComingSoonProps) {
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
          <div className="flex items-center space-x-2">
            <span className="font-medium">{title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Coming Soon</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working hard to bring you this feature. Stay tuned!
          </p>
          <p className="text-sm text-muted-foreground/80">{description}</p>
        </div>
      </div>
    </div>
  );
}