import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../Services/app-service.service';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
 
export class TaskComponent implements OnInit {
  tasks: any[] = [];
 
  constructor(private taskService: AppService) { }
 
  ngOnInit(): void {
    this.loadTasks();
  }
 
  loadTasks() {

    
    this.taskService.getReturn(`${environment.apiUrl}/api/v1/project/task/MyTasks`).subscribe(
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
