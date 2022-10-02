import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Greeting} from "./greeting";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  greeting$: Observable<Greeting>;

  constructor(private http: HttpClient) {
    this.greeting$ = http.get<Greeting>('resource');
  }
}
