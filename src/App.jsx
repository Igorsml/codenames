import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Game } from "./pages/Game/Game";
import { Rules } from "./pages/Rules/Rules";
import { Page404 } from "./pages/Page404/Page404";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/game">
          <Route path=":gameId" element={<Game />} />
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
