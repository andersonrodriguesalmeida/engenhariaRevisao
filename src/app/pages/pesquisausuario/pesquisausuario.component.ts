import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-pesquisausuario',
  templateUrl: './pesquisausuario.component.html',
  styleUrls: ['./pesquisausuario.component.scss'],
  providers:[ UsuarioService ]
})
export class PesquisaUsuarioComponent implements OnInit {

  public displayedColumns:any[] = ['select','id','nome','email'];
  public dataSource:MatTableDataSource<Usuario> = new MatTableDataSource();
  public initialSelection = [];
  public allowMultiSelect = true;
  public selection = new SelectionModel<Usuario>(this.allowMultiSelect, this.initialSelection);
  
  constructor(private usuarioService:UsuarioService, 
    private route:Router) { }

  ngOnInit() {
    this.usuarioService.pesquisar('').subscribe( (lista) => {
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public novo(){
    this.route.navigate(['/principal/cad-usuario']);
  }

  public alterar(){
    if (this.selection.isEmpty()){
      alert('Favor selecionar um usuário');
      return;
    }
    let id = this.selection.selected[0].id;
    this.route.navigate(['/principal/cad-usuario',{id:id}]);
  }

  public excluir(){

  }

}
