import React from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
          <p className="text-xl text-gray-600">If Not Now, When? Let's Work Together</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ContactCard
            icon={<Mail className="w-8 h-8 text-blue-600" />}
            title="Email Address"
            value="simonkadili47@gmail.com"
          />
          <ContactCard
            icon={<MapPin className="w-8 h-8 text-green-600" />}
            title="Office Address"
            value="Dar es Salaam, Tanzania"
          />
          <ContactCard
            icon={<Phone className="w-8 h-8 text-red-600" />}
            title="Phone Number"
            value="+255 714 52 96 20"
          />
          <ContactCard
            icon={<Globe className="w-8 h-8 text-purple-600" />}
            title="Website"
            value="https://simon-kadili.vercel.app/home"
          />
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4 space-x-3">
      {icon}
      <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{value}</p>
  </div>
);

export default Contact;