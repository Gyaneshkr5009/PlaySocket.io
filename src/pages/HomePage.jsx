import React from 'react';
import { NavLink } from 'react-router-dom';
import NevBar from '../component/NevBar';

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      <NevBar />

      <div className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-24">
        
        <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
              ✨ PlaySocket
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              The API Platform for <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">Classical Games & Brain Engines</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0">
              Build Sudoku, Schulte Tables, and future cognitive games using one unified GraphQL endpoint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NavLink to="/docs" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-center transition shadow-xl shadow-cyan-500/10">
                Read Docs
              </NavLink>
              <NavLink to="/playground" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl font-semibold text-center transition">
                Open Playground
              </NavLink>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl font-mono text-left max-w-lg mx-auto w-full">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex space-x-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-xs text-slate-500 font-medium">GraphQL Query</span>
            </div>
            
            <pre className="text-xs overflow-x-auto text-indigo-300 leading-relaxed">
              <code>
                <span className="text-cyan-400">query</span> GetBrainGame {"{\n"}
                {"  game(type: "}<span className="text-amber-400">SUDOKU</span>{") {\n"}
                <span className="text-slate-400">    id\n    matrix\n    difficulty\n    solution</span>{"\n  }\n}"}
              </code>
            </pre>
          </div>
        </main>

        <section className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
            Why PlaySocket
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "GraphQL Powered",
              "Zero Configuration",
              "Multiple Game Engines",
              "Production Ready",
              "Open Source",
              "Fast Response"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-slate-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Current Modules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 to-cyan-950/20 shadow-lg">
                <h3 className="font-bold text-cyan-400 text-lg mb-1">Sudoku</h3>
                <p className="text-xs text-slate-400">Generate grids and validate logic engines.</p>
              </div>
              <div className="p-5 rounded-xl border border-indigo-500/20 bg-gradient-to-br from-slate-950 to-indigo-950/20 shadow-lg">
                <h3 className="font-bold text-indigo-400 text-lg mb-1">Schulte Table</h3>
                <p className="text-xs text-slate-400">Attention span matrices grid structures.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-500">Coming Soon...</h2>
            <div className="grid grid-cols-2 gap-4">
              {["N Queens", "Memory Matrix", "Stroop Test", "Number Memory"].map((game, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-800 bg-slate-950/20 text-slate-400 text-sm font-medium flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2.5"></span>
                  {game}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Architecture</h2>
          <div className="flex flex-col items-center space-y-4 font-mono text-sm font-semibold">
            
            <div className="w-full sm:w-80 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-md">
              Frontend
            </div>
            
            <div className="text-cyan-400 text-xl font-bold animate-pulse">↓</div>
            
            <div className="w-full sm:w-80 p-4 bg-gradient-to-r from-indigo-950 to-cyan-950 rounded-xl border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-900/10">
              PlaySocket GraphQL
            </div>
          
            <div className="text-cyan-400 text-xl font-bold animate-pulse">↓</div>
            <div className="w-full grid grid-cols-3 gap-3">
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400">
                Sudoku Engine
              </div>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400">
                Schulte Engine
              </div>
              <div className="p-3 bg-slate-950 border border-slate-800/40 rounded-xl text-xs text-slate-600 border-dashed">
                Future Engines
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
