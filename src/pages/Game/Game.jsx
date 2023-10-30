import { useState, useEffect } from "react";
import { CardsList } from "../../components/CardsList/CardsList";
import { useNavigate, useParams } from "react-router-dom";

export const Game = () => {
  const { gameId } = useParams();
  const wss = new WebSocket(`ws://localhost:3000/`);

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

  return (
    <div>
      <CardsList enemyName={enemyName} />
    </div>
  );
};
