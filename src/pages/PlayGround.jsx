import React, { useState } from 'react';
import Sudoku from '../component/Sudoku';
import NevBar from '../component/NevBar';

const ENGINE_MODULES = [
  {
    id: 'sudoku',
    name: 'Sudoku',
    colorClass: 'bg-emerald-500 border-emerald-600/20 text-emerald-950',
    component: (setCurrentSize, setCurrentDiff) => (
      <Sudoku
        onSizeChange={(size) => setCurrentSize(size)} 
        onDifficultyChange={(diff) => setCurrentDiff(diff ? `"${diff}"` : 'null')}
      />
    )
  },
];

function Working() {
  const [currentSize, setCurrentSize] = useState(9);
  const [currentDiff, setCurrentDiff] = useState('null');

  const generateGraphQLQuery = () => {
    return `query GetNewGame {
      newboard(limit: 1, difficulty: ${currentDiff}, size: ${currentSize}) {
        grids {
          value
          solution
          difficulty
        }
      }
    }`;
  };

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
          {ENGINE_MODULES.map((module) => (
            <div key={module.id} id={module.id} className="scroll-mt-28 space-y-4">
              <div className={`text-xl font-bold text-center p-3 rounded-2xl ${module.colorClass}`}>
                {module.name} Working Model
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 flex justify-center items-start">
                  <div className="w-full bg-slate-900/40 border border-slate-800 p-4 rounded-2xl shadow-xl backdrop-blur-sm">
                    {module.component(setCurrentSize, setCurrentDiff)}
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-6 self-stretch">
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 shadow-md flex-1 h-0 flex flex-col min-h-[260px]">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 shrink-0">
                      🎮 Functional Controller Blueprint
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-slate-800">
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex flex-col justify-center">
                        <div className="font-bold text-indigo-400 mb-1">📐 Layout Grid Items (4x4 to 16x16)</div>
                        <p className="text-slate-400 leading-relaxed text-[11px]">Triggers an instant schema fetch. Rewrites matrix dimensions, resets state grids, and updates compilation keys.</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex flex-col justify-center">
                        <div className="font-bold text-cyan-400 mb-1">🎲 GraphQL Target Dropdown</div>
                        <p className="text-slate-400 leading-relaxed text-[11px]">Injects hard structural boundary arguments into the argument sequence directly modifying payload constraints on the microservice node.</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex flex-col justify-center">
                        <div className="font-bold text-emerald-400 mb-1">✅ Verify / Check Solutions</div>
                        <p className="text-slate-400 leading-relaxed text-[11px]">Runs a linear row-by-column assertion checker locally comparing active DOM index arrays against the memory solution matrix.</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex flex-col justify-center">
                        <div className="font-bold text-slate-300 mb-1">⚡ Solve & Reset Controls</div>
                        <p className="text-slate-400 leading-relaxed text-[11px]">Allows sandbox cleaning or rapid rendering to immediately bypass grid lock validation routines without querying state machines.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex-1 h-0 flex flex-col min-h-[260px]">
                    <div className="bg-slate-900/50 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono shrink-0">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-slate-300 font-semibold uppercase tracking-wider">Active Stream Inspector</span>
                      </div>
                      <div className="text-slate-500 truncate max-w-[280px] md:max-w-none">
                        POST ➔ <span className="text-indigo-400 hover:underline cursor-pointer select-all">https://onrender.com</span>
                      </div>
                    </div>

                    <div className="bg-slate-900/20 px-4 py-2 border-b border-slate-900/60 font-mono text-[11px] text-slate-400 truncate shrink-0">
                      <span className="text-amber-500 font-semibold">Endpoint Payload Preview:</span> 
                      <span className="text-slate-500 select-all ml-1">{`?query={newboard(size:${currentSize},difficulty:${currentDiff})}`}</span>
                    </div>

                    <pre className="p-4 font-mono text-xs text-indigo-300 overflow-auto bg-slate-950/80 flex-1 leading-relaxed selection:bg-indigo-500/20 scrollbar-thin scrollbar-thumb-slate-800">
                      <code>{generateGraphQLQuery()}</code>
                    </pre>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Working;
