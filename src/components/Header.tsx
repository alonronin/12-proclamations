import React from 'react';
import { ScrollText } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-16">
      <ScrollText className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
        The 12 Proclamations
      </h1>
      <p className="text-gray-400 text-lg">of the winning without manifesto</p>
    </div>
  );
}