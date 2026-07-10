import React from 'react';
import NevBar from '../component/NevBar';

function Roadmap() {
  const versions = [
    {
      id: "v1.0",
      title: "Version 1.0",
      status: "Released",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      lineColor: "border-emerald-500",
      bulletColor: "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]",
      items: [
        { name: "Sudoku Engine", type: "Core", done: true },
        { name: "Schulte Table Engine", type: "Core", done: true }
      ]
    },
    {
      id: "v1.2",
      title: "Version 1.2",
      status: "In Progress",
      statusColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      lineColor: "border-indigo-500",
      bulletColor: "bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]",
      items: [
        { name: "N Queens Engine", type: "Mathematical Logic", done: false }
      ]
    },
    {
      id: "v1.5",
      title: "Version 1.5",
      status: "Planned",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      lineColor: "border-cyan-500",
      bulletColor: "bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.5)]",
      items: [
        { name: "Memory Matrix", type: "Cognitive Memory", done: false }
      ]
    },
    {
      id: "v2.0",
      title: "Version 2.0 (The Mega Release)",
      status: "Future Backlog",
      statusColor: "text-slate-400 bg-slate-500/10 border-slate-500/20",
      lineColor: "border-slate-800",
      bulletColor: "bg-slate-700",
      items: [
        { name: "Chess Engine", type: "Advanced AI Engine", done: false },
        { name: "Crossword Generator", type: "Linguistic Logic", done: false },
        { name: "Minesweeper", type: "Grid Calculation", done: false },
        { name: "2048 Engine", type: "Dynamic Math Matrix", done: false },
        { name: "Kakuro Matrix", type: "Math Logic Cross", done: false },
        { name: "KenKen Logic", type: "Arithmetic Grid", done: false },
        { name: "Stroop Test", type: "Attention Metrics", done: false },
        { name: "Typing Test Engine", type: "Speed Processing", done: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      <NevBar />

      {/* Page Layout Stack Container */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            🚀 Platform Evolution Track
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engine <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">Roadmap</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400">
            Track our progress as we scale PlaySocket from individual brain matrices to full-stack, distributed spatial cognitive environments.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12 pb-12">
          
          {versions.map((phase) => (
            <div key={phase.id} className="relative pl-8 md:pl-12 group">
              
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-125 ${phase.bulletColor}`} />

              <div className="hidden md:block absolute -left-36 top-0 w-28 text-right font-mono text-sm font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                {phase.id}
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/80 hover:bg-slate-950/60 shadow-xl">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <span className="md:hidden font-mono text-xs font-bold text-cyan-500 tracking-wider mr-2 block mb-1">
                      [{phase.id}]
                    </span>
                    <h2 className="text-xl font-bold text-white tracking-wide">
                      {phase.title}
                    </h2>
                  </div>
                  <span className={`inline-self-start px-2.5 py-0.5 rounded-full text-xs font-mono border font-semibold tracking-wide uppercase shrink-0 ${phase.statusColor}`}>
                    {phase.status}
                  </span>
                </div>

                {/* Sub-Items Module Matrix Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {phase.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 ${
                        item.done 
                          ? 'bg-emerald-950/10 border-emerald-500/10 hover:border-emerald-500/20' 
                          : phase.status === "In Progress"
                          ? 'bg-indigo-950/10 border-indigo-500/10 hover:border-indigo-500/20'
                          : 'bg-slate-900/40 border-slate-800/60 hover:border-slate-700/60'
                      }`}
                    >
                      <span className={`flex items-center justify-center text-xs font-bold w-5 h-5 rounded-md mt-0.5 shrink-0 select-none ${
                        item.done 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" 
                          : "bg-slate-800 text-slate-500 border border-slate-700/50"
                      }`}>
                        {item.done ? "✓" : "•"}
                      </span>

                      <div>
                        <h3 className={`text-sm font-semibold tracking-wide ${item.done ? "text-slate-200" : "text-slate-300"}`}>
                          {item.name}
                        </h3>
                        <p className="text-[11px] font-medium font-mono text-slate-500 mt-0.5 uppercase tracking-wider">
                          {item.type}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
