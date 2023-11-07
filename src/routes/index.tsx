import { Routes, Route } from 'react-router-dom'
import Drivers from '../pages/drivers'
import NotFound from '../pages/notFound'
import Header from '../components/header'

function App () {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/drivers' element={<Drivers />} />
          <Route path='/' element={<div />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
