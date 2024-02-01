import UserContextProvider from "./context/ContextProvider";
import "./App.css";

import { Landing } from "./pages/Landing";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Description } from "./pages/Description";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

