import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    currentStudentID ="";
  fname : string ="";
  lname : string ="";
  age : string="";
  email:string ="";
  password:string ="";
  Confrom_password:string ="";

 //retrive all deta
 registerArray : any[] = [];
constructor (private http : HttpClient){
  this.getAllRegister();
}
getAllRegister(){
  this.http.get("http://127.0.0.1:3000/registerDetails")
  .subscribe((resultData : any)=>{
    console.log(resultData);
    this.registerArray = resultData;
  });
}
 

save(){
  if(this.currentStudentID==''){
    this.registration();
  }else{
    console.log("There is some error!");
  }
}
//inserting data...
 registration(){
  let userData = {
    "fname" : this.fname,
    "lname" : this.lname,
    "age" : this.age,
    "email" : this.email,
    "password" : this.password,
    "Confrom_password" : this.Confrom_password,
  };
  this.http.post("http://127.0.0.1:3000/register/create", userData)
  .subscribe((resultData : any)=>{
    console.log(resultData);
    alert("Register successfully!");
    this.fname = '';
    this.lname = '';
    this.age = '';
    this.email = '';
    this.password = '';
    this.Confrom_password = '';
    this.getAllRegister();
  });
  
}
}
