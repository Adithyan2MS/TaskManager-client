import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../Services/app-service.service';
import { environment } from '../../../../environments/environment.development';
import { ListTaskComponent } from '../list-task/list-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,ListTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
 
export class TaskComponent implements OnInit {
  ngOnInit(): void {

  }
}
