import { FC } from "react";

interface BoxProps {
  char: string;
  color: string;
  text?: string;
}

const Box: FC<BoxProps> = ({char, color, text}) => {
  return (
      <div className={`w-full flex justify-center items-center h-[76px] ${color} rounded-[5px]`}>
        <p className={`w-[25px] h-11 text-center ${text ? text : 'text-white'} text-[35px] font-extrabold`}>
          {char}
        </p>
      </div>
  );
};

export default Box;
