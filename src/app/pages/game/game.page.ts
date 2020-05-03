import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  winner: string;
  playerNow: string;
  players: string[] = ['Player1', 'Player2'];

  mark: string;
  steps: number;
  gameOver: boolean;
  boxes: string[][];

  constructor() {}

  ngOnInit() {
    this.reset();
  }

  selectBox(x: number, y: number) {
    this.steps--;
    this.mark = this.playerNow === this.players[0] ? 'O' : 'X';
    this.boxes[x][y] = this.mark;

    this.checkWin(x, y);
  }

  checkWin(x: number, y: number) {
    this.gameOver = this.checkRow(x);

    if (!this.gameOver) this.gameOver = this.checkCol(y);
    if (!this.gameOver) this.gameOver = this.checkCrossDown();
    if (!this.gameOver) this.gameOver = this.checkCrossUp();

    if (!this.gameOver)
      this.playerNow = this.mark === 'O' ? this.players[1] : this.players[0];
    else {
      this.winner = this.playerNow;
    }
  }

  checkRow(x: number) {
    for (let y of [0, 1, 2]) {
      if (this.boxes[x][y] !== this.mark) return false;
    }
    return true;
  }

  checkCol(y: number) {
    for (let x of [0, 1, 2]) {
      if (this.boxes[x][y] !== this.mark) return false;
    }
    return true;
  }

  checkCrossDown() {
    for (let i of [0, 1, 2]) {
      if (this.boxes[i][i] !== this.mark) return false;
    }
    return true;
  }

  checkCrossUp() {
    for (let [x, y] of [2, 1, 0].entries()) {
      if (this.boxes[x][y] !== this.mark) return false;
    }
    return true;
  }

  reset() {
    this.boxes = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.steps = 9;
    this.gameOver = false;
    this.winner = undefined;
    this.playerNow = this.players[0];
  }
}
