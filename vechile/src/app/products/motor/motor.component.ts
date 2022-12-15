import { Component } from '@angular/core';
import { HealthComponent } from '../health/health.component';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent {

  
  products = [
 
    {name : "Two Wheeler",   image :"assets/bike.png" },
    {name : "Private Car",   image :"assets/car.png" },
    {name : "Commercial Vechile",  image :"assets/auto.png" },
    {name : "Miscolneous ",    image :"assets/misc.png" },
   
        ]

    details(){
      alert("");
      }
      
      buy(){
      
      }
  
}
