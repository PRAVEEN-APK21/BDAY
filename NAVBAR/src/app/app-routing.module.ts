import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

const routes: Routes = [
  {path : 'navbar' , component :  NavbarComponent },
  {path : '' , component :  NavbarComponent },
  {path : 'add-theme' , component :  AddThemeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
