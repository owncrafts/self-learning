import { Component, inject } from '@angular/core';
import { TodosService } from '../api/todos.service';
import * as Interface from '../interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  public team = [];
  TodosService: TodosService = inject(TodosService)
  constructor(){ 
    this.TodosService.getTeam().then((data: any)=>{
      this.team = data.users;
    });
  }

  updateUser = async(data:Interface.Userinfo) => {
    try{
      this.TodosService.postTeam(data).then((data: any)=>{
        console.log("User updated ~",data)
      });
    } catch (error) {
      console.log('Error in updating user info ~',data);
    }
  }
}
