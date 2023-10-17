import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ModalOpen {
  isInstructionOpen: boolean;
  isStatusOpen: boolean;
  handleStatus: (value: boolean) => void;
  handleInstructions: (value: boolean) => void;
}

const ModalContext = createContext<ModalOpen | undefined>(undefined);

export const useModalOpen = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalOpen debe usarse dentro de un ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isInstructionOpen, setIsInstructionOpen] = useState<boolean>(false);
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!localStorage.getItem("firstTime")) setIsInstructionOpen(true);
  }, []);

  const handleStatus = (value: boolean) => {
    setIsStatusOpen(value);
  };

  const handleInstructions = (value: boolean) => {
    setIsInstructionOpen(value);
  };

  const context = {
    isInstructionOpen,
    isStatusOpen,
    handleInstructions,
    handleStatus,
  };

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
};
