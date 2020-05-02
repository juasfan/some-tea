import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  players: string[] = ['Hoseok', 'Jimin'];

  jungkook: string[][];
  steps: number;
  playerNow: string;
  gameOver: boolean;
  mark: string;
  winner: string;

  constructor() {}

  ngOnInit() {
    this.reset();
  }

  selectBox(x: number, y: number) {
    this.steps--;
    this.mark = this.playerNow === this.players[0] ? 'O' : 'X';
    this.jungkook[x][y] = this.mark;

    this.checkRow(x);
    this.checkCol(y);
    this.checkDown();
    this.checkUp();

    if (!this.gameOver)
      this.playerNow = this.mark === 'O' ? this.players[1] : this.players[0];
  }

  checkRow(x: number) {
    for (let y of [0, 1, 2]) {
      if (this.jungkook[x][y] !== this.mark) {
        return false;
      }
    }
    this.gameOver = true;
    this.winner = this.playerNow;
  }

  checkCol(y: number) {
    for (let x of [0, 1, 2]) {
      if (this.jungkook[x][y] !== this.mark) {
        return false;
      }
    }
    this.gameOver = true;
    this.winner = this.playerNow;
  }

  checkDown() {
    for (let i of [0, 1, 2]) {
      if (this.jungkook[i][i] !== this.mark) return false;
    }
    this.gameOver = true;
    this.winner = this.playerNow;
  }

  checkUp() {
    for (let [x, y] of [2, 1, 0].entries()) {
      if (this.jungkook[x][y] !== this.mark) {
        return false;
      }
    }
    this.gameOver = true;
    this.winner = this.playerNow;
  }

  reset() {
    this.jungkook = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.gameOver = false;
    this.steps = 9;
    this.playerNow = this.players[0];
    this.winner = undefined;
  }
}
