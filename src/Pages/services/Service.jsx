import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '📦', 
      title: 'WEB DEVELOPMENT',
      description: 'Get yourself or your business a website either from a design concept or a custom website to solve your business needs and end.',
    },
    {
      icon: '🔍',
      title: 'WEB DESIGN',
      description: 'Get a responsive, mobile friendly website which will make your product and services easily target your customers.',
    },
    {
      icon: '📱', 
      title: 'MOBILE APP DEVELOPING',
      description: 'Get your iOS & Android mobile app developed using Flutter which will ship your business or services to the next level.',
    },
  ];

  return (
    <div className="bg-white p-6">
      <h2 className="text-4xl font-bold text-black text-center mb-8">What Services you will Get from me!</h2>
      <div className="flex justify-center space-x-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white hover:bg-blue-300 text-black p-8 rounded-lg shadow-lg w-1/3 text-center min-h-[300px]">
            <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 uppercase">{service.title}</h3>
            <hr className="border-blue-600 w-1/3 mx-auto mb-4" />
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;