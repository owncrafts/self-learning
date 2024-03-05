import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation, DetailLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
template: `
<p style="padding:15px" *ngIf="housingLocation?.code">Error: {{housingLocation?.code}}</p>
  <article *ngIf="housingLocation?.name">
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName" required="true">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName" required="true">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" required="true">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
    <section *ngIf="detailLocation && detailLocation.firstName && detailLocation.lastName && detailLocation.email">
      <h2 class="section-heading">New rendered data</h2>
      <p>{{detailLocation.firstName}}</p>
      <p>{{detailLocation.lastName}}</p>
      <p>{{detailLocation.email}}</p>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  detailLocation: DetailLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  // constructor() {
  //   const housingLocationId = Number(this.route.snapshot.params['id']);
  //   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  // }
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
      this.detailLocation = this.applyForm.value as DetailLocation;
  }
}