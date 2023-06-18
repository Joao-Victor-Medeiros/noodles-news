import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  health: any = [];
  constructor(private service: SharedService) {
  }

  ngOnInit(): void {
    this.service.listHealthNotice().subscribe((data: any) => {
      this.health = data.results;
      console.log(this.health);
    });
  }
}
