import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
     constructor (private prisma:PrismaService){}
     logIn() {
          return{name : 'I am signing in'} 
     }
     signUp() {
          return { name: 'I am signup' }
     }

}