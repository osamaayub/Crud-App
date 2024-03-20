/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-no-undef */
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./Components/Read/Read";
import Create from "./Components/Create/Create";
import Delete from "./Components/Delete/Delete";
import Update from "./Components/Update/Update";
import NotFound from "./Pages/NotFound";



const App = () => {
  // eslint-disable-next-line no-unused-vars


  return (

    <>
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read/>}/>
          <Route path="/blogs/:id" element={<Update/>}/>
          <Route path="/blogs/:id" element={<Delete/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
};

export default App;
