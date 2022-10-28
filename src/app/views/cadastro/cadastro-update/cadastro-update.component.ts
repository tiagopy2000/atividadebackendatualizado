import { Component, OnInit } from '@angular/core';
import { CadastroModel } from '../cadastro.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {
  
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

  atualizarCadastro(): void {
    if (this.cadastro.id != null){
      this.cadastroService.updateCadastro(this.cadastro).subscribe(() =>{
        this.cadastroService.showMessege('Usuário atualizado')
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
