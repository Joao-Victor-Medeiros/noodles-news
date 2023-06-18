import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
  arts: any = [];

  constructor(private service: SharedService) {
  }

  ngOnInit(): void {
    this.service.listArtsNotice().subscribe((data: any) => {
      this.arts = data.results;
    });
  }


}
