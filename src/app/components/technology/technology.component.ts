import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit{
    technology:any = [];

    constructor(private service: SharedService) {
    }

    ngOnInit() {
        this.service.listTechlogiesNotice().subscribe((data: any) => {
            this.technology = data.results;
        });
    }
}
