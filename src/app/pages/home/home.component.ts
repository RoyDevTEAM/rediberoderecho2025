import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  formVisible = false; // Variable para controlar la visibilidad del formulario

  events = [
    {
      title: 'Seminario sobre Derecho Internacional',
      description: 'Un seminario para debatir las nuevas normativas internacionales en el ámbito del Derecho.',
      date: new Date('2025-03-15')
    },
    {
      title: 'Congreso de Derecho Constitucional',
      description: 'Un congreso sobre las últimas reformas constitucionales en Iberoamérica.',
      date: new Date('2025-05-22')
    },
    {
      title: 'Curso de Actualización en Derecho Penal',
      description: 'Un curso dirigido a estudiantes y profesionales sobre las últimas tendencias en derecho penal.',
      date: new Date('2025-07-10')
    }
  ];
  ngOnInit(): void {
    AOS.init({ duration: 1200 }); // Inicializamos AOS
  }
// Método para alternar la visibilidad del formulario
toggleForm() {
  this.formVisible = !this.formVisible;
}
}