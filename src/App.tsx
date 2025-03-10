import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import PatternView from './components/PatternView';
import ThemeToggle from './components/ThemeToggle';
import HomeScreen from './components/HomeScreen';
import { Menu } from 'lucide-react';
import { patterns, defaultPattern } from './data/patterns';

function App() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is initially hidden
  const [selectedPattern, setSelectedPattern] = useState('welcome');
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Function to handle pattern selection and close sidebar
  const handlePatternSelect = (patternId: string) => {
    setSelectedPattern(patternId);
    setIsOpen(false); // Close sidebar when selecting a pattern
  };

  const currentPattern = patterns.find(p => p.id === selectedPattern) || defaultPattern;

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {/* Sidebar (Hidden by default) */}
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedPattern={selectedPattern}
          setSelectedPattern={handlePatternSelect} // Close sidebar on selection
        />
        
        {/* Main Content */}
        <div className={`transition-all duration-300 ${isOpen ? 'lg:ml-64' : 'ml-0'}`}>
          <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between p-4">
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)} // Toggle sidebar
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle sidebar"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Code Crusaders</h1>
              <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            </div>
          </header>
          
          <main className="p-6">
            {selectedPattern === 'welcome' ? (
              <HomeScreen setSelectedPattern={handlePatternSelect} />
            ) : (
              <PatternView pattern={currentPattern} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
