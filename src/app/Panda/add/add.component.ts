import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Panda } from 'src/app/Model/panda';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  panda:Panda=new Panda();
 
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  
  Guardar(){
    this.service.createPanda(this.panda)
    .subscribe(data=>{
      alert("You did it!!");
      this.router.navigate(["listar"]);
    })
  }

}
