export interface Organization {
    org_name:String,
    org_code:String
}

export interface TaskCategory {
    Category:String
}

export interface User {
    firstname: String,
    lastname:String,
    username: String,
    password:String,
    email:String,
    orgId:number
    roleId:number
}
export interface Project{
    project_code:String,
    project_name:String,
    project_description:String,
    due_date:Date ,
    project_status:String 
}

