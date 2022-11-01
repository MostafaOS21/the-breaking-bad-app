import "./App.css";

// React Router
import { Routes, Route, Link, useLocation } from "react-router-dom";

// Recoil
import { RecoilRoot } from "recoil";

// Navbar
import Navbar from "./components/Navbar";

// Welcome
import Welcome from "./components/Welcome";

// Characters
import Characters from "./components/Characters";

// Single Character
import SingleCharacter from "./components/SingleCharacter";

// Episodes
import Episodes from "./components/Episodes";
// Single Episodes
import SingleEpisode from "./components/SingleEpisode";
import Quotes from "./components/Quotes";
import Deaths from "./components/Deaths";

// Framer Motion
import {AnimatePresence} from 'framer-motion';

function App() {
  // See Dark theme

  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  const location = useLocation();

  return (
    <RecoilRoot>
      <div className="App relative dark:bg-slate-800 bg-white transition-all duration-700">
        <Navbar/>
        <AnimatePresence>

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:charId" element={<SingleCharacter />} />
          <Route path="/episodes" element={<Episodes/>} />
          <Route path="/episodes/:epsId" element={<SingleEpisode/>} />
          <Route path="/quotes" element={<Quotes/>} />
          <Route path="/deaths" element={<Deaths/>} />
        </Routes>
        </AnimatePresence>
      </div>
    </RecoilRoot>
  );
}

export default App;
