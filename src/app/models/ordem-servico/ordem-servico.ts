import { Cliente } from 'src/app/models/cliente/cliente';
export class OrdemServico {
  id!: number;
  cliente!: string;
  descricao!: string;
  preco!: number;
  status!: string;
  dataAbertura!: string;
}
