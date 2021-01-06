import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InputComponent } from './input/input.component';
import {FormsModule} from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { MarkComponent } from './mark/mark.component';
import { HeaderComponent } from './header/header.component'
import { CarsComponent } from './cars/cars.component';
import { AddcarComponent } from './addcar/addcar.component';
import { HttpClientModule} from '@angular/common/http'
import { Service1Service} from './service1.service';
import { FooterComponent } from './footer/footer.component';
import { SinglecarComponent } from './singlecar/singlecar.component';
import { CarComponent } from './car/car.component';
import { EdituserComponent } from './edituser/edituser.component';
import { MybookComponent } from './mybook/mybook.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { EditcarComponent } from './editcar/editcar.component';
import { RentcarsComponent } from './rentcars/rentcars.component'

const approutes : Routes = [
  {path:"", component:CarComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"addcar", component:AddcarComponent},
  {path:"logout", component:CarComponent},
  {path:"singlecar", component:SinglecarComponent},
  {path:"edituser", component:EdituserComponent},
  {path:"mybook", component:MybookComponent},
  {path:"allbooks", component:AllbooksComponent},
  {path:"onrent", component:RentcarsComponent},
  {path:"cars", component:CarsComponent}]
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    CalcComponent,
    MarkComponent,
    HeaderComponent,
    CarsComponent,
    AddcarComponent,
    FooterComponent,
    SinglecarComponent,
    CarComponent,
    EdituserComponent,
    MybookComponent,
    AllbooksComponent,
    EditcarComponent,
    RentcarsComponent
   

  ],
  imports: [
    HttpClientModule,
    BrowserModule,FormsModule,
    //specifies router for root
    RouterModule.forRoot(approutes)
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
