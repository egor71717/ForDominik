import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public result;


  login
  password

  constructor(public http: HttpClient) 
  {

  }

  ngOnInit() {
  }

  onSubmit(){
    const requestBody = {
      login: this.login,
      password: this.password
    }
    const url = 'https://crm.applicintsuite.com/QMC/api/auth/login/refresh-token';
    this.http.post<{isSuccess: boolean, value: string, error: string }>(url, requestBody)
      .subscribe(
        success => {
          if(success.isSuccess)
            this.result = success.value
          else
            this.result = success.error
        },
      )
  }

}
