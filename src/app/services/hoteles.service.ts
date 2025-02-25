import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels = [
    {
      name: "Yotau Hotel",
      location: "Santa Cruz, Bolivia",
      image: "/assets/yotau.jpg",
      suites: [
        { type: "Suite Ejecutiva", size: "78m2", rooms: 1, price: { single: 65, double: 70 } },
        { type: "Suite Senior", size: "120m2", rooms: 2, price: { triple: 105, quadruple: 140 } },
        { type: "Suite Familiar", size: "160m2", rooms: 3, price: { sixPeople: 210 } }
      ],
      amenities: [
        "Desayuno Buffet Americano",
        "Vajilla Completa",
        "Parqueo Privado",
        "Uso de Sauna, Jacuzzi, Piscina, Hidromasaje y Gimnasio",
        "Wifi, TV Cable",
        "Descuentos en Restaurant Guapuru",
        "Uso de salones para eventos corporativos"
      ],
      policies: {
        checkIn: "14:00 PM",
        checkOut: "12:00 PM",
        payment: "Tarjeta de crédito, transferencia bancaria, QR",
        cancellation: "24 horas de anticipación para evitar cargo por NO SHOW"
      }
    },
    {
      name: "Swissotel Santa Cruz",
      location: "Santa Cruz, Bolivia",
      image: "/assets/Swissotel.jpg",
      rooms: [
        { type: "Classic Room", capacity: "1 o 2 Adultos", price: 60 },
        { type: "Classic Double Room", capacity: "1 o 2 Adultos", price: 70 }
      ],
      amenities: [
        "Desayuno Buffet asistido",
        "Uso de piscina temperada",
        "Sala de Ejercicio y Sauna Seco",
        "Wifi de alta velocidad",
        "Check-in desde las 15:00 hrs, Check-out a las 12:00 hrs"
      ],
      policies: {
        payment: "Pre-pago obligatorio",
        requiredDocuments: "CI para nacionales, Pasaporte para extranjeros"
      }
    },
    {
      name: "Radisson Hotel Santa Cruz",
      location: "Santa Cruz, Bolivia",
      image: "/assets/radisson.jpg",
      rooms: [
        { type: "King Standard", capacity: "1 persona", price: 79 },
        { type: "King Standard", capacity: "2 personas", price: 99 },
        { type: "Double Standard", capacity: "2 camas", price: 99 },
        { type: "Studio Suite", capacity: "1 persona", price: 119 },
        { type: "One Bedroom Suite", capacity: "1 persona", price: 129 },
        { type: "Premium Studio Suite", capacity: "1 persona", price: 129 }
      ],
      amenities: [
        "Desayuno buffet",
        "Acceso a gimnasio, piscina y zonas húmedas",
        "Uso del centro de negocios y estacionamiento",
        "Wifi de alta velocidad"
      ],
      policies: {
        checkIn: "14:00 PM",
        checkOut: "12:00 PM",
        payment: "Pago directo, transferencia bancaria o pago virtual",
        cancellation: "No reembolsable, pero modificable con 48 hrs. de anticipación"
      }
    }
  ];

  getHotels() {
    return this.hotels;
  }
}
