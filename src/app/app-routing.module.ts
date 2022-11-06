import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'success', component: SuccessComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'singUp', component: RegistrationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
