import { Component } from '@angular/core';
import { Card } from './playground/card/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Card],
})
export class App {
  childMessage = ""

  onMessageClick(message: string) {
    this.childMessage = message
  }
}
