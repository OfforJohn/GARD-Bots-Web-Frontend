import React from "react";
import { Search, Star, ChevronDown } from "lucide-react";

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
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="p-4 text-xl font-bold">Dune</div>

       {/* Search */}
<div className="px-4 mb-4">
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
    <input
      type="text"
      placeholder="Search dashboards, queries..."
      className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm 
                 placeholder-gray-400 text-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition"
    />
  </div>
</div>


        {/* Navigation */}
        <nav className="flex flex-col space-y-2 px-4 text-sm">
          <a className="text-gray-700 font-medium">Discover</a>
          <a className="text-gray-500">@offor</a>
          <a className="text-gray-500">Profile</a>
          <a className="text-gray-500">Library</a>
          <a className="text-gray-500">Favorites</a>
          <a className="text-gray-500">Account</a>
          <a className="text-gray-500">Usage</a>
        </nav>

        {/* Bottom Button */}
        <div className="p-4 mt-auto">
          <button className="w-full bg-orange-100 text-orange-600 py-2 rounded-lg font-medium">
            Create
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b">
          {/* Title */}
          <header className="p-6">
            <h1 className="text-2xl font-bold">Discover</h1>
          </header>

          {/* Tabs */}
          <div className="flex space-x-6 px-6 text-sm border-b">
            <button className="pb-2 border-b-2 border-orange-500 text-orange-500 font-medium">
              Dashboards
            </button>
            <button className="pb-2 text-gray-500">Queries</button>
            <button className="pb-2 text-gray-500">Creators</button>
            <button className="pb-2 text-gray-500">Blockchains</button>
          </div>

          {/* Trending Dropdown */}
          <div className="px-6 py-3 border-b flex items-center">
            <button className="flex items-center border px-3 py-1 rounded-md text-sm bg-gray-50 hover:bg-gray-100">
              Trending <ChevronDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dashboard List */}
        <section className="flex-1 overflow-y-auto p-6 space-y-4">
          {dashboards.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white hover:bg-gray-50 transition rounded-lg p-4 border"
            >
              <div>
                <h2 className="font-semibold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  {item.author} • {item.time}
                </p>
                <div className="flex space-x-2 mt-2">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <span>{item.stars}</span>
                <Star className="w-4 h-4" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default DiscoverPage;
