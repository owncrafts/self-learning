import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as Interface from '../../../interfaces';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrl: './teamcard.component.css',
})
export class TeamcardComponent {
  public editable: Interface.Editable[] = [
    {
      id: undefined,
      editable: false,
    },
  ];
  public applyForm: Interface.Userinfo[] = [
    {
      id: undefined,
      username: '',
      email: '',
    },
  ];

  constructor() {}

  @Input() team: any[] = [];
  @Output() onUpdateTeamMember = new EventEmitter<Interface.Userinfo>();

  findObjectById(id: number) {
    return this.editable.find((obj) => obj.id === id);
  }
  setEditable(id: number) {
    if (this.findObjectById(id)) {
      const data = this.applyForm.find((obj) => obj.id === id);
      this.onUpdateTeamMember.emit(data);
      this.editable = this.editable.filter((obj) => obj.id !== id);
      this.applyForm = this.applyForm.filter((obj) => obj.id !== id);
      console.debug("Datas Removed ~",id);
    } else {
      this.editable.push({ id: id, editable: true });
      this.applyForm.push({
        id: id,
        username: '',
        email: '',
      });
      console.debug("New Datas Created ~",id);
    }
  }

  logThis(data: any, id: number, action: string) {
    if (this.findObjectById(id)) {
      if (this.applyForm.find((obj) => obj.id === id)) {
        let pokemon: Interface.Userinfo = <Interface.Userinfo>(
          this.applyForm.find((obj) => obj.id === id)
        );
        console.log('updated',action,' ~ ',id);
        action === 'email'
          ? (pokemon.email = data.target.value.toLower)
          : (pokemon.username = data.target.value);
      } else {
        console.error(
          'This event will never happen, if happend then this is a error or data is missing'
        );
      }
    } else {
      console.error(
        'This event will never happen, if happend then this is a error or data is leaking'
      );
    }
  }
}
