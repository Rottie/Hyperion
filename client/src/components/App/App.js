// import Landing from "../Landing/landing";
import Landing from "../Landing/landing";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
