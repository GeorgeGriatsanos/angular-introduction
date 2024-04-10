import { Component, OnInit, inject } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule} from '@angular/material/card'
import { MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesServive = inject(JokesService)
  dadJoke = ''
  chuckNorisJoke = ''

  ngOnInit(): void {
    // this.jokesServive.getDadJoke().subscribe((data) => {
    //   this.dadJoke = data.joke
    // })
    this.refreshDadJoke()

    // this.jokesServive.getChuckNorrisJoke().subscribe((data) => {
    //   this.chuckNorisJoke = data.value
    // })
    this.refreshChuckNorrisJoke()
  }

  refreshDadJoke() {
    this.jokesServive.getDadJoke().subscribe((data) => {
      this.dadJoke = data.joke
    })
  }

  refreshChuckNorrisJoke() {
    this.jokesServive.getChuckNorrisJoke().subscribe((data) => {
      this.chuckNorisJoke = data.value
    })
  }
}
