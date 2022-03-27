//import { promises } from 'dns';
import { Todo } from './todo';

let myTodo: Todo[] = [];


export function leggi(): Promise<Todo[]> {

  return new Promise((res)=> {

      setTimeout(() => {
      res (myTodo);
    }, 2000);
  })

}


export function aggiungi(x: Omit <Todo, "id">): Promise<Todo> {
  return new Promise((res) =>{
    setTimeout(() => {
      const nuovoTodo:Todo ={...x,id: myTodo.length +1};
      myTodo.push(nuovoTodo)
      res(nuovoTodo)
    }, 2000);
  })


}



export function aggiorna(newTodo: Partial<Todo>, id: number): Promise<Todo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      myTodo = myTodo.map((todo) =>
        todo.id == id ? { ...todo, ...newTodo } : todo
      );
      const uTd = myTodo.find((todo) => todo.id == id);
      if (uTd) {
        res(uTd);
      } else {
        rej('todo non trovato');
      }
    }, 2000);
  });
}







