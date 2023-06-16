import {Component} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  response: any = [];
  imageUrl: String[] = [];

  constructor(private service: HomeService) {
  }

  ngOnInit(): void {
    this.service.listNewsFromToday().subscribe((data: any) => {
      console.log(data.results);
      this.response = data.results;
      for (let i = 0; i < this.response.length; i++) {
        // this.result = data.results.multimedia;
        this.imageUrl = this.response[i].multimedia[0];
        console.log(this.imageUrl);
      }
    });
    this.trimImage()
  }

  trimImage() {
   for (let i = 0; i < this.response.length; i++) {
     console.log(this.response[i].title);
     // if (any[i].multimedia.length > 0) {
     //   this.result = i;
     //   break;
     // }
   }
  }
}
