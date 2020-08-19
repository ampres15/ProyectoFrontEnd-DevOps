import { Component } from '@angular/core';

import { ApiTestService} from '../services/api-test.service';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test'; 

  constructor(private apiTestService: ApiTestService){}

  createUser() {
    const user = new User();
    user.firstName = 'Andrés';
    user.lastName = 'Lara';
    this.apiTestService.createUser(user).subscribe((res) => {
      console.log('usuario creado correctamente');
    });
  }


}
