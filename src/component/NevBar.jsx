import React from 'react'
import { NavLink } from 'react-router-dom'

function NevBar() {
  return (
    <div>
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          <NavLink to ="/"> PlaySocket</NavLink>
        </span>
        <span className="text-xs bg-slate-800 text-indigo-400 px-2 py-1 rounded-full font-mono border border-slate-700">
          v1.0
        </span>
      </div>
      <div className="flex items-center space-x-6 text-sm font-medium text-slate-400">
        <NavLink to="/working-demo" className="hover:text-white transition">Working</NavLink>
        <NavLink to="/docs" className="hover:text-white transition">Docs</NavLink>
        <NavLink to="/About" className="hover:text-white transition">About</NavLink>
      </div>
    </nav>
    </div>
  )
}

export default NevBar