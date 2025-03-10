import React from 'react';
import { patterns } from '../data/patterns';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedPattern: string;
  setSelectedPattern: (pattern: string) => void;
}

export default function Sidebar({ isOpen, setIsOpen, selectedPattern, setSelectedPattern }: SidebarProps) {
  // Function to handle pattern selection & close sidebar on ALL devices
  const handlePatternSelect = (patternId: string) => {
    setSelectedPattern(patternId);
    setIsOpen(false); // Auto-close sidebar on all devices
  };

  return (
    <>
      {/* Backdrop (closes sidebar on click) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-lg
        transition-transform duration-300 ease-in-out z-50 w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="overflow-y-auto h-full">
          {/* Home Button */}
          <button
            onClick={() => handlePatternSelect('welcome')}
            className={`
              w-full text-left p-4 flex items-center gap-3 transition-colors
              ${selectedPattern === 'welcome' 
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-800'}
            `}
          >
            {selectedPattern === 'welcome' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            Home
          </button>
          
          {/* Pattern List */}
          {patterns.filter(p => p.id !== 'welcome').map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => handlePatternSelect(pattern.id)}
              className={`
                w-full text-left p-4 flex items-center gap-3 transition-colors
                ${selectedPattern === pattern.id 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800'}
              `}
            >
              {selectedPattern === pattern.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              {pattern.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
