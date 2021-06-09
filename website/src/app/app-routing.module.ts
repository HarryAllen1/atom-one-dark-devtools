import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstallationComponent } from './installation/installation.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'installation',
    component: InstallationComponent,
  },
  {
    path: 'showcase',
    component: ShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
