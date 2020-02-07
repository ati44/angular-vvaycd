import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = "";

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return "pending";
    }

    return randomLetter === enteredLetter ? "correct" : "incorrect";
  }

  saydir(x:string,x1:string) {

    let y,y1,sonuc :number;
   y=x.length;
   y1= x.length;

   sonuc=y1/y
    return sonuc
  }
}
