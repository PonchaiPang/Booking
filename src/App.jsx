// import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import Slide from "./component/Slide";
import Facility from "./component/Facility";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Search />
        <Slide />
        <Facility />
      </div>
    </>
  );
}

export default App;
