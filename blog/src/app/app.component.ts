import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloginapp.components file';
  name='KRISHNA'
  getName(){
    return this.name
  }
  obj={
    name:"ThisIsObjectValue",
    age:19
  }

  arr=['NeymarArray','Messi']
}


