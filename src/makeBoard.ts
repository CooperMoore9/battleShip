const playerGrid = document.getElementById("playerGrid") as HTMLElement;
const botGrid = document.getElementById("botGrid") as HTMLElement;

export function makeGrid(input: number, container: HTMLElement) {
  container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;

  for (let i = 0; i < input * input; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add(`${i}`, "box", "border-2", "border-sky-800");

    gridBox.addEventListener("mouseover", () => {
      gridBox.style.backgroundColor = "grey";
    });

    gridBox.addEventListener("mouseleave", () => {
      gridBox.style.backgroundColor = "white";
    });

    container.appendChild(gridBox);
  }
}

function clearGrid() {
  const deleteTheBoxes = document.querySelectorAll(".box");
  deleteTheBoxes.forEach((div) => {
    div.remove();
  });
}

makeGrid(10, playerGrid);
makeGrid(10, botGrid);
