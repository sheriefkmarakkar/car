import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
result;
  constructor(private s:Service1Service) { }

  ngOnInit() {
    this.s.getall(0).subscribe(data=>{
this.result=data;
    });
  }
  public rent(id)
  {
    this.s.uprent(id).subscribe()
  }

}
