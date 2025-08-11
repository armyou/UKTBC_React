import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify'
import Login from './pages/startingPages/login'
import MainPages from './pages/startingPages/mainPages'
import Register from './pages/startingPages/register';

function App() {

  return (
    <div className="app">
      <Router>
        <ToastContainer position='top-right' autoClose={3000} />
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path="/*" element={<MainPages/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
