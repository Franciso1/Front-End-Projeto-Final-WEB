import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // A URL da sua API. Verifique se a porta está correta.
  private apiUrl = 'http://capybaraagenda.duckdns.org';

  constructor(private http: HttpClient) { }

  // Método para buscar a lista de contatos
  getContacts(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  createContact(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }
deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
getContactById(id: number): Observable<Contato> {
   return this.http.get<Contato>(`${this.apiUrl}/${id}`);
 }

 updateContact(id: number, contact: Contato): Observable<Contato> {
   return this.http.put<Contato>(`${this.apiUrl}/${id}`, contact);
 }
 searchContacts(termo: string): Observable<Contato[]> {
  return this.http.get<Contato[]>(`${this.apiUrl}/pesquisar?termo=${termo}`);
}
toggleFavorite(id: number): Observable<Contato> {
  // Usamos o método PATCH. O corpo da requisição pode ser vazio {}
  return this.http.patch<Contato>(`${this.apiUrl}/${id}/favorito`, {});
}
}
