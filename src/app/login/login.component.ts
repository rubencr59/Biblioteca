import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() enviarLogeo = new EventEmitter<boolean>();

  logeo:boolean = false;

  logear(){
    this.logeo = !this.logeo;
    this.enviarLogeo.emit(this.logeo);
  }

}
