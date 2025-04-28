import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className="app-container">
        <HomePage />
        <div className="main-content">
          <Routes>
            <Route path="/home" component={HomePage} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
