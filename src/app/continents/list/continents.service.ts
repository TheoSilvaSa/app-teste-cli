import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Continents } from '../continents';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  URL = "https://thronesapi.com/api/v2/" + "/Continents"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Continents[]> {
    return this.http.get<Continents[]>(this.URL)
  }
}
