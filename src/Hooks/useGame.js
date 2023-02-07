import { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";

export const useGame = () => {
  const context = useContext(GameContext);

  return context;
};
