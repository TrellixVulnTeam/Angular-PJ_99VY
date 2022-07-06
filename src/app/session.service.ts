import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setInfo(userId){
    localStorage.setItem('id',userId);
  }
  getInfo() : string{
    return localStorage.getItem('id')
  }
}
