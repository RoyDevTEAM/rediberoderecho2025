import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../services/hoteles.service';

@Component({
  selector: 'app-detalle-hotel',
  templateUrl: './detalle-hotel.component.html',
  styleUrls: ['./detalle-hotel.component.css']
})
export class DetalleHotelComponent implements OnInit {
  hotel: any = null;  // Asegurar que hotel comience como null para evitar errores

  constructor(private route: ActivatedRoute, private hotelsService: HotelsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Simular Lazy Loading con un pequeño delay
    setTimeout(() => {
      this.hotel = this.hotelsService.getHotelById(id);
    }, 500); 
  }
}
