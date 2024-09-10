import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Common/Header/Header";
import Home from "./Components/MainPage/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
    </>
  );
}

export default App;
