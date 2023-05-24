// import { Component, OnInit } from '@angular/core';
// import { map } from 'rxjs';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

interface Item {
  title: string;
  description: string;
  descriptionVisible: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  loginForm: FormGroup;
  btn = false;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
   
  }
  

  // @Output() login: EventEmitter<any> = new EventEmitter();

  // onChange(){
  //   if(this.loginForm.value.username != "" && this.loginForm.value.password != ""){
  //     this.btn = true
  //   }
  // }
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const { username, password } = this.loginForm.value;
  //     this.login.emit({ username, password });
  //   }
  // }
  
}


