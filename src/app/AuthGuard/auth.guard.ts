import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isLoggedIn=localStorage.getItem("token");
  console.log(isLoggedIn);
  if(!isLoggedIn){
    console.log(isLoggedIn);
    
   const router=inject(Router);
   return router.navigate(["/login"]);

  }
  else{
    return  true;
  }
};
