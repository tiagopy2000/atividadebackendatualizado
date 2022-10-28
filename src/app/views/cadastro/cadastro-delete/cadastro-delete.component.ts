import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroModel } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro: CadastroModel;

  constructor(private cadastroService: CadastroService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id){
      this.cadastroService.readById(parseInt(id)).subscribe((cadastro) => {
        this.cadastro = cadastro;
      })
    }
  }

  deletarCadastro(): void {
    if (this.cadastro.id != null){
      this.cadastroService.deleteCadastro(this.cadastro.id).subscribe(() =>{
        this.cadastroService.showMessege('Usuário deletado')
        this.router.navigate(["/cadastro/tabela"]);
      });
    }
  }
  
  cancelarCadastro(): void{
  this.router.navigate(['/cadastro/tabela'])
  }

  tabelaCadastro(): void{
  this.router.navigate(['/cadastro/tabela'])
  }

}
