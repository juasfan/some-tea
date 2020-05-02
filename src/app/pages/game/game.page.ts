import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  taehyung: string[] = ['', '', '', '', '', '', '', '', ''];

  players: string[] = ['Suga', 'Jimin'];
  playerNow: string = this.players[0];

  constructor() {}

  ngOnInit() {}

  selectBox(box: number) {
    if (this.taehyung[box] !== 'X' && this.taehyung[box] !== 'O') {
      let mark: string = this.playerNow === this.players[0] ? 'O' : 'X';
      this.taehyung[box] = mark;

      this.playerNow = mark === 'O' ? this.players[1] : this.players[0];
    }
  }
}
