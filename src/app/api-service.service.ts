import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }


  url='https://corona.lmao.ninja/v2/countries/';

dbIm: any='';
  getData(name: any):Observable<any>{
    return this.http.get(this.url + name);

  }

  sendData():Observable<any>{
     return this.http.get(this.url);
     
     
    
  }
}
