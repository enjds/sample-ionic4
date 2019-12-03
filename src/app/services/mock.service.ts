import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  getAssetOverview(): Observable<any> {
    return this.http.get('./assets/data/asset-overview.data.json');
  }
}
