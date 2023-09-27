export const WebSocket = () => {
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
  return <div></div>;
};
