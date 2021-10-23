import {
  Component,
  OnInit
} from '@angular/core';
import {
  TestService
} from '../services/test.service';

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

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.jsonObj = this.testService.getViaJson()

    this.binaryVar = true;

  }

  add(val: String) {
    this.jsonObj.push (
      {
        val1: val + ' 5'
      }
    )
  }


}
