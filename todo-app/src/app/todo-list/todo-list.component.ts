import { Component} from '@angular/core';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  atividade: string = '';
  nova: string = '';
  listaAtividades:Array<string> = [];
  pesquisa: string = '';
  listaPesquisa = [];
  check: boolean;

  constructor() {
    this.listaAtividades = [];
    this.pesquisa = '';
    this.check = true;
  }
  updatePesquisa(event){
    this.pesquisa = event.target.value;
    this.addPesquisa();
  }

  updateAtividade(event) {
    this.atividade = event.target.value;
  }
  
  addAtividade(event) {
    this.nova = this.atividade.trim();
    if(this.checkAtividade(this.nova)){
      this.listaAtividades.push(this.atividade);
      this.addPesquisa();
    }
  }
  addPesquisa(){
    this.listaPesquisa = [];
    for(var i=0; i< this.listaAtividades.length; i++){
      if( this.listaAtividades[i].indexOf(this.pesquisa) >= 0){
        this.listaPesquisa.push(this.listaAtividades[i]);
      }
    }
  }
  delAtividade(tarefa){
    for(var i=0; i< this.listaAtividades.length; i++){
      if (this.listaAtividades[i] == tarefa){
        this.listaAtividades.splice(i, 1); 
        this.addPesquisa(); 
      }
    }
    
  }
  checkAtividade(nova):boolean{
    if (this.nova.length > 25 || this.nova.length == 0 ){
      this.check = false;
      return(this.check);
    }
    else{
      this.check = true;
      return(this.check)
    }
  }
}


