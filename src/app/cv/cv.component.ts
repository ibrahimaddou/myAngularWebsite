import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  project: Project= {
    id:0,
    name:'Site Portfolio Angular',
    description:'Projet fait avec angular',
    projectLink:'github.com/ibrahimaddou',
    tags:['Angular'],
    pictures:[]

  }
  constructor(private titleService: Title ){
    this.titleService.setTitle('Ibrahim Addou - CV');
  }
}
