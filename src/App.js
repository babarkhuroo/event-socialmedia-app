import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEvent from './components/CreateEvent'
import EventDetails from './components/EventDetails'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/create' element={<CreateEvent />} />
        <Route path='/event' element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
