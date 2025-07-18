import './App.css';
import './index.css';
import Header from './components/Header.jsx';
import MainDashboard from './components/MainDashboard.jsx';
import Meetings from './components/Meetings.jsx';
import TeamReport from './components/TeamReport.jsx';
import VoiceMemo from './components/VoiceMemo.jsx';
import CalendarView from './components/CalendarView.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InsightProvider } from './context/InsightContext.jsx';

function App() {
  return (
    <InsightProvider>
      <Router>
        <div className="font-inter ml-[2.31rem] mr-[2.31rem] no-scrollbar">
          <Header />
          <Routes>
            <Route path="/" element={<MainDashboard />}></Route>
            <Route path="/meetings" element={<Meetings />}></Route>
            <Route path="/report" element={<TeamReport />}></Route>
            <Route path="/memo" element={<VoiceMemo />}></Route>
            <Route path="//calendar" element={<CalendarView />}></Route>
          </Routes>
        </div>
      </Router>
    </InsightProvider>
  );
}

export default App;
