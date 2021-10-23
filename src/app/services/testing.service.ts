import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  obj: any;

  constructor() {}

  getData() {
    this.obj = {
      val1: 'testing value',
      val2: 'testing'
    };

    return this.obj;

  }

  postData(val: any) {
    alert(val);

    return val;
  }

}
