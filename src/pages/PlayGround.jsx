import React, { useState } from 'react';
import NevBar from '../component/NevBar';

const ENGINE_MODULES = [
  {
    id: 'sudoku',
    name: 'Sudoku',
    colorClass: 'bg-emerald-500 border-emerald-600/20 text-emerald-950',
    navigate:'https://vebble-chat-app.onrender.com/games/sudoku',
    navigationColor:"bg-emerald-500 hover:bg-emerald-600 border-emerald-500/20 text-emerald-950",
    status:'working',
  },
  {
    id:'schulte',
    name: 'Schulte',
    colorClass: 'bg-emerald-500 border-emerald-600/20 text-emerald-950',
    navigate:'https://vebble-chat-app.onrender.com/games/schulte-table',
    navigationColor:"bg-emerald-500 hover:bg-emerald-600 border-emerald-500/20 text-emerald-950",
    status:'working',
  }
];

function Working() {

  const scrollToGame = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      <NevBar />

      <div className="w-full max-w-7xl mx-auto px-6 mt-12 mb-6 text-left border-b border-slate-800 pb-6">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
          📡 Live Node Sandbox
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Developer Sandbox Console
        </h2>
      </div>
      
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 items-start">
        
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-24 h-fit space-y-4">
          <div className="border-b border-slate-800 pb-3 mb-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-500">
              Engine Modules
            </h2>
          </div>
          
          <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-3 md:pb-0 scrollbar-none">
            {ENGINE_MODULES.map((module) => (
              <button
                key={module.id}
                onClick={() => scrollToGame(module.id)}
                className="w-full text-left whitespace-nowrap px-4 py-2.5 rounded-xl border border-transparent bg-slate-950/20 text-slate-400 hover:text-cyan-400 hover:bg-slate-950/60 hover:border-slate-800/80 transition duration-200 text-sm font-semibold flex items-center justify-between group"
              >
                <span>{module.name}</span>
                <span className="hidden md:inline text-slate-600 group-hover:text-cyan-500 font-mono transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="flex-1 w-full space-y-16">
          {ENGINE_MODULES.map((game) => (
              <section 
                key={game.id} 
                id={game.id} 
                className="scroll-mt-24 border border-slate-800 bg-slate-950/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-slate-700/60 transition duration-300 shadow-xl"
              >
                {/* Meta Title Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/60 pb-4 mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {game.name}
                  </h2>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-bold uppercase tracking-wider ${game.colorClass}`}>
                    {game.status}
                  </span>
                </div>
                <a 
                  href={game.navigate}
                  className="mt-6 flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-950 hover:border-slate-700 group transition-all duration-200"
                  >
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                      Visit Full Working Demo
                  </span>
                  
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide font-mono transition-all group-hover:scale-105 ${game.navigationColor}`}>
                      Explore Engine →
                  </span>
                </a>
              </section>
            ))}
        </div>

      </div>
    </div>
  );
}

export default Working;
