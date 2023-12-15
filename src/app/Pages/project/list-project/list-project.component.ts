import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../Services/app-service.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.scss'
})
export class ListProjectComponent implements OnInit {

  projects: any[] = [];
  @Output() viewEvent=new EventEmitter<any>()
 
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
  showDetails(project:any){
  this.viewEvent.emit(project);

  }
}
