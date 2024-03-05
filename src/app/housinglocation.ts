export interface HousingLocation {
  id: number;
  name: string; //used
  city: string; //used
  state: string; //used
  photo: string; //used
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  code?: number;
}

export interface DetailLocation {
  firstName: string;
  lastName:string;
  email:string;
}