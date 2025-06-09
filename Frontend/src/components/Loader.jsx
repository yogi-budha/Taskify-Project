import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-300">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-800 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
