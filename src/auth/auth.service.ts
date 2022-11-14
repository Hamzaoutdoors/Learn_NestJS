import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return { msg: 'hey signup' }
    }

    signin() {
        return { msg: 'hey signin' }
    }
}