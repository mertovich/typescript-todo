import React, { useState } from 'react'
import FormToDo from './components/FormToDo'
import NavBar from './components/NavBar'
import ToDoList from './components/ToDoList'

type Props = {}

const App: React.FC<Props> = (props: Props) => {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addToDo = (todo: string): void => {
    setTodoList([...todoList, todo]);
  }

  const deleteTask = (task: string): void => {
    setTodoList(todoList.filter(t => t !== task));
  }

  return (
    <div>
      <NavBar />
      <FormToDo addToDo={addToDo} />
      <ToDoList deleteTask={deleteTask} todoList={todoList} />
    </div>
  )
}

export default App