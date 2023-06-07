import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  header = new HttpHeaders({
    'x-nycapi-key': 'Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa'
  })

  private readonly API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa';

  constructor(private http: HttpClient) { }

  listNewsFromToday (){
    return this.http.get(this.API_URL);
  }
}
