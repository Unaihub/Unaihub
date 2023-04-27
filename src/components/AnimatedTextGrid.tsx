import React, { useEffect, useRef } from "react";
import styles from "../styles/AnimatedTextGrid.module.scss";

// Define the props for the AnimatedTextGrid component
interface AnimatedTextGridProps {
  text: string;
  onFinish?: () => void;
  duration?: number; // in milliseconds
  delayRange?: [number, number]; // in milliseconds, [minDelay, maxDelay]
}

// Function to create a grid cell element
const createGridCell = (
  x: number,
  y: number,
  delay: number,
  duration: number
) => {
  const cell = document.createElement("div");
  cell.className = "grid-cell";
  cell.style.left = `${x * 20}px`;
  cell.style.top = `${y * 20}px`;
  cell.style.transitionDuration = `${duration}ms`;
  cell.style.transitionDelay = `${delay}ms`;
  return cell;
};

// Function to animate the grid cells
const animateGridCells = (cells: HTMLElement[], duration: number) => {
  requestAnimationFrame(() => {
    cells.forEach((cell) => {
      cell.style.transitionDuration = `${duration}ms`;
      cell.style.opacity = "1";
    });
  });
};

// AnimatedTextGrid component
const AnimatedTextGrid: React.FC<AnimatedTextGridProps> = ({
  text,
  onFinish,
  duration = 1000,
  delayRange = [0, 500],
}) => {
  // Ref for the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect to handle the creation and animation of grid cells
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Split the text into characters
    const characters = text.split("");
    const characterElements: HTMLElement[] = [];

    // Create a div element for each character
    characters.forEach((char, index) => {
      const charDiv = document.createElement("div");
      charDiv.className = "character";
      container.appendChild(charDiv);
      characterElements.push(charDiv);
    });

    // Create an array to hold the grid cells for each character
    const cells: HTMLElement[][] = characterElements.map(() => []);
    const maxDelay = delayRange[1] + duration;

    // Create the grid cells
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 5; x++) {
        const delay =
          Math.random() * (delayRange[1] - delayRange[0]) + delayRange[0];
        characterElements.forEach((charDiv, index) => {
          const cell = createGridCell(x, y, delay, duration);
          charDiv.appendChild(cell);
          cells[index].push(cell);
        });
      }
    }

    // Animate the grid cells
    animateGridCells(cells.flat(), duration);

    // Set a timeout to call the onFinish function after the animation is complete
    const onFinishTimeout = setTimeout(() => {
      if (onFinish) onFinish();
    }, maxDelay + 100);

    // Clean up on unmount
    return () => {
      cells.forEach((cellArr) =>
        cellArr.forEach((cell) => container.removeChild(cell))
      );
      clearTimeout(onFinishTimeout);
    };
  }, [text, onFinish, duration, delayRange]);

  // Render the component
  return (
    <div ref={containerRef} className="animated-text-grid">
      {text.split("").map((char, index) => (
        <div key={index} className="character"></div>
      ))}
    </div>
  );
};

export default AnimatedTextGrid;
