import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User} from '../model/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confimarSenha: string 
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router 
  ) { }

  ngOnInit(): void { 
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confimarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario
    
    if (this.user.senha != this.confimarSenha) {
      alert('A senhas estão incorretas. ')
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: User) =>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })
    }
  }


}
