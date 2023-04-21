import "./App.css";
import Campaign from "./pages/Campaign";
import Create from "./pages/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Campaign />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
