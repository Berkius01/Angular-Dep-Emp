import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:5000/api";
readonly PhotoUrl="http://localhost:5000/Photos";

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' 
,'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'})
};
  constructor(private http:HttpClient) { }
//depatman için
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }
  addDepartment(val:any){
    
    return this.http.post(this.APIUrl+'/Department',val,this.httpOptions);
  }

  updateDepartment(val:any){
    //alert("helal update");
    return this.http.put(this.APIUrl+'/Department',val,this.httpOptions);
  }

  deleteDepartment(val:any){
    //alert("bok sildin");
    return this.http.delete(this.APIUrl+'/Department'+val,this.httpOptions);
  }
//köleler için

getEmpList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/Employee');
}
addEmployee(val:any){
  return this.http.post(this.APIUrl+'/Employee',val);
}

updateEmployee(val:any){
  return this.http.put(this.APIUrl+'/Employee',val);
}

deleteEmployee(val:any){
  return this.http.delete(this.APIUrl+'/Employee/'+val);
}

uploadPhoto(val:any){
  return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
}

getAllDepartments():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentName');
}


}
