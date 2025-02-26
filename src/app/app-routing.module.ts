import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetalleHotelComponent } from './detalle-hotel/detalle-hotel.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'register', component: RegisterComponent }, // Página de registro
  { path: 'hotel-detalle/:id', component: DetalleHotelComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección en caso de ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
