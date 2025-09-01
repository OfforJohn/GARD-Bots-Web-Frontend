import React, { useState } from "react";
import { Search, Star, ChevronDown, Menu, Sun, Moon } from "lucide-react";
import Sidebar from "./SideBar";

interface Dashboard {
  title: string;
  author: string;
  time: string;
  tags?: string[];
  stars: number;
}

const dashboards: Dashboard[] = [
  // your dashboard objects...
];

const DiscoverPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen w-screen bg-white dark:bg-ash">
        {/* Sidebar */}
        <Sidebar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-ash bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white dark:bg-ash dark:border-neutral-800">
            <header className="p-4 flex items-center justify-between">
              <h1 className="font-bold text-gray-800 dark:text-gray-300">
                My Dashboard
              </h1>

              {/* Right Side Controls */}
              <div className="flex items-center space-x-3">
                {/* Dark/Light Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>

                {/* Mobile Icons */}
                <button className="p-2 text-gray-600 dark:text-white hover:text-orange-500 transition block md:hidden">
                  <Search className="w-5 h-5" />
                </button>
                <button
                  className="md:hidden p-2 border border-gray-300 dark:border-neutral-700 rounded-lg text-gray-700 dark:text-white hover:bg-neutral-800 transition"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </header>
          </div>

          {/* Dashboard List */}
          <section className="flex-1 overflow-y-auto px-6 py-4">
            {dashboards.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex justify-between items-center bg-white dark:bg-ash hover:bg-gray-50 dark:hover:bg-neutral-800 transition p-4 border-b dark:border-neutral-800"
              >
                <div>
                  <h2 className="font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-white/70">
                    {item.author} • {item.time}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {item.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-white text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 dark:text-white">
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
