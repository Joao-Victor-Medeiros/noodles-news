import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css']
})
export class AutomobileComponent implements OnInit {
  auto: any = [];
  constructor(private service: SharedService) {
  }

  ngOnInit(): void {
    this.service.listAutomobileNotice().subscribe((data: any) => {
      this.auto = data.results;
    });
  }
}
