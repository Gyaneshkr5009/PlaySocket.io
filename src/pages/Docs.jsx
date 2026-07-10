import React from 'react';
import NevBar from '../component/NevBar';
import { NavLink } from 'react-router-dom';

function Docs() {
  const gameDocs = [
    {
      id: "sudoku",
      name: "Sudoku Engine",
      status: "v1.0 • Active",
      statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Generate valid 9x9 standard grids across multiple difficulty tiers and run instant, real-time matrix solution validation.",
      endpoint: "query GetSudokuGrid($difficulty: Difficulty!)",
      navigate: "sudoku-docs",
      navigationColor:"bg-emerald-500 hover:bg-emerald-600 border-emerald-500/20 text-emerald-950",
      exampleCode: `query GetSudoku {
  newSudokuBoard(limit: $limit, difficulty: $difficulty, size: $size) {
    grids {
        value
        solution
        difficulty
    }
    results
    message
    }
}`
    },
    {
      id: "schulte",
      name: "Schulte Table",
      status: "v1.0 • Active",
      statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Create customizable N x N attention-tracking grids (e.g., 5x5) with randomized distribution sequences for peripheral vision metrics.",
      endpoint: "query GetSchulteTable($size: Int!)",
      navigate: "schulte-docs",
      navigationColor:"bg-emerald-500 hover:bg-emerald-600 border-emerald-500/20 text-emerald-950",
      exampleCode: `query GetSchulteTable {
  query GetNewGame {
    newSchulteTable(size: $size) {
    schulteBoard
    }
}
}`
    },
  ];

  const scrollToGame = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Navigation Layer */}
      <NevBar />

      {/* Main Responsive Split Wrapper */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* SIDEBAR NAVIGATION (Sticky on Desktop, Top Scroll Block on Mobile) */}
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-24 h-fit space-y-4">
          <div className="border-b border-slate-800 pb-3 mb-2">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-500">
              Engine Modules
            </h2>
          </div>
          
          <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-3 md:pb-0 scrollbar-none">
            {gameDocs.map((game) => (
              <button
                key={game.id}
                onClick={() => scrollToGame(game.id)}
                className="w-full text-left whitespace-nowrap px-4 py-2.5 rounded-xl border border-transparent bg-slate-950/20 text-slate-400 hover:text-cyan-400 hover:bg-slate-950/60 hover:border-slate-800/80 transition duration-200 text-sm font-semibold flex items-center justify-between group"
              >
                <span>{game.name}</span>
                <span className="hidden md:inline text-slate-600 group-hover:text-cyan-500 font-mono transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 space-y-16">
          <header className="border-b border-slate-800 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              API Reference Docs
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl">
              All cognitive, logical, and traditional math game matrix layouts are exposed securely through our core developer interface endpoints.
            </p>
          </header>

          {/* Individual Game Specification Box */}
          <div className="space-y-16">
            {gameDocs.map((game) => (
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
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-bold uppercase tracking-wider ${game.statusClass}`}>
                    {game.status}
                  </span>
                </div>

                {/* Description Body */}
                <p className="text-sm md:text-base text-slate-400 mb-6 leading-relaxed">
                  {game.description}
                </p>

                {/* Sub-Technical Code Area Block */}
                <div className="space-y-3 font-mono">
                  {/* Action Route Parameter Indicator */}
                  <div className="flex items-center gap-3 p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm">
                    <span className="text-indigo-400 font-bold shrink-0">GRAPHQL</span>
                    <span className="text-slate-500 shrink-0">|</span>
                    <span className="text-slate-300 truncate">{game.endpoint}</span>
                  </div>

                  {/* Preformed Schema Preview Panel Container */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 relative overflow-hidden group">
                    <div className="absolute top-3 right-3 text-[10px] font-bold text-slate-600 group-hover:text-slate-400 uppercase tracking-wider transition-colors select-none">
                      Payload Schema
                    </div>
                    <pre className="text-xs text-cyan-400/90 overflow-x-auto leading-relaxed pt-2">
                      <code>{game.exampleCode}</code>
                    </pre>
                  </div>
                </div>
                <NavLink 
                    to={game.navigate}
                    className="mt-6 flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-950 hover:border-slate-700 group transition-all duration-200"
                    >
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                        Visit Full Documentation Guide
                    </span>
                    
                    {/* Using your custom navigationColor variable as a dynamic accent badge indicator! */}
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide font-mono transition-all group-hover:scale-105 ${game.navigationColor}`}>
                        Explore Engine →
                    </span>
                    </NavLink>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Docs;
