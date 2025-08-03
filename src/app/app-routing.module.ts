import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { HistoryComponent } from './history/history.component';
import { FeesComponent } from './fees/fees.component';
import { EventsComponent } from './events/events.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'child/:id', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}