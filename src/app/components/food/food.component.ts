import { Component } from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  foods:any = [];

  constructor(private service: SharedService) {}
  ngOnInit(): void {
    this.service.listFoodNotice().subscribe((data: any) => {
      this.foods = data.results;
    });
  }
}
