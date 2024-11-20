import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScreenComponent } from './Components/screen/screen.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScreenComponent],  // Asegúrate de que ScreenComponent esté aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}


