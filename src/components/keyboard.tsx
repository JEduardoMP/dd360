import { FC } from "react";
import {
  firstLine,
  secondLine,
  thirdLine,
} from "../constants/keyboard.contants";
import Key from "./key";

interface KeyboardProps {}

const Keyboard: FC<KeyboardProps> = () => {
  return (
    <div className="bg-keyboard w-11/12 md:w-[60%] max-w-[590px] p-4 flex flex-col gap-2 mt-4 mx-auto rounded-lg">
      <div className="flex justify-center gap-4">
        {firstLine.map((key) => (
          <Key char={key} />
        ))}
      </div>
      <div className="flex justify-end gap-4">
        {secondLine.map((key) => (
          <Key char={key} />
        ))}
      </div>
      <div className="flex gap-4">
        {thirdLine.map((key: string) => (
          <Key char={key} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
