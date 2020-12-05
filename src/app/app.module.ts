import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProcessComponent } from './pages/process/process.component';
import { PlantComponent } from './pages/plant/plant.component';
import { EmploymentComponent } from './pages/employment/employment.component';
import { MarketPotentialComponent } from './pages/market-potential/market-potential.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    ProcessComponent,
    PlantComponent,
    EmploymentComponent,
    MarketPotentialComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
