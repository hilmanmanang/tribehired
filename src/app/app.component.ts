import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post: string = 'https://jsonplaceholder.typicode.com/posts';
  dataAll: any = [];

  constructor(
    private http: HttpClient
  ) {}

  getData() {
    this.http.get(this.post).subscribe(res => {
      console.log(res)
      this.dataAll = res
    })
  }
}
