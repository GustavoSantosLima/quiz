import React, { createContext, useReducer } from "react";
import GameReducer, { initialState } from "../Reducers/GameReducer";

export const GameContext = createContext(initialState);

export const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameContext.Provider value={{ game: state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
