import React from 'react';
import { Header } from './components/Header';
import { ProclamationCard } from './components/ProclamationCard';
import { proclamations } from './data/proclamations';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {proclamations.map((proclamation) => (
            <ProclamationCard 
              key={proclamation.number} 
              proclamation={proclamation} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;