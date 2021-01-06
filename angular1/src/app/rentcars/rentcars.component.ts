import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service'

@Component({
  selector: 'app-rentcars',
  templateUrl: './rentcars.component.html',
  styleUrls: ['./rentcars.component.css']
})
export class RentcarsComponent implements OnInit {
result;
  constructor(private s:Service1Service) { }

  ngOnInit() {
    this.s.getall(1).subscribe(data=>{
      this.result=data;
  })
  }
}
