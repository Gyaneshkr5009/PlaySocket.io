import NevBar from "../component/NevBar" // Double-check if the folder is named 'component' or 'components'

function GetStarted() {
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
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              API Endpoint
            </h4>
            <p className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg font-mono text-xs md:text-sm break-all text-slate-200">
              <span className="text-emerald-400 font-bold mr-2">POST</span> 
              https://vebble-ai-backend.onrender.com/api/games
            </p>
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
      {/* Api Info */}
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
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">GraphQL Core Query</h4>
            <pre className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre">
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
          </div>

          {/* Raw URI Query Format */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Raw GET/URI Equivalent</h4>
            <p className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg font-mono text-[11px] break-all text-slate-400">
              <span className="text-pink-400 font-medium">?query=</span>{`{newboard(limit:5){grids{value,solution,difficulty},results,message}}`}
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
