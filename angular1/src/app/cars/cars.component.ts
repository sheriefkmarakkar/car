import { Component, OnInit } from '@angular/core';
import { Service1Service} from '../service1.service'
import { findLast } from '@angular/compiler/src/directive_resolver';
import { Router} from '@angular/router'
import { Moment} from 'moment/moment'
declare var require: any;
var moment=require('moment/moment')
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  

  card:boolean;
cars;
cname;
company;
colour;
price;
user;
from;
to;
count=0;
uid;
books;
d;

  constructor(private s:Service1Service,private r:Router) { }

  ngOnInit() {
    this.card=false;
  this.s.getcars().subscribe(data=>{
this.cars=data;

console.log(this.cars)
  })
  this.user=localStorage.getItem("user")
  this.uid=localStorage.getItem("uid")
  }
  public  getDaysArray(start, end) {
    alert(start)
    var ndt=new Date()
    var arr=[];
    


   
        arr.push({date:ndt});
   

    console.log(arr)
    return arr;
};
  public book(num,cname,company,colour,year,price)
  {
   
        
      
  
    this.s.getbooks(num).subscribe(data=>{
      
    
    
    this.d=data;
     
      console.log(this.d)

    
   // alert(this.d.length)
    
    for(var i=0;i<this.d.length;i++)
    {
      
      console.log(this.d[i])
      var start=new Date();
      var stop=new Date();
      start=this.d[i].from;
      stop=this.d[i].to;
      
     
    var daylist=this.getDates(start,stop)
    var newlist=this.getDates(this.from,this.to)
    console.log(daylist)
       for(var j=0;j<daylist.length;j++)
       {
         for(var k=0;k<newlist.length;k++)
         {
         //alert(this.d[i].from)
         //alert(daylist[j])
    
         if(daylist[j]=newlist[k])
         this.count++;
       }
      }
   
      
        //alert(this.count)
      }
    
    })
    
     if(this.count!=0)
     {
      alert("This Vehicle Is Not Available In Between Specified Date")
      this.count=0;
    }
    else
    {

    
       if(this.user)
       {
        console.log(this.colour)
    localStorage.setItem("cfrom",this.from);
        localStorage.setItem("cto",this.to);
        localStorage.setItem("cnum",num);
        localStorage.setItem("ccname",cname);
        localStorage.setItem("ccompany",company);
        localStorage.setItem("ccolour",colour);
        localStorage.setItem("cyear",year);
        localStorage.setItem("cprice",price);
        this.r.navigate(['/singlecar'])
  
       }
    else
    {
    this.r.navigate(['/login'])
    }
   
      this.count++;
     }
     
     
      




    
      
  }


  public getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}
  public cardview()
  {
     this.card=true;
  }
  
  
}
