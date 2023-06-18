import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=';

  constructor(private http: HttpClient) {
  }

  listNewsFromToday() {
    return this.http.get(this.API_URL + 'Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa');
  }

  listAutomobileNotice() {
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa`);
  }

  listBusinessNotice() {
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa`);
  }

  listHealthNotice() {
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/health.json?api-key=QR9032s7qU05pg8RRQmMypjGbr0diwgJ`);
  }

  listArtsNotice() {
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa`);
  }

  listTechlogiesNotice() {
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa`);
  }

  listFoodNotice() {
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa`)
  }
}
