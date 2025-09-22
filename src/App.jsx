
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Video from './pages/Video'
import NotFound from './pages/NotFound'
function App() {
  

  return (
    <Routes>
      <Route path='/'element={ <Home/> } ></Route>
      <Route path='/video' element={ <Video/> }></Route>
      <Route paht='*' element={<NotFound></NotFound>}></Route>
      <Route></Route>
    </Routes>
  )
}

export default App
