import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Menu, Search, Sun, Cloud, CloudRain, Star, Film, Clock, Calendar, ChevronRight, Newspaper } from "lucide-react";

// --- MOCK DATA ---
const navLinks = ["Home", "Local", "World", "Business", "Finance", "Technology", "Sports", "Entertainment", "Science"];

const cryptoPrices = [
  { name: "BTCUSDT", price: "$66,550.20", change: "+2.35%", isUp: true },
  { name: "ETHUSDT", price: "$3,198.45", change: "-0.45%", isUp: false },
  { name: "SOLUSDT", price: "$137.99", change: "+1.18%", isUp: true },
  { name: "BTCUSDT", price: "$66,550.20", change: "+2.35%", isUp: true },
  { name: "ETHUSDT", price: "$3,198.45", change: "-0.45%", isUp: false },
  { name: "SOLUSDT", price: "$137.99", change: "+1.18%", isUp: true },
];

const weatherData = {
  current: { temp: "24°", icon: Sun },
  cities: ["Dhaka", "Mumbai", "Tokyo", "New York"],
  forecast: [
    { day: "Wed", temp: "18°", icon: Cloud },
    { day: "Thu", temp: "22°", icon: CloudRain },
    { day: "Fri", temp: "25°", icon: Sun },
  ],
};

const liveScores = [
  {
    tournament: "ASIA CUP 2024",
    matchInfo: "9th Match, Super Four (D/L), Sep 2024, Colombo",
    team1: { name: "SL", score: "159-8", overs: "Overs 20", logo: "/sri-lanka-flag.png" },
    team2: { name: "BAN", score: "160-6", overs: "Overs 20", logo: "/bangladesh-flag.png" },
    status: "Need 24 Runs in 12 Balls",
  },
  {
    tournament: "PREMIER LEAGUE 2024",
    matchInfo: "England",
    team1: { name: "Arsenal", score: "2", logo: "/arsenal-logo.png" },
    team2: { name: "Aston Villa", score: "3", logo: "/aston-villa-logo.png" },
    status: "90:15",
  }
];

const nowPlaying = [
  { title: "Spiderman", rating: 9.5, genre: "Action", duration: "139 minutes", year: "2019", image: "/spiderman-poster.jpg" },
  { title: "Sonic The Hedgehog", rating: 9.5, genre: "Action", duration: "139 minutes", year: "2019", image: "/sonic-poster.jpg" },
  { title: "Segredos Dumbledore", rating: 9.5, genre: "Action", duration: "139 minutes", year: "2019", image: "/dumbledore-poster.jpg" },
  { title: "Cidade Perdida", rating: 9.5, genre: "Action", duration: "139 minutes", year: "2019", image: "/cidade-perdida-poster.jpg" },
];

const mainArticle = {
  title: "Big Tech is making its stuff slower and stupider on purpose",
  author: "Ed Zitron",
  time: "3 hours ago",
  image: "/tech-news-banner.jpg",
  insider: true
};

const headlines = [
  { source: "Axios", title: "Gunmen Attack Synagogues and Churches in Russian Republic", time: "3 hours ago", author: "Ed Zitron" },
  { source: "Axios", title: "Gunmen Attack Synagogues and Churches in Russian Republic", time: "3 hours ago", author: "Ed Zitron" },
  { source: "Axios", title: "Gunmen Attack Synagogues and Churches in Russian Republic", time: "3 hours ago", author: "Ed Zitron" },
];

const listArticles = [
    { source: "Reuters", title: "Big Tech is making its stuff slower and stupider — on purpose. Big Tech is making its stuff slower and stupider — on purpose", time:"Feb 28, 2023, 16:32 PM", author: "Ed Zitron", image: "/tech-news-small.jpg"},
    { source: "Reuters", title: "Big Tech is making its stuff slower and stupider — on purpose. Big Tech is making its stuff slower and stupider — on purpose", time:"Feb 28, 2023, 16:32 PM", author: "Ed Zitron", image: "/tech-news-small.jpg"},
    { source: "Reuters", title: "Big Tech is making its stuff slower and stupider — on purpose. Big Tech is making its stuff slower and stupider — on purpose", time:"Feb 28, 2023, 16:32 PM", author: "Ed Zitron", image: "/tech-news-small.jpg"},
];


// --- COMPONENT ---
interface NewsProps {
  onMenuToggle: () => void;
}

export function News({ onMenuToggle }: NewsProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div>
                <h1 className="text-2xl font-bold text-foreground">Choy News</h1>
                <p className="text-xs text-muted-foreground">Sunday, Jun 25, 2024</p>
            </div>
          </div>

          <div className="flex-1 px-8 hidden sm:flex justify-center">
            <div className="relative w-full max-w-md">
              <Input
                placeholder="Search"
                className="bg-background border-border rounded-full w-full text-foreground"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <p className="text-3xl font-bold text-foreground">{weatherData.current.temp}</p>
            <weatherData.current.icon className="size-8 text-yellow-400" />
            <div className="text-xs">
                <p className="text-foreground">{weatherData.cities.join(' • ')}</p>
                <div className="flex space-x-3 mt-1">
                    {weatherData.forecast.map((day, index) => (
                        <div key={index} className="flex items-center">
                            <day.icon className="size-5 mr-1 text-muted-foreground" />
                            <span className="text-foreground">{day.temp}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="border-y border-border">
            <div className="px-4 flex items-center space-x-6 text-sm text-muted-foreground overflow-x-auto">
              {navLinks.map((link) => (
                <a
                  href="#"
                  key={link}
                  className={`py-2 hover:text-foreground transition-colors relative whitespace-nowrap ${
                    link === "Home" ? "text-foreground" : ""
                  }`}
                >
                  {link}
                  {link === "Home" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
        </nav>

        {/* Crypto Ticker */}
        <div className="bg-accent/50 flex items-center p-2 border-b border-border overflow-hidden">
            <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-4 py-2 rounded-r-full -ml-2 mr-4 shrink-0">
                Crypto Price
            </span>
            <div className="flex-grow overflow-hidden whitespace-nowrap">
                <div className="flex animate-scroll space-x-6">
                    {[...cryptoPrices, ...cryptoPrices].map((crypto, index) => (
                    <div key={`crypto-${index}`} className="flex items-center space-x-2 text-xs shrink-0">
                        <span className="font-bold text-lg text-yellow-400">B</span>
                        <div>
                            <p className="text-muted-foreground">{crypto.name}</p>
                            <p className="font-semibold text-foreground">{crypto.price}</p>
                        </div>
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md ${crypto.isUp ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {crypto.isUp ? '▲' : '▼'} {crypto.change}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {/* Left/Main Content Area */}
          <div className="lg:col-span-2 xl:col-span-3 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-foreground flex items-center">
                    Latest News <ChevronRight className="size-5 mt-1" />
                </h2>
            </div>
          
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Featured Article */}
                <Card className="bg-card border-border rounded-lg overflow-hidden flex flex-col justify-end h-[300px] p-4 relative">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 to-black/20" />
                    <div className="relative z-10">
                        {mainArticle.insider && <span className="text-xs bg-blue-500 text-white font-semibold px-2 py-1 rounded-sm mb-2 inline-block">INSIDER</span>}
                        <h3 className="text-lg font-bold text-foreground">{mainArticle.title}</h3>
                        <p className="text-xs text-muted-foreground mt-2">{mainArticle.time} - {mainArticle.author}</p>
                    </div>
                </Card>

                {/* Headlines */}
                <Card className="bg-card border-border rounded-lg p-4 flex flex-col">
                    <div className="space-y-3 flex-1">
                    {headlines.map((headline, index) => (
                        <div key={index} className="border-b border-border pb-3 last:border-b-0">
                            <a href="#" className="hover:text-foreground">
                                <p className="text-xs text-blue-400 font-semibold">{headline.source}</p>
                                <h4 className="font-semibold text-foreground mt-1">{headline.title}</h4>
                                <p className="text-xs text-muted-foreground mt-1">{headline.time} - {headline.author}</p>
                            </a>
                        </div>
                    ))}
                    </div>
                    <Button variant="outline" className="mt-4 w-full border-border hover:bg-accent text-foreground">Full Coverage</Button>
                </Card>
            </div>

            {/* Article List */}
            <div className="space-y-4">
                {listArticles.map((article, index) => (
                    <Card key={index} className="bg-card border-border rounded-lg p-3 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-blue-400 font-semibold">{article.source}</p>
                            <h4 className="font-semibold text-foreground mt-1">{article.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{article.author} - {article.time}</p>
                        </div>
                        <div className="w-24 h-24 bg-accent rounded-md ml-4 flex items-center justify-center">
                          <Newspaper className="size-8 text-muted-foreground" />
                        </div>
                    </Card>
                ))}
            </div>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Live Scores */}
          <Card className="bg-card border-border p-4 rounded-lg relative">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-foreground">Live Scores</h3>
                <span className="flex items-center text-xs text-red-400 font-semibold">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5 animate-pulse"></span>
                    Live
                </span>
            </div>
            <div className="space-y-4">
              {liveScores.map((match, index) => (
                <div key={index}>
                  <p className="text-xs text-muted-foreground mb-2">{match.tournament} - {match.matchInfo}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">{match.team1.name}</span>
                        </div>
                        <span className="font-semibold">{match.team1.name}</span>
                        <span className="text-sm text-muted-foreground">{match.team1.overs}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">{match.team1.score}</span>
                  </div>
                  <div className="relative text-center my-1">
                    <span className="text-xs bg-accent text-foreground px-2 py-0.5 rounded-full z-10 relative">VS</span>
                    <Separator className="absolute top-1/2 -translate-y-1/2 w-full bg-border"/>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">{match.team2.name}</span>
                        </div>
                        <span className="font-semibold">{match.team2.name}</span>
                        <span className="text-sm text-muted-foreground">{match.team2.overs}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">{match.team2.score}</span>
                  </div>
                  <p className="text-xs text-orange-400 mt-2 text-center">{match.status}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Now Playing */}
          <Card className="bg-card border-border p-4 rounded-lg">
             <div className="flex items-center border-b border-border mb-4">
                <Button variant="ghost" className="text-foreground font-semibold border-b-2 border-foreground rounded-none">Now Playing</Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Upcoming</Button>
            </div>
            <div className="space-y-4">
              {nowPlaying.map((movie, index) => (
                <div key={index} className="flex space-x-4">
                    <div className="w-20 h-28 bg-accent rounded-md flex items-center justify-center">
                      <Film className="size-8 text-muted-foreground" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground">{movie.title}</h4>
                        <div className="text-xs text-muted-foreground mt-2 space-y-1">
                            <div className="flex items-center"><Star className="size-3 mr-1.5 text-yellow-400"/> {movie.rating}</div>
                            <div className="flex items-center"><Film className="size-3 mr-1.5"/> {movie.genre}</div>
                            <div className="flex items-center"><Clock className="size-3 mr-1.5"/> {movie.duration}</div>
                            <div className="flex items-center"><Calendar className="size-3 mr-1.5"/> {movie.year}</div>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 