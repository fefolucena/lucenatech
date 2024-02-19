import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Curriculum } from "./pages/Curriculum/Curriculum";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { LandingPageExample } from "./pages/LandingPageExample/LandingPageExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/landing-page-example" element={<LandingPageExample />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
