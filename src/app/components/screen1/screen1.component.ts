import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { DatasharingService } from 'src/app/datasharing.service';


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component {
  counter = 0;
  ifNoTicketareBooked = 0;
  subject$ = new Subject();
  count = 0;
  myData:any = []
  constructor(private http: HttpClient, private router: Router, private dataShare: DatasharingService){}
  
  ngOnInit() {
    // getting the available number of seats
    this.http.get('https://trainbooking-n16w53dye-bhavesh1221.vercel.app/data').subscribe(data => {
     this.parseData(data)
    })
  }
  parseData(data:any){
    this.myData = data.map((item:string)=> Number(item))
  }

  // counter starts
  updateCounter(value: number) {
    this.counter += value;
  }

  increment = () => {
    if(this.counter == 7 || this.counter == 80 - this.myData[this.myData.length-1]){
      return;
    }
    this.updateCounter(1);
  }

  decrement = () => {
    if(this.counter == 0){
      return;
    }
    this.updateCounter(-1);
  }
  // counter ends


  // Book ticket Btn
  onContinue(){ 
    let arr = [];
    // if there is no ticket booked incrementing this variable "ifNoTicketareBooked" and push the seat number in arr 
    if(this.myData.length == 0){
      for (let i = 0; i < this.counter; i++) {
        arr.push(JSON.stringify(++this.ifNoTicketareBooked))
      }
    }
    //if already the seats are booked then taking the last booked seat then pushing the seat number accordingly
    else{
      let lastSeat = this.myData[this.myData.length-1]
      for (let i = 0; i < this.counter; i++) {
        arr.push(JSON.stringify(++lastSeat))
      }
    }
    console.log(arr);
    
    let myurl = 'https://trainbooking-n16w53dye-bhavesh1221.vercel.app/seats/';
    const mybody = {
      "seatIds": arr,
      "status": 1
    }

    //making an api call and waiting for the response then only changing the route to the screen2
    this.http.put(myurl,mybody).subscribe((data)=>{
      this.dataShare.updateData(data)
      this.router.navigate(['/booked']);
    })
    
  }

 }
