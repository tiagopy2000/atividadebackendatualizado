import { Component, OnInit } from '@angular/core';
import { CadastroModel} from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastros: CadastroModel[];
  displayedColumns = ['id', 'usuario', 'senha', 'action'];

  constructor ( private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(cadastros => {
      this.cadastros = cadastros
    })
    // console.log(this.cadastros);
  }


}
