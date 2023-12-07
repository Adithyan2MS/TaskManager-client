import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../../Tasks/task/task.component';
import { DataService } from '../../../Services/data.service';
import { UserComponent } from '../../user/user.component';
import { RegisterComponent } from '../../register/register.component';
import { OrganizationComponent } from '../../organization/organization.component';
import { TaskCategoryComponent } from '../../task-category/task-category.component';

@Component({
  selector: 'app-view-area',
  standalone: true,
  imports: [CommonModule,UserComponent,RegisterComponent,OrganizationComponent,TaskCategoryComponent],
  templateUrl: './view-area.component.html',
  styleUrl: './view-area.component.scss'
})
export class ViewAreaComponent implements OnInit{
  constructor(private dataService:DataService){}
  comp: string |any

   ngOnInit(): void {
   this.dataService.notifyObservale$.subscribe((data:any) =>{
  console.log(data);

  this.comp=data;

   })
 }
}
