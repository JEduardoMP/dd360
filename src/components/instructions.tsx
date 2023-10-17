// src/components/Instructions.tsx
import React, { FC } from "react";
import Box from "./box";
import { canto, gatos, vocal } from "../constants/instructions";
import { useTheme } from "../context/themeContext";
import CustomButton from "./customButton";
import { useModalOpen } from "../context/modalInstructionStats";

const Instructions: FC = () => {
  const { isDarkTheme } = useTheme();
  const { handleInstructions } = useModalOpen();
  const handleClose = () => {
    const isNotFirstTime = localStorage.getItem("firstTime");
    if (!isNotFirstTime) localStorage.setItem("firstTime", "true");
    handleInstructions(false);
  };
  return (
    <div
      className={`bg-modal-transparent flex items-center justify-center absolute z-20 h-screen w-screen py-4`}
    >
      <div
        className={`${
          isDarkTheme ? "bg-dark" : "bg-light"
        } rounded-md border border-2 w-11/12 my-4 md:w-9/12 lg:w-[26rem] h-full overflow-y-scroll`}
      >
        <div className="w-11/12 mx-auto flex flex-col gap-4 py-8">
          <h2 className="text-center text-[35px] font-extrabold">Cómo jugar</h2>
          <p className="text-[19px] font-normal">
            Adivina la palabra oculta en cinco intentos.
          </p>
          <p className="text-[19px] font-normal">
            Cada intento debe ser una palabra válida de 5 letras.
          </p>
          <p className="text-[19px] font-normal">
            Después de cada intento el color de las letras cambia para mostrar
            qué tan cerca estás de acertar la palabra.
          </p>
          <p className="text-[19px] font-bold">Ejemplos</p>
          <div className="flex gap-2 items-center justify-center">
            {gatos.map((el) => (
              <Box
                char={el.char}
                color={
                  el.color
                    ? el.color
                    : isDarkTheme
                    ? "bg-dark border border-2"
                    : "bg-light border border-2"
                }
                text={isDarkTheme ? "text-dark-theme" : "text-light-theme"}
              />
            ))}
          </div>
          <p className="text-[19px] font-normal">
            {" "}
            La letra <strong>G</strong> está en la palabra y en la posición
            correcta
          </p>
          <div className="flex gap-2 items-center justify-center">
            {vocal.map((el) => (
              <Box
                char={el.char}
                color={
                  el.color
                    ? el.color
                    : isDarkTheme
                    ? "bg-dark border border-2"
                    : "bg-light border border-2"
                }
                text={isDarkTheme ? "text-dark-theme" : "text-light-theme"}
              />
            ))}
          </div>
          <p className="text-[19px] font-normal">
            La letra <strong>C</strong> está en la palabra pero en la posición
            incorrecta.
          </p>
          <div className="flex gap-2 items-center justify-center">
            {canto.map((el) => (
              <Box
                char={el.char}
                color={
                  el.color
                    ? el.color
                    : isDarkTheme
                    ? "bg-dark border border-2"
                    : "bg-light border border-2"
                }
                text={isDarkTheme ? "text-dark-theme" : "text-light-theme"}
              />
            ))}
          </div>
          <p className="text-[19px] font-normal">
            La letra <strong>O</strong> no está en la palabra.
          </p>
          <p className="text-[19px] font-normal">
            Puede haber letras repetidas. Las pistas son independientes para
            cada letra.
          </p>
          <p className="text-[19px] font-normal text-center my-4">
            ¡Una palabra nueva cada 5 minutos!
          </p>
          <div className="w-9/12 mx-auto">
            <CustomButton title="¡JUGAR!" onClick={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
