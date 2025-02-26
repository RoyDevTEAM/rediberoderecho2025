import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../services/hoteles.service';

@Component({
  selector: 'app-detalle-hotel',
  templateUrl: './detalle-hotel.component.html',
  styleUrls: ['./detalle-hotel.component.css']
})
export class DetalleHotelComponent implements OnInit {
  hotel: any;

  constructor(private route: ActivatedRoute, private hotelsService: HotelsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotel = this.hotelsService.getHotelById(id);
  }
}
