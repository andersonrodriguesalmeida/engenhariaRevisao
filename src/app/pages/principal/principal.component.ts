import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public sair(){
    //vai remover do LocalStorage o objeto Usuário que logou
    /**
     * O sistema para saber quem esta logado,
     * vai verificar sempre no localStorage se existe o usuário
     *  */
    localStorage.removeItem('usuario');
    this.router.navigate([''])
  }

}
