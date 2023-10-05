import { useState, useEffect } from "react";
import axios from "axios";

export function GetCards() {
  const [words, setWords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cards")
      .then((response) => {
        setWords(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error fetching cards");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return words;
}
