import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-start justify-center px-4 ">
      <div className="w-full max-w-7xl mt-0">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
          <p className="text-xl text-gray-600">If Not Now, When? Let's Work Together</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Email Address',
              value: 'abrahammaleko@gmail.com',
            },
            {
              icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: 'Office Address',
              value: 'Dar es Salaam, Tanzania',
            },
            {
              icon: (
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.554a1 1 0 01-.217.97l-2.457 2.457a16.001 16.001 0 006.586 6.586l2.457-2.457a1 1 0 01.97-.217l4.554 1.518A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C10.611 24 3 16.389 3 7V6a2 2 0 012-1z" />
                </svg>
              ),
              title: 'Phone Number',
              value: '+255 713 000 000',
            },
            {
              icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a8.004 8.004 0 100 15.292 8.004 8.004 0 000-15.292zM2.458 12C3.732 7.943 7.388 5 12 5c.338 0 .67.021.998.062M12 5c.89 1.117 1.5 2.735 1.5 4.5S12.89 12.883 12 14c-.89-1.117-1.5-2.735-1.5-4.5S11.11 6.117 12 5z" />
                </svg>
              ),
              title: 'Website',
              value: 'www.abrahammalekoweb.com',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-xl p-6 flex-1 min-w-[250px] max-w-[300px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4 space-x-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;