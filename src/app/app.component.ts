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
  
  ngOnInit(): void {
   
  }
  
  
}


