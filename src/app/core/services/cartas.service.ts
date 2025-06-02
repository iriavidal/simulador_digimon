import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartasService {
  constructor(private http: HttpClient) {}

  getAllCartas(): Observable<any> {
    return this.http.get<any>(
      `./assets/data/BT-21_ Booster World Convergence.json`
    );
  }
}
