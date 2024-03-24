/* eslint-disable no-undef */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-no-undef */
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Components/Create/Create";
import Update from "./Components/Update/Update";
import Delete from "./Components/Delete/Delete";
import NotFound from "./Pages/NotFound";
import GlobalProvider from "./Context/GlobalContext";



const App = () => {
  // eslint-disable-next-line no-unused-vars


  return (

    <>
    <GlobalProvider>
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<Update/>}/>
          <Route path="/blogs/:id" element={<Delete/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      </Router>
      </GlobalProvider>
    </>
  );
};

export default App;
