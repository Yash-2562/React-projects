// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'; 
import TextForm from './Components/TextForm';
import About from './Components/About'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
 
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils"  />
      <div className="container">
	<Routes>
		 <Route path="/about" element={<About/>}></Route>	
		 <Route path="/" element={<TextForm heading="Enter the Text"/>}></Route>	
	</Routes>
      {/* <TextForm heading="Enter the Text"/>  */}
      {/* <About/> */}
      </div>
</BrowserRouter>
    </>
  );
}

export default App;
