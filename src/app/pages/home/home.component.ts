import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HotelsService } from '../../services/hoteles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  policiesArray: [string, string][] = []; // Declara la variable para almacenar las políticas



  constructor(private hotelsService: HotelsService) {}

 
hotelesAbierto: boolean = false;
restaurantesAbierto: boolean = false;
agendaAbierta: boolean = false;
formVisible = false; // Variable para controlar la visibilidad del formulario
hotelis: any[] = [];
currentSlide = 0;
modalVisible = false;
hoteles: any[] = [];

modalData: any = {
  name: '',
  location: '',
  image: '',
  rating: 0,
  rooms: [],
  amenities: [],
  policies: []
}



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
  dias = [ '7 de Mayo', '8 de Mayo', '9 de Mayo', '10 de Mayo']; // Lista de días
  diaActual = 0; // Día actual visible
  
  agenda: { dia: string; hora: string; actividad: string; lugar: string; }[][] = [
   
    [ // Día 2 - 7 de Mayo
      { dia: '7 de Mayo', hora: '08:00', actividad: 'Movilización de delegaciones a la UPDS', lugar: 'Hoteles' },
      { dia: '7 de Mayo', hora: '09:00', actividad: 'Inauguración del Encuentro', lugar: 'UPDS' },
      { dia: '7 de Mayo', hora: '09:15', actividad: 'Conferencia Magistral - Invitado especial', lugar: 'Auditorio Principal' },
      { dia: '7 de Mayo', hora: '09:30', actividad: 'Coffee Break', lugar: 'Lobby' },
      { dia: '7 de Mayo', hora: '10:00', actividad: 'Ponencias RIFED', lugar: 'Salas designadas' },
      { dia: '7 de Mayo', hora: '12:00', actividad: 'Transición de IBEROJURIS', lugar: 'UPDS' },
      { dia: '7 de Mayo', hora: '13:30', actividad: 'Almuerzo', lugar: 'Jardín de Asia' },
      { dia: '7 de Mayo', hora: '15:00', actividad: 'Huéspedes ilustres - Guía por la ciudad', lugar: 'Santa Cruz' },
    ],
    [ // Día 3 - 8 de Mayo
      { dia: '8 de Mayo', hora: '09:00', actividad: 'Inicio de actividades', lugar: 'UPDS' },
      { dia: '8 de Mayo', hora: '09:15', actividad: 'Ganadores del V Concurso Estudiantil RIFED', lugar: 'Auditorio' },
      { dia: '8 de Mayo', hora: '09:30', actividad: 'Coffee Break', lugar: 'Cafetería UPDS' },
      { dia: '8 de Mayo', hora: '10:00', actividad: 'Ponencias RIFED y Docentes UPDS', lugar: 'Salas designadas' },
      { dia: '8 de Mayo', hora: '13:00', actividad: 'Almuerzo', lugar: 'Cafetería' },
      { dia: '8 de Mayo', hora: '15:00', actividad: 'Mesas Docentes y Exposición de Investigaciones', lugar: 'Salas designadas' },
    ],
    [ // Día 4 - 9 de Mayo
      { dia: '9 de Mayo', hora: '09:00', actividad: 'Inicio de actividades', lugar: 'UPDS' },
      { dia: '9 de Mayo', hora: '10:00', actividad: 'Conferencia de Clausura', lugar: 'Auditorio' },
      { dia: '9 de Mayo', hora: '13:00', actividad: 'Almuerzo', lugar: 'Cafetería' },
      { dia: '9 de Mayo', hora: '15:00', actividad: 'Reunión operativa de la Red', lugar: 'Sala de reuniones' },
    ],
    [ // Día 5 - 10 de Mayo
      { dia: '10 de Mayo', hora: '06:00', actividad: 'Movilización a Samaipata', lugar: 'UPDS' }
    ]
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
    this.hotelis = this.hotelsService.getHotels();
    this.hoteles = this.hotelsService.getHotels();
    this.startSlider();
  }
  
// Método para alternar la visibilidad del formulario
toggleForm() {
  this.formVisible = !this.formVisible;
}
getIconoActividad(actividad: string): string {
  if (actividad.includes('Conferencia')) return 'fas fa-chalkboard-teacher';
  if (actividad.includes('Ponencias')) return 'fas fa-microphone-alt';
  if (actividad.includes('Coffee Break')) return 'fas fa-coffee';
  if (actividad.includes('Inauguración')) return 'fas fa-door-open';
  if (actividad.includes('Almuerzo')) return 'fas fa-utensils';
  if (actividad.includes('Movilización')) return 'fas fa-bus';
  if (actividad.includes('Reunión')) return 'fas fa-users';
  if (actividad.includes('Exposición')) return 'fas fa-book-open';
  return 'fas fa-calendar-alt'; // Ícono por defecto
}
nextSlide(): void {
  this.currentSlide = (this.currentSlide + 1) % this.hotelis.length;
}

prevSlide(): void {
  this.currentSlide = (this.currentSlide - 1 + this.hotelis.length) % this.hotelis.length;
}
openModal(hotel: any): void {

  if (hotel) {
    this.modalData = {
      name: hotel.name || '',
      location: hotel.location || '',
      rating: hotel.rating || 0,
      rooms: Array.isArray(hotel.rooms) ? hotel.rooms : [], // ✅ Validamos que sea un array
      amenities: Array.isArray(hotel.amenities) ? hotel.amenities : [],
      policies: typeof hotel.policies === 'object' ? hotel.policies : {} // ✅ Validamos que sea un objeto

    };
    this.policiesArray = Object.entries(this.modalData.policies);

    this.modalVisible = true;
  }
}


closeModal(): void {
  this.modalVisible = false;
}


cambiarDia(diaIndex: number) {
  this.diaActual = diaIndex;
}


  // Obtener la clase para cada pestaña (día) dependiendo de si está activo o no
  getTabClass(index: number) {
    return index === this.diaActual ? 'bg-[#008BCF] text-white' : 'bg-[#00AEEF] text-white';
  }

  images: string[] = [
    '/assets/fondo1.jpg',
    '/assets/IMG-20250228-WA0037.jpg',
    '/assets/IMG-20250228-WA0038.jpg'
  ];

  currentIndex: number = 0;
  intervalId: any;

  

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
      this.nextSlide1();

    }, 5000);
  }

  nextSlide1() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    clearInterval(this.intervalId); // Reinicia el temporizador al hacer click
    this.startSlider();  }
}