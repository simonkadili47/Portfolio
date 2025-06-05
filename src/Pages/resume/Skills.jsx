import React from 'react';

const Skills = () => {
  const categorySkills = [
    { name: 'Backend Development', current: 80, lastYear: 75 },
    { name: 'Frontend Development', current: 80, lastYear: 70 },
    { name: 'Cross-Platform Apps', current: 50, lastYear: 40 },
  ];

  const detailedSkills = [
    { name: 'PHP & Laravel', proficiency: 80 },
    { name: 'MySQL & Postgress', proficiency: 75 },
    { name: 'JavaScript, React.js & Next.js', proficiency: 80 },
    { name: 'Bootstrap, Tailwind', proficiency: 80 },
    { name: 'HTML 5 & CSS', proficiency: 80 },
  ];

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-blue-700 text-left font-bold text-3xl mb-8">Skills</h2>
      <div className="flex justify-between mb-12">
        {categorySkills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center w-1/3 mx-2">
            <h3 className="text-black font-bold text-lg mb-2">{skill.name}</h3>
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  strokeDasharray={`${(skill.current / 100) * 251.2} 251.2`}
                  transform="rotate(-90 50 50)"
                />
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dy="0.3em"
                  className="text-black font-bold text-2xl"
                >
                  {skill.current}%
                </text>
              </svg>
            </div>
            <p className="text-gray-600 mt-2">{skill.lastYear}% last year</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {detailedSkills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-3/4"> 
              <p className="text-black font-semibold text-lg mb-1">{skill.name}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
            <p className="text-black font-bold text-lg">{skill.proficiency}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;