import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import { UserSigninfoService } from './user-signinfo.service';
import {ApiResult} from './Interface/ApiResult';
import {NzMessageService} from 'ng-zorro-antd';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title = 'igem-frontend';
  constructor( private http: HttpService,
               private myinfo: UserSigninfoService,
               private message: NzMessageService,
               private router: Router,
  ) {}

  ngOnInit() {
    this.http.get_myself(this.callback);
  }

  callback = (result: ApiResult) => {
    if (result.success) {
      this.message.success('Successlly signin');
      this.myinfo.setUserInfobyInfo(result.success, result.data);
      // this.router.navigateByUrl('/explore');
    }
  }
  // callback = (result: ApiResult) => {
  //   this.myinfo.setUserInfobyInfo(result.success, result.data);
  //   if (result.success) {
  //     console.log('log in success');
  //   } else {
  //     console.log('fail');
  //   }
  // }
}
