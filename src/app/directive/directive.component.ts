import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  //global variables
  bindingvariable: String = 'test';
  jsonObj: any;
  binaryVar: any;

  constructor() {}

  ngOnInit(): void {
    this.jsonObj = [
      {
        val1: 'value 1',
        val2: 'value 2'
      },
      {
        val1: 'value 3',
        val2: 'value 4'
      },
      {
        val1: 'value 3',
        val2: 'value 4'
      },
      {
        val1: 'value 3',
        val2: 'value 4'
      },
      {
        val1: 'value 3',
        val2: 'value 4'
      }
    ];

    this.binaryVar = true;

  }

}
