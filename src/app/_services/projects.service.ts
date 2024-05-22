import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects : Project[]=
  [ { id:0,name:'Site Portfolio Angular',summary:'Projet fait avec angular',description:'',projectLink:'github.com/ibrahimaddou',tags:[Tag.ANGULAR],pictures:[]},
    { id:1,name:'Application bancaire en C',summary:'Projet fait avec C',description:'',projectLink:'github.com/ibrahimaddou',tags:[Tag.C],pictures:[]} 
  ];
  constructor() { }

  getProjects(){
    return this.projects;
  }
  getProjectById(id:number): Project{
    let project = this.projects.find(project=>project.id===id);
    if (project ===undefined) {
      throw new TypeError("cet id "+id+" n'existe pas");
      
    }
    return project;
  }
}
