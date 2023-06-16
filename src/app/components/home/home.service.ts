import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  header = new HttpHeaders({
    'x-nycapi-key': 'Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa'
  })

  private readonly BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/';
  private readonly API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=';

  constructor(private http: HttpClient) { }

  listNewsFromToday (){
    return this.http.get(this.API_URL + 'Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa');
  }

  listDaysForCategory(category: String){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=Fyqt2mxOQ6A7SoVMJxioOasRKuWgybYa`);
  }
}
