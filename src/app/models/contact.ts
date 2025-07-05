export interface Contato {
  id?: number;
  nome: string; // Obrigatório
  telefonePrimario: string; // Obrigatório
  telefoneSecundario: string;
  email: string;
  empresa: string;
  cargo: string;
  aniversario: Date | null;
  categoria: string; // Obrigatório
  favorito: boolean;
}
