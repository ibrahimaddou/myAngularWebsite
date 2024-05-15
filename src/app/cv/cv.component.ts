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
  project: Project= {
    id:0,
    name:'Site Portfolio Angular',
    //summary:'',
    description:'Projet fait avec angular',
    projectLink:'github.com/ibrahimaddou',
    tags:[Tag.ANGULAR, Tag.C],
    pictures:[]

  }
  constructor(private titleService: Title ){
    this.titleService.setTitle('Ibrahim Addou - CV');
  }
}
