import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers:[ UsuarioService ]
})
export class LoginComponent implements OnInit {

  public form:FormGroup;

  constructor(private router:Router,
    private usuarioService:UsuarioService) {
   }

  ngOnInit() {
    //criando as validações para os campos da tela de login
    this.form = new FormGroup({
      email:new FormControl(null, Validators.required),
      senha:new FormControl(null,Validators.required)
    });
  }

  public logar(){
    //validar se o formulário esta valido
    if (this.form.invalid){
      return;
    }
    let email = this.form.get('email').value;
    let senha = this.form.get('senha').value;
    this.usuarioService.logar(email,senha).subscribe((user:Usuario)=>{
      if (user != null){
        localStorage.setItem('usuario',JSON.stringify(user));
        this.router.navigate(['principal']);
      }else {
        this.form.controls.senha.setErrors({
          login:'Login ou senha inválido!'
        });
      }
    })
    
  }

}
