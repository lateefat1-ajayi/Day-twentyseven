import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddIdea from "./pages/AddIdea";
import SavedIdeas from "./pages/SavedIdeas";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddIdea />} />
          <Route path="/saved" element={<SavedIdeas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
