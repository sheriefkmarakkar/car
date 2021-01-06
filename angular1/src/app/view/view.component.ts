import { Component, OnInit } from '@angular/core';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  Name:String;
  Age:Number;
  Email="abc";
  Address;
  Hobbies:String[];
  projects = [];
  
  constructor() {
    this.Name = "Arun";
    this.Age = 20;
    this.Email = "xyz"
    this.Address = {HouseNo:"abc", Street:"xyz"}
    this.Hobbies = ["abcd","xyzx"]
    this.projects = [{name:"abd",duration:"30days",enddate:"10/10/19"},{name:"xyz",duration:"20days",enddate:"1/1/19"}]
   }

  ngOnInit() {
  }

public Add(){
  let data = [{name:"p31",duration:"30days",enddate:"10/10/19"},{name:"p32",duration:"20days",enddate:"1/1/19"}]
  this.projects.push(data)
}

}
