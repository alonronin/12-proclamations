import React from 'react';
import { Proclamation } from '../types';

interface ProclamationCardProps {
  proclamation: Proclamation;
}

export function ProclamationCard({ proclamation }: ProclamationCardProps) {
  return (
    <div className="group relative bg-gray-800 rounded-lg p-6 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:bg-gray-750 border border-gray-700 h-full shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10">
      <div className="grid grid-cols-[4rem_1fr] gap-x-6 gap-y-3 items-start">
        <div className="relative w-16 h-16 flex items-center justify-center transform-gpu transition-transform duration-300 group-hover:scale-110">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-lg rotate-3 transition-colors duration-300 group-hover:from-emerald-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-blue-500/5 rounded-lg -rotate-3 transition-colors duration-300 group-hover:from-blue-500/30"></div>
          <div className="absolute inset-0 backdrop-blur-sm rounded-lg"></div>
          <span className="relative text-2xl font-bold bg-gradient-to-br from-emerald-400 to-blue-500 bg-clip-text text-transparent font-mono tracking-wider">
            {proclamation.number}
          </span>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-100 leading-tight min-h-[3rem] flex items-center">
            {proclamation.title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {proclamation.description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}