import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { 
  Search, 
  Menu, 
  Sparkles,
  Clock,
  ArrowLeft
} from "lucide-react";

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
            <div className="size-6 bg-primary rounded-md flex items-center justify-center">
              <Sparkles className="size-3 text-primary-foreground" />
            </div>
            <span className="font-medium">Choy AI</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-muted rounded-md text-sm text-muted-foreground">
            <Search className="size-4" />
            <span>Search...</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
        {/* Coming Soon Message */}
        <div className="text-center space-y-6 max-w-2xl">
          <div className="size-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="size-10 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </h1>
            <h2 className="text-xl text-muted-foreground">
              Coming Soon...
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              {description}
            </p>
          </div>

          <Card className="w-full max-w-lg bg-card/50 backdrop-blur-sm border-border/50 shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="size-5 text-primary" />
                <span className="font-medium">Feature in Development</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                We're working hard to bring you this amazing feature. Stay tuned for updates and be the first to experience the future of AI-powered productivity tools.
              </p>
              <div className="flex items-center space-x-2 pt-2">
                <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Development in progress</span>
              </div>
            </div>
          </Card>

          {/* Back to Chat Button */}
          <Button 
            variant="outline"
            className="mt-6"
            onClick={() => window.location.reload()}
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Chat
          </Button>
        </div>
      </div>
    </div>
  );
}