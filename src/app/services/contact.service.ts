import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
      private apiUrl = 'http://localhost:8080/api/contatos';

  constructor(private http: HttpClient) { }


  getContacts(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }
}
