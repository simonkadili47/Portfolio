import React from 'react';
import uvr from "../../assets/uvr.jpeg";
import image1 from "../../assets/image1.jpeg";
import image from "../../assets/image.jpeg";

const RecentProjects = () => {
  const projects = [
    {
      title: 'UNIVERSITY VENUE RESERVATION',
      image: uvr, 
      alt: 'UVR',
    },
    {
      title: 'OFFICE MANAGEMENT SYSTEM',
      image: image1,
      alt: 'Office Management System',
    },
    {
      title: 'COOPARATE WEBSITE',
      image: image, 
      alt: 'Website',
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-black text-center mb-8">Recent Projects</h2>
      <div className="flex justify-center space-x-6">
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
            <div className="relative group">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full max-w-md rounded-lg shadow-lg h-64 object-cover transition-opacity duration-300 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;