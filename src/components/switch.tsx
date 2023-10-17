import { FC } from "react";
import { useTheme } from "../context/themeContext";

interface SwitchProps {}

const Switch: FC<SwitchProps> = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <div className="w-[78px] h-[38px] relative" onClick={toggleTheme}>
      <div
        className={`w-[27.30px] h-[29.56px] top-0 bg-gradient-to-b ${
          isDarkTheme
            ? "from-blue-100 to-blue-500 left-0"
            : "from-amber-400 to-orange-400 right-0"
        } rounded-full absolute z-10 transition-all duration-500 ease-in-out`}
      />
      <div className="w-[78px] h-[38px] left-0 top-0 absolute">
        <div
          className={`w-[78px] h-[30px] left-0 top-0 absolute bg-gradient-to-b ${
            !isDarkTheme
              ? "from-cyan-300 to-yellow-100"
              : "from-blue-900 to-blue-200"
          } rounded-[50px] shadow-inner`}
        />
      </div>
      {!isDarkTheme && (
        <>
          <img
            className="w-[10.20px] h-[7px] left-[6.90px] top-[6px] absolute"
            src="https://via.placeholder.com/10x7"
            alt="cloud"
          />
          <img
            className="w-[5.40px] h-[3.71px] left-[25.80px] top-[4px] absolute"
            src="https://via.placeholder.com/5x4"
            alt="cloud"
          />
          <img
            className="w-[8.40px] h-[5.76px] left-[22.50px] top-[10px] absolute"
            src="https://via.placeholder.com/8x6"
            alt="cloud"
          />
        </>
      )}
    </div>
  );
};

export default Switch;
