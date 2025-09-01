// Sidebar.tsx
import React from "react";
import {
  Home,
  Users,
  Settings,
  FileText,
  Shield,
  Wrench,
  Bot,
  Database,
  ClipboardList,
} from "lucide-react";

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
}) => {
  return (
    <aside
      className={`fixed md:static top-0 left-0 h-screen w-60 bg-white dark:bg-ash-light 
      border-r dark:border-gray-700 transform transition-transform duration-300 z-40
      flex flex-col
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex justify-center items-center p-5">
        <img src="assets/tiny.png" alt="Logo" className="w-28 h-auto object-contain" />
      </div>

      {/* Greeting */}
      <div className="px-4 pb-3 text-center text-sm font-medium text-gray-900 dark:text-gray-300">
        👋 Hello Doc!
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2 text-sm overflow-y-auto scrollbar-hide">
        <div className="space-y-1">
          {/* Dashboard */}
          <a className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-900 text-white font-medium hover:bg-blue-900">
            <Home className="w-4 h-4" />
            My Dashboard
          </a>

          {/* Main Items */}
          <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
            <Bot className="w-4 h-4" />
            My Bots
          </a>
          <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
            <Users className="w-4 h-4" />
            My Customers
          </a>
        <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white mb-3">
  <Users className="w-4 h-4" />
  My Collabors
</a>
<div className="h-8"></div> {/* Adjust h-8 → h-10, h-12 for more space */}

       {/* ✨ Group wrapper for Logs block */}
<div className="mt-10">   {/* adjust mt-10 → mt-12 or mt-14 if you want lower */}
  <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
    <ClipboardList className="w-4 h-4" />
    My Logs
  </a>
  <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
    <Shield className="w-4 h-4" />
    My Subscription
  </a>
  <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
    <Settings className="w-4 h-4" />
    My Settings
  </a>
  <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
    <Database className="w-4 h-4" />
    My Data Stores
  </a>
</div>
</div>


        {/* ✨ Larger section gap before Support */}
        <div className="mt-8 mb-1 px-3 text-xs uppercase font-semibold tracking-wide text-gray-500 dark:text-white">
          Support
        </div>
        <div className="space-y-1">
          <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
            <FileText className="w-4 h-4" />
            Documents
          </a>
          <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
            <Wrench className="w-4 h-4" />
            Support Services
          </a>
        </div>

        {/* ✨ Larger section gap before Beta Services */}
        <div className="mt-8 mb-1 px-3 text-xs uppercase font-semibold tracking-wide text-gray-500 dark:text-white">
          Beta Services
        </div>
        <div className="space-y-1">
          <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
            <Bot className="w-4 h-4" />
            Advertise Bot / App (BETA)
          </a>
          <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
            <Wrench className="w-4 h-4" />
            Website Hosting (BETA)
          </a>
          <a className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
            <Database className="w-4 h-4" />
            Bot Builder (BETA)
          </a>
        </div>
        
<div className="h-8"></div> {/* Adjust h-8 → h-10, h-12 for more space */}

        {/* ✨ Larger section gap before Admin */}
        <div className="mt-8 mb-1 px-3 text-xs uppercase font-semibold tracking-wide text-gray-500 dark:text-white">
          Gard Administration Tools
        </div>
      </nav>
      
<div className="h-8"></div> {/* Adjust h-8 → h-10, h-12 for more space */}

      {/* Footer */}
      <div className="bg-blue-800 text-white p-4 flex items-center gap-2">
        <img src="assets/avatar.png" alt="User" className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm font-semibold">Doc Cowles</p>
          <p className="text-xs">docsrfg@gmail.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
