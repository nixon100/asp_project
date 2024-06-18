import { BrowserRouter, Route, Routes } from "react-router-dom";
import Excel2 from "./component/excel2";
import Login from "./Login";
import Home from "./pages/Home";
import Myntraforward from "./Myntraforward";
import Main from "./flipkartnew/Main";
import aspfinder from "./pages/aspfinder";
import Mynmain from "./flipkartnew/Mynmain";
import Amzmain from "./flipkartnew/Amzmain";
import Amzprimemain from "./flipkartnew/Amzprimemain";
import Amzfbamain from "./flipkartnew/Amzfbamain";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aspfinder" element={<Excel2 />} />
          <Route path="/aspfinderflipkart" element={<Main />} />
          <Route path="/aspfindermyntra" element={<Mynmain />} />
          <Route path="/aspfindereasyship" element={<Amzmain />} />
          <Route path="/aspfinderprimeonly" element={<Amzprimemain />} />
          <Route path="/aspfinderfba" element={<Amzfbamain />} />

          <Route path="/aspcalculator" element={<Myntraforward />} />

          {/* <Route path='/' element={<Excel2/>}/>
          <Route index element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
