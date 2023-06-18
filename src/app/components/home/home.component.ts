import {Component} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  response: any = [];
  imageUrl: String[] = [];

  constructor(private service: SharedService ) {
  }

  ngOnInit(): void {
    this.service.listNewsFromToday().subscribe((data: any) => {
      this.response = data.results;
      for (let i = 0; i < this.response.length; i++) {
        // this.result = data.results.multimedia;
        this.imageUrl = this.response[i].multimedia[0];
      }
    });
    this.trimImage()
  }

  trimImage() {
    for (let i = 0; i < this.response.length; i++) {
      this.imageUrl = this.response[i].multimedia[0];
      console.log(this.imageUrl);
    }
  }
}
