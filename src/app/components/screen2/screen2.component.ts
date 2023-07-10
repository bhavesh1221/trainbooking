import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatasharingService } from 'src/app/datasharing.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component {
  seat1 = Array.from({ length: 80 }, (_, index) => ({
    seat: index + 1,
    id: index + 1
  }));
  seatGroups: any[] = [];
  bookedSeats = ''
  // myarray = Array.from({ length: 80 }, (_, index) => index + 1);
  myData:any = []
  constructor(private http: HttpClient,  private dataShare: DatasharingService){}

  ngOnInit() {
    // getting seats number from screen1 using BehaviorSubject
    this.dataFromScreen1()

    //for UI created groups of 7 - 7 blocks to show them as each row
    this.splitIntoGroups();

    // fetching data from api to show total booked seats
    this.getDatafromApi()
  }

  dataFromScreen1(){
    this.dataShare.data.subscribe((data:any) => {
      this.bookedSeats = (data.seatIdArray)?.join(",")
    })
  }

 
  splitIntoGroups() {
    const groupSize = 7;
    const totalGroups = Math.ceil(this.seat1.length / groupSize);
  
    for (let i = 0; i < totalGroups; i++) {
      const startIndex = i * groupSize;
      const endIndex = startIndex + groupSize;
      const group = this.seat1.slice(startIndex, endIndex);
      this.seatGroups.push(group);
    }
  }

  getDatafromApi(){
    this.http.get('https://trainbooking-n16w53dye-bhavesh1221.vercel.app/data').subscribe(data => {
      this.parseData(data)
      this.updateColor()
     })
  }

  parseData(data:any){
    this.myData = data.map((item:string)=> Number(item))
  }
  
  updateColor(){
    setTimeout(() => {
      for (let i = 0; i < this.myData.length; i++) {
         let id = document.getElementById(`${i+1}`)?.innerHTML
         if(Number(id) == (this.myData[i])){
           (document.getElementById(`${i + 1}`)! as HTMLElement).style.backgroundColor = 'rgb(255 79 79)';
         }
       }
     }); 
  }

}
