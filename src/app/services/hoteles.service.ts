import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels = [
    {
      id: 1,
      name: "Hampton Hotel",
      location: "Santa Cruz, Bolivia",
      image: "/assets/hampton.jpg",
      description: "Hotel con servicios de calidad y tarifas corporativas.",
      rooms: [
        { type: "Estándar Simple o Twin", price: 70 },
        { type: "Suite Doble", price: 139 },
        { type: "Superior", price: 90 },
        { type: "Suite Simple", price: 159 }
      ],
      amenities: [
        "Desayuno buffet americano & Welcome Drink",
        "Uso gratuito del Centro de Negocios",
        "Cafetería permanente en habitación",
        "Uso ilimitado del gimnasio (sujeto a programación)",
        "Parqueo cubierto gratuito",
        "WIFI de alta velocidad gratis"
      ],
      policies: {
        checkIn: "14:00 PM",
        checkOut: "12:00 PM",
        payment: "Transferencia bancaria, pago virtual",
        cancellation: "Modificación sujeta a disponibilidad"
      }
    },
    {
      id: 2,
      name: "LP Hoteles",
      location: "Santa Cruz, Bolivia",
      image: "/assets/lp.jpg",
      description: "Hotel moderno con opciones de hospedaje y salones para eventos.",
      rooms: [
        { type: "Habitación Estándar", price: 75400 },
        { type: "Habitación Superior", price: 75400 }
      ],
      amenities: [
        "Check-in: 14:30 hrs - Check-out: 12:00 hrs",
        "Pago del 50% 48 hrs antes y el 50% en el check-in",
        "Salones para eventos",
        "Parqueo privado"
      ],
      policies: {
        payment: "Banco Mercantil Santa Cruz - Cuenta en Bolivianos",
        cancellation: "48 horas de anticipación"
      }
    },
    {
      id: 3,
      name: "Swissotel Santa Cruz",
      location: "Santa Cruz, Bolivia",
      image: "/assets/Swissotel.jpg",
      description: "Hotel de lujo con habitaciones modernas y servicios premium.",
      rooms: [
        { type: "Classic Room", price: 60 },
        { type: "Classic Double Room", price: 70 }
      ],
      amenities: [
        "Desayuno Buffet asistido",
        "Uso de piscina temperada",
        "Sala de Ejercicio y Sauna Seco",
        "Wifi de alta velocidad"
      ],
      policies: {
        payment: "Pre-pago obligatorio",
        requiredDocuments: "CI para nacionales, Pasaporte para extranjeros"
      }
    },
    {
      id: 4,
      name: "GHotel Santa Cruz",
      location: "Santa Cruz, Bolivia",
      image: "/assets/ghotel.jpg",
      description: "Hotel elegante con diversas opciones de hospedaje.",
      rooms: [
        { type: "Habitación Estándar", price: 240 },
        { type: "Habitación Deluxe", price: 250 },
        { type: "Suite Tina Simple", price: 280 },
        { type: "Suite Tina Doble", price: 300 },
        { type: "Habitación Doble", price: 320 },
        { type: "Habitación Triple", price: 390 },
        { type: "Suite Ejecutiva", price: 350 },
        { type: "Suite Estudio", price: 350 },
        { type: "Suite Apart", price: 360 }
      ],
      amenities: [
        "Desayuno buffet (7:00 AM - 10:00 AM)",
        "Wifi de alta velocidad",
        "Check-in: 14:00 PM / Check-out: 11:00 AM"
      ],
      policies: {
        payment: "Banco de Crédito BCP - Cuenta Corriente",
        cancellation: "No reembolsable, sujeto a disponibilidad"
      }
    }
  ];

  getHotels() {
    return this.hotels;
  }

  getHotelById(id: number) {
    return this.hotels.find(hotel => hotel.id === id);
  }
}
