import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'hannan-angular';
  titlesub = 'hannan-hey';

  constructor() { 
    var title = 'najam-angular';
    var titlesub = 'najam-hey';
    this.name(title, titlesub);
  }

  ngOnInit(): void {
    
  }

  name (item1: string, item2: string) {
    console.log(item1 + '' + item2 + ' inside ngOnInit');
  } 
  onHover(){
    console.log("Hello You just hovered!")

  }

}
