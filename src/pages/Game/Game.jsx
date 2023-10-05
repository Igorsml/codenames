import { useState, useEffect } from "react";
import { CardsList } from "../../components/CardsList/CardsList";
import { useNavigate, useParams } from "react-router-dom";

export const Game = () => {
  const { gameId } = useParams();
  const wss = new WebSocket(`ws://localhost:3000/`);

  const [canPickCard, setCanPickCard] = useState(false);
  const [enemyName, setEnemyName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    wss.onopen = () => {
      wss.send(
        JSON.stringify({
          event: "connect",
          payload: { username: localStorage.nickname, gameId: gameId },
        })
      );
    };
  }, []);

  wss.onmessage = (response) => {
    const { type, payload } = JSON.parse(response.data);
    JSON.parse(response.data);
    const { userName, canStart, enemyName, success } = payload;

    switch (type) {
      case "connectToPlay":
        if (!success) {
          return navigate("/");
        }
        setEnemyName(enemyName);
        break;

      case "readyToPaly":
        if (userName === localStorage.nickname && canStart) {
          setCanPickCard(true);
        }
    }
  };

  return (
    <div>
      <CardsList enemyName={enemyName} />
    </div>
  );
};
