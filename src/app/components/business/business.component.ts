import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit{

  busy: any = [];

  constructor(private service: SharedService) { }


  ngOnInit(): void {
    this.service.listBusinessNotice().subscribe((data: any) => {
      this.busy = data.results;
    });
  }
}
