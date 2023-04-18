import "./App.css";
import Campaña from "./pages/Campaña";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crear from "./pages/Crear";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Campaña />} />
          <Route path="/create" element={<Crear />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
