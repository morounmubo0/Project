import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import SignUp from './Page/SignUp/SignUp'
import LogIn from './Page/LogIn/LogIn'
import Quran from './Page/Quran/Quran_1.jsx'
import Prayer from './Page/Prayer/Prayer.jsx'
import Calendar from './Page/Calendar/Calendar.jsx'
import './App.css'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/quran_1" element={<Quran />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
     </Router>
    </>
  )
}

export default App