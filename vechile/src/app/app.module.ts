import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { RenewalComponent } from './renewal/renewal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { DownloadComponent } from './download/download.component';
import { ClaimComponent } from './claim/claim.component';
import { RegisterComponent } from './claim/register/register.component';
import { StatusComponent } from './claim/status/status.component';
import { MotorComponent } from './products/motor/motor.component';
import { HealthComponent } from './products/health/health.component';
import { OtherComponent } from './products/other/other.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes  = [ 
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'product', component : ProductsComponent},
  {path : 'claim', component : ClaimComponent},
  {path : 'renewal', component : RenewalComponent},
  {path : 'download', component : DownloadComponent},
  {path : 'login', component : LoginComponent},
  {path : 'about', component : AboutComponent},
  {path : 'motor', component : MotorComponent},
  {path : 'health', component : HealthComponent},
  {path : 'other', component : OtherComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'status', component : StatusComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ProductsComponent,
    RenewalComponent,
    HeaderComponent,
    FooterComponent,
    DownloadComponent,
    ClaimComponent,
    RegisterComponent,
    StatusComponent,
    MotorComponent,
    HealthComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
