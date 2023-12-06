import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../Services/app-service.service';
import { DataService } from '../../../Services/data.service';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.scss'
})
export class LeftNavComponent implements OnInit {

  constructor(private dataService: DataService){}
  ngOnInit(): void {
     
 
}
 viewComponent(comp:any){
  this.dataService.notifyOther(comp);
  
 }

}
