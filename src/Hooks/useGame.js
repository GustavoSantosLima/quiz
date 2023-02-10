import { useContext } from "react";
import { GameContext } from "../contexts/GameContextProvider";

export const useGame = () => {
  const context = useContext(GameContext);

  return context;
};
