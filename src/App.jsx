import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cards } from "./components/Cards/Cards";
import { Rules } from "./pages/Rules/Rules";
import { Page404 } from "./pages/Page404/Page404";

import "./App.css";

const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
  console.log("Connected to server");
  socket.send("Hello Server!");
};

socket.onmessage = (event) => {
  console.log(`Received message from server: ${event.data}`);
};

socket.onclose = () => {
  console.log("Disconnected from server");
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/game" element={<Cards />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
