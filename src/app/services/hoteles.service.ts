import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels = [
    {
      "id": 1,
      "name": "Hampton Hotel",
      "location": "Santa Cruz, Bolivia",
      "image": "/assets/hampton.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.
        ",
      "url": "https://www.hilton.com/es/locations/bolivia/santa-cruz-de-la-sierra/hampton-by-hilton/?content=es", 
      "rooms": [
        {
          "type": "Estándar Simple o Twin",
          "priceUsd": 70, "Bs": 487.20 ,
        },
        {
          "type": "Suite Doble",
           "priceUsd": 139, "Bs": 968.64 ,
        },
        {
          "type": "Superior",
            "priceUsd": 90, "Bs": 626.40 ,
        },
        {
          "type": "Suite Simple", "priceUsd": 159, "Bs": 1106.64         },

      ],
      "amenities": [
        "Desayuno buffet americano & Welcome Drink",
        "Uso gratuito del Centro de Negocios",
        "Cafetería permanente en habitación",
        "Uso ilimitado del gimnasio (sujeto a programación)",
        "Parqueo cubierto gratuito",
        "WIFI de alta velocidad gratis"
      ],
      "policies": {
        "checkIn": "14:00 PM",
        "checkOut": "12:00 PM",
        "payment": "Transferencia bancaria, pago virtual",
        "cancellation": "Modificación sujeta a disponibilidad"
      }
    },
    {
      "id": 2,
      "name": "LP Hoteles",
      "location": "Santa Cruz, Bolivia",
      "image": "/assets/lp.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.
        ",
      "url": "https://lphoteles.com/lpsantacruz/",
      "rooms": [
        { "type": "Habitación Doble", "capacity": 2, "priceUsd": 377, "totalBs": 75400, "nights": 5, "quantity": 40 },
        
        { "type": "Habitación Superior", "capacity": 2, "priceUsd": 377, "totalBs": 75400, "nights": 5, "quantity": 40 }
      ],
      "amenities": [
        "Check-in: 14:30 hrs - Check-out: 12:00 hrs",
        "Salones para eventos",
        "Parqueo privado"
      ],
      "payment": {
        "depositPolicy": "50% 48 hrs antes y 50% en el check-in",
        "bank": "Banco Mercantil Santa Cruz",
        "accountNumber": "4010807071",
        "accountName": "Hoteles Minimalistas S.R.L.",
        "paymentMethods": ["Depósito", "Efectivo"],
        "restrictions": ["No se aceptan cheques"]
      },
      "policies": {
        "cancellation": "48 horas de anticipación",
        "eventPayment": "50% 48 hrs antes y 50% al finalizar el evento"
      },
      "biosecurityProtocols": [
        "Uso de barbijo obligatorio",
        "Distanciamiento social en áreas públicas"
      ],
      "contact": [
        {
          "hotel": "HOTEL LP EQUIPETROL®",
          "address": "AV. MARCELO TERCEROS # 200",
          "phone": "591-3-3428484",
          "email": "lpequipetrol@lphoteles.com"
        },
        {
          "hotel": "HOTEL LP SANTA CRUZ®",
          "address": "AV. EJERCITO NACIONAL # 290",
          "phone": "591-3-3548888",
          "email": "lpsantacruz@lphoteles.com"
        }
      ],
      "quotation": {
        "event": "Congreso Iberoamericano",
        "location": "Santa Cruz",
        "date": "17 de Febrero del 2025",
        "totalBs": 75400,
        "advancePaymentBs": 0,
        "balanceDueBs": 75400,
        "responsiblePerson": "Alejandra Gumucio"
      }
    },
    {
      "id": 3,
      "name": "Swissotel Hotel",
      "location": "Santa Cruz, Bolivia",
      "image": "/assets/Swissotel.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.
        ",
      "url": "https://swissotelsantacruz.com.bo/",  
      "rooms": [
        { "type": "Classic Room", "priceUsd": 60, "priceBs": 417.60, "priceForFourNightsUsd": 240, "priceForFourNightsBs": 1670.40 },
        { "type": "Classic Double Room", "priceUsd": 70, "priceBs": 487.20, "priceForFourNightsUsd": 280, "priceForFourNightsBs": 1948.80 }
      ],
      "extraCharges": {
        "child3to12Usd": 20,
        "child13to17Usd": 50,
        "thirdAdultUsd": 55
      },
      "amenities": [
        "Desayuno Buffet asistido en Elsa Restaurante",
        "Ingreso desde las 15:00 hrs / Salida a las 12:00 hrs",
        "Uso de piscina temperada (según aforo)",
        "Uso de Sala de Ejercicio (según aforo)",
        "Uso del Sauna Seco (previa reservación)",
        "Wifi de alta velocidad en todas las áreas del hotel"
      ],
      "policies": {
        "payment": "Pre-pago obligatorio",
        "requiredDocuments": "CI para nacionales, Pasaporte para extranjeros"
      },
      "biosecurityProtocols": [
        "Uso de barbijo obligatorio",
        "Distanciamiento social en áreas públicas"
      ]
    },
    {
      "id": 4,
      "name": "GHotel Santa Cruz",
      "location": "Santa Cruz, Bolivia",
      "image": "/assets/ghotel.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.
        ",
      "url": "https://g-santa-cruz-de-la-sierra.santacruztophotels.com/es/",  
      "rooms": [
        { "type": "Habitación Estándar", "priceBs": 240, "priceUsd": 35, "priceForFourNightsBs": 960, "priceForFourNightsUsd": 137.93 },
        { "type": "Habitación Deluxe", "priceBs": 250, "priceUsd": 36, "priceForFourNightsBs": 1000, "priceForFourNightsUsd": 143.68 },
        { "type": "Suite Tina Simple", "priceBs": 280, "priceUsd": 41, "priceForFourNightsBs": 1120, "priceForFourNightsUsd": 160.90 },
        { "type": "Suite Tina Doble", "priceBs": 300, "priceUsd": 44, "priceForFourNightsBs": 1200, "priceForFourNightsUsd": 172.41 },
        { "type": "Habitación Doble", "priceBs": 320, "priceUsd": 46, "priceForFourNightsBs": 1280, "priceForFourNightsUsd": 183.91 },
        { "type": "Habitación Triple", "priceBs": 390, "priceUsd": 56, "priceForFourNightsBs": 1560, "priceForFourNightsUsd": 224.14 },
        { "type": "Suite Ejecutiva", "priceBs": 350, "priceUsd": 51, "priceForFourNightsBs": 1400, "priceForFourNightsUsd": 201.72 },
        { "type": "Suite Estudio", "priceBs": 350, "priceUsd": 51, "priceForFourNightsBs": 1400, "priceForFourNightsUsd": 201.72 },
        { "type": "Suite Apart", "priceBs": 360, "priceUsd": 52, "priceForFourNightsBs": 1440, "priceForFourNightsUsd": 206.90 }
      ],
      "amenities": [
        "Desayuno buffet (7:00 AM - 10:00 AM)",
        "Wifi de alta velocidad",
        "Check-in: 14:00 PM / Check-out: 11:00 AM"
      ],
      "policies": {
        "payment": "Banco de Crédito BCP - Cuenta Corriente",
        "cancellation": "No reembolsable, sujeto a disponibilidad"
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
