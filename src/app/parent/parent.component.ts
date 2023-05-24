import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  counter = 1;
  flag = 0;
  params:any = [];
  seat1 = [1,2,3,4,5,6,7]
  seat2 = [8,9,10,11,12,13,14]
  seat3 = [15,16,17,18,19,20,21]
  seat4 = [22,23,24,25,26,27,28]
  seat5 = [29,30,31,32,33,34,35]
  // seat6 = [1,2,3,4,5,6,7]
  // seat7 = [1,2,3,4,5,6,7]
  // seat8 = [1,2,3,4,5,6,7]
  // seat9 = [1,2,3,4,5,6,7]
  // seat10 = [1,2,3,4,5,6,7]
  // seat11 = [1,2,3,4,5,6,7]
  // seat12 = [1,2,3,4,5,6,7]

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    console.log("on in it");
    
    this.http.get('http://localhost:3000/').subscribe(data => {
      console.log(data);
    })
  }

  onfun(){
    console.log("before");
   
    
    console.log("after");
    
  }
  private updateCounter(value: number) {
    this.counter += value;
  }

  increment = () => {
    if(this.counter == 7){
      return;
    }
    this.updateCounter(1);
  }

  decrement = () => {
    if(this.counter == 1){
      return;
    }
    this.updateCounter(-1);
  }

  onContinue(){
    let url = 'http://localhost:3000/' + this.params;
    const body = {
      "status": 1
    }
      
    this.http.put(url,body).subscribe((data)=>{
      console.log(data);
    })
  }

  onSelect(i:number){
    if(this.counter == this.flag){
      return;
    }
    this.flag++;
    this.params.push(i)
    console.log(this.params);
  }

}
