import {LoginPage} from "./components/login-page";
import './styles-global/reset.css'
import {HomePage} from "./components/hotels-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
                  <Routes>
                      <Route path="/" element= {<LoginPage/>}/>
                      <Route path="/home" element={<HomePage/>}/>
                  </Routes>
      </BrowserRouter>

  );
}

export default App;
