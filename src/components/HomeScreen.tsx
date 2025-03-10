import React, { useRef } from 'react';
import { patterns } from '../data/patterns';
import { 
  Brain, 
  Code2, 
  Target, 
  Lightbulb,
  Trophy,
  Rocket,
  GraduationCap
} from 'lucide-react';

interface HomeScreenProps {
  setSelectedPattern: (pattern: string) => void;
}

export default function HomeScreen({ setSelectedPattern }: HomeScreenProps) {
  const exploreRef = useRef<HTMLDivElement | null>(null); // Reference for "Explore All Patterns"

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "17 Core DSA Patterns",
      description: "Master the fundamental patterns that appear in coding interviews"
    },
    {
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      title: "Comprehensive Coverage",
      description: "From basic to advanced algorithms with detailed explanations"
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Targeted Practice",
      description: "Handpicked problems from top platforms for each pattern"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Clear Intuition",
      description: "Build strong problem-solving intuition through pattern recognition"
    }
  ];

  // Scroll to "Explore All Patterns"
  const handleScrollToExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="flex justify-center">
          <GraduationCap className="w-20 h-20 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Crack Your Next Coding Interview with Confidence
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Master Data Structures & Algorithms with a "pattern-based" approach. Learn, practice, and excel at coding challenges efficiently.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleScrollToExplore} // Scroll to "Explore All Patterns"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            Start Learning
          </button>
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Why Code Crusaders?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patterns Grid */}
      <section ref={exploreRef} className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Explore All Patterns
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Click on any pattern to start learning. Each pattern includes detailed explanations,
            approaches, and practice problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.filter(p => p.id !== 'welcome').map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => setSelectedPattern(pattern.id)}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <h3 className="text-xl font-semibold mb-3">{pattern.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                {pattern.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Trophy Section */}
      <section className="text-center space-y-6 py-12">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Ready to Become a Code Crusader?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Start your journey to mastering Data Structures & Algorithms today
        </p>
        <button
          onClick={handleScrollToExplore} // Scroll to "Explore All Patterns"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          Begin Your Journey
        </button>
      </section>
    </div>
  );
}
