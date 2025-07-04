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
}
