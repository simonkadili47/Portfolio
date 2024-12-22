import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
    </div>
  );
};

export default Loader;
