import React, { useState } from 'react';
import Sudoku from '../component/Sudoku';
import NevBar from '../component/NevBar';

function Working() {
  // Shared structural layout states to feed the live query builder inspector
  const [currentSize, setCurrentSize] = useState(9);
  const [currentDiff, setCurrentDiff] = useState('null');

  // Dynamically compile the exact raw string representation showing users what payload passes through
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

  return (
    <div className="w-full bg-slate-950 pb-16 border-t border-slate-900 relative overflow-hidden flex flex-col">
      <NevBar />

      {/* Ambient background accent filter */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl ml-2 mr-2 sm:mx-auto relative z-10 mt-6">
        
        {/* Top Info Context Banner (पुराना लेआउट वापस) */}
        <div className="mb-10 text-left border-b border-slate-900 pb-6">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
            📡 Live Node Sandbox
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Developer Sandbox Console
          </h2>
        </div>

        {/* Core Layout Split Grid Structure (बिना किसी हाइट लॉक के, पुराना लेआउट) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Compact Game Board (ग्रिड क्यूब साइज़ को और छोटा किया गया है) */}
          <div className="lg:col-span-5 flex justify-center items-start">
            <div className="w-full bg-slate-900/40 border border-slate-800 p-4 rounded-2xl shadow-xl backdrop-blur-sm">
              <Sudoku
                onSizeChange={(size) => setCurrentSize(size)} 
                onDifficultyChange={(diff) => setCurrentDiff(diff ? `"${diff}"` : 'null')}
              />
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Documentation Guide & GraphQL Query Tracker */}
          <div className="lg:col-span-7 flex flex-col gap-6 self-stretch">
  
            {/* Guide Card Map Layout detailing button interactions - Takes exactly 50% */}
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

            {/* Live GraphQL Query Inspector Display Panel - Takes exactly 50% */}
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

              {/* Dynamic ?query= Simulation Header Bar */}
              <div className="bg-slate-900/20 px-4 py-2 border-b border-slate-900/60 font-mono text-[11px] text-slate-400 truncate shrink-0">
                <span className="text-amber-500 font-semibold">Endpoint Payload Preview:</span> 
                <span className="text-slate-500 select-all ml-1">{`?query={newboard(size:${currentSize},difficulty:${currentDiff})}`}</span>
              </div>

              {/* Pretty Render Code Block Container */}
              <pre className="p-4 font-mono text-xs text-indigo-300 overflow-auto bg-slate-950/80 flex-1 leading-relaxed selection:bg-indigo-500/20 scrollbar-thin scrollbar-thumb-slate-800">
                <code>{generateGraphQLQuery()}</code>
              </pre>
            </div>

          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Working;
