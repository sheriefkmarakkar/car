import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:boolean=false;
admin:boolean=true;
  constructor(private r:Router) {

    
   }

  ngOnInit() {
    if(localStorage.getItem("role")!="admin")
    {
  

    this.user=false;
    this.admin=false;
    }
    else
    {
      this.user=true;
      this.admin=false;

    }
  }
  public logout()
  {
    localStorage.clear();
    this.r.navigate(['/cars'])
  }

}
