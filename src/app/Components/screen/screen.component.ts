import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [FormsModule, ButtonGroupComponent, ViewerComponent],
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
  email: string = '';
  password: string = '';
  text: string = '';
  isDarkMode: boolean = false;

  onDarkModeToggle() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.querySelector('.container')?.classList.toggle('dark-mode', this.isDarkMode);
  }

  onAccept() { console.log('Aceptar clicked'); }
  onCancel() { console.log('Cancelar clicked'); }
  onPrimary() { console.log('Primario clicked'); }
  onSecondary() { console.log('Secundario clicked'); }
}
