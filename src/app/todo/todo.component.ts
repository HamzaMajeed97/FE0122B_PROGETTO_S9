import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import * as ToDoFunction from  '../todo.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  list : Todo[] =[]
  text! : string


  constructor() {
    ToDoFunction.leggi().then((mioTodo)=> {
      this.list = mioTodo.filter((e)=> !e.completed)
    } )

  }

  ngOnInit(): void {
  }

  async aggiungi1 () {
    const agg = await ToDoFunction.aggiungi({
      title : this.text as string,
      completed: false,
    });
    this.list.push(agg);
    this.text = "";
     }


     async completeTask(todo:Todo,i:number){
      await ToDoFunction.aggiorna({completed:true},todo.id)
      this.list.splice(i,1)
    }


}
