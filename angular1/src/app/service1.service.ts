import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { getLocaleNumberSymbol } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private hc:HttpClient) { }
public data(name,email,phn,pass,role)
{
console.log(name);
console.log(role)
   return this.hc.post("http://localhost:8080/postdata",{name:name,email:email,phn:phn,pass:pass,role:role});
}
public cardata(cname,company,year,colour,num,price)
{
  
  /* const formData = new FormData();

    formData.append('image', image); */

   return this.hc.post("http://localhost:8080/cardata",{cname:cname,company:company,year:year,colour:colour,num:num,price:price});
}
public getsuser(uid)
{
  return this.hc.post("http://localhost:8080/getuser",{uid:uid})
}
public getsinglecar(num1)
{
  return this.hc.post("http://localhost:8080/getsinglecar",{number:num1})
}
public login(uname,pass)
{
  return this.hc.post("http://localhost:8080/getlogin",{uname:uname,pass:pass})
}

public getcars(){
  return this.hc.get("http://localhost:8080/getcars")
}
public bookcar(num,cname,id,user,from,to)
{
  return this.hc.post("http://localhost:8080/postbook",{id:id,user:user,num:num,cname:cname,from:from,to:to})
}
public update(uid,name,email,phn,pass)
{
  return this.hc.post("http://localhost:8080/upuser",{uid:uid,name:name,email:email,phn:phn,pass:pass});
}
public getbooks(num)
{
  console.log(num)
  return this.hc.post("http://localhost:8080/getbooks",{number:num})
}
public getmybook(uid)
{
  return this.hc.post("http://localhost:8080/getmybooks",{uid:uid})
}
public getall(uid)
{
  return this.hc.post("http://localhost:8080/getall",{uid:uid})
}
public removeb(id)
{
  return this.hc.post("http://localhost:8080/deleteb",{uid:id})
}
public uprent(id)
{
  return this.hc.post("http://localhost:8080/uprent",{uid:id})
}
}
