import { Component, Input,  Output, EventEmitter  } from '@angular/core';
import { Rooms } from '../../../interfaces/rooms';

@Component({
  selector: 'app-roomcard',
  templateUrl: './roomcard.component.html',
  styleUrl: './roomcard.component.css'
})
export class RoomcardComponent {

  @Input() roomList : Rooms[] = []; // Decorative
  @Output() copyEvent = new EventEmitter<any>();

  copyFunction = (value: any) => {
    this.copyEvent.emit(value);
  }

}
