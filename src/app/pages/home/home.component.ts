import {OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HotelsService } from '../../services/hoteles.service';
import { Component, HostListener } from '@angular/core';
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

 galeriaVisible: boolean = true; // Cambiar a true para mostrar la galería

  // Control del modal
  modalAbierto: boolean = false;
  imagenActual: number = 0;

  // Array de imágenes de la galería
  imagenesGaleria = [
    {
      url: 'assets/Ceremonia de Inauguración.jfif',
      titulo: 'Ceremonia de Inauguración',
      descripcion: 'Momento de la apertura oficial del XII Encuentro en México',
      fecha: '16 de Mayo, 2024'
    },
    {
      url: 'assets/Experto peruano propone una nueva tipología basada en la teoría tridimensional del Derecho.jpg',
      titulo: 'Ponencia',
      descripcion: 'Experto peruano propone una nueva tipología basada en la teoría tridimensional del Derecho',
      fecha: '16 de Mayo, 2024'
    },
    {
      url: 'assets/Especialista en Derecho electoral y Tecnología advierte sobre los desafíos del voto electrónico en contextos democráticos.jpg',
      titulo: 'Ponencia',
      descripción: '',
      fecha: '16 de Mayo, 2024'
    },
    {
      url: 'assets/EntregaDeCertificados.jfif',
      titulo: 'Entrega de Certificados',
      descripcion: '',
      fecha: '17 de Mayo, 2024'
    },
    {
      url: 'assets/ponencia1.jfif',
      titulo: 'Taller de Estudiantes',
      descripcion: 'Actividad práctica sobre resolución de casos',
      fecha: '17 de Mayo, 2024'
    },
    {
      url: 'assets/ponencia2.jfif',
      titulo: 'Cena de Gala',
      descripcion: 'Celebración de clausura del encuentro',
      fecha: '17 de Mayo, 2024'
    },
    {
      url: 'assets/ponencia3.jfif',
      titulo: 'Visita Cultural',
      descripcion: 'Recorrido por el centro histórico de la ciudad sede',
      fecha: '17 de Mayo, 2024'
    },
    {
      url: 'assets/ponencia4.jfif',
      titulo: 'Entrega de Certificados',
      descripcion: 'Ceremonia de reconocimiento a participantes',
      fecha: '17 de Mayo, 2024'
    },
    {
      url: 'assets/images/galeria/evento9.jpg',
      titulo: 'Foto Grupal',
      descripcion: 'Todos los participantes del XII Encuentro',
      fecha: '18 de Mayo, 2024'
    },
    {
      url: 'assets/images/galeria/evento10.jpg',
      titulo: 'Sede Universidad',
      descripcion: 'Vista del campus donde se realizó el evento',
      fecha: '15 de Mayo, 2024'
    },
    {
      url: 'assets/images/galeria/evento11.jpg',
      titulo: 'Panel de Expertos',
      descripcion: 'Discusión sobre reforma judicial en Iberoamérica',
      fecha: '16 de Mayo, 2024'
    },
    {
      url: 'assets/images/galeria/evento12.jpg',
      titulo: 'Presentación de Proyectos',
      descripcion: 'Estudiantes presentando sus investigaciones',
      fecha: '17 de Mayo, 2024'
    }
  ];

  // Métodos para la galería
  abrirModal(index: number): void {
    this.imagenActual = index;
    this.modalAbierto = true;
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    document.body.style.overflow = 'auto';
  }

  navegarImagen(direccion: number): void {
    const nuevoIndice = this.imagenActual + direccion;
    if (nuevoIndice >= 0 && nuevoIndice < this.imagenesGaleria.length) {
      this.imagenActual = nuevoIndice;
    }
  }

  // Método para alternar visibilidad (opcional, para testing)
  toggleGaleria(): void {
    this.galeriaVisible = !this.galeriaVisible;
  }

  // Manejar teclas del modal (opcional)
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.modalAbierto) {
      switch (event.key) {
        case 'Escape':
          this.cerrarModal();
          break;
        case 'ArrowLeft':
          this.navegarImagen(-1);
          break;
        case 'ArrowRight':
          this.navegarImagen(1);
          break;
      }
    }
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
  dias = ['15 de junio', '16 de junio', '17 de junio', '18 de junio', '19 de junio']; // Lista de días
diaActual = 0; // Día actual visible

agenda: { dia: string; hora: string; actividad: string; lugar: string; }[][] = [
  [ // Día 1 - 15 de junio
    { dia: '15 de junio', hora: 'Arribo', actividad: 'Arribo', lugar: 'UPDS' },
  ],
  [ // Día 2 - 16 de junio
    { dia: '16 de junio', hora: '07:45', actividad: 'Movilización de las delegaciones de los Hoteles a la UPDS', lugar: 'Hoteles' },
    { dia: '16 de junio', hora: '09:00', actividad: 'Inauguración del Encuentro', lugar: 'Salón auditorio' },
    { dia: '16 de junio', hora: '09:15', actividad: 'Conferencia Magistral - Invitado especial nacional', lugar: 'Auditorio Principal' },
    { dia: '16 de junio', hora: '09:40', actividad: 'coffe Break', lugar: 'Galería CECID' },
    { dia: '16 de junio', hora: '10:15', actividad: 'Ponencias RIFED', lugar: 'Salón auditorio' },
    { dia: '16 de junio', hora: '12:00', actividad: 'Transición de IBEROJURIS', lugar: 'Auditorio' },
    { dia: '16 de junio', hora: '13:30', actividad: 'Refrigerio (Pernil)', lugar: 'UPDS' },
    { dia: '16 de junio', hora: '15:00', actividad: 'Guía por la ciudad, paseo turístico', lugar: 'Santa Cruz' },
    { dia: '16 de junio', hora: '19:30', actividad: 'Cena Inaugural', lugar: 'Jardín de Asia' },
  ],
  [
  { "dia": "17 de junio", "hora": "07:45", "actividad": "Movilización de las delegaciones de los Hoteles a la UPDS", "lugar": "Hoteles" },
  { "dia": "17 de junio", "hora": "09:00", "actividad": "Inicio", "lugar": "Salón auditorio" },
  { "dia": "17 de junio", "hora": "09:00", "actividad": "Presentación del Libro Colectivo del XII Encuentro de la REFID", "lugar": "Salón auditorio" },
  { "dia": "17 de junio", "hora": "09:15", "actividad": "Ganadores del V Concurso Estudiantil RIFED", "lugar": "Auditorio" },
  { "dia": "17 de junio", "hora": "09:50", "actividad": "Coffee Break", "lugar": "Terraza" },
  { "dia": "17 de junio", "hora": "10:20", "actividad": "Ponencias RIFED y Docentes UPDS", "lugar": "Salón auditorio" },
  { "dia": "17 de junio", "hora": "13:00", "actividad": "Almuerzo", "lugar": "Fogón del Gringo" },
  { "dia": "17 de junio", "hora": "15:00", "actividad": "Mesas Docentes", "lugar": "Aulas de posgrado" }
]
  ,
  [ // Día 4 - 18 de junio
    { dia: '18 de junio', hora: '08:00', actividad: 'Movilización de las delegaciones de los Hoteles a la UPDS', lugar: 'Hoteles' },
    { dia: '18 de junio', hora: '09:00', actividad: 'Inicio', lugar: 'Salón auditorio' },
    { dia: '18 de junio', hora: '09:15', actividad: 'Conferencia de Clausura', lugar: 'Auditorio' },
    { dia: '18 de junio', hora: '09:35', actividad: 'Coffee Break', lugar: 'Terraza' },
    { dia: '18 de junio', hora: '10:00', actividad: 'Mesas Docentes', lugar: 'Salas designadas' },
    { dia: '18 de junio', hora: '13:00', actividad: 'Almuerzo', lugar: 'Porongo' },
    { dia: '18 de junio', hora: '17:00', actividad: 'Reunión operativa de la Red', lugar: 'Porongo' },
  ],
  [ // Día 5 - 19 de junio
    { dia: '19 de junio', hora: '06:00', actividad: 'Movilización de las delegaciones de los Hoteles a Samaipata (con visita al Fuerte)', lugar: 'Hoteles' },
    { dia: '19 de junio', hora: '11:30', actividad: 'Llegada a Samaipata', lugar: 'Samaipata' },
    { dia: '19 de junio', hora: '12:15', actividad: 'Almuerzo', lugar: 'Samaipata' },
    { dia: '19 de junio', hora: '14:00', actividad: 'Visita del museo', lugar: 'Samaipata' },
    { dia: '19 de junio', hora: '18:00', actividad: 'Retorno', lugar: 'Samaipata' },
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

    'https://github.com/RoyDevTEAM/QueryImg/raw/main/02.jpg',
    '/assets/fondo1.jpg',
    '/assets/IMG-20250228-WA0037.jpg',
    '/assets/IMG-20250228-WA0038.jpg',
    
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
