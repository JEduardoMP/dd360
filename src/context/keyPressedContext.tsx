/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface KeyPressedContextType {
  currentChar: string | any;
  handleKeyPressed: (char: string) => void;
}

const KeyPressedContext = createContext<KeyPressedContextType | undefined>(undefined);

export const useKeyPressed = () => {
  const context = useContext(KeyPressedContext);
  if (!context) {
    throw new Error('useKeyPressed debe usarse dentro de un KeyPressedProvider');
  }
  return context;
};

interface KeyPressedProviderProps {
  children: ReactNode;
}

export const KeyPressedProvider: React.FC<KeyPressedProviderProps> = ({ children }) => {
  const [currentChar, setCurrentChar] = useState<string | any>('');

  const resetChar = async () => {
    await setCurrentChar('')
  }

  const handleKeyPressed = async (char: string | any) => {
    await setCurrentChar(char);
    await resetChar();
  }

  return (
    <KeyPressedContext.Provider value={{ currentChar, handleKeyPressed }}>
      {children}
    </KeyPressedContext.Provider>
  );
};
