import { Contato } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';



@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{
  contacts: Contato[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }
deletar(id: number | undefined): void {
  if (!id) return;
  if (confirm('Tem certeza que deseja excluir este contato?')) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(c => c.id !== id);
    });
  }
}
pesquisar(event: any): void {
  const termo = event.target.value;

  if (termo) {
    // Se o usuário digitou algo, chama o serviço de pesquisa
    this.contactService.searchContacts(termo).subscribe(data => {
      this.contacts = data;
    });
  } else {
    // Se o campo de busca está vazio, carrega a lista completa de contatos novamente
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }
}
toggleFavorito(contact: Contato): void {
  // Segurança para garantir que o contato tem um ID
  if (!contact.id) {
    return;
  }

  this.contactService.toggleFavorite(contact.id).subscribe(contatoAtualizado => {
    // Para a tela atualizar na hora, atualizamos o status 'favorito'
    // do contato na nossa lista local com a resposta da API.
    contact.favorito = contatoAtualizado.favorito;
  });
}
}
