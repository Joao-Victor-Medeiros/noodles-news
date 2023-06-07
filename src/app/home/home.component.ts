import {Component} from '@angular/core';
import {HomeService} from "./home.service";
import {News} from "./news";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  response: any = [];
  result: number = 0;

  constructor(private service: HomeService) {
  }

  ngOnInit(): void {
    this.service.listNewsFromToday().subscribe((data: any) => {
      console.log(data.results);
      this.response = data.results;
    });
  }
}
