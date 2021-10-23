import {
  Component,
  OnInit
} from '@angular/core';
import {
  TestService
} from '../services/test.service';
import { TestingService } from '../services/testing.service';

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

  constructor(private tesService: TestService, private testService: TestingService) {}

  ngOnInit(): void {

    this.bindingvariable = this.testService.getData().val2;

    this.jsonObj = [{
        val1: 'value 1'
      },
      {
        val1: 'value 3'
      }
    ];

    this.binaryVar = true;

  }

  add(val: any) {
    this.jsonObj.push({
      val1: val + ' 5'
    })
  }


}
