import { readFileSync} from "node:fs";
const data = readFileSync("./day-02/input.txt", "utf-8");

export const Rock = Symbol("Rock");
export const Paper = Symbol("Paper");
export const Scissors = Symbol("Scissors");

export const Win = Symbol("Win");
export const Lose = Symbol("Lose");
export const Draw = Symbol("Draw");

const MovePoints = {
  [Rock]: 1,
  [Paper]: 2,
  [Scissors]: 3,
}

const ResultPoints = {
  [Win]: 6,
  [Draw]: 3,
  [Lose]: 0,
}

const ResultMapping = {
  "X": Lose,
  "Y": Draw,
  "Z": Win,
}

const OpponentMove = {
  "A": Rock,
  "B": Paper,
  "C": Scissors,
}

const MyMove = { "X": Rock, "Y": Paper, "Z": Scissors, }

export function predicateMove(result, oponent) {
  switch (true) {
    case (result == Win && oponent == Paper):
      return Scissors;
    case (result == Win && oponent == Scissors):
      return Rock;
    case (result == Win && oponent == Rock):
      return Paper;
    case (result == Lose && oponent == Scissors):
      return Paper;
    case (result == Lose && oponent == Rock):
      return Scissors;
    case (result == Lose && oponent == Paper):
      return Rock;
  }

  return oponent;
}

export function partTwo(input) {
  const rounds = input.split("\n").filter(Boolean)

  return rounds.reduce((sum, round) => {
    const [oponentRaw, resultRow] = round.split(" ");
    const oponent = parseOpponentMove(oponentRaw)
    const result = parseResult(resultRow)


    return sum + ResultPoints[result] + MovePoints[predicateMove(result, oponent)];
  }, 0)
}


function parseOpponentMove(letter) {
  if (OpponentMove[letter]) {
    return OpponentMove[letter]
  }

  throw Error("Invalid Input");
}

function parseResult(letter) {
  if (ResultMapping[letter]) {
    return ResultMapping[letter]
  }

  throw Error("Invalid Input");
}

function parseMyMove(letter) {
  if (MyMove[letter]) {
    return MyMove[letter]
  }

  console.log(letter)
  throw Error("Invalid Move");
}

console.log(`day-2 part-2 result: ${partTwo(data)}`);
