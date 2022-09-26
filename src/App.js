import "./App.css";
import Landing from "./components/Landing/Landing";
import Event from "./components/Event/Event";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      {/* <Landing />
    <Event /> */}
    </>
  );
}

export default App;
