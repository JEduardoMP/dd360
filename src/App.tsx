import { useEffect, useState } from "react";
import Board from "./components/board";
import Instructions from "./components/instructions";
import StatsModal from "./components/statsModal";
import { useModalOpen } from "./context/modalInstructionStats";
import { randomWord } from "./utils/randomWord";
import { dictWords } from "./constants/words";

function App() {
  const { isInstructionOpen, isStatusOpen } = useModalOpen();

  const [countdown, setCountdown] = useState<number>(
    Number(localStorage.getItem("countdown")) || 300
  );
  const [format, setFormat] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        const updatedCountdown = prevCountdown - 1;
        localStorage.setItem("countdown", updatedCountdown.toString());

        if (updatedCountdown <= 0) {
          clearInterval(timer);
          setCountdown(300);
          const count = Number(localStorage.getItem("games")) || 0;
          localStorage.setItem("games", JSON.stringify(count + 1));
          localStorage.setItem("word", '');
          localStorage.setItem("splited", JSON.stringify([]));
          localStorage.setItem("color", JSON.stringify([]));
          localStorage.setItem("block", JSON.stringify(false));
          window.location.reload();
        }

        return updatedCountdown;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    if (localStorage.getItem('selectedWord')) return
    const selected = randomWord(dictWords)
    localStorage.setItem('selectedWord', selected)
  }, [])

  useEffect(() => {
    const segundosTotales = countdown;
    const minutos = Math.floor(segundosTotales / 60);
    const segundos = segundosTotales % 60;

    setFormat(`${minutos} minutos y ${segundos} segundos`);
  }, [countdown]);

  return (
    <>
      {isInstructionOpen && <Instructions />}
      {isStatusOpen && <StatsModal time={format} />}
      <Board />
    </>
  );
}

export default App;
