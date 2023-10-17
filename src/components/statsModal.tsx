import React from "react";
import { useTheme } from "../context/themeContext";
import { useModalOpen } from "../context/modalInstructionStats";
import CustomButton from "./customButton";

interface StatsModalInterface {
  time: string;
}

const StatsModal: React.FC<StatsModalInterface> = ({ time }) => {
  const { isDarkTheme } = useTheme();
  const { handleStatus } = useModalOpen();

  return (
    <div
      className={`bg-modal-transparent flex items-center justify-center fixed z-20 h-screen w-screen py-4`}
    >
      <div
        className={`${
          isDarkTheme ? "bg-dark" : "bg-light"
        } rounded-md border border-2 w-11/12 my-4 md:w-9/12 lg:w-[60%] h-[70%] overflow-y-scroll`}
      >
        <div className="w-3/4 mx-auto flex flex-col justify-between h-full py-8">
          <h2 className="text-center text-[35px] font-extrabold">
            Estadísticas
          </h2>
          <div className="flex justify-between">
            <div className="text-center">
              <h3 className="text-[25px] font-bold">
                {localStorage.getItem("games") || 0}
              </h3>
              <p className="text-[19px] font-normal">Jugadas</p>
            </div>
            <div className="text-center">
              <h3 className="text-[25px] font-bold">
                {localStorage.getItem("points") || 0}
              </h3>
              <p className="text-[19px] font-normal">Victorias</p>
            </div>
          </div>
          {JSON.parse(localStorage.getItem("block") as string) && (
            <p className="text-center">
              La palabra era:{" "}
              <strong>
                {localStorage.getItem("selectedWord")?.toLocaleUpperCase()}
              </strong>
            </p>
          )}
          <div>
            <p className="text-[19px] font-normal text-center">
              SIGUIENTE PALABRA
            </p>
            <p className="text-[19px] font-bold text-center">{time}</p>
          </div>
          <div className="w-9/12 mx-auto">
            <CustomButton title="Aceptar" onClick={() => handleStatus(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsModal;
