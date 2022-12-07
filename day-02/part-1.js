
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

const Part2 = {
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

export function moveResult(me, oponent) {
  switch (true) {
    case (me == Rock && oponent == Paper):
      return Lose;
    case (me == Rock && oponent == Scissors):
      return Win;
    case (me == Paper && oponent == Rock):
      return Win;
    case (me == Paper && oponent == Scissors):
      return Lose;
    case (me == Scissors && oponent == Rock):
      return Lose;
    case (me == Scissors && oponent == Paper):
      return Win;
  }

  return Draw;
}

export function partOne(input) {
  const rounds = input.split("\n").filter(Boolean)

  return rounds.reduce((sum, round) => {
    const [oponentRaw, meRaw] = round.split(" ");
    const me = parseMyMove(meRaw)
    const oponent = parseOpponentMove(oponentRaw)


    return sum + MovePoints[me] + ResultPoints[moveResult(me, oponent)];
  }, 0)
}


function parseOpponentMove(letter) {
  if (OpponentMove[letter]) {
    return OpponentMove[letter]
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

console.log(`day-1 part-1 result: ${partOne(data)}`);
