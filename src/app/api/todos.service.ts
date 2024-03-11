import { Injectable } from '@angular/core';
import * as Interface from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public baseUrl = "https://dummyjson.com/";
  constructor() { }

  async getTeam(): Promise<any[]> {
    const data = await fetch(this.baseUrl+"users");
    return await data.json() ?? [];
  }
  async postTeam(datas : Interface.Userinfo): Promise<any[]> {
    const data = await fetch(this.baseUrl+"users/"+datas.id, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datas)
    });
    return await data.json() ?? [];
  }
}
