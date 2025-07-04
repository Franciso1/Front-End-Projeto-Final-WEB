import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Para navegar após salvar
import { Contato } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit{

// Cria um objeto de contato "em branco" para o formulário preencher
  contato: Contato = {
    nome: '',
    telefonePrimario: '',
    telefoneSecundario: '',
    email: '',
    empresa: '',
    cargo: '',
    aniversario: null, // <-- Importante: Para o tipo 'Date', o valor inicial deve ser null
    categoria: 'Trabalho', // Um valor padrão é uma boa ideia para o <select>
    favorito: false
  };
  isEditMode = false;

  constructor(
    private contactService: ContactService,
    private router: Router, // Injeta o serviço de roteamento
    private route: ActivatedRoute
  ) { }
ngOnInit(): void {
     const id = this.route.snapshot.paramMap.get('id');
     if (id) {
       this.isEditMode = true;
       // O + converte a string 'id' para número
       this.contactService.getContactById(+id).subscribe(data => {
         this.contato = data; // Preenche o formulário com os dados do contato
       });
     }
   }

   salvar(): void {
     if (this.isEditMode) {
       // Lógica de ATUALIZAR
       this.contactService.updateContact(this.contato.id!, this.contato).subscribe(() => {
         this.router.navigate(['/contatos']);
       });
     } else {
       // Lógica de CRIAR
       this.contactService.createContact(this.contato).subscribe(() => {
         this.router.navigate(['/contatos']);
       });
     }
   }
 }
