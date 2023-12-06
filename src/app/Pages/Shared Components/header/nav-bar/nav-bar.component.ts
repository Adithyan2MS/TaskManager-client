import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../../../environments/environment.development';
import { AppService } from '../../../../Services/app-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit
{
  user: string | any;
  username: string | any;
  firstname: string|any;
  constructor(private appService: AppService, private router: Router){}
  
  ngOnInit(): void {
    this.router.events.subscribe((value:any)=>
    {
      if(value.url){
        console.log(value.url);
        
        if(typeof localStorage!=="undefined" && localStorage.getItem("user")){
      this.user = localStorage.getItem("user");
      console.log(this.user);
     
      this.username = JSON.parse(this.user).username;
      console.log(this.username);

      this.firstname = JSON.parse(this.user).firstname;
      console.log(this.firstname);
      
    }
    else{
      this.username=null;
    }

      }
    })
    
  }
  
   logout(){
    const headers = new HttpHeaders().set('ResponseType', 'text');
    this.appService.postReturn(`${environment.apiUrl}/api/v1/auth/logout`,null,{headers}).subscribe((data:any)=>{
      console.log(data);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.router.navigate(["login"])
    },(error)=>{
      console.log(error);      
    })
  }
}

