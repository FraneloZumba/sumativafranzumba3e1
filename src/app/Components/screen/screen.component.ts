import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { FormsModule } from '@angular/forms';
import { ButtonGroupComponent } from '../button-group/button-group.component';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonGroupComponent, ViewerComponent],  // Agregar CommonModule aquí
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
  email: string = '';
  password: string = '';
  text: string = '';
  isDarkMode: boolean = false;
  isAccepted: boolean = false;
  isCancelled: boolean = false;
  appearanceMode: string = ''; // Propiedad para manejar la apariencia

  onDarkModeToggle() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.querySelector('.container')?.classList.toggle('dark-mode', this.isDarkMode);
  }

  onAccept() {
    this.isAccepted = true;
    this.isCancelled = false;
    console.log('Aceptar clicked');
  }
  
  onCancel() {
    this.isAccepted = false;
    this.isCancelled = true;
    console.log('Cancelar clicked');
  }  

  onPrimary() {
    this.appearanceMode = 'netflix-mode'; // Cambiar a modo Netflix
  }

  onSecondary() {
    this.appearanceMode = 'sheikah-mode'; // Cambia a modo Sheikah
  }

  resetAppearance() {
    this.appearanceMode = ''; // Elimina cualquier clase aplicada
  }
  
}
