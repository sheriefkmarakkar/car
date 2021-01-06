import { Component, OnInit } from '@angular/core';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  a:Boolean=false;
  s:Boolean=false;
  n1:String;
  n2:String;
  res:Number;
  constructor() { }

  ngOnInit() {
  }
public calc(){
  
}
}
