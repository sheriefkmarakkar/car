import { Component, OnInit } from '@angular/core';
import { Service1Service} from '../service1.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-singlecar',
  templateUrl: './singlecar.component.html',
  styleUrls: ['./singlecar.component.css']
})
export class SinglecarComponent implements OnInit {
  cname:string;
  company:string;
  year;
  colour;
  num;
  result;
  user;
  from;
  price;
  to;
  uid;
  public bookcar()
  {
    this.s.bookcar(this.num,this.cname,this.uid,this.user,this.from,this.to).subscribe()
    alert("You Booked")
    this.r.navigate(['/cars'])
  }
  constructor(private s:Service1Service,private r:Router) {
   
   }
  ngOnInit() {
    this.year=localStorage.getItem("cyear");
   this.price=localStorage.getItem("cprice");
    this.user=localStorage.getItem("user");
    this.uid=localStorage.getItem("uid");
   this.from=localStorage.getItem("cfrom");
   this.to=localStorage.getItem("cto");
   this.cname=localStorage.getItem("ccname");
   this.company=localStorage.getItem("ccompany");
   this.colour=localStorage.getItem("ccolour");
   this.year=localStorage.getItem("cyear");
   this.price=localStorage.getItem("cprice");
   

   
    this.num=localStorage.getItem("cnum");
console.log(this.num)
console.log(this.colour)
    //this.s.getsinglecar(this.num).subscribe(data=>{
//this.result=data;
//console.log(this.result)
   /* })
    this.cname=this.result[0].cname;
    this.company=this.result[0].company
    this.year=this.result[0].year;
    this.colour=this.result[0].colour;
    alert(this.cname)*/
  }

}
