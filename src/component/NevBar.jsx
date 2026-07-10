import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NevBar() {
  const [mobileViewActive , setMobileViewActive] = useState(false);

  const navClass = ({ isActive }) =>
    `transition duration-200 ${
      isActive
        ? "text-white"
        : "text-slate-400 hover:text-cyan-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <style>{`
        .bubble-menu-hidden {
          clip-path: circle(0% at calc(100% - 2.5rem) 0px);
          opacity: 0;
          pointer-events: none;
        }
        .bubble-menu-visible {
          clip-path: circle(150% at calc(100% - 2.5rem) 0px);
          opacity: 1;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className="text-3xl font-black tracking-wide bg-gradient-to-r from-indigo-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent"
          >
            PlaySocket
          </NavLink>
          <span className="px-2 py-1 rounded-full border border-slate-700 bg-slate-800 text-[11px] text-cyan-400 font-mono">
            v1.0
          </span>
        </div>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/docs" className={navClass}>Docs</NavLink>
          <NavLink to="/playground" className={navClass}>Playground</NavLink>
          <NavLink to="/roadmap" className={navClass}>Roadmap</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <a
            href="https://github.com/Gyaneshkr5009/PlaySocket.io/tree/main"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
          >
            GitHub
          </a>
        </div>
        <button
          onClick={() => setMobileViewActive(!mobileViewActive)}
          className="group flex flex-col justify-center items-center md:hidden w-10 h-10 space-y-1.5 focus:outline-none z-50 rounded-lg transition duration-200 hover:bg-slate-800/50"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-slate-400 rounded transition-all duration-300 group-hover:w-4 ${mobileViewActive ? 'rotate-45 translate-y-2 !w-6 bg-cyan-400' : ''}`} />
          <span className={`h-0.5 w-6 bg-slate-400 rounded transition-all duration-300 ${mobileViewActive ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-slate-400 rounded transition-all duration-300 group-hover:translate-x-1 ${mobileViewActive ? '-rotate-45 -translate-y-2 !translate-x-0 bg-cyan-400' : ''}`} />
        </button>
      </div>
      <div
        className={`md:hidden absolute top-full left-0 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 ease-out py-6 ${
          mobileViewActive ? "bubble-menu-visible" : "bubble-menu-hidden"
        }`}
      >
        <div className="flex flex-col px-8 space-y-4 text-base font-semibold">
          <NavLink to="/" className={navClass} onClick={() => setMobileViewActive(false)}>Home</NavLink>
          <NavLink to="/docs" className={navClass} onClick={() => setMobileViewActive(false)}>Docs</NavLink>
          <NavLink to="/playground" className={navClass} onClick={() => setMobileViewActive(false)}>Playground</NavLink>
          <NavLink to="/roadmap" className={navClass} onClick={() => setMobileViewActive(false)}>Roadmap</NavLink>
          <NavLink to="/about" className={navClass} onClick={() => setMobileViewActive(false)}>About</NavLink>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-center rounded-lg border border-cyan-500 py-2.5 text-cyan-400 hover:bg-cyan-500 hover:text-black transition mt-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NevBar;