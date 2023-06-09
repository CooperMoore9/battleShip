import { boardArray } from ".";
import { playerGrid } from "./boardSetup";
import { currentLength, gameBoard, updateGameBoard } from "./gameBoardLogic";
import { ghostShip } from "./ghostShip";

const rotateButton = document.getElementById("rotateButton") as HTMLElement;
export let vertNum = 1;

rotateButton.addEventListener("click", () => {
  if (vertNum === 1) {
    vertNum = 10;
  } else {
    vertNum = 1;
  }
  updateGameBoard(boardArray, playerGrid);
  gameBoard(boardArray);
});
