// frontend/src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Upload from "./pages/Upload";
import Score from "./pages/Score";
import Optimize from "./pages/Optimize";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Navbar */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="app-container flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl">V</div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">PulseCV</h1>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Upload</Link>
              <Link to="/score" className="hover:text-blue-600 transition-colors">Score</Link>
              <Link to="/optimize" className="hover:text-blue-600 transition-colors">Optimize</Link>
            </div>
          </div>
        </nav>

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="/score" element={<Score />} />
            <Route path="/optimize" element={<Optimize />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
