import { Component } from '@angular/core';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [PersonTableComponent]
})
export class ComponentInputExampleComponent {
  person0 =  {
    givenName: 'George',
    surName: 'Griatsanos',
    age: 32,
    email: 'oldorigin1@gmail.com',
    address: 'Veria, Greece',
  }

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA',
  }
}
