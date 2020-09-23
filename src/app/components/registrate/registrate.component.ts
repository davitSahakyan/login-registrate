import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css'],
})
export class RegistrateComponent implements OnInit {
  users: object[] = JSON.parse(localStorage.getItem('users')) || [];

  user: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.user = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        myValidator,
      ]),
      name: new FormControl(''),
      surname: new FormControl(''),
      password: new FormControl(''),
    });
    console.log(this.user);
    this.user.controls.login.valueChanges.subscribe((value) =>
      console.log(value)
    );
    this.user.controls.login.statusChanges.subscribe((value) => {
      console.log(this.user.controls.login.errors);
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.user.value);
    this.users = [...this.users, this.user.value];
    localStorage.setItem('users', JSON.stringify(this.users));
    this.router.navigate(['../login']);
  }
}

function myValidator(formControl: FormControl) {
  if (formControl.value.length < 3) {
    return {
      myValidator: { short: 'Short' },
    };
  } else if (formControl.value.length > 3) {
    return { myValidator: { long: 'long' } };
  }
  return null;
}
