import React from 'react';
import { NetworkAnimation } from './network-animation';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <NetworkAnimation />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 animate-text">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            Innovative IT Solutions for Tomorrow's Challenges
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-foreground/20 hover:border-foreground/40 font-medium transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}