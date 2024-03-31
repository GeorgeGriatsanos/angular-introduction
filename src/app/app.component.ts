import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'George';

  person = {
    givenName: 'George',
    surName: 'Griatsanos',
    age: 32,
    email: 'oldorigin1@gmail.com',
  }
}
