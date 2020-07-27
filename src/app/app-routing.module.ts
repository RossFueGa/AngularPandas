import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Panda/listar/listar.component';
import { AddComponent } from './Panda/add/add.component';
import { EditComponent } from './Panda/edit/edit.component';
import { DeleteComponent } from './Panda/delete/delete.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'delete', component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
