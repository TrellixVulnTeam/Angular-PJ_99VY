import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SessionService } from 'app/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  id='';
  password='';
  ngOnInit(): void {

  }
  constructor(private session: SessionService, private rout: Router) { }

  /* ngOnInit(): void {
      setTimeout(() => {
         this.session.setInfo('admin');
        this.rout.navigateByUrl('/dashboard');
      }, 1000);
    }*/
  @ViewChild('ID') input: any;
  ngAfterViewInit() {
    console.log(this.input.any.value);
  }

  login() {
    if (this.id == 'admin' && this.password == '1234') { // 하드코딩
      this.session.setInfo(this.id); // 세션에 아이디 정보를 넣어줌(예제니까 간단하게)
      this.rout.navigateByUrl('/dashboard'); // 로그인 성공시 이동할 페이지
      this.rout.navigate(['/dashboard']);
    }
      this.rout.navigateByUrl('/dashboard');
  }
}
