import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,ListProjectComponent,AddProjectComponent,ProjectDetailsComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  showProjectDetails:boolean=false;
  productDetails:any;
  ngOnInit(): void {
    this.showProjectDetails=false;
   
  }
  viewEventDetails(event:any){
    if(event){
      this.showProjectDetails=true;
      this.productDetails=event;
    }

  }
}



