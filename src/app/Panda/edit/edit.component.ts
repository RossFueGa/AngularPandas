import { Component, OnInit } from '@angular/core';
import { Panda } from 'src/app/Model/panda';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  panda :Panda=new Panda();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPandaId(id)
    .subscribe(data=>{
      this.panda=data;
    
    })

  }
  Actualizar(panda:Panda){
    this.service.updatePanda(panda)
    .subscribe(data=>{
      this.panda=data;
      alert("its up to date!!!");
      this.router.navigate(["listar"]);
    })
  }

}
