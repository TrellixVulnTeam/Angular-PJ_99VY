import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private session : SessionService, private rout: Router){

  }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var info : any = this.session.getInfo();  
    if(info == 'admin'){
      alert("로그인 성공 : " + info);
      return true
      



    }
    this.rout.navigateByUrl('');
    alert("로그인 실패 : " + info);
    return false;
    
  }
  
}
