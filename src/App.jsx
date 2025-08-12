import React, { useState } from "react";

const workouts = [
  {
    day: "Day 1 - Lower Body",
    exercises: [
      { name: "Leg Press", video: "https://www.youtube.com/embed/p5dCqF7wWUw" },
      { name: "Romanian Deadlift", video: "https://www.youtube.com/embed/uhghy9pFIPY" },
      { name: "Step-Ups", video: "https://www.youtube.com/embed/1VnnZ5u0kT0" },
      { name: "Glute Bridge", video: "https://www.youtube.com/embed/8bbE64NuDTU" },
      { name: "Calf Raises", video: "https://www.youtube.com/embed/zV2gQOfwKPs" },
    ],
  },
  {
    day: "Day 2 - Upper Body",
    exercises: [
      { name: "Seated Chest Press", video: "https://www.youtube.com/embed/3eB6rD4Kz4Y" },
      { name: "Lat Pulldown", video: "https://www.youtube.com/embed/CAwf7n6Luuc" },
      { name: "Seated Row", video: "https://www.youtube.com/embed/GZbfZ033f74" },
      { name: "Dumbbell Shoulder Press", video: "https://www.youtube.com/embed/B-aVuyhvLHU" },
      { name: "Bicep Curls", video: "https://www.youtube.com/embed/av7-8igSXTs" },
    ],
  },
];

export default function App() {
  const [dayIndex, setDayIndex] = useState(0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">4-Week Fitness Coach</h1>

      <select
        value={dayIndex}
        onChange={(e) => setDayIndex(Number(e.target.value))}
        className="p-2 border rounded mb-4"
      >
        {workouts.map((w, i) => (
          <option key={w.day} value={i}>
            {w.day}
          </option>
        ))}
      </select>

      <div className="space-y-4">
        {workouts[dayIndex].exercises.map((ex, i) => (
          <div key={i} className="border p-4 rounded bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">{ex.name}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={ex.video}
                title={ex.name}
                frameBorder="0"
                allowFullScreen
                className="w-full h-56 rounded"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
