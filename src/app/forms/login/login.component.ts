import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate')?.valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name')?.setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name')?.setValidators(Validators.required);
        }
        this.formGroup.get('name')?.updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control: any) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  // checkInUseEmail(control: any) {
  //   // mimic http database access
  //   let db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }
  // getErrorEmail() {
  //   return this.formGroup.get('email')?.hasError('required') ? 'Field is required' :
  //     this.formGroup.get('email')?.hasError('pattern') ? 'Not a valid emailaddress' :
  //       this.formGroup.get('email')?.hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  // }

  getErrorPassword() {
    return this.formGroup.get('password')?.hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password')?.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post: any) {
    this.post = post;
  }


}
