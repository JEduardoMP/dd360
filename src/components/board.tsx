import { useEffect, useRef, useState } from "react";
import ChartIcon from "../assets/chart-icon";
import QuestionCircle from "../assets/question-circle";
import { useModalOpen } from "../context/modalInstructionStats";
import { useTheme } from "../context/themeContext";
import Box from "./box";
import Keyboard from "./keyboard";
import Switch from "./switch";
import { useKeyPressed } from "../context/keyPressedContext";
import { validateWord } from "../utils/validateWord";

const Board: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { handleInstructions, handleStatus } = useModalOpen();
  const { currentChar } = useKeyPressed();

  const [words, setWords] = useState(localStorage.getItem("word") || "");
  const [splited, setSplited] = useState<string[]>(
    JSON.parse(localStorage.getItem("splited") as string) || []
  );
  const [color, setColor] = useState<string[][]>(
    JSON.parse(localStorage.getItem("color") as string) || []
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const splitedWord = words.split(" ");
    setSplited(splitedWord);
    localStorage.setItem("word", words);
    localStorage.setItem("splited", JSON.stringify(splited));
  }, [words]);

  useEffect(() => {
    const res: string[][] = [];
    splited.forEach((word) => {
      if (word.length < 5) return;
      const data = validateWord(
        localStorage.getItem("selectedWord")?.toLocaleUpperCase() as string,
        word
      );
      res.push(data);
    });
    if (res.some((el) => el.every((data) => data === "bg-success"))) {
      const count = Number(localStorage.getItem("points")) || 0;
      localStorage.setItem("points", JSON.stringify(count + 1));
      localStorage.setItem("block", JSON.stringify(true));
      handleStatus(true)
    }
    setColor(res);
    localStorage.setItem("color", JSON.stringify(res));
    if (res.length === 5 && res.every((el) => el.every((elem) => elem))) {
      handleStatus(true);
    }
  }, [splited]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("block") as string)) return;
    const inputValue = words;
    const splitedWord = inputValue.split(" ");
    if (splitedWord.length === 6) return;
    if (
      typeof currentChar === "object" &&
      words.charAt(words.length - 1) !== " "
    ) {
      const newWord = words;
      const slicedWord = newWord.slice(0, -1);
      setWords(slicedWord);
    }
    if (
      currentChar &&
      currentChar !== "ENTER" &&
      typeof currentChar !== "object"
    ) {
      const newWord = words + currentChar;
      const formattedValue = newWord
        .replace(/[^a-zA-Z]/g, "")
        .toLocaleUpperCase()
        .replace(/(.{5})/g, "$1 ");
      setWords(formattedValue);
    }
  }, [currentChar]);

  const handleFocus = () => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  };

  useEffect(() => {
    handleFocus();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const splitedWord = inputValue.split(" ");
    const native = e.nativeEvent as InputEvent;

    if (splitedWord.length === 6) return;

    if (
      native.inputType === "deleteContentBackward" &&
      words.charAt(words.length - 1) === " "
    ) {
      e.preventDefault();
    } else {
      const formattedValue = inputValue
        .replace(/[^a-zA-Z]/g, "")
        .toLocaleUpperCase()
        .replace(/(.{5})/g, "$1 ");

      setWords(formattedValue);
    }
  };

  return (
    <div
      className={`w-screen h-full min-h-screen ${
        isDarkTheme ? "bg-dark" : "bg-light"
      } py-14`}
    >
      <input
        type="text"
        ref={inputRef}
        className="w-0 h-0"
        onBlur={handleFocus}
        value={words}
        onChange={handleInput}
        disabled={JSON.parse(localStorage.getItem("block") as string)}
      />
      <div
        className={`${
          isDarkTheme ? "bg-gray-300 bg-opacity-30" : "bg-zinc-100"
        } flex justify-between items-center p-5 w-11/12 md:w-2/4 mx-auto rounded-md max-w-[500px]`}
      >
        <div
          className="cursor-pointer"
          onClick={() => handleInstructions(true)}
        >
          <QuestionCircle />
        </div>
        <h2 className="text-2xl md:text-[40px] text-center text-[40px] font-semibold tracking-[3px]">
          WORDLE
        </h2>
        <div className="flex items-center gap-4 justify-center">
          <div className="cursor-pointer" onClick={() => handleStatus(true)}>
            <ChartIcon />
          </div>
          <Switch />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-8 w-11/12 md:w-2/4 max-w-[500px] mx-auto">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Box
            char={splited?.[0]?.[idx]}
            color={color?.[0]?.[idx] || "bg-input-blank"}
          />
        ))}
        {Array.from({ length: 5 }).map((_, idx) => (
          <Box
            char={splited?.[1]?.[idx]}
            color={color?.[1]?.[idx] || "bg-input-blank"}
          />
        ))}
        {Array.from({ length: 5 }).map((_, idx) => (
          <Box
            char={splited?.[2]?.[idx]}
            color={color?.[2]?.[idx] || "bg-input-blank"}
          />
        ))}
        {Array.from({ length: 5 }).map((_, idx) => (
          <Box
            char={splited?.[3]?.[idx]}
            color={color?.[3]?.[idx] || "bg-input-blank"}
          />
        ))}
        {Array.from({ length: 5 }).map((_, idx) => (
          <Box
            char={splited?.[4]?.[idx]}
            color={color?.[4]?.[idx] || "bg-input-blank"}
          />
        ))}
      </div>
      <div>
        <Keyboard />
      </div>
    </div>
  );
};

export default Board;
