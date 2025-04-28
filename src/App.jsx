import './index.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Inventory from './pages/Inventory'
import SideBar from './components/SideBar'

function App() {
  return (
    <main className='flex min-h-screen'>
      <SideBar />
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
