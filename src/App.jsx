import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideBar /> {/* This renders the sidebar */}
        <div className="main-content">
          <Routes>
            <Route path="/home" component={HomePage} />
            {/* Add other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
