import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment.development';
import { AppService } from '../../../Services/app-service.service';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit {

tasks: any[] = [];
 
  constructor(private taskService: AppService) { }
 
  ngOnInit(): void {
    this.loadTasks();
  }
 
  loadTasks() {

    
    this.taskService.getReturn(`${environment.apiUrl}/api/v1/project/task/AssignedTasks`).subscribe(
      (data: any) => {
        this.tasks = data;
        console.log(this.tasks);
        
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
}