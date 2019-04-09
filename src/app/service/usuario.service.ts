import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient
  ) { 

  }
  /**
   * metodo para realizar a requisição ao servidor para logar 
   */
  public logar(email,senha):Observable<Usuario> {
    let user = {
      email:email,
      senha:senha
    };
    const url = 'http://localhost:8080/Revisao/rest/usuario/logar';
    return this.http.post<Usuario>(url, user);

  }
}
