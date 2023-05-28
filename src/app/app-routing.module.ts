import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './paginas/materias/materias.component';
import { EstudiantesComponent } from './paginas/estudiantes/estudiantes.component';
import { InscribirComponent } from './paginas/inscribir//inscribir.component';


const routes: Routes = [{ path: 'materias', component: MateriasComponent }, 
          {path: 'estudiantes', component: EstudiantesComponent },
          { path: 'inscribir', component: InscribirComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
