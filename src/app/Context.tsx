import React, { createContext, useState } from "react";
import { type TodoContextType } from "../types/contextType";

export const MyContext = createContext<TodoContextType | null>(null);

interface Props {
  children: React.ReactNode
}

const Context: React.FC<Props> = (props: Props) => {
  const [mainMenu, setMainMenu] = useState<string>("Teams");

  const mainMenuHandler = (value: string): any => {
    setMainMenu(value);
  };

  return (
    <MyContext.Provider value={{ mainMenu, mainMenuHandler }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
