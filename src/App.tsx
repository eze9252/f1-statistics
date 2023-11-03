import { Routes, Route } from 'react-router-dom'
import Drivers from './pages/drivers'
import Header from './header'

function App () {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/drivers' element={<Drivers />} />
          <Route path='/' element={<div />} />
        </Routes>
      </div>
    </>
  )
}

export default App
