import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import Score from "./pages/Score";
import Optimize from "./pages/Optimize";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/score" element={<Score />} />
          <Route path="/optimize" element={<Optimize />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;