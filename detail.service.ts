import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor( public http :HttpClient ,public route:Router,  public router:ActivatedRoute ) { }
  detail:any=""
  url:string=""
n1:any;
n2:any;
  n3:any
getdetail():Observable<any>{
 return this.http.get<any>(this.url);
}  

  log( val1:any,val2:any){
    this.n1=val1;
    this.n2=val2;
   this.url= "http://10.80.129.21:8080/login.jsp?userName="+this.n1 + "&password="+this.n2

alert("url:"+this.url)
  
this.getdetail()
.subscribe(data=>{
  this.detail=data
  if(this.detail)
  {
    alert('suceess')
  this.route.navigate(["home"])
  } else{
    alert('www')
  }
})
// alert("data:"+ this.detail)
    
  }
  
}
