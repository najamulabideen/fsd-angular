import {
  Injectable
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  jsonObj: any;

  constructor(private http: HttpClient) {}

  getData() {
    this.jsonObj = [{
        val1: 'value 1'
      },
      {
        val1: 'value 3'
      }
    ];
    return this.jsonObj;

  }

  getViaJson() {
    return this.http.get("./assets/mydata.json");
  }

}
