import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home";
import NotFound from "./layout/NotFound";
import "./app.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
