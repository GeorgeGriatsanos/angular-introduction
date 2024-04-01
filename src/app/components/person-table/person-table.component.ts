import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'George',
    surName: 'Griatsanos',
    age: 32,
    email: 'oldorigin1@gmail.com',
  }
}
