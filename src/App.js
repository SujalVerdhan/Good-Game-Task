import UserContextProvider from "./context/ContextProvider";
import "./App.css";

import { Landing } from "./pages/Landing";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
         
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

