import { Routes,Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LoginOptions from './pages/login/LoginOptions'
import HomeMain from "./pages/home_pages/Home";
import Signup from "./pages/login/Signup"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginOptions />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/forgot-password" element={<LoginOptions />} />
        <Route path="/signup" element ={<Signup />} />
        <Route path="/home" element= {<HomeMain />} />
      </Routes>
    </div>
      


  )
}

export default App
