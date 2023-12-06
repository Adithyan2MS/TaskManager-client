import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../../Tasks/task/task.component';
import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-view-area',
  standalone: true,
  imports: [CommonModule,TaskComponent],
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
