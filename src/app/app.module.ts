import { NgModule, importProvidersFrom  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { GalleryModule } from 'ng-gallery';
import { GalleryModule, GalleryItem, ImageItem, VideoItem, YoutubeItem, IframeItem } from 'ng-gallery';
import { RoomcardComponent } from './rooms/components/roomcard/roomcard.component';
import { TeamComponent } from './team/team.component';
import { TeamcardComponent } from './team/components/teamcard/teamcard.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HomeComponent,
    RoomcardComponent,
    TeamComponent,
    TeamcardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
  ],
  providers: [
    provideAnimations(),
    importProvidersFrom(GalleryModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
