import './App.css';
import 'sweetalert2/src/sweetalert2.scss'
import { Route, Routes } from "react-router-dom";
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import FreeBoard from './pages/FreeBoard'
import UsedBoard from './pages/UsedBoard'
import Coaching from './pages/Coaching'
import MyPage from './pages/MyPage'
import Login from './pages/Login'
import RegistUser from './pages/RegistUser'
import ModalLogin from './pages/ModalLogin';
import {useEffect} from 'react'

function App() {
  useEffect(() => {
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/ModalLogin" element={<ModalLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/usedBoard" element={<UsedBoard />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/registUser" element={<RegistUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
