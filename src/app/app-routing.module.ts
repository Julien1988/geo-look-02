import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SingleActivityComponent } from './activity-list/single-activity/single-activity.component';
import { ActivityFormComponent } from './activity-list/activity-form/activity-form.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  {
    path: 'activities',

    component: ActivityListComponent,
  },
  {
    path: 'activities/new',

    component: ActivityFormComponent,
  },
  {
    path: 'activities/view/:id',

    component: SingleActivityComponent,
  },
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  { path: '**', redirectTo: 'activities' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
