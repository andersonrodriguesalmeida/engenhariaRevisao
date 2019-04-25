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
    const url = 'http://192.168.201.5:8080/Revisao/rest/usuario/logar';
    return this.http.post<Usuario>(url, user);

  }


  public salvar(usuario:Usuario):Observable<Usuario> {
    const url = 'http://192.168.201.5:8080/Revisao/rest/usuario/salvar';
    return this.http.post<Usuario>(url, usuario);
  }

  public pesquisar(nome:string):Observable<Array<Usuario>> {
    const url = 'http://192.168.201.5:8080/Revisao/rest/usuario/pesquisar';
    return this.http.post<Array<Usuario>>(url, nome);
  }

  public buscarPorId(id:number):Observable<Usuario> {
    const url = 'http://192.168.201.5:8080/Revisao/rest/usuario/'+id;
    return this.http.get<Usuario>(url);
  }

  public excluir(id:number):Observable<any> {
    const url = 'http://192.168.201.5:8080/Revisao/rest/usuario/'+id;
    return this.http.delete(url);
  }
}
