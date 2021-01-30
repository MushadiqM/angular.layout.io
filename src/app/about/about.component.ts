import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  // num1:number;
  // num2:number;

  constructor(public num1:number , public num2:number) {
      // this.num1 = num1;
      // this.num2 = num2;
   }

 addNumbers() : void{
    console.log(this.num1 + this.num2);
  }

  ngOnInit(): void {
    
  }
}

let input1 = document.getElementById("number1") as HTMLInputElement;
let input2 = document.getElementById("number1") as HTMLInputElement;

let uservalue1 = +input1.value;
let uservalue2 = +input2.value;

let add = new AboutComponent(uservalue1,uservalue2);



let button = document.getElementById("add") as HTMLButtonElement;

// button.onclick = ()=>{
//   add.addNumbers();
// }
  

