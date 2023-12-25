import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../../Services/app-service.service';
import { environment } from '../../../../../environments/environment.development';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss'
})
export class AddMemberComponent implements OnInit{
  @Input() projectId:any 
  userList:any[]=[]
  selectedList:any[]=[]
  userIds:any[]=[]

  constructor(private api:AppService){}

  ngOnInit(): void {
    this.api.getReturn(`${environment.apiUrl}/api/v1/user/list`).subscribe((data:any)=>{
      this.userList=data
      console.log(this.userList);
    },(error)=>console.log(error))
  }
  searchName(event:any){
    const searchName = event.target.value
    if(searchName !==""){
      let queryParams = new HttpParams();
      queryParams = queryParams.append("value",searchName);
      this.api.getReturn(`${environment.apiUrl}/api/v1/user/search`,{params:queryParams}).subscribe((data:any)=>{
      this.userList=data
    }
    ,(error)=>{
      console.log(error);      
    })
    }
    else{
      this.api.getReturn(`${environment.apiUrl}/api/v1/user/list`).subscribe(
        (data: any) => {
          this.userList = data;          
        },
        (error) => {
          console.error('Error fetching projects:', error);
        }
      );
    }
  }
  addUser(item:any){
    this.selectedList.push(item) 
  }
  isUserSelected(item:any){
    if(this.selectedList.includes(item)){
      return false;
    }else{
      return true;
    }
  }
  removeUser(item:any){
    this.selectedList = this.selectedList.filter(obj => {
      return obj !== item
    });   
  }
  assignProject(){
    if(this.selectedList.length!=0){
      this.selectedList.map((value)=>{
        this.userIds.push(value.id)
      })
      const reqBody = {
        userIds:this.userIds
      }
      console.log(this.projectId);
      
      const headers = new HttpHeaders().set("ResponseType","text")
      this.api.postReturn(`${environment.apiUrl}/api/v1/gm/${this.projectId}/assign`,reqBody,{headers}).subscribe((data:any)=>{
        window.alert("User Assigned Successfull!")
      },(error)=>console.log(error))
      
    }
  }
}
