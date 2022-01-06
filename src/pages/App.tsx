/*
 * @Author: zoie.lai
 * @Date: 2022-01-01 15:24:12
 * @LastEditor: zoie.lai
 * @LastEditTime: 2022-01-06 16:53:50
 */
import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
