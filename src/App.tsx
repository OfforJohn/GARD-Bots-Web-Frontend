import React, { useState } from "react";
import { Search, Star, ChevronDown, Sun, Moon, X, Menu } from "lucide-react";

interface Dashboard {
  title: string;
  author: string;
  time: string;
  tags?: string[];
  stars: number;
}

const dashboards: Dashboard[] = [
  {
    title: "Check Your Wallet Activity on OpenSea",
    author: "@defi_mago",
    time: "8 months ago",
    tags: [],
    stars: 32,
  },
  {
    title: "OpenSea - Cross-chain Activity + User rankings 🌊",
    author: "@sealaunch",
    time: "9 months ago",
    tags: ["OpenSea", "Ethereum", "Polygon"],
    stars: 535,
  },
  {
    title: "World Liberty Financial (WLFI) Lockbox Statistics and Price Predictions",
    author: "@nvthao",
    time: "3 days ago",
    tags: ["wlfi", "lockbox", "world liberty financial"],
    stars: 7,
  },
  {
    title: "Opensea Wallet Analyzer",
    author: "@iceweasel",
    time: "7 months ago",
    tags: ["opensea", "airdrop"],
    stars: 181,
  },
  {
    title: "Creditlink Presale on Four.Meme",
    author: "@defioasis",
    time: "9 hours ago",
    tags: ["creditlink", "fourmeme", "wlfi"],
    stars: 2,
  },
  {
    title: "Overview of Pokemon TCG RWA on SOL [Collector Crypt, Phygitals, Emporium]",
    author: "@zkayape",
    time: "3 days ago",
    tags: ["pokemon", "tcg", "rwa"],
    stars: 11,
  },
  {
    title: "simd-0326-voting-status",
    author: "@kagren0",
    time: "3 days ago",
    tags: [],
    stars: 3,
  },
];

const DiscoverPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar (always fixed on desktop) */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 transform transition-transform duration-300 z-40
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Dune
            </span>
            {/* Close button for mobile */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search */}
          <div className="px-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search dashboards, queries..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-lg text-sm 
                           placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white dark:focus:bg-gray-800 transition"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-2 px-4 text-sm">
            <a className="text-gray-700 dark:text-gray-200 font-medium">Discover</a>
            <a className="text-gray-500 dark:text-gray-400">@offor</a>
            <a className="text-gray-500 dark:text-gray-400">Profile</a>
            <a className="text-gray-500 dark:text-gray-400">Library</a>
            <a className="text-gray-500 dark:text-gray-400">Favorites</a>
            <a className="text-gray-500 dark:text-gray-400">Account</a>
            <a className="text-gray-500 dark:text-gray-400">Usage</a>
          </nav>

          {/* Bottom Section */}
          <div className="p-4 mt-auto space-y-2">
            <button className="w-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 py-2 rounded-lg font-medium">
              Create
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 rounded-lg font-medium"
            >
              {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-14 flex flex-col h-screen">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
            <header className="p-4 flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Discover
              </h1>
              {/* Right side: Search + Hamburger */}
              <div className="flex items-center space-x-3">
                {/* Search icon */}
               <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition block md:hidden">
    <Search className="w-5 h-5" />
  </button>

                {/* Hamburger (mobile only) */}
                <button
                  className="md:hidden p-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* Tabs */}
            <div className="flex space-x-6 px-6 text-sm border-b dark:border-gray-700">
              <button className="pb-2 border-b-2 border-orange-500 text-orange-500 font-medium">
                Dashboards
              </button>
              <button className="pb-2 text-gray-500 dark:text-gray-400">Queries</button>
              <button className="pb-2 text-gray-500 dark:text-gray-400">Creators</button>
              <button className="pb-2 text-gray-500 dark:text-gray-400">Blockchains</button>
            </div>

            {/* Trending Dropdown */}
            <div className="px-6 py-3 border-b dark:border-gray-700 flex items-center">
              <button className="flex items-center border px-3 py-1 rounded-md text-sm bg-white dark:bg-white hover:bg-gray-100 dark:hover:bg-gray-200 text-gray-700 dark:text-gray-900">
                Trending <ChevronDown className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dashboard List (scrollable content) */}
          <section className="flex-1 h-full w-full overflow-y-auto">
            {dashboards.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition p-4 border-b dark:border-gray-700"
              >
                <div>
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.author} • {item.time}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {item.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                  <span>{item.stars}</span>
                  <Star className="w-4 h-4" />
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default DiscoverPage;
