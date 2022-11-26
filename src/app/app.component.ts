import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';
  isParaVisible: boolean = false
  btnClicksArr = []

  toggleDisplay(){
    this.isParaVisible = !this.isParaVisible
    this.btnClicksArr.push(new Date())
  }
}
