import "./App.css";
import "./index.css";
import Header from "./components/Header.jsx";
import MyFeed from "./pages/MyFeed.jsx";
import Meetings from "./pages/Meetings.jsx";
import TeamReport from "./pages/TeamReport.jsx";
import VoiceMemo from "./pages/VoiceMemo.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InsightProvider } from "./context/InsightContext.jsx";
import LoginRegister from "./pages/LoginRegister.jsx";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <InsightProvider>
      <Router>
        {isLoggedIn ? (
          <div className="font-inter ml-[2.31rem] mr-[2.31rem] no-scrollbar">
            <Header />
            <Routes>
              <Route path="/" element={<MyFeed />} />
              <Route path="/meetings" element={<Meetings />} />
              <Route path="/report" element={<TeamReport />} />
              <Route path="/memo" element={<VoiceMemo />} />
            </Routes>
          </div>
        ) : (
          <LoginRegister setIsLoggedIn={setIsLoggedIn} />
        )}
      </Router>
    </InsightProvider>
  );
}

export default App;
