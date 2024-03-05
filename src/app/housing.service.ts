import { Injectable } from '@angular/core';
// import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  url = 'http://localhost:3000/locations';
  // housingLocationList: HousingLocation[] = [];

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.status===200 ? await data.json() ?? {} : {code:data.status};
  }
}
