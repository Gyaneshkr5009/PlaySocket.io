import { useState , useRef } from "react"
import NevBar from "../../component/NevBar" // Double-check if the folder is named 'component' or 'components'

function GetStarted() {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedQuery, setCopiedQuery] = useState(false);
  const urlRef = useRef(null);
  const queryRef = useRef(null);

  const handleCopyUrl = async () => {
    const urlText = urlRef.current ? urlRef.current.innerText : "";
    try {
      await navigator.clipboard.writeText(urlText);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000); 

      if (urlRef.current) {
        //to declare range of our window which we need to copy
        const range = document.createRange();
        const selection = window.getSelection(); // select the whole thing within the range
        range.selectNodeContents(urlRef.current); // set sizing of our range
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  const handleCopyQuery = async () => {
    const queryText = queryRef.current ? queryRef.current.innerText : "";
    try {
      await navigator.clipboard.writeText(queryText);
      setCopiedQuery(true);
      setTimeout(() => setCopiedQuery(false), 2000); 

      if (queryRef.current) {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(queryRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } catch (err) {
      console.error("Failed to copy Query: ", err);
    }
  };


  return (
    <div className='min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white gap-5 pb-4'>
      <NevBar />
      <div className="flex flex-col mx-auto px-4 w-full">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold">Get Started</h1>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-4 max-w-2xl mx-auto py-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Generate Custom Sudoku Grids Instantly
        </h2>
        
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          Our high-performance API doesn't just deliver a standard puzzle and its unique solution. It gives you full configuration control over your game engine.
        </p>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-2 text-sm">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 backdrop-blur-sm">
            <span className="block font-semibold text-indigo-400 mb-1">🎯 Unique Solutions</span>
            <span className="text-slate-400 text-xs">Every generated board comes with a verified solution.</span>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 backdrop-blur-sm">
            <span className="block font-semibold text-indigo-400 mb-1">📐 Flexible Sizes</span>
            <span className="text-slate-400 text-xs">Choose standard 9x9 or custom grid dimensions.</span>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 backdrop-blur-sm">
            <span className="block font-semibold text-indigo-400 mb-1">⚡ Dynamic Difficulty</span>
            <span className="text-slate-400 text-xs">Target beginner, medium, expert, or custom constraints.</span>
          </div>
        </div>
      </div>
      </div>
      {/* Api Info */}
      <div className='grid grid-cols-1 md:grid-cols-2 px-4 gap-6 items-start max-w-6xl mx-auto w-full'>
        {/* Left Side: API Documentation Card */}
        <div className='flex flex-col gap-4 text-left bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm shadow-xl'>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">⚡ No Setup Required</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              You don't have to install any library or do any complex setup to get a new sudoku board. 
              Just make a POST request with your preferred board size and difficulty.
            </p>
          </div>

          {/* Section 1: Endpoint Details */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 relative group">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              API Endpoint
            </h4>
            <p 
              onClick={handleCopyUrl}
              className="bg-slate-950 border border-slate-800 p-2.5 pr-16 rounded-lg font-mono text-xs md:text-sm break-all text-slate-200 cursor-pointer hover:border-slate-700 transition-colors"
            >
              <span className="text-emerald-400 font-bold mr-2 select-none">POST</span> 
              <span ref={urlRef} className="selection:bg-emerald-500/30 selection:text-emerald-300">
                https://vebble-ai-backend.onrender.com/api/games
              </span>
            </p>
            <button 
              onClick={handleCopyUrl}
              className="absolute right-6 bottom-7 p-2 rounded-lg bg-slate-800 text-slate-400 border border-slate-700 hover:text-emerald-400 hover:bg-slate-700/50 hover:border-slate-600 transition-all shadow-md group/btn"
              title={copiedUrl ? "Copied!" : "Copy to clipboard"}
            >
              {copiedUrl ? (
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 transform scale-110 transition-transform duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:scale-105">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m7.5-7.5l3 3m-3-3l-3 3m3-3v11.25A2.25 2.25 0 0116.5 21h-7.5A2.25 2.25 0 016.75 18.75V9a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118.75 9v.75" />
                </svg>
              )}
            </button>
          </div>
          {/* Section 2: Client Testing */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Testing Your Request
            </h4>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              You can test this endpoint instantly using an API client like 
              <span className="text-indigo-400 font-medium"> Postman</span>, 
              <span className="text-indigo-400 font-medium"> Thunder Client</span>, or curl.
            </p>
          </div>
        </div>

        {/* Right Side: Responsive Image Wrapper */}
        <div className="flex justify-center items-center h-full min-h-[300px]">
          <img 
            src="/features.svg" 
            alt="Vebble Games Microservice Infrastructure Architecture" 
            className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[520px] h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(79,70,229,0.2)] select-none pointer-events-none mx-auto"
          />
        </div>
      </div>
      {/* GraphQL Schema Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4 w-full mt-6">
        {/* Column 1: Schema Variables & Raw Format */}
        <div className="flex flex-col gap-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">📋 GraphQL Schema Configuration</h3>
            <p className="text-slate-400 text-xs">Define your puzzle generation parameters within these strict types:</p>
          </div>

          {/* Type Definitions Block */}
          <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl font-mono text-xs text-indigo-300 space-y-1">
            <p><span className="text-slate-500">// Available Configuration Arguments</span></p>
            <p><span className="text-cyan-400">const</span> limit = <span className="text-amber-400">0..10</span>;</p>
            <p><span className="text-cyan-400">const</span> difficulty = <span className="text-emerald-400">"EASY" | "MEDIUM" | "HARD"</span>;</p>
            <p><span className="text-cyan-400">const</span> size = <span className="text-amber-400">4 | 6 | 9 | 10 | 12 | 16</span>;</p>
          </div>

          {/* Raw GraphQL Query Layout */}
          <div className="relative group">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              GraphQL Core Query
            </h4>
            <pre 
              ref={queryRef}
              onClick={handleCopyQuery}
              className="bg-slate-900/60 border border-slate-800 p-3 pr-16 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre cursor-pointer hover:border-slate-700 transition-colors selection:bg-emerald-500/20 selection:text-emerald-300"
            >
              {`query GetSudoku {
      newSudokuBoard(limit: $limit, difficulty: $difficulty, size: $size) {
        grids {
          value
          solution
          difficulty
        }
        results
        message
      }
    }`}
            </pre>
            <button 
              onClick={handleCopyQuery}
              className="absolute right-3 bottom-3 p-2 rounded-lg bg-slate-800 text-slate-400 border border-slate-700 hover:text-emerald-400 hover:bg-slate-700/50 hover:border-slate-600 transition-all shadow-md group/btn z-10"
              title={copiedQuery ? "Copied!" : "Copy to clipboard"}
            >
              {copiedQuery ? (
                // Fixed: Restored correct xmlns URL string
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400 transform scale-110 transition-transform duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                // Fixed: Restored correct xmlns URL string
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:scale-105">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m7.5-7.5l3 3m-3-3l-3 3m3-3v11.25A2.25 2.25 0 0116.5 21h-7.5A2.25 2.25 0 016.75 18.75V9a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118.75 9v.75" />
                </svg>
              )}
            </button>
          </div>


          {/* Raw URI Query Format */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Raw GET/URI Equivalent</h4>
            <p className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg font-mono text-[11px] break-all text-slate-400">
              <span className="text-pink-400 font-medium">?query=</span>{`{newSudokuBoard(limit:5){grids{value,solution,difficulty},results,message}}`}
            </p>
          </div>
        </div>

        {/* Column 2: Live Fetch Implementation */}
        <div className="flex flex-col bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm shadow-xl justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">🚀 Client Fetch Implementation</h3>
            <p className="text-slate-400 text-xs mb-4">Copy and execute this script inside your application to fetch a board setup dynamically:</p>
            
            <pre className="bg-slate-950 border border-slate-800 p-4 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed max-h-[380px]">
              {`const response = await fetch('https://vebble-ai-backend.onrender.com/api/games', {
                method: 'POST',
                headers: { 
                  'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                  query: \`
                    query GetNewGame {
                      newSudokuBoard(
                        limit: 1, 
                        difficulty: "\${difficultyArg}", 
                        size: \${cleanSize}
                      ) {
                        grids {
                          value
                          solution
                          difficulty
                        }
                          results
                          message
                      }
                    }
                  \`
                })
              });

              const data = await response.json();`}
            </pre>
          </div>
          
          <div className="text-slate-400 text-[11px] mt-2 border-t border-slate-700/30 pt-3">
            💡 <span className="text-slate-300 font-medium">Note:</span> Ensure your <code className="text-indigo-400">difficultyArg</code> string is fully capitalized to prevent engine validation drops.
          </div>
        </div>

      </div>
    </div>
  )
}

export default GetStarted
