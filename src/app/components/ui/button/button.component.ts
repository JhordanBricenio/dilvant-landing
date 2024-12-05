import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonClass: string = 'btn-primary'; 
  @Input() disabled: boolean = false; 
  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();
}
