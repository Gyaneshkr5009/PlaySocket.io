import { Routes , Route } from 'react-router-dom'
import {HomePage , GetStarted , About , Working } from "./pages/index.js"

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path="/docs" element = {<GetStarted/>} />
        <Route path="/working-demo" element = {<Working />} />
        <Route path="about" element = {<About />} />
      </Routes>
    </div>
  )
}

export default App