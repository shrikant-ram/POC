import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class AuthServices{
    auth(){
        if(localStorage.getItem('isLogin')){
            return true;
        }else{
            return false;
        }
    }
}