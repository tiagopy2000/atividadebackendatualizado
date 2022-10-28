import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { CadastroModel } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: CadastroModel = {
    usuario:'',
    senha: ''
  }
  constructor(private CadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }
  
   createCadastro(): void{
    if (this.cadastro.usuario.includes("'") || this.cadastro.usuario.includes('"') || this.cadastro.usuario.includes("="))
    {
      alert ("caracter não permitido")
    } else {
      this.CadastroService.create(this.cadastro).subscribe(() => {
        this.CadastroService.showMessege('usuario cadastrado!')
         })
    }
   }

   cancelarCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
   }

   tabelaCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
   }
}
