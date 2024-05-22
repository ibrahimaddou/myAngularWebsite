import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  projects : Project[]=
  [ { id:0,name:'Site Portfolio Angular',summary:'Projet fait avec angular',description:'',projectLink:'github.com/ibrahimaddou',tags:[Tag.ANGULAR],pictures:[]},
    { id:1,name:'Application bancaire en C',summary:'Projet fait avec C',description:'',projectLink:'github.com/ibrahimaddou',tags:[Tag.C],pictures:[]} 
  ];
  constructor(private titleService: Title ){
    this.titleService.setTitle('Ibrahim Addou - CV');
  }
}
