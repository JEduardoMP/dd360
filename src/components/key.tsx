import { FC } from "react";
import { useKeyPressed } from "../context/keyPressedContext";

interface KeyProps {
  char: string;
}

const Key: FC<KeyProps> = ({ char }) => {
  const { handleKeyPressed } = useKeyPressed();
  return (
    <div
      className={`bg-keys w-full md:w-[2.3rem] md:min-w-fit h-[3rem] rounded flex items-center justify-center cursor-pointer`}
      key={char}
      onClick={() => handleKeyPressed(char)}
    >
      <p className="font-bold text-black">{char}</p>
    </div>
  );
};

export default Key;
