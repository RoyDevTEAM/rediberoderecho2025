import { Component,OnInit  } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'rediberoderecho';
  ngOnInit() {
    AOS.init();
  }
}
