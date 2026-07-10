import { Routes , Route } from 'react-router-dom'
import {HomePage , SudokuDocs , About , PlayGround , Roadmap ,Docs , SchulteDocs} from "./pages/index.js"

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path="/docs" element = {<Docs/>} />
        <Route path="/playground" element = {<PlayGround />} />
        <Route path="/about" element = {<About />} />
        <Route path='/roadmap' element = {<Roadmap/>} />
        <Route path='/docs/sudoku-docs' element = {<SudokuDocs/>} />
        <Route path='/docs/schulte-docs' element = {<SchulteDocs/>} />
      </Routes>
    </div>
  )
}

export default App