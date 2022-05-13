import React, { useState } from 'react'
import FormToDo from './components/FormToDo'
import NavBar from './components/NavBar'
import ToDoList from './components/ToDoList'

type Props = {}

const App: React.FC<Props> = (props: Props) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [toDo, setToDo] = useState<string>('');

  const addToDo = (): void => {
    setTodoList([...todoList, toDo]);
  }

  const addTask = (task: string): void => {
    setToDo(task);
  }

  return (
    <div>
      <NavBar />
      <FormToDo addToDo={addToDo} addTask={addTask} />
      <ToDoList todoList={todoList} />
    </div>
  )
}

export default App