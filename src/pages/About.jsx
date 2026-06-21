import React from 'react'
import NevBar from "../component/NevBar"

function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans px-4 sm:px-6 pb-4 lg:px-8 selection:bg-indigo-500 selection:text-white">
      <NevBar />
      <div className="max-w-4xl mt-4 mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="border-b border-slate-800 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            About Me & Project Vision
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Building highly concurrent, type-safe gaming microservices with Spring Boot.
          </p>
        </div>

        {/* Recruiter / Professional Pitch Section */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            💼 For Recruiters & Engineering Managers
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            I am a software engineer focused on designing type-safe, resilient backend architectures. 
            Leveraging Java and the <strong>Spring Boot ecosystem</strong>, I design decoupled, data-driven systems 
            structured for low-latency game grid calculation loops and state validation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-400">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <span className="text-indigo-400 font-bold">✓ Spring Ecosystem:</span> Spring for GraphQL, Spring Security, Data JPA
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <span className="text-indigo-400 font-bold">✓ Infrastructure / UI:</span> RESTful Routers, React HMR, Tailwind Engine
            </div>
          </div>
        </div>

        {/* Technical Architecture Insight Section */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            ⚙️ The Code Ecosystem & Routing Pattern
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            My engine clusters utilize unified paths under the 
            <code className="text-cyan-400 font-mono bg-slate-950 px-2 py-0.5 rounded text-xs mx-1">/games/*</code> 
            base router block. By implementing Spring's bean controllers with specific mapping scopes, 
            I can drop new micro-engines (like Chess matrix systems or pathfinders) directly into the running instance, 
            ensuring horizontal extensibility without system-wide downtime.
          </p>
        </div>

        {/* Support & Donations Section */}
        <div className="bg-gradient-to-br from-slate-800/60 to-indigo-950/30 border border-slate-700/50 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <h3 className="text-lg font-bold text-white">☕ Support Engine Hosting Costs</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Running active JVM runtime instances on global cloud infrastructures requires persistent server resources. 
              If you are using our dynamic grid engines or want to support development under our microservice hub, 
              consider helping fund the compute nodes!
            </p>
          </div>
          
          <a 
            href="https://buymeacoffee.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold rounded-xl shadow-lg transition duration-200 text-center whitespace-nowrap active:scale-95 text-sm tracking-wide flex items-center justify-center gap-2"
          >
            💖 Fuel API Nodes
          </a>
        </div>

      </div>
    </div>
  )
}

export default About
