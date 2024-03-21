import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"contact", component:ContactComponent},
    {path:"product/:id", component:ProductDetailsComponent},
    {path:"signup", component:SignupComponent},
    {path:"login", component:LoginComponent},


    {path:"**", component:NotFoundComponent}
    
];
