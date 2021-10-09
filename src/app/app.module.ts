import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScriptHackComponent } from './components/script-hack/script-hack.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

import { AgmCoreModule } from '@agm/core';
import { GmapComponent } from './components/gmap/gmap.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'thankYou', component: ThankYouComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
    ScriptHackComponent,
    ThankYouComponent,
    GmapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: environment.gmap_api_key
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
