import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Personal Fitness Coach</h1>
        <p className="text-gray-700 mb-4">
          Welcome! Your 4-week fat loss & strength program will go here with exercise videos.
        </p>
        <a
          href="https://www.youtube.com/results?search_query=beginner+strength+training"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Watch Exercises
        </a>
      </div>
    </div>
  )
}
