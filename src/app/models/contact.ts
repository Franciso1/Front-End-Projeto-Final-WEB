export interface Contato {
  id?: number;
  nome: string;
  telefonePrimario: string;
  telefoneSecundario: string;
  email: string;
  empresa: string;
  cargo: string;
  aniversario: Date | null; // ou Date
  categoria: string;
  favorito: boolean;
}
