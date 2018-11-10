import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
    constructor(private http: HttpClient) {

   }
   ngOnInit(){
   let obs = this.http.get('https://localhost:3000/items');
   obs.subscribe((res)=>{
   console.log(res);
   })
   }
}
