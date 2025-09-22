import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { UserProfile } from './playground/user-profile/user-profile';
import { Form } from './playground/form/form';
import { Card } from './playground/card/card';

@Component({
  selector: 'app-root',
  // templateUrl: './app.html',
  template: '<app-card/>',
  styleUrl: './app.css',
  imports: [UserProfile, Form, Card],
})
export class App {
  count: WritableSignal<number> = signal(2);
  doubleCount = computed(() => {
    console.log('Computing...');
    return this.count() * 2;
  });

  reset() {
    this.count.set(0);
  }
  increament() {
    this.count.update((value) => value + 1);
  }
  decreament() {
    this.count.update((value) => value - 1);
  }
}
