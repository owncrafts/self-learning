import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home - Room Reservation System"
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    title: "Rooms - Room Reservation System",
  },
  {
    path: 'about',
    component: TeamComponent,
    title: "About - Room Reservation System",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
