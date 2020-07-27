import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Panda} from '../Model/panda';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
    
  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/api/pandarest"

  getPandas(){
    return this.http.get<Panda[]>(this.Url);
  }

  createPanda(panda:Panda){
    return this.http.post<Panda>(this.Url, panda)

  }

  getPandaId(id:String){
    return this.http.get<Panda>(this.Url+"/"+id);
  }

  updatePanda(panda:Panda){ 
    return this.http.put<Panda>(this.Url+"/", panda);
  }

  deletePanda(panda:Panda){
    return this.http.delete<Panda>(this.Url+"/"+panda.id)

  }
}
