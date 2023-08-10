import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
     logIn() {
          return{name : 'I am signing in'} 
     }
     signUp() {
          return { name: 'I am signup' }
     }

}