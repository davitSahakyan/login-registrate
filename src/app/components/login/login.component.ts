import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.user.value);
    this.router.navigate(['../home']);
  }
}
