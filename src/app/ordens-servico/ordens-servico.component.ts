import { OrdemServico } from './../models/ordem-servico/ordem-servico';
import { Component, OnInit } from '@angular/core';
import { OrdemServicoService } from '../services/ordem-servico/ordem-servico.service';

@Component({
  selector: 'app-ordens-servico',
  templateUrl: './ordens-servico.component.html',
  styleUrls: ['./ordens-servico.component.css']
})
export class OrdensServicoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cliente', 'descricao', 'preco', 'status', 'dataAbertura'];
  dataSource!: OrdemServico[];
  constructor(private ordemServicoService: OrdemServicoService) { }

  ngOnInit(): void {
    this.ordemServicoService.getOrdensServico().subscribe((data: OrdemServico[]) => {
      this.dataSource = data;
    })
  }

}
