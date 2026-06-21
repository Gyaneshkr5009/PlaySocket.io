import React from 'react';
import { NavLink } from 'react-router-dom';
import NevBar from '../component/NevBar';

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Fixed top-level layout navigation component layer */}
      <NevBar />

      {/* Main Structural Hero Stack Area */}
      <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-4 md:px-4 justify-between">
        
        {/* FIRST GRID: Primary Content Section (Stacked on mobile, 50/50 split on md and above) */}
        <main className="w-full py-12 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Parameters Block */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
              ✨ Now Open Source
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              The Ultimate <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Classical Games</span> API
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
              A high-performance, developer-first platform providing robust APIs for Sudoku and traditional games. Generate matrices, validate solutions, and power your apps instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#docs" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-center transition shadow-xl shadow-indigo-600/30">
                Read the Docs
              </a>
              <a href="#endpoints" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl font-semibold text-center transition">
                Explore Endpoints
              </a>
            </div>
          </div>

          {/* Live Code/API Preview Card Container Block */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl font-mono text-left max-w-lg mx-auto w-full">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-2">
              <div className="flex space-x-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium truncate ml-2">POST /api/games/sudoku-app</span>
            </div>
            
            <pre className="text-[11px] sm:text-xs p-2 sm:p-4 overflow-x-auto max-h-[380px] scrollbar-thin scrollbar-thumb-slate-800 leading-relaxed selection:bg-indigo-500/30 text-indigo-300">
              <code>
                <span className="text-slate-500">{`{`}</span>{"\n"}
                <span className="text-indigo-400">{`  "newboard"`}</span><span className="text-slate-400">: {`{`}</span>{"\n"}
                <span className="text-indigo-400">{`    "grids"`}</span><span className="text-slate-400">: [</span>{"\n"}
                <span className="text-slate-400">{`      {`}</span>{"\n"}
                <span className="text-indigo-400">{`        "value"`}</span><span className="text-slate-400">: [</span>{"\n"}
                <span className="text-emerald-400">{`          [" ", " ", "1", "4", "5", " ", "2", "9", "3"],`}</span>{"\n"}
                <span className="text-emerald-400">{`          [" ", " ", "7", "2", " ", "3", " ", " ", "1"],`}</span>{"\n"}
                <span className="text-emerald-400">{`          [" ", "9", "3", "6", " ", " ", "4", " ", " "],`}</span>{"\n"}
                <span className="text-emerald-400">{`          ["8", " ", " ", " ", "7", " ", " ", "3", "2"],`}</span>{"\n"}
                <span className="text-emerald-400">{`          ["1", " ", " ", "9", " ", " ", " ", "6", " "],`}</span>{"\n"}
                <span className="text-emerald-400">{`          [" ", "3", "2", " ", " ", " ", " ", "7", "5"],`}</span>{"\n"}
                <span className="text-emerald-400">{`          ["5", "1", " ", " ", " ", "8", "3", " ", " "],`}</span>{"\n"}
                <span className="text-emerald-400">{`          ["7", "4", "8", " ", "2", "9", " ", " ", " "],`}</span>{"\n"}
                <span className="text-emerald-400">{`          [" ", " ", " ", " ", " ", " ", " ", " ", " "]`}</span>{"\n"}
                <span className="text-slate-400">{`        ],`}</span>{"\n"}
                <span className="text-indigo-400">{`        "solution"`}</span><span className="text-slate-400">: [ ... ], </span>
                <span className="text-slate-500">// Solutions array collapsed for readability</span>{"\n"}
                <span className="text-indigo-400">{`        "difficulty"`}</span><span className="text-slate-400">: </span><span className="text-amber-400">{`"HARD"`}</span>{"\n"}
                <span className="text-slate-400">{`      }`}</span>{"\n"}
                <span className="text-slate-400">{`    ],`}</span>{"\n"}
                <span className="text-indigo-400">{`    "results"`}</span><span className="text-slate-400">: </span><span className="text-sky-400">1</span><span className="text-slate-400">,</span>{"\n"}
                <span className="text-indigo-400">{`    "message"`}</span><span className="text-slate-400">: </span><span className="text-emerald-400">{`"Data fetched successfully."`}</span>{"\n"}
                <span className="text-slate-400">{`  }`}</span>{"\n"}
                <span className="text-slate-500">{`}`}</span>
              </code>
            </pre>
          </div>
        </main>

        {/* SECOND GRID: Quick Stats Banner (Stays structured below main content) */}
        <section className="w-full border border-slate-800 bg-slate-950/40 rounded-2xl p-6 mb-4 backdrop-blur-sm shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">99.99%</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Uptime</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">&lt; 40ms</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Latency</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">Zero</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Config Required</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">Free</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Open Source</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default HomePage;
