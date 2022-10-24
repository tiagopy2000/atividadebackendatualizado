
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

///componetes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'  
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



//paginas
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CadastroCreateComponent } from './views/cadastro/cadastro-create/cadastro-create.component';

import { CadastroReadComponent } from './views/cadastro/cadastro-read/cadastro-read.component';
import { CadastroTabelaComponent } from './views/cadastro/cadastro-tabela/cadastro-tabela.component';
import { CadastroDeleteComponent } from './views/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroUpdateComponent } from './views/cadastro/cadastro-update/cadastro-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    CadastroCreateComponent,
    CadastroReadComponent,
    CadastroTabelaComponent,
    CadastroDeleteComponent,
    CadastroUpdateComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
