import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  projects= {} as Project[]
  constructor(private titleService: Title,private projectService:ProjectsService ){
    this.titleService.setTitle('Ibrahim Addou - CV');
  }
}
