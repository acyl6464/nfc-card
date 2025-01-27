import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/homePage/indexHome';
import IndexDashboard from './pages/dashboardPage/indexDashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<IndexDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
