import React from 'react';
import { Pattern } from '../data/patterns';
import { ExternalLink } from 'lucide-react';

interface PatternViewProps {
  pattern: Pattern;
}

export default function PatternView({ pattern }: PatternViewProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{pattern.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">{pattern.description}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">When to Use</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {pattern.whenToUse.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Data Structures Involved</h2>
        <div className="flex flex-wrap gap-2">
          {pattern.dataStructures.map((ds, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              {ds}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Approach</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {pattern.approach.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {pattern.questions.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Practice Questions</h2>
          <div className="grid gap-4">
            {pattern.questions.map((question, index) => (
              <div key={index} className="p-4 border dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">{question.title}</h3>
                  <span className={`
                    px-2 py-1 rounded text-sm
                    ${question.difficulty === 'Easy' && 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}
                    ${question.difficulty === 'Medium' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}
                    ${question.difficulty === 'Hard' && 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}
                  `}>
                    {question.difficulty}
                  </span>
                </div>
                <div className="mt-2 flex gap-2">
                  {question.leetcodeUrl && (
                    <a
                      href={question.leetcodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      LeetCode <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}