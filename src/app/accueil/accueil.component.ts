import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  constructor(private titleService: Title ){
    this.titleService.setTitle('Ibrahim Addou - Accueil');
  }
}
