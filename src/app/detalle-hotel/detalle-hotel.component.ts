import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../services/hoteles.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-hotel',
  templateUrl: './detalle-hotel.component.html',
  styleUrls: ['./detalle-hotel.component.css']
})
export class DetalleHotelComponent implements OnInit {
  hotel: any = null;  // Asegurar que hotel comience como null para evitar errores
  isLoading: boolean = true;
  
  transportApps = [
    {
      name: 'Yango',
      description: 'Transporte rápido y seguro en Santa Cruz. ¡Viaja con comodidad!',
      logo: 'assets/yango.png',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.yandex.taxi',
      iosUrl: 'https://apps.apple.com/app/yango/id1321291737'
    },
    {
      name: 'InDrive',
      description: 'Tarifa justa, tú decides cuánto pagar. Viaja de forma económica.',
      logo: 'assets/inDrive.png',
      androidUrl: 'https://play.google.com/store/apps/details?id=sinet.startup.inDriver',
      iosUrl: 'https://apps.apple.com/app/indrive-ride-hailing-app/id881766201'
    }
  ];
  
  constructor(
    private route: ActivatedRoute, 
    private hotelsService: HotelsService,
    private titleService: Title,
    private metaService: Meta
  ) {}
  
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Simular Lazy Loading con un pequeño delay
    setTimeout(() => {
      this.hotel = this.hotelsService.getHotelById(id);
      this.isLoading = false;
      
      // Si el hotel existe, actualiza el título y meta tags
      if (this.hotel) {
        this.titleService.setTitle(`${this.hotel.name} - Santa Cruz`);
        this.metaService.updateTag({ name: 'description', content: this.hotel.description.substring(0, 160) });
      }
    }, 500);
  }
  
  // Método para manejar errores de carga de imágenes
  handleImageError(event: any, appName: string) {
    event.target.src = `https://placehold.co/100x100?text=${appName}`;
  }
  
  // Método para verificar si existen políticas de bioseguridad
  hasBiosecurityProtocols(): boolean {
    return this.hotel && this.hotel.biosecurityProtocols && this.hotel.biosecurityProtocols.length > 0;
  }
  
  // Método para verificar si existe información de pago
  hasPaymentInfo(): boolean {
    return this.hotel && this.hotel.paymentInfo;
  }
  
  // Método para verificar si existen cargos adicionales
  hasExtraCharges(): boolean {
    return this.hotel && this.hotel.extraCharges;
  }
  
  // Método para verificar si existe información de contacto
  hasContactInfo(): boolean {
    return this.hotel && this.hotel.contact;
  }
  
  // Método para verificar si existe información de transferencia
  hasTransferInfo(): boolean {
    return this.hotel && this.hotel.transfer;
  }
}