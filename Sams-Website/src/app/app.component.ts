import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerInputAreaComponent } from "./player-input-area/player-input-area.component";
import { LettersViewComponent } from "./letters-view/letters-view.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayerInputAreaComponent, LettersViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sams-Website';
}
