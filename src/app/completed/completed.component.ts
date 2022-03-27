import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import * as ToDoFunction from  '../todo.service'

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  list : Todo[] =[]
  text! : string

  constructor() {
    ToDoFunction.leggi().then((mioTodo)=> {
      this.list = mioTodo.filter((e)=> e.completed)
    } )
   }

  ngOnInit(): void {
  }

}
