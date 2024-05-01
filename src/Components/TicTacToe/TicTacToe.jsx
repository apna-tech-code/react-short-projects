import React, { useEffect, useRef, useState } from "react";
import "./ticTacToe.css";

const TicTacToe = () => {
  const [size, setSize] = useState(3);
  const [sizeArr, setSizeArr] = useState([]);
  const [selectedStep, setSelectedStep] = useState({
    player1: [],
    player2: [],
  });
  const [isP1Turn, setIsP1Turn] = useState(true);
  const [winner, setWinner] = useState(null);
  const sizeRef = useRef(null);

  useEffect(() => {
    setSizeArr(Array(size).fill(Array(size).fill(null)));
  }, [size]);

  useEffect(() => {
    if (selectedStep.player1?.length > 2 || selectedStep.player2?.length > 2) {
      const winSymbol = checkWinner();
      if (winSymbol === "X") {
        setWinner(1);
      } else if (winSymbol === "O") {
        setWinner(2);
      }
    }
  }, [selectedStep]);

  const handleSelection = (index, subIndex) => {
    if (isP1Turn) {
      setSelectedStep({
        ...selectedStep,
        player1: [...selectedStep.player1, [index, subIndex]],
      });
    } else {
      setSelectedStep({
        ...selectedStep,
        player2: [...selectedStep.player2, [index, subIndex]],
      });
    }
    setIsP1Turn(!isP1Turn);
  };

  const renderSign = (index, subIndex) => {
    const pair = [index, subIndex];
    const isIncludeForP1 = selectedStep.player1.some((subArray) => {
      return (
        subArray.length === pair.length &&
        subArray.every((value, index) => value === pair[index])
      );
    });
    if (isIncludeForP1) {
      return "X";
    } else {
      const isIncludeForP2 = selectedStep.player2.some((subArray) => {
        return (
          subArray.length === pair.length &&
          subArray.every((value, index) => value === pair[index])
        );
      });
      if (isIncludeForP2) {
        return "O";
      }
    }
  };

  const createEmptyBoard = () => {
    return Array.from({ length: size }, () =>
      Array.from({ length: size }, () => null)
    );
  };

  const generateWinningSets = () => {
    const winningSets = [];

    // Generate sets for rows
    for (let i = 0; i < size; i++) {
      const rowSet = [];
      for (let j = 0; j < size; j++) {
        rowSet.push({ row: i, col: j });
      }
      winningSets.push(rowSet);
    }

    // Generate sets for columns
    for (let i = 0; i < size; i++) {
      const colSet = [];
      for (let j = 0; j < size; j++) {
        colSet.push({ row: j, col: i });
      }
      winningSets.push(colSet);
    }

    // Generate set for diagonal from top-left to bottom-right
    const diagonal1 = [];
    for (let i = 0; i < size; i++) {
      diagonal1.push({ row: i, col: i });
    }
    winningSets.push(diagonal1);

    // Generate set for diagonal from top-right to bottom-left
    const diagonal2 = [];
    for (let i = 0; i < size; i++) {
      diagonal2.push({ row: i, col: size - 1 - i });
    }
    winningSets.push(diagonal2);

    return winningSets;
  };

  const checkWinner = () => {
    const board = createEmptyBoard();

    // Fill the board with players' moves
    selectedStep.player1.forEach(([row, col]) => {
      board[row][col] = "X";
    });

    selectedStep.player2.forEach(([row, col]) => {
      board[row][col] = "O";
    });

    const winningSets = generateWinningSets();

    // Check each winning set to determine the winner
    for (const set of winningSets) {
      const symbols = set.map(({ row, col }) => board[row][col]);
      const firstSymbol = symbols[0];
      if (firstSymbol && symbols.every((symbol) => symbol === firstSymbol)) {
        return firstSymbol; // Return the winning symbol ('X' or 'O')
      }
    }

    return null;
  };

  const handleClear = () => {
    setSelectedStep({ player1: [], player2: [] });
    setIsP1Turn(true);
    setSize(3);
    sizeRef.current.value = 3;
  };

  return (
    <div className="container">
      <div className="main-content">
        <h2 className="c-white text-center">
          <strong style={{ color: winner ? "yellow" : "white" }}>
            {winner
              ? `Player ${winner} Wins`
              : `Player ${isP1Turn ? "1" : "2"} Turn`}
          </strong>
        </h2>
        <div>
          <input
            type="number"
            placeholder="Set Size"
            defaultValue={size}
            ref={sizeRef}
          ></input>
          <br />
          <br />
          <div className="flex justify-between">
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                const newSize = +sizeRef.current.value;
                if (newSize < 3) {
                  alert("Min size 3 allowed");
                } else {
                  setSize(newSize);
                }
              }}
            >
              Set Size
            </button>
            &nbsp; &nbsp; &nbsp;
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                handleClear();
              }}
            >
              Reset
            </button>
          </div>
          <br />
        </div>

        <div>
          {sizeArr.map((x, i) => (
            <div key={`tic-${i}`} className="tic-tac-toe">
              {x.map((sub, j) => {
                const sign = renderSign(i, j);
                return (
                  <div
                    key={`tic-${i}-${j}`}
                    onClick={() =>
                      sign ? alert("Already clicked") : handleSelection(i, j)
                    }
                    className="cell"
                  >
                    {sign}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
