import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Panda } from 'src/app/Model/panda';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  panda:Panda[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPandas()
    .subscribe(data=>{
      this.panda=data;
    });
  }
  Editar(panda:Panda):void{
    localStorage.setItem("id",panda.id.toString());
    this.router.navigate(["edit"]);

  }
  Delete(panda:Panda){
    this.service.deletePanda(panda)
    .subscribe(data=>{
      this.panda=this.panda.filter(p=>p!==panda);
      alert("Goodbye panda :c");

    })

  }



}
