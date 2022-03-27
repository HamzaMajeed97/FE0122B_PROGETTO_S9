import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import * as ToDoFunction from  '../todo.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  arr : Todo[] =[]
  text! : string



  constructor() {



   }

  ngOnInit(): void {
  }

}
