import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Curriculum } from "./pages/Curriculum/Curriculum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Curriculum />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
