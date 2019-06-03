import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any= [];
  constructor(private http: HttpClient)
  {
    http.get('http://localhost:8080/cart').subscribe(data => {console.log(data);this.items = data;})
  }
  title = 'ex-ang-lab';

  
}
