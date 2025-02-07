import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
hotelesAbierto: boolean = false;
restaurantesAbierto: boolean = false;
agendaAbierta: boolean = false;
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
  agenda = [
    { hora: '08:00', actividad: 'Apertura', lugar: 'Auditorio Principal' },
    { hora: '09:30', actividad: 'Conferencia: Derecho Internacional', lugar: 'Sala A' },
    { hora: '11:00', actividad: 'Pausa para café', lugar: 'Lobby' },
    { hora: '11:30', actividad: 'Mesa Redonda: Derecho Comparado', lugar: 'Auditorio Principal' },
    { hora: '13:00', actividad: 'Almuerzo', lugar: 'Comedor' },
    // Agrega más eventos según sea necesario
  ];
  hoteles = [
    { nombre: 'Hotel Camino Real', descripcion: 'Ubicado en una zona exclusiva, con todas las comodidades.', detallesLink: '/hotel/camino-real', imagen: 'assets/images/hotel-camino-real.jpg' },
    { nombre: 'Hotel Los Tajibos', descripcion: 'Hotel de lujo con piscina y centro de convenciones.', detallesLink: '/hotel/los-tajibos', imagen: 'assets/images/hotel-los-tajibos.jpg' },
    { nombre: 'Hotel Marriott Santa Cruz', descripcion: 'Perfecto para estadías de negocios y turismo.', detallesLink: '/hotel/marriott', imagen: 'assets/images/hotel-marriott.jpg' },
    { nombre: 'Hotel Radisson', descripcion: 'Alojamiento premium con restaurantes y spa.', detallesLink: '/hotel/radisson', imagen: 'assets/images/hotel-radisson.jpg' },
    { nombre: 'Hotel Buganvillas', descripcion: 'Hotel resort con áreas recreativas y de descanso.', detallesLink: '/hotel/buganvillas', imagen: 'assets/images/hotel-buganvillas.jpg' }
  ];
  
  restaurantes = [
    { nombre: 'Jardín de Asia', descripcion: 'Cocina asiática de alta calidad con ingredientes locales.', detallesLink: '/restaurante/jardin-asia', imagen: 'assets/images/restaurante-jardin-asia.jpg' },
    { nombre: 'Los Hierros', descripcion: 'Especialidad en carnes a la parrilla y comida tradicional.', detallesLink: '/restaurante/los-hierros', imagen: 'assets/images/restaurante-los-hierros.jpg' },
    { nombre: 'Michelangelo', descripcion: 'Auténtica cocina italiana con una gran selección de vinos.', detallesLink: '/restaurante/michelangelo', imagen: 'assets/images/restaurante-michelangelo.jpg' },
    { nombre: 'El Arriero', descripcion: 'Restaurante de carnes con un ambiente acogedor.', detallesLink: '/restaurante/el-arriero', imagen: 'assets/images/restaurante-el-arriero.jpg' },
    { nombre: 'Sushi Tren', descripcion: 'Sushi bar con los mejores rollos y comida japonesa.', detallesLink: '/restaurante/sushi-tren', imagen: 'assets/images/restaurante-sushi-tren.jpg' }
  ];
  
  ngOnInit(): void {
    AOS.init({ duration: 1200 }); // Inicializamos AOS
  }
// Método para alternar la visibilidad del formulario
toggleForm() {
  this.formVisible = !this.formVisible;
}
}