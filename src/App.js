import {createContext, useState, react} from "react";
import Home from "./components/Home";
import SegundaPantalla from "./components/SegundaPantalla";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const UserIdContext = createContext();

function App() {
  const [value, setValue] = useState(parseInt(Math.random()*10000));

  return (
      <UserIdContext.Provider value={value}>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/segundapantalla" element={<SegundaPantalla/>}/>
        </Routes>
      </Router>
    </div>
        </UserIdContext.Provider>
  );
}

export default App;
