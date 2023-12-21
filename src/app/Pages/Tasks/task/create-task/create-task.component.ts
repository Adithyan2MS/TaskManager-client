import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { Project, Task } from '../../../../Models/data';
import { AppService } from '../../../../Services/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  taskForm !: FormGroup ;
  submit:boolean=false;
  taskCreateSuccess: boolean | any;
  errorMsg:string | any;
  projects: any[] = [];


  constructor(private formBuilder : FormBuilder, private projectService : AppService, private router: Router){}
   ngOnInit(){

    this.projectService.getReturn(`${environment.apiUrl}/api/v1/gm/projectList`).subscribe(
      (data: any) => {
        this.projects = data;
        console.log(this.projects);        
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  

    this.taskForm=this.formBuilder.group({
      
      t_title:["",Validators.required],
      t_code:["",Validators.required],
      t_description:["",Validators.required],
      duedate:["",Validators.required],
      t_status:["",Validators.required],
      assignedto:[null,Validators.required],
      project_id:[null,Validators.required],
      c_id:[null,Validators.required],
      priority_id:[null,Validators.required]    
   })
 }
 createTask(){
   console.log(this.taskForm);
   
   this.submit=true;
   if(this.taskForm.invalid){
     this.taskForm.markAllAsTouched();
     console.log(this.submit);
     return;
   }
 
  const formValues=this.taskForm.getRawValue();

  const taskData : Task= {
    t_title: formValues.t_title,
    t_code: formValues.t_code,
    t_description: formValues.t_description,
    duedate: formValues.duedate,
    t_status: formValues.t_status,
    assignedto: formValues.assignedto,
    project_id: formValues.project_id,
    c_id: formValues.c_id,
    priority_id: formValues.priority_id,
  }

 console.log(taskData);

 this.projectService.postReturn(`${environment.apiUrl}/api/v1/project/task/create`,taskData).subscribe((resp:any)=>{
   console.log("Project Created Successfully",resp);
     this.taskCreateSuccess=true;
     window.alert("Project Created Successfully!")
     this.taskCreateSuccess.reset();
     console.log(resp.response);    
  })
  
  this.submit=false;
}
}