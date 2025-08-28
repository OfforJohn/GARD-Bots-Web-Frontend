import React from "react";
import { Search, Star, ChevronDown, Sun, Moon  } from "lucide-react";
import { useState } from "react";

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col">
          <div className="p-4 text-xl font-bold text-gray-900 dark:text-gray-100">
            Dune
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

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
            {/* Title */}
            <header className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Discover
              </h1>
            </header>

            {/* Tabs */}
            <div className="flex space-x-6 px-6 text-sm border-b dark:border-gray-700">
              <button className="pb-2 border-b-2 border-orange-500 text-orange-500 font-medium">
                Dashboards
              </button>
              <button className="pb-2 text-gray-500 dark:text-gray-400">
                Queries
              </button>
              <button className="pb-2 text-gray-500 dark:text-gray-400">
                Creators
              </button>
              <button className="pb-2 text-gray-500 dark:text-gray-400">
                Blockchains
              </button>
            </div>

            {/* Trending Dropdown */}
            <div className="px-6 py-3 border-b dark:border-gray-700 flex items-center">
              <button className="flex items-center border px-3 py-1 rounded-md text-sm bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                Trending <ChevronDown className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dashboard List */}
          <section className="flex-1 overflow-y-auto p-6 space-y-4">
            {dashboards.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-lg p-4 border dark:border-gray-700"
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
