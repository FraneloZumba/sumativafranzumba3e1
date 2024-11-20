import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-button-group',
  standalone: true, // Marca el componente como independiente
  imports: [NgIf],  // Importamos NgIf
  template: `
    <div class="button-group">
      <button (click)="onAccept()">Aceptar</button>
      <button (click)="onCancel()">Cancelar</button>
      <button (click)="onPrimary()">Primario</button>
      <button (click)="onSecondary()">Secundario</button>
      <button (click)="onDarkModeToggle()">
        <span *ngIf="isDarkMode; else lightIcon">🌙</span>
        <ng-template #lightIcon>☀️</ng-template>
      </button>
    </div>
  `,
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  @Input() isDarkMode: boolean = false; // Recibe el estado del modo oscuro
  @Output() accept = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() primary = new EventEmitter<void>();
  @Output() secondary = new EventEmitter<void>();
  @Output() darkModeToggle = new EventEmitter<void>();

  onAccept() {
    this.accept.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  onPrimary() {
    this.primary.emit();
  }

  onSecondary() {
    this.secondary.emit();
  }

  onDarkModeToggle() {
    this.darkModeToggle.emit();
  }
}
