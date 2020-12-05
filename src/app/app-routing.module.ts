import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { EmploymentComponent } from './pages/employment/employment.component';
import { MarketPotentialComponent } from './pages/market-potential/market-potential.component';
import { PlantComponent } from './pages/plant/plant.component';
import { ProcessComponent } from './pages/process/process.component';
import { ProjectComponent } from './pages/project/project.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'plant', component: PlantComponent},
  {path: 'employment', component: EmploymentComponent},
  {path: 'market-potential', component: MarketPotentialComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
