import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../Services/app-service.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  projects: any[] = [];
 
  constructor(private projectService: AppService) { }
 
  ngOnInit(): void {
    this.loadProjects();
  }
 
  loadProjects() {

    
    this.projectService.getReturn(`${environment.apiUrl}/api/v1/gm/projectList`).subscribe(
      (data: any) => {
        this.projects = data;
        console.log(this.projects);
        
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}



