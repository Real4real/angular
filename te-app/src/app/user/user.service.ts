import { Injectable } from '@angular/core';
import {Http, HttpModule} from "@angular/http";
import {count, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }

  getUsers() {
    return this.http.get('https://anypoint.mulesoft.com/apiplatform/repository/v2/organizations/53806f58-49a2-4aea-bae9-91ca570e4f4d/public/apis/18293074/versions/307251/files/examples/service_category_collection_example.json')
      .pipe(
        map(response => response.json())
      )
      .pipe(
        map(users => {
          return users.map(u => {
            return {
              count: u.count,
              id: u.id,
              image: u.icon,
              title: u.title
            }
          })
        })
      )

//count:
// ​​
//icon:
// ​​
//id:
// ​​
//title:
  }
  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'}
  ]
}
