import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'work', component: WorkComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
