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
      "image": "assets/IMG-20250419-WA0028.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.",
      "url": "https://www.hilton.com/en/hotels/srzeqhx-hampton-santa-cruz-equipetrol-bolivia/",
      "rooms": [
        {
          "type": "Estándar Simple o Twin",
          "capacity": "1 o 2 personas",
          "priceUsd": 70,
          "priceBs": 487.20
        },
        {
          "type": "Superior",
          "capacity": "1 o 2 personas",
          "priceUsd": 90,
          "priceBs": 626.40
        },
        {
          "type": "Suite Simple",
          "capacity": "1 o 2 personas",
          "priceUsd": 139,
          "priceBs": 968.64
        },
        {
          "type": "Suite Doble",
          "capacity": "2 a 4 personas",
          "priceUsd": 159,
          "priceBs": 1106.64
        }
      ],
      
      "policies": {
        "checkIn": "08:00 AM",
        "checkOut": "14:00 PM",
        "payment": "Transferencia bancaria, pago en efectivo",
        "cancellation": "Early check in: 50% de la tarifa adicional",
        "lateCheckOut": "50% de la tarifa adicional (14:00 PM a 18:00 PM)"
      },
      "transfer": {
        "auto": {
          "capacity": "1 a 3 personas",
          "priceUsd": 120
        },
        "van": {
          "capacity": "1 a 10 personas",
          "priceUsd": 380
        }
      }
    },
    {
      "id": 2,
      "name": "LP Hoteles",
      "location": "Santa Cruz, Bolivia",
      "image": "/assets/lp.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.",
      "url": "https://lphoteles.com/lpsantacruz/",
      "rooms": [
        { 
          "type": "Habitación Doble",
          "capacity": "2 personas", 
          "priceUsd": 53.80, 
          "priceBs": 377.00
        }
      ],
    
      "policies": {
        "checkIn": "14:30 PM",
        "checkOut": "12:00 PM",
        "payment": "Depósito o efectivo",
        "cancellation": "50% 48 hrs antes y 50% en el check-in"
      },
      
      "contact": {
        "phone": "591-3-3548888",
        "email": "lpsantacruz@lphoteles.com"
      }
    },
    {
      "id": 3,
      "name": "Swissotel Hotel",
      "location": "Santa Cruz, Bolivia",
      "image": "/assets/Swissotel.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.",
      "url": "https://swissotelsantacruz.com.bo/",  
      "rooms": [
        { 
          "type": "Classic Room",
          "capacity": "1 o 2 adultos", 
          "priceUsd": 60, 
          "priceBs": 417.60
        },
        { 
          "type": "Classic Double Room",
          "capacity": "1 o 2 adultos", 
          "priceUsd": 70, 
          "priceBs": 487.20
        }
      ],
      "extraCharges": {
        "child3to12Usd": 20,
        "child13to17Usd": 50,
        "thirdAdultUsd": 55
      },
     
      "policies": {
        "checkIn": "15:00 PM",
        "checkOut": "12:00 PM",
        "payment": "Pre-pago obligatorio",
        "cancellation": "No reembolsable"
      },
     
      "contact": {
        "phone": "(591) 3361-1200",
        "whatsapp": "(591) 760-64277",
        "address": "Av. La Salle # 4500 esquina Av. Costanera - Canal Isuto Final"
      }
    },
    {
      "id": 4,
      "name": "GHotel Santa Cruz",
      "location": "Santa Cruz, Bolivia",
      "image": "/assets/ghotel.jpg",
      "description": "Los hoteles ofrecen tarifas exclusivas para asistentes al Encuentro de la Red Iberoamericana de Derecho en la UPDS Domingo Savio, disponibles solo para miembros registrados. Aprovecha esta oportunidad de hospedaje preferencial.",
      "url": "https://g-santa-cruz-de-la-sierra.santacruztophotels.com/es/",  
      "rooms": [
        { 
          "type": "Habitación Estándar", 
          "capacity": "2 personas",
          "priceUsd": 35, 
          "priceBs": 240
        },
        { 
          "type": "Habitación Deluxe", 
          "capacity": "2 personas",
          "priceUsd": 36, 
          "priceBs": 250
        },
        { 
          "type": "Suite Tina Simple", 
          "capacity": "2 personas",
          "priceUsd": 40, 
          "priceBs": 280
        },
        { 
          "type": "Suite Tina Doble", 
          "capacity": "2 personas",
          "priceUsd": 43, 
          "priceBs": 300
        },
        { 
          "type": "Habitación Doble", 
          "capacity": "2 personas",
          "priceUsd": 46, 
          "priceBs": 320
        },
        { 
          "type": "Habitación Triple", 
          "capacity": "3 personas",
          "priceUsd": 56, 
          "priceBs": 390
        },
        { 
          "type": "Suite Ejecutiva", 
          "capacity": "2 personas",
          "priceUsd": 50, 
          "priceBs": 350
        },
        { 
          "type": "Suite Estudio", 
          "capacity": "2 personas",
          "priceUsd": 50, 
          "priceBs": 350
        },
        { 
          "type": "Suite Apart", 
          "capacity": "2 personas",
          "priceUsd": 52, 
          "priceBs": 360
        }
      ],
     
      "policies": {
        "checkIn": "14:00 PM",
        "checkOut": "11:00 AM",
        "payment": "Banco de Crédito BCP - Cuenta Corriente",
        "cancellation": "No reembolsable"
      },
      
      "contact": {
        "phone": "+591 (3) 3444015",
        "mobile": "76091764",
        "email": "gerencia@hotelgbolivia.com",
        "address": "Av. Pedro Ribera, 3er anillo interno 750"
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