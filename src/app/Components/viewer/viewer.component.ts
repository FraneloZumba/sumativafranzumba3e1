import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="info">
      <label>Correo</label>
      <p>{{ email }}</p>
    </div>
    <div class="info">
      <label>Contraseña</label>
      <p>{{ password }}</p>
    </div>
    <div class="info">
      <label>Texto</label>
      <p>{{ text }}</p>
    </div>
    <div class="color-box" [ngClass]="{'accepted': isAccepted, 'cancelled': isCancelled}">
    </div>
  `,
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
  @Input() isAccepted: boolean = false;
  @Input() isCancelled: boolean = false;
}
