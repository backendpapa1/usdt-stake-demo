import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./screen/Home";
import Login from "./screen/Login";

function App() {
  return (
    <div>
      <Routes>
          {/*{localStorage.getItem('user') == 'user' && localStorage.getItem('password') == '12345'?}*/}
        <Route path="/stake" element={ <Home />} />
        <Route path="/" element={ <Login />} />
      </Routes>
    </div>

  );
}

export default App;
