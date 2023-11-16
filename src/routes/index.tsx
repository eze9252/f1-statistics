import { Routes, Route } from 'react-router-dom'
import Drivers from '../pages/drivers'
import Teams from '../pages/teams'
import NotFound from '../pages/notFound'
import Header from '../components/header'

function App () {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/drivers' element={<Drivers />} />
          <Route path='/teams' element={<Teams />} />
          <Route path='/' element={<div />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
